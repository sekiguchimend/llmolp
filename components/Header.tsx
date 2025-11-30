"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "@/app/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="flex items-stretch">
        {/* Logo - 左側 */}
        <Link href="/" className="px-4 md:px-8 py-3 md:py-4 flex items-center">
          <Image
            src={logo}
            alt="Umoren.ai"
            className="h-10 w-auto md:h-14"
            priority
          />
        </Link>

        {/* Navigation - 右寄せ (PC) */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto px-8">
          <Link href="#concerns" className="text-white text-sm font-bold hover:text-gray-200">
            お悩み
          </Link>
          <Link href="#features" className="text-white text-sm font-bold hover:text-gray-200">
            4つの特徴
          </Link>
          <Link href="#testimonials" className="text-white text-sm font-bold hover:text-gray-200">
            お客様の声
          </Link>
          <Link href="#flow" className="text-white text-sm font-bold hover:text-gray-200">
            ご利用の流れ
          </Link>
        </nav>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-auto px-4 py-4 flex items-center"
          aria-label="メニュー"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
          </nav>
        </div>
      )}
    </header>
  );
}
