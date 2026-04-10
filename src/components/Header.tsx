'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { List, X, CaretDown } from '@phosphor-icons/react';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/neighborhoods',
    label: 'Neighborhoods',
    children: [
      { href: '/neighborhoods/south-lebanon', label: 'South Lebanon' },
      { href: '/neighborhoods/east-lebanon', label: 'East Lebanon' },
      { href: '/neighborhoods/north-lebanon', label: 'North Lebanon' },
      { href: '/neighborhoods/hamilton-creek', label: 'Hamilton Creek' },
    ],
  },
  { href: '/market-report', label: 'Market Report' },
  { href: '/schools', label: 'Schools' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#e2e8f0]/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#0099cc] flex items-center justify-center">
              <span className="text-white font-bold text-sm">TG</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-[#1a2b36] group-hover:text-[#0099cc] transition-colors duration-200">
              Lebanon Real Estate
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      pathname.startsWith('/neighborhoods')
                        ? 'text-[#0099cc] bg-[#0099cc]/5'
                        : 'text-[#64748b] hover:text-[#1a2b36] hover:bg-[#f1f5f9]'
                    }`}
                  >
                    {link.label}
                    <CaretDown
                      size={12}
                      weight="bold"
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg shadow-black/5 border border-[#e2e8f0] py-1 animate-fade-in">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                            pathname === child.href
                              ? 'text-[#0099cc] bg-[#0099cc]/5 font-medium'
                              : 'text-[#64748b] hover:text-[#1a2b36] hover:bg-[#f8fafb]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-[#0099cc] bg-[#0099cc]/5'
                      : 'text-[#64748b] hover:text-[#1a2b36] hover:bg-[#f1f5f9]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* CTA */}
            <a
              href="https://www.teamgillott.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-[#0099cc] rounded-lg hover:bg-[#00708f] transition-colors duration-200 active:scale-[0.98]"
            >
              Search Homes
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[#64748b] hover:bg-[#f1f5f9] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-[#e2e8f0] animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      pathname === link.href
                        ? 'text-[#0099cc] bg-[#0099cc]/5'
                        : 'text-[#64748b] hover:text-[#1a2b36] hover:bg-[#f1f5f9]'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            pathname === child.href
                              ? 'text-[#0099cc] font-medium'
                              : 'text-[#94a3b8] hover:text-[#64748b]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="https://www.teamgillott.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 mx-3 px-4 py-2.5 text-sm font-semibold text-center text-white bg-[#0099cc] rounded-lg hover:bg-[#00708f] transition-colors"
              >
                Search Homes
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
