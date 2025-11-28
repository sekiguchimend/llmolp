"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-8 md:py-12 bg-[#E3EEFF]">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* 白いバナー */}
        <div className="bg-white rounded-[10px] py-6 md:py-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between shadow-sm gap-6 md:gap-0">
          {/* 左側テキスト */}
          <div className="text-center md:text-left">
            <h2 className="text-lg md:text-2xl font-bold text-[#323232] mb-1">
              まずは無料の診断レポートから！
            </h2>
            <p className="text-lg md:text-2xl font-bold text-[#323232]">
              既存の SEO / 広告を変えずに
              <span className="text-[#F26B3A] border-b-[3px] border-[#F26B3A]">お試し</span>
            </p>
          </div>

          {/* 右側CTAボタン */}
          <div className="relative flex-shrink-0">
            {/* 簡単60秒バッジ */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-[#FFEB3B] text-[#323232] px-3 md:px-4 py-1 md:py-1.5 rounded-[8px] text-xs md:text-sm font-bold whitespace-nowrap">
                簡単60秒
              </div>
              {/* 吹き出しの尾 */}
              <div className="absolute -bottom-[8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] md:border-l-[10px] border-r-[8px] md:border-r-[10px] border-t-[8px] md:border-t-[10px] border-l-transparent border-r-transparent border-t-[#FFEB3B]"></div>
            </div>

            {/* CTAボタン */}
            <Link
              href="#contact"
              className="relative block bg-gradient-to-b from-[#FDBA74] to-[#F26B3A] hover:opacity-90 text-white px-8 md:px-12 py-4 md:py-6 rounded-[12px] shadow-lg transition-all"
            >
              <div className="text-center">
                <span className="text-sm md:text-base">＼ まずは ／</span>
                <p className="text-lg md:text-2xl font-bold mt-0.5">無料資料請求する</p>
              </div>
              {/* 矢印 */}
              <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
