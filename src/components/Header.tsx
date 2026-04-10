'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#0099cc] font-sans">
          Lebanon Real Estate
        </Link>
        <ul className="flex gap-6 text-[#354652]">
          <li>
            <Link href="/" className="hover:text-[#0099cc] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/neighborhoods" className="hover:text-[#0099cc] transition-colors">
              Neighborhoods
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
