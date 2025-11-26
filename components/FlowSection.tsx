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
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="25" width="70" height="50" rx="5" fill="#5B8ED6" stroke="#2D5AA0" strokeWidth="3"/>
            <path d="M15 30 L50 55 L85 30" stroke="#2D5AA0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <rect x="15" y="25" width="70" height="10" fill="#4A7DC9"/>
          </svg>
        );
      case "chat":
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="25" width="60" height="45" rx="8" fill="#5B8ED6" stroke="#2D5AA0" strokeWidth="3"/>
            <path d="M35 55 L35 75 L50 65 L80 65" stroke="#2D5AA0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="#5B8ED6"/>
            <line x1="30" y1="40" x2="70" y2="40" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <line x1="30" y1="50" x2="60" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        );
      case "document":
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20 L30 80 L75 80 L75 35 L60 20 Z" fill="#5B8ED6" stroke="#2D5AA0" strokeWidth="3"/>
            <path d="M60 20 L60 35 L75 35" fill="#4A7DC9" stroke="#2D5AA0" strokeWidth="3"/>
            <line x1="40" y1="45" x2="65" y2="45" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="40" y1="55" x2="65" y2="55" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="40" y1="65" x2="55" y2="65" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        );
      case "search":
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="18" fill="#5B8ED6" stroke="#2D5AA0" strokeWidth="3"/>
            <circle cx="40" cy="40" r="12" fill="white"/>
            <line x1="53" y1="53" x2="70" y2="70" stroke="#2D5AA0" strokeWidth="5" strokeLinecap="round"/>
            <path d="M35 40 L38 43 L45 35" stroke="#2D5AA0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        );
      case "people":
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="10" fill="#5B8ED6" stroke="#2D5AA0" strokeWidth="2.5"/>
            <path d="M20 65 Q20 50 35 50 Q50 50 50 65 L50 70 L20 70 Z" fill="#5B8ED6" stroke="#2D5AA0" strokeWidth="2.5"/>
            <circle cx="60" cy="35" r="10" fill="#4A7DC9" stroke="#2D5AA0" strokeWidth="2.5"/>
            <path d="M45 65 Q45 50 60 50 Q75 50 75 65 L75 70 L45 70 Z" fill="#4A7DC9" stroke="#2D5AA0" strokeWidth="2.5"/>
          </svg>
        );
      case "check":
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="28" fill="#5B8ED6" stroke="#2D5AA0" strokeWidth="3"/>
            <path d="M35 50 L44 59 L67 36" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white relative z-20 mt-12">
      <div className="max-w-7xl mx-auto px-8">
        {/* 上部の黄色い吹き出し */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-block">
            <div className="bg-[#F4F563] px-8 py-4 rounded-2xl shadow-md">
              <p className="text-gray-800 text-lg font-bold text-center leading-relaxed">
                簡単6ステップで本格導入が可能！最短2ヶ月で独自のデータを基に採用開始
              </p>
            </div>
            {/* 吹き出しの尾 */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#F4F563]"></div>
          </div>
        </div>

        {/* セクションタイトル */}
        <h2 className="text-center mb-16 text-gray-800 font-black" style={{ fontSize: '48px' }}>
          ご利用までの流れ
        </h2>

        {/* ステップリスト */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-start gap-10">
                {/* 左側：ステップ番号 */}
                <div className="flex-shrink-0" style={{ width: '160px' }}>
                  <div className="text-left">
                    <div className="text-gray-400 text-xl font-bold mb-1">STEP</div>
                    <div className="text-gray-700 font-black" style={{ fontSize: '96px', lineHeight: '1' }}>
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* 中央：アイコン */}
                <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '112px', paddingTop: '32px' }}>
                  {renderIcon(step.icon)}
                </div>

                {/* 右側：コンテンツ */}
                <div className="flex-1" style={{ paddingTop: '32px' }}>
                  <h3 className="text-2xl font-black text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* 下向き矢印（最後のステップを除く） */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6">
                  <svg className="w-6 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
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

