"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    hiring_timing: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreed) {
      setErrorMessage("プライバシーポリシーに同意してください");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const result = await submitContactForm(formData);

      if (!result.success) {
        throw new Error(result.error || "送信に失敗しました");
      }

      setSubmitStatus("success");
      setFormData({
        company: "",
        name: "",
        phone: "",
        email: "",
        hiring_timing: "",
        message: "",
      });
      setAgreed(false);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "送信に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#E3EEFF]">
      {/* 上部の黄色いバナー */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <div className="bg-[#FFEB3B] px-8 py-3 rounded-[10px] shadow-md">
            <p className="text-[#F26B3A] text-lg font-bold">
              本格的な採用シーズン開始前にお問い合わせください！
            </p>
          </div>
          {/* 吹き出しの尾 */}
          <div className="absolute -bottom-[10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#FFEB3B]"></div>
        </div>
      </div>

      {/* フォームカード */}
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          {/* タイトル */}
          <div className="text-center mb-10">
            <p className="text-[#F26B3A] text-xl font-bold mb-1">簡単60秒で</p>
            <h2 className="text-[#323232] text-3xl font-bold">資料請求ダウンロード</h2>
          </div>

          {/* フォーム */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 会社名 */}
            <div>
              <label className="block text-sm font-medium text-[#323232] mb-2">
                会社名 <span className="text-[#F26B3A] text-xs">必須</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="株式会社〇〇"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26B3A] focus:border-transparent"
              />
            </div>

            {/* お名前 */}
            <div>
              <label className="block text-sm font-medium text-[#323232] mb-2">
                お名前 <span className="text-[#F26B3A] text-xs">必須</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="山田 太郎"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26B3A] focus:border-transparent"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label className="block text-sm font-medium text-[#323232] mb-2">
                電話番号 <span className="text-[#F26B3A] text-xs">必須</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="000-0000-0000"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26B3A] focus:border-transparent"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block text-sm font-medium text-[#323232] mb-2">
                メールアドレス <span className="text-[#F26B3A] text-xs">必須</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="xxxxxxxx@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26B3A] focus:border-transparent"
              />
            </div>

            {/* 採用希望時期 */}
            <div>
              <label className="block text-sm font-medium text-[#323232] mb-2">
                採用希望時期 <span className="text-[#F26B3A] text-xs">必須</span>
              </label>
              <select
                name="hiring_timing"
                value={formData.hiring_timing}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26B3A] focus:border-transparent bg-white text-gray-500"
              >
                <option value="" disabled>選択してください</option>
                <option value="1month">1ヶ月以内</option>
                <option value="3months">3ヶ月以内</option>
                <option value="6months">6ヶ月以内</option>
                <option value="1year">1年以内</option>
                <option value="undecided">未定</option>
              </select>
            </div>

            {/* その他 */}
            <div>
              <label className="block text-sm font-medium text-[#323232] mb-2">
                その他
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="サービスへのご質問や人材に関するご質問がある方は記載ください。"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26B3A] focus:border-transparent resize-none"
              />
            </div>

            {/* プライバシーポリシー */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 border-gray-300 rounded focus:ring-[#F26B3A]"
              />
              <label htmlFor="privacy" className="text-sm text-[#323232]">
                プライバシーポリシーに同意する
              </label>
            </div>

            {/* ステータスメッセージ */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center">
                お問い合わせを受け付けました。ありがとうございます。
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center">
                {errorMessage}
              </div>
            )}

            {/* 送信ボタン */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full text-white text-lg font-bold shadow-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(180deg, #FDBA74 0%, #F26B3A 100%)',
                }}
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
