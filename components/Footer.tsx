import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* 会社名 */}
        <p className="text-white text-lg font-medium mb-4">
          株式会社Tecmon
        </p>

        {/* 郵便番号 */}
        <p className="text-gray-400 text-sm mb-1">
          〒361-9841
        </p>

        {/* 住所 */}
        <p className="text-gray-400 text-sm mb-6">
          東京都中央区0-00-0 シルバービルディング7F
        </p>

        {/* プライバシーポリシー */}
        <Link
          href="/privacy"
          className="text-[#F26B3A] text-sm hover:underline mb-6 inline-block"
        >
          プライバシーポリシー
        </Link>

        {/* コピーライト */}
        <p className="text-gray-500 text-sm mt-6">
          © 2024 Tecmon Inc.
        </p>
      </div>
    </footer>
  );
}
