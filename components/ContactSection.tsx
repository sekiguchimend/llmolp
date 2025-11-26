"use client";

import { useState } from "react";

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="py-16 bg-[#E3EEFF]">
      {/* 上部の黄色いバナー */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#FFEB3B] px-8 py-3 rounded-full shadow-md">
          <p className="text-[#F26B3A] text-lg font-bold">
            本格的な採用シーズン開始前にお問い合わせください！
          </p>
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
          <form className="space-y-6">
            {/* 会社名 */}
            <div>
              <label className="block text-sm font-medium text-[#323232] mb-2">
                会社名 <span className="text-[#F26B3A] text-xs">必須</span>
              </label>
              <input
                type="text"
                placeholder="株式会社〇〇"
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
                placeholder="山田 太郎"
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
                placeholder="000-0000-0000"
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
                placeholder="xxxxxxxx@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26B3A] focus:border-transparent"
              />
            </div>

            {/* 採用希望時期 */}
            <div>
              <label className="block text-sm font-medium text-[#323232] mb-2">
                採用希望時期 <span className="text-[#F26B3A] text-xs">必須</span>
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26B3A] focus:border-transparent bg-white text-gray-500"
                defaultValue=""
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

            {/* 送信ボタン */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-full text-white text-lg font-bold shadow-lg transition-all hover:opacity-90"
                style={{
                  background: 'linear-gradient(180deg, #FDBA74 0%, #F26B3A 100%)',
                }}
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
