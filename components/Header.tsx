"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex items-stretch">
        {/* Logo - 左側 */}
        <Link href="/" className="text-2xl font-bold text-blue-600 px-8 py-4 flex items-center">
          Tecmon
        </Link>

        {/* Navigation - 右寄せ */}
        <nav className="hidden md:flex items-center gap-8 ml-auto px-8">
          <Link href="#concerns" className="text-[#323232] text-sm font-bold hover:text-gray-600">
            お悩み
          </Link>
          <Link href="#features" className="text-[#323232] text-sm font-bold hover:text-gray-600">
            4つの特徴
          </Link>
          <Link href="#testimonials" className="text-[#323232] text-sm font-bold hover:text-gray-600">
            お客様の声
          </Link>
          <Link href="#flow" className="text-[#323232] text-sm font-bold hover:text-gray-600">
            ご利用の流れ
          </Link>
        </nav>

        {/* CTA Button - 右端 */}
        <Link
          href="#contact"
          className="bg-[#F26B3A] hover:bg-[#E05A2A] text-white px-10 flex items-center gap-3 text-sm font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          資料請求はこちら
        </Link>
      </div>
    </header>
  );
}
