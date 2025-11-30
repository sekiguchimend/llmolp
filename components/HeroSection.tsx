"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validate URL
    if (!url.trim()) {
      setError("URLを入力してください");
      return;
    }

    try {
      new URL(url);
    } catch {
      setError("有効なURLを入力してください");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/seo-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "エラーが発生しました");
      }

      // Navigate to results page with the data
      router.push(`/seo-results?url=${encodeURIComponent(url)}&jobId=${data.jobId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-[#3B82F6] overflow-hidden rounded-br-[40px] md:rounded-br-[80px]">
      {/* 背景 */}
      {/* 右上の装飾四角 - モバイルでは小さく */}
      <div className="absolute top-4 right-4 w-24 h-16 md:top-8 md:right-8 md:w-48 md:h-32 bg-[#3B82F6]/30 rounded"></div>
      <div className="absolute top-12 right-12 w-16 h-12 md:top-24 md:right-24 md:w-32 md:h-24 bg-[#3B82F6]/20 rounded hidden md:block"></div>

      {/* メインコンテンツ */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-16 flex flex-col">
        {/* テキストコンテンツ */}
        <div className="w-full text-white">
          {/* 吹き出し */}
          <div className="relative inline-block mt-4 md:mt-8 mb-6 md:mb-12">
            <div className="bg-white text-[#323232] px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold">
              AI検索に答えを。
            </div>
            {/* 吹き出しの尾 */}
            <div className="absolute -bottom-[7px] left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
          </div>

          {/* メインタイトル */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            埋もれない企業へ。
          </h1>

          {/* 説明文 */}
          <p className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
AI検索で勝たせるumoren.ai          </p>

          {/* LLM logos row */}
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
                <img src="/images/ChatGPT-Logo.png" alt="ChatGPT" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
                <img src="/images/claude.png" alt="Claude" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
                <img src="/images/gemini.jpg" alt="Gemini" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
                <img src="/images/perplexity.png" alt="Perplexity" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
                <img src="/images/grok.jpg" alt="Grok" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-white text-xs md:text-sm font-medium">& more</span>
            </div>
          </div>

          {/* URL入力フィールド：Semrush風の分離デザイン */}
          <form onSubmit={handleSubmit} className="mb-8 md:mb-10">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-2xl">
              <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
                <input
                  type="url"
                  placeholder="検証したいサイトのURLを入力"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-5 py-4 text-sm md:text-base text-[#323232] placeholder:text-gray-400 focus:outline-none disabled:bg-gray-100"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="whitespace-nowrap bg-[#FF7A1A] hover:bg-[#FF6A00] text-white text-sm md:text-base font-bold px-8 md:px-10 py-4 rounded-lg shadow-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? "解析中..." : "AI SEOスコアをチェック"}
              </button>
            </div>
            {error && (
              <p className="mt-3 text-sm text-red-200 bg-red-500/20 px-4 py-2 rounded max-w-2xl">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* 右下の注釈 */}
      <div className="absolute bottom-4 right-4 md:right-8 text-[10px] md:text-xs text-gray-500 text-right">
      </div>

      {/* 右下の装飾 */}
      <div className="absolute bottom-16 right-4 w-3 h-16 md:w-4 md:h-24 bg-[#3B82F6]/40 rounded hidden md:block"></div>
    </section>
  );
}

