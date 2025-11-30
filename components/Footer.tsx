import Link from "next/link";
import Image from "next/image";
import logo from "@/app/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* ロゴ */}
        <div className="flex justify-center mb-3 md:mb-4">
          <Image
            src={logo}
            alt="Umoren.ai"
            className="h-10 w-auto md:h-14"
          />
        </div>

        {/* 郵便番号・住所 */}
        <p className="text-gray-400 text-xs md:text-sm mb-1">
          〒104-0061
        </p>
        <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
        東京都中央区銀座８丁目17-5
        THE HUB 銀座 OCT
        </p>

        {/* プライバシーポリシー */}
        <Link
          href="/privacy"
          className="text-[#F26B3A] text-xs md:text-sm hover:underline mb-4 md:mb-6 inline-block"
        >
          プライバシーポリシー
        </Link>

        {/* コピーライト */}
        <p className="text-gray-500 text-xs md:text-sm mt-4 md:mt-6">
          © 2025 Umoren.ai Inc.
        </p>
      </div>
    </footer>
  );
}
