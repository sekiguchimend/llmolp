"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex items-stretch">
        {/* Logo - 左側 */}
        <Link href="/" className="text-xl md:text-2xl font-bold text-blue-600 px-4 md:px-8 py-4 flex items-center">
          Tecmon
        </Link>

        {/* Navigation - 右寄せ (PC) */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto px-8">
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

        {/* CTA Button - 右端 (PC) */}
        <Link
          href="#contact"
          className="hidden md:flex bg-[#F26B3A] hover:bg-[#E05A2A] text-white px-6 lg:px-10 items-center gap-2 lg:gap-3 text-sm font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 lg:h-6 lg:w-6"
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
          <span className="hidden lg:inline">資料請求はこちら</span>
          <span className="lg:hidden">資料請求</span>
        </Link>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-auto px-4 py-4 flex items-center"
          aria-label="メニュー"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#323232]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col py-4">
            <Link
              href="#concerns"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#323232] text-sm font-bold py-3 px-6 hover:bg-gray-50"
            >
              お悩み
            </Link>
            <Link
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#323232] text-sm font-bold py-3 px-6 hover:bg-gray-50"
            >
              4つの特徴
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#323232] text-sm font-bold py-3 px-6 hover:bg-gray-50"
            >
              お客様の声
            </Link>
            <Link
              href="#flow"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#323232] text-sm font-bold py-3 px-6 hover:bg-gray-50"
            >
              ご利用の流れ
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#F26B3A] text-white text-sm font-bold py-3 px-6 mx-4 mt-4 rounded-lg text-center"
            >
              資料請求はこちら
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
