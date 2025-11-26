"use client";

export default function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 bg-[#E3EEFF]">
      <div className="bg-[#326AC3] mx-4 md:mx-8 rounded-[20px] md:rounded-[40px] py-8 md:py-16 px-4 md:px-8">
        {/* セクションタイトル */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            導入で得られる<span className="text-[1.7em]">4</span>つの効果
          </h2>
        </div>

        {/* 4つのカード */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* カード1: 通算採用人数 */}
          <div className="bg-white rounded-xl p-4 md:p-6 text-center border-[3px] border-[#326AC3]">
            {/* アイコン */}
            <div className="flex justify-center mb-4 md:mb-6">
              <svg className="w-10 h-10 md:w-14 md:h-14" viewBox="0 0 64 64" fill="#326AC3">
                <circle cx="24" cy="20" r="10" />
                <circle cx="40" cy="20" r="10" />
                <path d="M24 32c-10 0-18 6-18 14v2h36v-2c0-8-8-14-18-14z" />
                <path d="M40 32c-2 0-4 0.3-6 1 4 2 7 6 7 11v2h17v-2c0-8-8-12-18-12z" />
              </svg>
            </div>

            {/* タイトル */}
            <p className="text-[#326AC3] font-bold text-base md:text-lg mb-3 md:mb-4">通算採用人数</p>

            {/* 数字 */}
            <div className="mb-4 md:mb-6 relative">
              <div className="inline-block relative">
                <span className="text-4xl md:text-6xl font-bold text-[#FF6B4A] relative z-10">100</span>
                <span className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-[#FFEB3B] -z-0"></span>
              </div>
              <span className="text-base md:text-lg text-[#FF6B4A] font-bold ml-1">人突破</span>
            </div>

            {/* 説明文 */}
            <p className="text-xs md:text-sm text-[#323232] leading-relaxed text-left">
              弊社サービスを利用しての採用人数が100名を超えたことをお知らせします！
            </p>
          </div>

          {/* カード2: 採用までの期間 */}
          <div className="bg-white rounded-xl p-4 md:p-6 text-center border-[3px] border-[#326AC3]">
            {/* アイコン */}
            <div className="flex justify-center mb-4 md:mb-6">
              <svg className="w-10 h-10 md:w-14 md:h-14" viewBox="0 0 64 64" fill="none" stroke="#326AC3" strokeWidth="6">
                <circle cx="32" cy="32" r="24" />
                <path d="M32 16v18h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* タイトル */}
            <p className="text-[#326AC3] font-bold text-base md:text-lg mb-3 md:mb-4">採用までの期間</p>

            {/* 数字 */}
            <div className="mb-4 md:mb-6 relative">
              <span className="text-base md:text-lg text-[#FF6B4A] font-bold mr-1">平均</span>
              <div className="inline-block relative">
                <span className="text-4xl md:text-6xl font-bold text-[#FF6B4A] relative z-10">40</span>
                <span className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-[#FFEB3B] -z-0"></span>
              </div>
              <span className="text-base md:text-lg text-[#FF6B4A] font-bold ml-1">%短縮</span>
            </div>

            {/* 説明文 */}
            <p className="text-xs md:text-sm text-[#323232] leading-relaxed text-left">
              候補者の選定やリストアップの手間が省け、大幅に採用時間が短縮されています！
            </p>
          </div>

          {/* カード3: 1年後の定着率 */}
          <div className="bg-white rounded-xl p-4 md:p-6 text-center border-[3px] border-[#326AC3]">
            {/* アイコン */}
            <div className="flex justify-center mb-4 md:mb-6">
              <svg className="w-10 h-10 md:w-14 md:h-14" viewBox="0 0 64 64" fill="none" stroke="#326AC3" strokeWidth="6">
                <circle cx="32" cy="32" r="24" />
                <circle cx="24" cy="28" r="3" fill="#326AC3" />
                <circle cx="40" cy="28" r="3" fill="#326AC3" />
                <path d="M22 42c0 0 4 6 10 6s10-6 10-6" strokeLinecap="round" />
              </svg>
            </div>

            {/* タイトル */}
            <p className="text-[#326AC3] font-bold text-base md:text-lg mb-3 md:mb-4">1年後の定着率</p>

            {/* 数字 */}
            <div className="mb-4 md:mb-6 relative">
              <div className="inline-block relative">
                <span className="text-4xl md:text-6xl font-bold text-[#FF6B4A] relative z-10">95</span>
                <span className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-[#FFEB3B] -z-0"></span>
              </div>
              <span className="text-base md:text-lg text-[#FF6B4A] font-bold ml-1">%</span>
            </div>

            {/* 説明文 */}
            <p className="text-xs md:text-sm text-[#323232] leading-relaxed text-left">
              AIによるいマッチングシステムのおかげで、平均よりも10%近く高い数値で推移しています！
            </p>
          </div>

          {/* カード4: 採用コスト */}
          <div className="bg-white rounded-xl p-4 md:p-6 text-center border-[3px] border-[#326AC3]">
            {/* アイコン */}
            <div className="flex justify-center mb-4 md:mb-6">
              <svg className="w-10 h-10 md:w-14 md:h-14" viewBox="0 0 64 64" fill="none" stroke="#326AC3" strokeWidth="6">
                <polyline points="8,40 24,24 36,36 56,16" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="44,16 56,16 56,28" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* タイトル */}
            <p className="text-[#326AC3] font-bold text-base md:text-lg mb-3 md:mb-4">採用コスト</p>

            {/* 数字 */}
            <div className="mb-4 md:mb-6 relative">
              <span className="text-base md:text-lg text-[#FF6B4A] font-bold mr-1">平均</span>
              <div className="inline-block relative">
                <span className="text-4xl md:text-6xl font-bold text-[#FF6B4A] relative z-10">30</span>
                <span className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-[#FFEB3B] -z-0"></span>
              </div>
              <span className="text-base md:text-lg text-[#FF6B4A] font-bold ml-1">%削減</span>
            </div>

            {/* 説明文 */}
            <p className="text-xs md:text-sm text-[#323232] leading-relaxed text-left">
              効率的に採用活動を行うことができるため、大幅に採用コストをカットすることが可能です！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
