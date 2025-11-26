export default function FlowSection() {
  const steps = [
    {
      number: "01",
      title: "資料請求・お問い合わせ",
      description: "まずは、成功事例やAIの仕組み、導入メリットがわかる資料をダウンロード。貴社の採用戦略にどのように活用できるのかを具体的にイメージできます。",
      icon: "mail"
    },
    {
      number: "02",
      title: "ヒアリング・無料相談",
      description: "採用のお悩みや課題、求める人材像について詳しくヒアリング。経験豊富なコンサルタントが最適なソリューションをご提案いたします。",
      icon: "chat"
    },
    {
      number: "03",
      title: "契約・サービス導入",
      description: "ご提案内容にご納得いただけましたら、契約手続きを実施。専任チームが導入をサポートし、スムーズなスタートを実現します。",
      icon: "document"
    },
    {
      number: "04",
      title: "AI分析・マッチング開始",
      description: "8,000名のIT人材データベースから、AIが貴社に最適な候補者を分析。独自のアルゴリズムで精度の高いマッチングを実現します。",
      icon: "search"
    },
    {
      number: "05",
      title: "候補者推薦・面接",
      description: "厳選された候補者をご推薦。スキルだけでなく、社風やカルチャーフィットも考慮した人材をご紹介し、面接をサポートします。",
      icon: "people"
    },
    {
      number: "06",
      title: "採用決定・アフターフォロー",
      description: "採用が決定した後も、定着支援やフォローアップを実施。長期的な活躍をサポートし、採用成功率95%、定着率93%を実現しています。",
      icon: "check"
    }
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "mail":
        return (
          <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="25" width="80" height="55" rx="4" fill="#3B82F6" stroke="#2563EB" strokeWidth="3"/>
            <path d="M10 30 L50 58 L90 30" stroke="#2563EB" strokeWidth="3" fill="none"/>
            <path d="M12 27 L50 52 L88 27" fill="white"/>
          </svg>
        );
      case "chat":
        return (
          <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="20" width="70" height="50" rx="6" fill="#3B82F6" stroke="#2563EB" strokeWidth="3"/>
            <polygon points="30,70 30,85 50,70" fill="#3B82F6" stroke="#2563EB" strokeWidth="3"/>
            <line x1="30" y1="38" x2="70" y2="38" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <line x1="30" y1="52" x2="60" y2="52" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        );
      case "document":
        return (
          <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 10 L25 90 L75 90 L75 30 L55 10 Z" fill="#3B82F6" stroke="#2563EB" strokeWidth="3"/>
            <path d="M55 10 L55 30 L75 30" fill="white" stroke="#2563EB" strokeWidth="3"/>
            <line x1="35" y1="50" x2="65" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <line x1="35" y1="62" x2="65" y2="62" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <line x1="35" y1="74" x2="55" y2="74" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        );
      case "search":
        return (
          <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="42" cy="42" r="25" fill="white" stroke="#3B82F6" strokeWidth="5"/>
            <line x1="60" y1="60" x2="82" y2="82" stroke="#3B82F6" strokeWidth="7" strokeLinecap="round"/>
            <circle cx="42" cy="42" r="12" fill="#3B82F6"/>
          </svg>
        );
      case "people":
        return (
          <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="30" r="12" fill="#3B82F6" stroke="#2563EB" strokeWidth="2"/>
            <path d="M15 75 Q15 50 35 50 Q55 50 55 75 L55 80 L15 80 Z" fill="#3B82F6" stroke="#2563EB" strokeWidth="2"/>
            <circle cx="65" cy="30" r="12" fill="#60A5FA" stroke="#3B82F6" strokeWidth="2"/>
            <path d="M45 75 Q45 50 65 50 Q85 50 85 75 L85 80 L45 80 Z" fill="#60A5FA" stroke="#3B82F6" strokeWidth="2"/>
          </svg>
        );
      case "check":
        return (
          <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="35" fill="#3B82F6" stroke="#2563EB" strokeWidth="3"/>
            <path d="M30 50 L44 64 L70 38" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="flow" className="py-12 md:py-20 bg-white relative z-20 mt-8 md:mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* 上部の黄色い吹き出し */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="relative inline-block">
            <div className="bg-[#F4F563] px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-md">
              <p className="text-gray-800 text-sm md:text-lg font-bold text-center leading-relaxed">
                簡単6ステップで本格導入が可能！<br className="md:hidden" />最短2ヶ月で独自のデータを基に採用開始
              </p>
            </div>
            {/* 吹き出しの尾 */}
            <div className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] md:border-l-[20px] border-r-[15px] md:border-r-[20px] border-t-[15px] md:border-t-[20px] border-l-transparent border-r-transparent border-t-[#F4F563]"></div>
          </div>
        </div>

        {/* セクションタイトル */}
        <h2 className="text-center mb-8 md:mb-16 text-gray-800 font-black text-2xl md:text-5xl">
          ご利用までの流れ
        </h2>

        {/* ステップリスト */}
        <div className="space-y-6 md:space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index}>
              {/* モバイル: 縦並びレイアウト */}
              <div className="md:hidden">
                <div className="flex items-center gap-4 mb-3">
                  {/* ステップ番号 */}
                  <div className="flex-shrink-0">
                    <div className="text-gray-400 text-xs font-bold">STEP</div>
                    <div className="text-gray-600 font-black text-4xl leading-none">
                      {step.number}
                    </div>
                  </div>
                  {/* 縦線 */}
                  <div className="flex-shrink-0 h-12 w-px bg-gray-300"></div>
                  {/* アイコン */}
                  <div className="flex-shrink-0 w-10">
                    {renderIcon(step.icon)}
                  </div>
                  {/* タイトル */}
                  <h3 className="text-base font-bold text-gray-800 flex-1">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed pl-2">
                  {step.description}
                </p>
              </div>

              {/* PC: 横並びレイアウト */}
              <div className="hidden md:flex items-center gap-6 justify-center">
                {/* 左側：ステップ番号 */}
                <div className="flex-shrink-0" style={{ width: '100px' }}>
                  <div className="text-left">
                    <div className="text-gray-400 text-base font-bold mb-0">STEP</div>
                    <div className="text-gray-600 font-black" style={{ fontSize: '64px', lineHeight: '1' }}>
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* 縦線 */}
                <div className="flex-shrink-0 h-20 w-px bg-gray-300"></div>

                {/* アイコン */}
                <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '70px' }}>
                  {renderIcon(step.icon)}
                </div>

                {/* 右側：コンテンツ */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* 下向き矢印（最後のステップを除く） */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-3 md:my-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

