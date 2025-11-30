"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface PageData {
  url: string;
  title?: string;
  content?: string;
  markdown?: string;
  metadata?: {
    title?: string;
    description?: string;
    sourceURL?: string;
    statusCode?: number;
  };
  statusCode?: number;
}

interface CrawlStatus {
  status: "scraping" | "completed" | "failed";
  data: PageData[];
  total: number;
  completed: number;
  creditsUsed?: number;
}

export default function SEOResultsClient() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  const jobId = searchParams.get("jobId");

  const [crawlStatus, setCrawlStatus] = useState<CrawlStatus | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!url || !jobId) {
      setError("URLまたはジョブIDが見つかりません");
      setIsLoading(false);
      return;
    }

    let pollInterval: NodeJS.Timeout;

    const pollStatus = async () => {
      try {
        const response = await fetch(
          `/api/seo-check/status?jobId=${encodeURIComponent(jobId)}`
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "ステータスの取得に失敗しました");
        }

        const statusData = await response.json();
        setCrawlStatus(statusData);

        if (statusData.status === "completed" || statusData.status === "failed") {
          clearInterval(pollInterval);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Polling error:", err);
        setError(err instanceof Error ? err.message : "エラーが発生しました");
        clearInterval(pollInterval);
        setIsLoading(false);
      }
    };

    // Initial poll
    pollStatus();

    // Poll every 5 seconds
    pollInterval = setInterval(pollStatus, 5000);

    // Cleanup
    return () => {
      if (pollInterval) {
        clearInterval(pollInterval);
      }
    };
  }, [url, jobId]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                エラーが発生しました
              </h1>
              <p className="text-gray-600 mb-6">{error}</p>
              <Link
                href="/"
                className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                ホームに戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading || !crawlStatus) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#3B82F6] mx-auto mb-4"></div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                ウェブサイトを解析中...
              </h1>
              <p className="text-gray-600 mb-2">{url}</p>
              {crawlStatus && (
                <div className="mt-6">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-[#3B82F6] h-2.5 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          crawlStatus.total > 0
                            ? (crawlStatus.completed / crawlStatus.total) * 100
                            : 0
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {crawlStatus.completed} / {crawlStatus.total} ページを解析済み
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (crawlStatus.status === "failed") {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">❌</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                クロール処理に失敗しました
              </h1>
              <p className="text-gray-600 mb-6">
                ウェブサイトの解析中にエラーが発生しました。URLをご確認の上、再度お試しください。
              </p>
              <Link
                href="/"
                className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                ホームに戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate basic SEO metrics
  const pages = crawlStatus.data || [];
  const validPages = pages.filter((p) => !p.statusCode || p.statusCode < 400);
  const totalPages = validPages.length;

  // Basic scoring metrics
  const pagesWithTitle = validPages.filter(
    (p) => p.title || p.metadata?.title
  ).length;
  const pagesWithDescription = validPages.filter(
    (p) => p.metadata?.description
  ).length;
  const pagesWithContent = validPages.filter(
    (p) => (p.content || p.markdown || "").length > 100
  ).length;

  // Calculate score (0-100)
  const titleScore =
    totalPages > 0 ? (pagesWithTitle / totalPages) * 35 : 0;
  const descriptionScore =
    totalPages > 0 ? (pagesWithDescription / totalPages) * 35 : 0;
  const contentScore =
    totalPages > 0 ? (pagesWithContent / totalPages) * 30 : 0;
  const totalScore = Math.round(titleScore + descriptionScore + contentScore);

  // Determine score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#3B82F6] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-sm hover:underline mb-4 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            AI SEO分析結果
          </h1>
          <p className="text-lg opacity-90">{url}</p>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Score Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              総合SEOスコア
            </h2>
            <div
              className={`text-7xl font-bold ${getScoreColor(
                totalScore
              )} mb-2`}
            >
              {totalScore}
              <span className="text-3xl">/100</span>
            </div>
            <p className="text-gray-600">
              {totalScore >= 80 && "優秀なSEO対策がされています！"}
              {totalScore >= 60 &&
                totalScore < 80 &&
                "良好ですが、改善の余地があります"}
              {totalScore < 60 && "SEO改善が必要です"}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                {totalPages}
              </div>
              <div className="text-sm text-gray-600">ページ数</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                {totalPages > 0
                  ? Math.round((pagesWithTitle / totalPages) * 100)
                  : 0}
                %
              </div>
              <div className="text-sm text-gray-600">タイトルあり</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                {totalPages > 0
                  ? Math.round((pagesWithDescription / totalPages) * 100)
                  : 0}
                %
              </div>
              <div className="text-sm text-gray-600">説明文あり</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                {totalPages > 0
                  ? Math.round((pagesWithContent / totalPages) * 100)
                  : 0}
                %
              </div>
              <div className="text-sm text-gray-600">コンテンツ充実</div>
            </div>
          </div>
        </div>

        {/* Page List */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            検出されたページ
          </h2>
          <div className="space-y-4">
            {validPages.map((page, index) => {
              const title = page.title || page.metadata?.title || "タイトルなし";
              const description = page.metadata?.description || "";
              const content = page.content || page.markdown || "";
              const contentLength = content.length;

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 flex-1">
                      {title}
                    </h3>
                    <div className="flex gap-2 ml-4">
                      {title !== "タイトルなし" && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✓ Title
                        </span>
                      )}
                      {description && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✓ Desc
                        </span>
                      )}
                      {contentLength > 100 && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✓ Content
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-[#3B82F6] mb-2 break-all">
                    {page.url}
                  </p>
                  {description && (
                    <p className="text-sm text-gray-600 mb-2">{description}</p>
                  )}
                  <p className="text-xs text-gray-500">
                    コンテンツ量: {contentLength.toLocaleString()} 文字
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#3B82F6] text-white rounded-lg shadow-md p-8 mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            LLM可視化でさらに詳しく分析
          </h2>
          <p className="mb-6">
            umoren.aiならAI検索エンジンでどの質問にあなたの企業が表示されるかを可視化できます。
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#FF6347] hover:bg-[#E85A2A] text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-colors"
          >
            無料で資料請求
          </Link>
        </div>
      </div>
    </div>
  );
}


