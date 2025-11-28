export default function ConcernsSection() {
  const concerns = [
    {
      icon: (
        <svg viewBox="0 0 120 120" className="w-40 h-40">
          {/* 男性とスマホのイラスト */}
          <circle cx="80" cy="30" r="15" fill="#E8EDF5" stroke="#333" strokeWidth="2"/>
          <path d="M80 45 L80 75 M80 55 L65 65 M80 55 L95 50" stroke="#333" strokeWidth="2" fill="none"/>
          {/* 吹き出し */}
          <ellipse cx="45" cy="25" rx="20" ry="12" fill="#fff" stroke="#333" strokeWidth="1.5"/>
          <circle cx="38" cy="25" r="2" fill="#333"/>
          <circle cx="45" cy="25" r="2" fill="#333"/>
          <circle cx="52" cy="25" r="2" fill="#333"/>
          {/* スマホ */}
          <rect x="25" y="55" width="25" height="45" rx="3" fill="#4A90D9" stroke="#333" strokeWidth="1.5"/>
          <rect x="28" y="60" width="19" height="30" fill="#fff"/>
        </svg>
      ),
      title: "そもそも",
      highlight: " LLM 上に自社が出てこない",
      description: "コンテンツを増やし、SEO を強化し、広告費もかけているのに、ChatGPT や Perplexity で検索しても、自社の名前がどこにも出てこない…。"
    },
    {
      icon: (
        <svg viewBox="0 0 120 120" className="w-40 h-40">
          {/* スキルパネル */}
          <rect x="30" y="10" width="25" height="20" rx="2" fill="#fff" stroke="#333" strokeWidth="1.5"/>
          <text x="42" y="24" fontSize="6" textAnchor="middle" fill="#333">SKILL</text>
          <rect x="60" y="10" width="25" height="20" rx="2" fill="#fff" stroke="#333" strokeWidth="1.5"/>
          <text x="72" y="24" fontSize="6" textAnchor="middle" fill="#333">SKILL</text>
          <rect x="30" y="35" width="25" height="20" rx="2" fill="#F4D03F" stroke="#333" strokeWidth="1.5"/>
          <text x="42" y="49" fontSize="6" textAnchor="middle" fill="#333">SKILL</text>
          <rect x="60" y="35" width="25" height="20" rx="2" fill="#fff" stroke="#333" strokeWidth="1.5"/>
          <text x="72" y="49" fontSize="6" textAnchor="middle" fill="#333">SKILL</text>
          {/* 女性 */}
          <circle cx="75" cy="75" r="12" fill="#E8EDF5" stroke="#333" strokeWidth="2"/>
          <path d="M65 65 Q75 55 85 65" stroke="#4A5568" strokeWidth="3" fill="none"/>
          <path d="M75 87 L75 110" stroke="#333" strokeWidth="2"/>
          <path d="M75 95 L60 85" stroke="#333" strokeWidth="2"/>
          <ellipse cx="80" cy="90" rx="8" ry="5" fill="#E8EDF5" stroke="#333" strokeWidth="1"/>
        </svg>
      ),
      title: "どんな文脈で",
      highlight: "紹介されているか分からない",
      description: "たまたま自社が言及されていても、強みやターゲット、提供価値が正しく伝わっているかは不明。誤った文脈や古い情報のまま紹介されているリスクも…。"
    },
    {
      icon: (
        <svg viewBox="0 0 120 120" className="w-40 h-40">
          {/* 退職届 */}
          <rect x="40" y="20" width="40" height="55" fill="#fff" stroke="#333" strokeWidth="1.5"/>
          <text x="60" y="40" fontSize="8" textAnchor="middle" fill="#333">退</text>
          <text x="60" y="52" fontSize="8" textAnchor="middle" fill="#333">職</text>
          <text x="60" y="64" fontSize="8" textAnchor="middle" fill="#333">届</text>
          {/* 手 */}
          <path d="M25 50 Q20 55 25 75 L35 75 L35 55 Z" fill="#F5DEB3" stroke="#333" strokeWidth="1"/>
          <path d="M95 50 Q100 55 95 75 L85 75 L85 55 Z" fill="#F5DEB3" stroke="#333" strokeWidth="1"/>
          {/* 震えマーク */}
          <path d="M20 40 L15 35 M18 50 L12 48 M100 40 L105 35 M102 50 L108 48" stroke="#333" strokeWidth="1.5"/>
        </svg>
      ),
      title: "競合ばかりが",
      highlight: "「おすすめ」として出てくる",
      description: "同じ領域の競合ばかりが LLM におすすめされ、比較リストにも自社が入らない。せっかくの実績や強みが、AI検索では「存在しない」のと同じ状態に…。"
    }
  ];

  return (
    <section id="concerns" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* タイトル */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#323232] mb-2 md:mb-3">
            AI検索時代のマーケティングを困らせる
          </h2>
          <p className="text-3xl md:text-5xl font-extrabold text-orange-500">
            3つのポイント
          </p>
        </div>

        {/* 3つのカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {concerns.map((concern, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* アイコン */}
              <div className="mb-4 md:mb-8">
                <div className="w-28 h-28 md:w-40 md:h-40">
                  {concern.icon}
                </div>
              </div>

              {/* カード */}
              <div className="bg-gray-100 rounded-lg p-5 md:p-8 w-full h-full">
                <h3 className="text-xl md:text-2xl font-extrabold text-center mb-3 md:mb-5 text-[#323232]">
                  {concern.title}
                  <span className="text-orange-500">{concern.highlight}</span>
                </h3>
                <p className="text-sm md:text-[17px] text-[#323232] font-bold leading-relaxed">
                  {concern.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
