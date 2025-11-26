export default function TestimonialsSection() {
  const testimonials = [
    {
      company: "IT系企業｜人事部長",
      title: "支援開始2ヶ月で",
      highlight: "即戦力人材質が採用に成功",
      description: `このサービスを利用して、一番大きかった点は"面接上手"を見抜ける点である。
決して悪いことではないが、人は後に面接にとってミスマッチとなることを本然に防いてくれるため、安心して採用活動に取り組めている。`
    },
    {
      company: "広告系企業｜役員",
      title: "支援開始6ヶ月で年度採用目標人数達成！",
      highlight: "採用コスト50%削減",
      description: `求める人物像が細かく分けられており、将来の成長像もわかるため、会社のビジョンに合わせて将来の役員ポジションの採用にもってこいだと感じた。
候補者によって企業の成長予測や自身のキャリアに沿った選択ができるので素晴らしい`
    },
    {
      company: "営業系企業｜営業部長",
      title: "支援開始3ヶ月で",
      highlight: "正社員2名採用採用単価を50%減",
      description: `これまで既存の採用媒体や広告など複数利用して、年間の採用人数をなんとか確保してきました。ですが、やっと採用した人材も離職率が高く、定着しないのが問題点でした。
ですが、このサービスを利用してから採用した人材は離職率が低く、社内風土との浸透もよく馴じんでいます。`
    },
    {
      company: "物流系｜人事部長",
      title: "採用した候補者の",
      highlight: "離職率が3年で2%まで減少",
      description: `これまでの採用方法では新卒や中途に関らず、3年以内の離職率が20%前後と比較的高い状態でした。業界の給与水準や社員工程を正しく伝えることができておらず、ミスマッチが起きていたのだと思います。
正しい情報と、求める人物像を刷新することで、2%まで減少したことがとても驚きです。`
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

