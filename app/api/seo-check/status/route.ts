import { NextRequest, NextResponse } from "next/server";

// Firecrawl configuration
const DEFAULT_FIRECRAWL_BASE_URL = 'https://api.firecrawl.dev';
const FIRECRAWL_BASE_URL = (process.env.FIRECRAWL_BASE_URL?.trim() || DEFAULT_FIRECRAWL_BASE_URL).replace(/\/$/, '');
const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY?.trim();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const jobId = searchParams.get('jobId');

    if (!jobId) {
      return NextResponse.json(
        { error: "ジョブIDが必要です" },
        { status: 400 }
      );
    }

    console.log(`[SEO Check Status] Checking status for job: ${jobId}`);

    // Get job status
    const statusRes = await fetch(`${FIRECRAWL_BASE_URL}/v1/crawl/${jobId}`, {
      headers: {
        ...(FIRECRAWL_API_KEY ? { 'Authorization': `Bearer ${FIRECRAWL_API_KEY}` } : {})
      }
    });

    if (!statusRes.ok) {
      const errorText = await statusRes.text();
      console.error(`[SEO Check Status] API error: ${errorText}`);
      return NextResponse.json(
        { error: `ステータスの取得に失敗しました: ${errorText}` },
        { status: statusRes.status }
      );
    }

    const statusData = await statusRes.json();
    console.log(`[SEO Check Status] Job status:`, statusData.status);

    // Return status and data
    return NextResponse.json({
      status: statusData.status,
      data: statusData.data || [],
      total: statusData.total || 0,
      completed: statusData.completed || 0,
      creditsUsed: statusData.creditsUsed || 0,
      expiresAt: statusData.expiresAt,
      next: statusData.next
    });

  } catch (error) {
    console.error("[SEO Check Status] Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "内部サーバーエラー" },
      { status: 500 }
    );
  }
}

