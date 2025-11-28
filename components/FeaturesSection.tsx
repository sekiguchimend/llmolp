"use client";

export default function FeaturesSection() {
  return (
    <section id="features" className="pt-12 md:pt-20 bg-white">
      {/* セクションタイトル */}
      <div className="text-center mb-8 md:mb-16 px-4">
        <div className="inline-block mb-4 md:mb-6">
          <p className="text-[#3B82F6] text-sm md:text-lg font-medium mb-2">採用の答えをだす</p>
          <div className="h-[2px] bg-[#3B82F6] w-full"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="text-[#323232]">LLM可視化・改善サービス</span><span className="text-[#F26B3A] text-4xl md:text-6xl">4</span><span className="text-[#323232]">つの特徴</span>
        </h2>
      </div>

      {/* 水色背景コンテナ - 左に角丸、左にマージン */}
      <div className="bg-[#E3EEFF] ml-0 md:ml-[50px] lg:ml-[100px] rounded-tl-[40px] md:rounded-tl-[80px] rounded-bl-[40px] md:rounded-bl-[80px]">
        {/* 特徴01 */}
        <div className="py-8 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* 左側テキスト */}
          <div className="w-full md:w-1/2">
            <p className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6">01</p>
            <h3 className="text-xl md:text-3xl font-bold text-[#323232] leading-relaxed mb-2">
              「待つSEO」は今日で終わり
            </h3>
            <h3 className="text-xl md:text-3xl font-bold text-[#323232] leading-relaxed mb-4 md:mb-6">
              これからは<span className="text-[#F26B3A]">「攻める LLM 可視化」</span>へ
            </h3>
            <p className="text-sm md:text-base text-[#323232] leading-relaxed">
              自社名・サービス名・ユースケースなどから、ユーザーが LLM に投げるであろうプロンプトを自動生成。さらに、指定したプロンプトを毎日自動で実行し、
              ChatGPT / Gemini / Perplexity / Claude / Grok など複数 LLM 上での「言及状況」「競合との並び」を可視化します。
              検索結果を“待つ”のではなく、狙ったプロンプトで自社がどう扱われているのかを能動的に検証し、AI検索に最適化されたコンテンツ戦略へシフトできます。
            </p>
          </div>

          {/* 右側イラスト */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* 人材カードグリッド */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {/* カード1 - ハイライト */}
                <div className="w-16 h-20 md:w-24 md:h-28 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 md:w-8 md:h-8 bg-[#8B5CF6] rounded-full"></div>
                  </div>
                </div>
                {/* カード2 */}
                <div className="w-16 h-20 md:w-24 md:h-28 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center border border-gray-100">
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-[#FCD34D] rounded-full mb-1 md:mb-2"></div>
                  <div className="w-6 h-1 md:w-8 bg-gray-200 rounded"></div>
                </div>
                {/* カード3 */}
                <div className="w-16 h-20 md:w-24 md:h-28 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center border border-gray-100">
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-[#F87171] rounded-full mb-1 md:mb-2"></div>
                  <div className="w-6 h-1 md:w-8 bg-gray-200 rounded"></div>
                </div>
                {/* カード4 */}
                <div className="w-16 h-20 md:w-24 md:h-28 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center border border-gray-100">
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-[#60A5FA] rounded-full mb-1 md:mb-2"></div>
                  <div className="w-6 h-1 md:w-8 bg-gray-200 rounded"></div>
                </div>
                {/* カード5 */}
                <div className="w-16 h-20 md:w-24 md:h-28 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center border border-gray-100">
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-[#A78BFA] rounded-full mb-1 md:mb-2"></div>
                  <div className="w-6 h-1 md:w-8 bg-gray-200 rounded"></div>
                </div>
                {/* カード6 */}
                <div className="w-16 h-20 md:w-24 md:h-28 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center border border-gray-100">
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-[#FBBF24] rounded-full mb-1 md:mb-2"></div>
                  <div className="w-6 h-1 md:w-8 bg-gray-200 rounded"></div>
                </div>
              </div>
              {/* 虫眼鏡 */}
              <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2">
                <svg className="w-10 h-10 md:w-16 md:h-16 text-[#323232]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* 特徴02 - 白背景、右角丸、右マージン */}
        <div className="relative bg-white rounded-tr-[40px] md:rounded-tr-[80px] rounded-br-[40px] md:rounded-br-[80px] mr-0 md:mr-[50px] lg:mr-[100px] py-8 md:py-16 px-4 md:px-8">
          {/* 左上の凹カーブ（左に90度回転） - モバイルでは非表示 */}
          <div className="hidden md:block absolute -top-[40px] md:-top-[80px] left-0 w-[40px] md:w-[80px] h-[40px] md:h-[80px] bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-[40px] md:w-[80px] h-[40px] md:h-[80px] bg-[#E3EEFF] rounded-bl-[40px] md:rounded-bl-[80px]"></div>
          </div>
          {/* 左下の凹カーブ（右に90度回転） - モバイルでは非表示 */}
          <div className="hidden md:block absolute -bottom-[40px] md:-bottom-[80px] left-0 w-[40px] md:w-[80px] h-[40px] md:h-[80px] bg-white overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[40px] md:w-[80px] h-[40px] md:h-[80px] bg-[#E3EEFF] rounded-tl-[40px] md:rounded-tl-[80px]"></div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            {/* 左側イラスト */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* ダッシュボード画面 */}
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-[240px] md:w-[320px]">
                {/* ヘッダー部分 */}
                <div className="flex gap-3 md:gap-4 mb-3 md:mb-4">
                  {/* プロフィール */}
                  <div className="w-14 h-18 md:w-20 md:h-24 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-white/30 rounded-full"></div>
                  </div>
                  {/* グラフ */}
                  <div className="flex-1">
                    <div className="flex items-end gap-1 md:gap-2 h-18 md:h-24">
                      <div className="w-4 md:w-6 h-9 md:h-12 bg-[#93C5FD] rounded-t"></div>
                      <div className="w-4 md:w-6 h-12 md:h-16 bg-[#3B82F6] rounded-t"></div>
                      <div className="w-4 md:w-6 h-15 md:h-20 bg-[#1D4ED8] rounded-t"></div>
                      <div className="w-4 md:w-6 h-10 md:h-14 bg-[#F97316] rounded-t"></div>
                    </div>
                  </div>
                </div>
                {/* 下部 */}
                <div className="flex gap-3 md:gap-4">
                  {/* テキスト行 */}
                  <div className="flex-1 space-y-1.5 md:space-y-2">
                    <div className="h-1.5 md:h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-1.5 md:h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-1.5 md:h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  {/* 円グラフ */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-6 md:border-8 border-[#3B82F6] border-t-[#93C5FD] border-r-[#1D4ED8]"></div>
                </div>
              </div>
              {/* 吹き出し */}
              <div className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 md:px-6 py-1.5 md:py-2 shadow-md">
                <div className="flex gap-1">
                  <div className="w-12 md:w-16 h-1 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 右側テキスト */}
          <div className="w-full md:w-1/2">
            <p className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6">02</p>
            <h3 className="text-xl md:text-3xl font-bold text-[#323232] leading-relaxed mb-2">
              LLMの回答と自社サイトを可視化し、
            </h3>
            <h3 className="text-xl md:text-3xl font-bold text-[#323232] leading-relaxed mb-4 md:mb-6">
              「機会損失」を見逃さない
            </h3>
            <p className="text-sm md:text-base text-[#323232] leading-relaxed">
              Firecrawl で自社サイト全体をクロールし、ページ構造やテキストをまるごと解析。
              「どのプロンプトに対して」「どのページがどれくらい効いているのか」「どのテーマが強く、どのテーマが弱いのか」をマトリクスで表示します。
              さらに、LLM の実際の回答文と比較することで、「どのプロンプトで競合ばかりが推されているか」「自社の強みがうまく説明されていない箇所はどこか」といった
              「取りこぼしポイント」を一目で把握できます。
            </p>
          </div>
          </div>
        </div>

        {/* 特徴03 */}
        <div className="py-8 md:py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* 上部: タイトル + イラスト */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-8 md:mb-12">
              {/* 左側テキスト */}
              <div className="w-full md:w-1/2">
                <p className="text-[#3B82F6] text-3xl md:text-5xl font-bold mb-4 md:mb-6">03</p>
                <h3 className="text-xl md:text-3xl font-bold text-[#323232] leading-relaxed mb-2">
                  専任コンサルによるコンテンツ設計で
                </h3>
                <h3 className="text-xl md:text-3xl font-bold text-[#323232] leading-relaxed mb-4 md:mb-6">
                  LLMとのミスマッチを<span className="text-[#F26B3A]">「極限まで 0 に」</span>
                </h3>
                <p className="text-sm md:text-base text-[#323232] leading-relaxed">
                  SaaS だけでなく、希望企業には専任コンサルティングチームが伴走。
                  「LLM 上で狙いたいプロンプトの設計」「そのプロンプトに最適化されたページ構成案の作成」「既存ページのリライト方針の策定」まで、
                  実運用を前提に設計します。LLM が拾いやすい情報を整理し、AI検索における“認識のミスマッチ”を最小化します。
                </p>
              </div>

              {/* 右側イラスト - 握手する2人 */}
              <div className="w-full md:w-1/2 flex justify-center">
                <svg className="w-[200px] h-[140px] md:w-[280px] md:h-[200px]" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 左の人（男性・青い服） */}
                  <circle cx="90" cy="50" r="30" fill="#FDE68A" />
                  <ellipse cx="90" cy="38" rx="22" ry="16" fill="#4B5563" />
                  <circle cx="82" cy="52" r="2" fill="#323232" />
                  <circle cx="98" cy="52" r="2" fill="#323232" />
                  <path d="M85 62 Q90 68 95 62" stroke="#323232" strokeWidth="2" fill="none" />
                  <path d="M60 200 L60 100 Q60 80 85 80 L95 80 Q120 80 120 100 L120 200" fill="#3B82F6" />

                  {/* 右の人（女性・オレンジ服） */}
                  <circle cx="190" cy="50" r="30" fill="#FDE68A" />
                  <ellipse cx="190" cy="35" rx="25" ry="20" fill="#3B82F6" />
                  <circle cx="182" cy="52" r="2" fill="#323232" />
                  <circle cx="198" cy="52" r="2" fill="#323232" />
                  <path d="M185 62 Q190 68 195 62" stroke="#323232" strokeWidth="2" fill="none" />
                  <path d="M160 200 L160 100 Q160 80 185 80 L195 80 Q220 80 220 100 L220 200" fill="#F97316" />

                  {/* 握手している腕 */}
                  <path d="M120 110 L140 120" stroke="#FDE68A" strokeWidth="16" strokeLinecap="round" />
                  <path d="M160 110 L140 120" stroke="#FDE68A" strokeWidth="16" strokeLinecap="round" />
                  <ellipse cx="140" cy="120" rx="18" ry="10" fill="#FDE68A" />
                </svg>
              </div>
            </div>

            {/* 下部: 2つのカード */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* 左カード: AIヘッドハンティングとは */}
              <div>
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 mb-6 md:mb-8">
                  <h4 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-center">
                    <span className="bg-yellow-300 px-2 text-[#F26B3A]">LLM可視化・最適化</span><span className="text-[#323232]">とは</span>
                  </h4>
                  <p className="text-sm md:text-lg text-[#323232] leading-loose font-medium">
                    ChatGPT や Gemini、Perplexity などの LLM がユーザーの質問に回答する際、
                    「どのサイトを参照し」「どのような文章で企業やサービスを紹介するのか」を横断的に分析し、
                    AI 検索上のブランド認知・比較・指名を設計するための次世代マーケティング手法です。
                    Umoren.ai は LLM の回答ログとサイトコンテンツを紐づけ、AI 時代の「見られ方」を戦略レベルでコントロールできるようにします。
                  </p>
                </div>
                {/* 吹き出し */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-14 md:w-[60px] md:h-[80px]" viewBox="0 0 60 80" fill="none">
                      <circle cx="30" cy="28" r="22" fill="#FDE68A" />
                      <path d="M10 28 Q8 8 30 5 Q52 8 50 28 Q50 35 45 38 L45 28 Q45 18 30 18 Q15 18 15 28 L15 38 Q10 35 10 28 Z" fill="#6B7280" />
                      <path d="M12 80 L12 58 Q12 48 30 48 Q48 48 48 58 L48 80" fill="#3B82F6" />
                    </svg>
                  </div>
                  <div className="bg-white rounded-2xl md:rounded-3xl rounded-tl-none p-4 md:p-5 text-sm md:text-base text-[#323232] flex-1 leading-relaxed">
                    従来のスカウトサービスでは、候補者の表面的な能力しか分からず、余分なコストや時間がかかってしまっていませんか？
                  </div>
                </div>
              </div>

              {/* 右カード: なぜ人材が集まるのか */}
              <div>
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 mb-6 md:mb-8">
                  <h4 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-center">
                    <span className="text-[#323232]">なぜ</span><span className="bg-yellow-300 px-2 text-[#F26B3A]"> LLM で「選ばれる」</span><span className="text-[#323232]">のか</span>
                  </h4>
                  <p className="text-sm md:text-lg text-[#323232] leading-loose font-medium">
                    企業側だけでなく、ユーザー側の行動も変わりつつあります。「まずは AI に聞いてから検索する」ユーザーが増え、
                    「最初に AI におすすめされたブランド」「比較候補として並んだ 2〜3 社」がそのまま問い合わせ・資料請求候補になります。
                    Umoren.ai は AI が理解しやすい形で強みを整理し、ユースケースや導入事例を提示することで、LLM 上で「最初に名前が出る会社」を増やしていきます。
                  </p>
                </div>
                {/* 吹き出し */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-14 md:w-[60px] md:h-[80px]" viewBox="0 0 60 80" fill="none">
                      <circle cx="30" cy="28" r="22" fill="#FDE68A" />
                      <path d="M12 25 Q10 5 30 3 Q50 5 48 25 Q48 35 42 40 L42 25 Q42 15 30 15 Q18 15 18 25 L18 40 Q12 35 12 25 Z" fill="#3B82F6" />
                      <path d="M12 80 L12 58 Q12 48 30 48 Q48 48 48 58 L48 80" fill="#E5E7EB" />
                    </svg>
                  </div>
                  <div className="bg-white rounded-2xl md:rounded-3xl rounded-tl-none p-4 md:p-5 text-sm md:text-base text-[#323232] flex-1 leading-relaxed">
                    従来では採用媒体と自社リクルートページの横断で候補者が散らばっていませんでしたか？優秀な人材がここには揃っています
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 特徴04 - 白背景、右角丸、右マージン */}
        <div className="relative bg-white rounded-tr-[40px] md:rounded-tr-[80px] rounded-br-[40px] md:rounded-br-[80px] mr-0 md:mr-[50px] lg:mr-[100px] py-8 md:py-16 px-4 md:px-8">
          {/* 左上の凹カーブ - モバイルでは非表示 */}
          <div className="hidden md:block absolute -top-[40px] md:-top-[80px] left-0 w-[40px] md:w-[80px] h-[40px] md:h-[80px] bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-[40px] md:w-[80px] h-[40px] md:h-[80px] bg-[#E3EEFF] rounded-bl-[40px] md:rounded-bl-[80px]"></div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            {/* 左側イラスト */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <svg className="w-[240px] h-[180px] md:w-[320px] md:h-[240px]" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 棒グラフ */}
                  <rect x="20" y="180" width="20" height="40" fill="#BFDBFE" />
                  <rect x="50" y="160" width="20" height="60" fill="#BFDBFE" />
                  <rect x="80" y="140" width="20" height="80" fill="#BFDBFE" />
                  <rect x="110" y="120" width="20" height="100" fill="#BFDBFE" />

                  {/* 上向き矢印 */}
                  <path d="M80 180 Q120 100 200 60" stroke="#3B82F6" strokeWidth="4" fill="none" />
                  <path d="M190 55 L205 60 L195 72" fill="#3B82F6" />

                  {/* 人材カード1（左下） */}
                  <rect x="60" y="130" width="50" height="60" rx="5" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                  <circle cx="85" cy="150" r="12" fill="#FDE68A" />
                  <ellipse cx="85" cy="145" rx="8" ry="6" fill="#F59E0B" />
                  <rect x="70" y="168" width="30" height="4" rx="2" fill="#E5E7EB" />

                  {/* 人材カード2（中央） */}
                  <rect x="130" y="80" width="50" height="60" rx="5" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                  <circle cx="155" cy="100" r="12" fill="#FDE68A" />
                  <ellipse cx="155" cy="95" rx="8" ry="6" fill="#6B7280" />
                  <rect x="140" y="118" width="30" height="4" rx="2" fill="#E5E7EB" />

                  {/* 人材カード3（右上・ハイライト） */}
                  <rect x="200" y="30" width="50" height="60" rx="5" fill="#3B82F6" />
                  <circle cx="225" cy="50" r="12" fill="white" opacity="0.3" />
                  <circle cx="225" cy="50" r="8" fill="#FDE68A" />
                  <ellipse cx="225" cy="45" rx="6" ry="4" fill="#3B82F6" />
                  <rect x="210" y="68" width="30" height="4" rx="2" fill="white" opacity="0.5" />
                </svg>
              </div>
            </div>

            {/* 右側テキスト */}
            <div className="w-full md:w-1/2">
              <p className="text-[#3B82F6] text-3xl md:text-5xl font-bold mb-4 md:mb-6">04</p>
              <h3 className="text-xl md:text-3xl font-bold text-[#323232] leading-relaxed mb-2">
                未来の LLM 露出を、事前に設計。
              </h3>
              <h3 className="text-xl md:text-3xl font-bold text-[#323232] leading-relaxed mb-4 md:mb-6">
                継続的なモニタリングで<span className="text-[#F26B3A]">「指名検索」</span>を獲得
              </h3>
              <p className="text-sm md:text-base text-[#323232] leading-relaxed">
                ダッシュボードでは、プロンプトごと・LLM ごとの露出状況を日次でトラッキング可能。
                新しいページ公開後の LLM 上での言及変化や、競合の動きによる自社ポジションの揺れを継続的に追うことで、
                一度きりの診断ではなく「変化し続ける AI検索」に合わせて改善サイクルを回し続けられます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
