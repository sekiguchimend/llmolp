import Image from "next/image";
import ConcernsSection from "@/components/ConcernsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CtaSection from "@/components/CtaSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FlowSection from "@/components/FlowSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <section className="relative min-h-[calc(100vh-80px)] bg-[#326AC3] overflow-hidden rounded-br-[80px]">
      {/* 背景 */}
   
      {/* 右上の装飾四角 */}
      <div className="absolute top-8 right-8 w-48 h-32 bg-[#3B82F6]/30 rounded"></div>
      <div className="absolute top-24 right-24 w-32 h-24 bg-[#3B82F6]/20 rounded"></div>

      {/* メインコンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 flex">
        {/* 左側コンテンツ */}
        <div className="w-[55%] text-white">
          {/* 吹き出し */}
          <div className="relative inline-block mt-8 mb-12">
            <div className="bg-white text-[#323232] px-6 py-3 rounded-full text-sm font-bold">
              待つ採用から、攻める採用へ。AI時代の新しいヘッドハンティング
            </div>
            {/* 吹き出しの尾 */}
            <div className="absolute -bottom-[7px] left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
          </div>

          {/* メインタイトル */}
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            採用に、答えを。
          </h1>

          {/* 説明文 */}
          <p className="text-lg mb-2 leading-relaxed">
            「待つ採用」で必要人材を確保することは難しい。
          </p>
          <p className="text-lg mb-12 leading-relaxed">
            AIと8,000名の厳選IT人材データベースを活用し、
            <br />
            あなたの会社に最適な人材をヘッドハンティング
          </p>

          {/* 統計セクション */}
          <div className="flex gap-6 mb-12">
            {/* 採用成功率 */}
            <div className="w-36 h-36 rounded-full flex flex-col items-center justify-center border-[6px] relative" style={{
              borderColor: '#FFD700',
              background: 'linear-gradient(180deg, #2B5BA6 0%, #4A7DC9 100%)'
            }}>
              <span className="text-xs font-bold mb-1" style={{color: '#FFD700'}}>採用成功率</span>
              <div className="flex items-start">
                <span className="text-[52px] font-bold leading-none" style={{
                  background: 'linear-gradient(180deg, #FFD700 0%, #FFF4B8 50%, #FFFFFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>95</span>
                <span className="text-xl font-bold ml-0.5" style={{
                  background: 'linear-gradient(180deg, #FFD700 0%, #FFF4B8 50%, #FFFFFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>%*</span>
              </div>
            </div>

            {/* 定着率 - プレースホルダー */}
            <div className="w-36 h-36 bg-[#1E3A8A] rounded-full flex flex-col items-center justify-center border-4 border-[#3B82F6]">
              <span className="text-sm text-gray-300">定着率</span>
              <span className="text-4xl font-bold">93<span className="text-xl">%</span></span>
              <span className="text-sm">*</span>
            </div>

            {/* AI分析精度 - プレースホルダー */}
            <div className="w-36 h-36 bg-[#1E3A8A] rounded-full flex flex-col items-center justify-center border-4 border-[#3B82F6]">
              <span className="text-sm text-gray-300">AI分析精度</span>
              <span className="text-4xl font-bold">99<span className="text-base">.2%</span></span>
              <span className="text-sm">*</span>
            </div>
          </div>

          {/* CTAボタンセクション */}
          <div className="relative inline-block">
            {/* 吹き出し */}
            <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-white text-[#FF6B35] px-5 py-1.5 rounded-full text-base font-bold whitespace-nowrap shadow-md">
                いますぐ！
              </div>
              {/* 吹き出しの尾 */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white"></div>
            </div>

            {/* CTAボタン（青い枠線付き） */}
            <div className="border-[3px] border-[#4A90D9] rounded-xl p-0.5">
              <button className="bg-[#FF6347] hover:bg-[#E85A2A] text-white text-xl font-bold px-12 py-4 rounded-lg shadow-lg transition-colors">
                まずは無料で資料請求！
              </button>
            </div>
          </div>
        </div>

        {/* 右側イラスト */}
        <div className="w-[45%] flex items-center justify-center">
          <div className="relative">
            <Image
              src="/top.png"
              alt="AIハンティングダッシュボード"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* 右下の注釈 */}
      <div className="absolute bottom-4 right-8 text-xs text-gray-500 text-right">
        <p>*2024年度当社サービス利用による</p>
        <p>*入社後12ヶ月時点。業界平均の3倍以上</p>
      </div>

      {/* 右下の装飾 */}
      <div className="absolute bottom-16 right-4 w-4 h-24 bg-[#3B82F6]/40 rounded"></div>
    </section>

    <ConcernsSection />
    <FeaturesSection />
    <CtaSection />
    <BenefitsSection />
    <TestimonialsSection />
    <FlowSection />
    <ContactSection />
    <Footer />
    </>
  );
}

