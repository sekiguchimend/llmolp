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
      highlight: "応募が来ない",
      description: "採用ページの改修をして、SNS発信を行い、採用媒体へ高額費用を支払っても肝心の応募が全然来ない..."
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
      title: "求めている",
      highlight: "スキルがない",
      description: "やっときた応募者でも、求めているスキルセットが揃わず、理想とする人材に全然出会えない..."
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
      title: "すぐに",
      highlight: "離職してしまう",
      description: "なんとか採用した人材も、これからのタイミングで離職してしまい、中堅が育たず、中間層が薄くなっている..."
    }
  ];

  return (
    <section id="concerns" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* タイトル */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-[#323232] mb-3">
            採用市場を困らせる
          </h2>
          <p className="text-5xl font-extrabold text-orange-500">
            3つのポイント
          </p>
        </div>

        {/* 3つのカード */}
        <div className="grid md:grid-cols-3 gap-10">
          {concerns.map((concern, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* アイコン */}
              <div className="mb-8">
                {concern.icon}
              </div>

              {/* カード */}
              <div className="bg-gray-100 rounded-lg p-8 w-full h-full">
                <h3 className="text-2xl font-extrabold text-center mb-5 text-[#323232]">
                  {concern.title}
                  <span className="text-orange-500">{concern.highlight}</span>
                </h3>
                <p className="text-[#323232] text-[17px] font-bold leading-relaxed">
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
