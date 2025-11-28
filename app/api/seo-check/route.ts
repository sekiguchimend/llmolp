import { NextRequest, NextResponse } from "next/server";

// Firecrawl configuration
const DEFAULT_FIRECRAWL_BASE_URL = 'https://api.firecrawl.dev';
const FIRECRAWL_BASE_URL = (process.env.FIRECRAWL_BASE_URL?.trim() || DEFAULT_FIRECRAWL_BASE_URL).replace(/\/$/, '');
const IS_SELF_HOSTED_FIRECRAWL = FIRECRAWL_BASE_URL !== DEFAULT_FIRECRAWL_BASE_URL;
const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY?.trim();

function isFirecrawlAvailable() {
  return IS_SELF_HOSTED_FIRECRAWL || !!FIRECRAWL_API_KEY;
}

interface FirecrawlScrapeResponse {
  url?: string;
  title?: string;
  content?: string;
  markdown?: string;
  text?: string;
  metadata?: {
    title?: string;
    description?: string;
    url?: string;
    [key: string]: any;
  };
  data?: any;
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "URLが必要です" },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: "有効なURLを入力してください" },
        { status: 400 }
      );
    }

    // Check if Firecrawl is configured
    if (!isFirecrawlAvailable()) {
      return NextResponse.json(
        { error: "Firecrawlが設定されていません" },
        { status: 503 }
      );
    }

    console.log(`[SEO Check] Starting crawl for: ${url}`);
    console.log(`[SEO Check] Using Firecrawl: ${FIRECRAWL_BASE_URL}`);

    // Start crawl job using v1/crawl for multi-page crawling
    const crawlRes = await fetch(`${FIRECRAWL_BASE_URL}/v1/crawl`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(FIRECRAWL_API_KEY ? { 'Authorization': `Bearer ${FIRECRAWL_API_KEY}` } : {})
      },
      body: JSON.stringify({
        url: url,
        limit: 10, // Limit to 10 pages for initial analysis
        scrapeOptions: {
          formats: ['markdown'],
          onlyMainContent: true,
        }
      })
    });

    if (!crawlRes.ok) {
      const errorText = await crawlRes.text();
      console.error(`[SEO Check] Firecrawl API error: ${errorText}`);
      return NextResponse.json(
        { error: `Firecrawl APIエラー: ${errorText}` },
        { status: crawlRes.status }
      );
    }

    const crawlResponse = await crawlRes.json();
    console.log(`[SEO Check] Crawl response:`, crawlResponse);

    // Extract job ID from response
    let jobId: string | null = null;
    if (crawlResponse.id) {
      jobId = crawlResponse.id;
    } else if (crawlResponse.jobId) {
      jobId = crawlResponse.jobId;
    } else if (crawlResponse.url) {
      // Extract job ID from URL if provided
      const match = crawlResponse.url.match(/\/crawl\/([^\/\?]+)/);
      if (match) jobId = match[1];
    }

    if (!jobId) {
      console.error(`[SEO Check] No job ID found in response:`, crawlResponse);
      return NextResponse.json(
        { error: "ジョブIDが見つかりません" },
        { status: 500 }
      );
    }

    console.log(`[SEO Check] Crawl job started with ID: ${jobId}`);

    return NextResponse.json({
      success: true,
      jobId: jobId,
      message: "クロール処理を開始しました"
    });

  } catch (error) {
    console.error("[SEO Check] Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "内部サーバーエラー" },
      { status: 500 }
    );
  }
}

