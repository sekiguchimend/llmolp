export default function TestimonialsSection() {
  const testimonials = [
    {
      company: "IT系SaaS企業｜マーケティング責任者",
      title: "支援開始 2ヶ月で",
      highlight: "主要プロンプト 5件中 4件で言及獲得",
      description: `これまで「AI に聞いたときに、どう紹介されているか」はまったく把握できていませんでした。
Umoren.ai を導入してから、狙ったプロンプトに対してどのページが効いているのかが可視化され、
2ヶ月で主要プロンプトのほとんどで自社名が出るようになりました。`
    },
    {
      company: "BtoB SaaS企業｜役員",
      title: "支援開始 6ヶ月で",
      highlight: "AI経由の資料請求が 2.5倍、コンテンツ制作コスト 30% 削減",
      description: `「ChatGPT に聞いたときにどう出るか」を経営層も気にするようになり、
LLM 上の露出を経営指標として見始めました。
Umoren.ai のレポートを基に、やるべきコンテンツとやらなくていいコンテンツが整理され、
結果的に制作本数は減ったのに、AI 経由の資料請求は 2.5倍になりました。`
    },
    {
      company: "BtoBサービス企業｜マーケ担当者",
      title: "支援開始 3ヶ月で",
      highlight: "LLM 上の競合比較に自社が登場",
      description: `これまでは「○○業界 おすすめ ベンダー」と AI に聞いても、競合ばかりが並び、自社はどこにも出てきませんでした。
Umoren.ai でプロンプトとコンテンツを整理し、競合と比較されやすい切り口でページを作り直したところ、
3ヶ月で主要 LLM の比較リストに自社の名前が並ぶようになりました。`
    },
    {
      company: "人材系企業｜マーケティング部長",
      title: "AI検索上での「見られ方」を",
      highlight: "毎月のレポートで可視化",
      description: `業界的に検索行動の変化が早く、SEO だけを見ていても意思決定が難しい状態でした。
Umoren.ai のレポートでは、LLM 上での自社の立ち位置や競合の露出状況まで毎月まとまって出てくるので、
経営会議でも「AI検索での存在感」という軸で戦略を議論できるようになりました。`
    }
  ];

  return (
    <section id="testimonials" className="py-10 md:py-16 relative" style={{ backgroundColor: '#E3EEFF' }}>
      {/* 下部の逆V字装飾 */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, 50% 100%, 100% 0, 100% 100%, 0 100%)',
          backgroundColor: '#E3EEFF'
        }}
      >
        <div className="w-full h-full bg-white" style={{
          clipPath: 'polygon(0 0, 50% 100%, 100% 0)'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* タイトル */}
        <h2 className="text-center mb-8 md:mb-12 text-gray-800 font-black text-2xl md:text-4xl">
          お客様の声
        </h2>

        {/* 証言カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-8 md:gap-x-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8"
            >
              {/* 上部：アイコンとタイトル */}
              <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                {/* 人物アイコン */}
                <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-white rounded-xl flex items-center justify-center border-3 md:border-4 border-gray-800">
                  <svg
                    className="w-10 h-10 md:w-16 md:h-16 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* タイトルとハイライト */}
                <div className="flex-1">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 leading-tight mb-1 md:mb-2">
                    {testimonial.title}
                    <span className="text-red-500">{testimonial.highlight}</span>
                  </h3>
                </div>
              </div>

              {/* 会社情報 */}
              <p className="text-sm md:text-base font-semibold text-gray-700 mb-3 md:mb-4">
                {testimonial.company}
              </p>

              {/* 詳細説明 */}
              <p className="text-sm md:text-base text-gray-800 leading-relaxed whitespace-pre-line font-bold">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

