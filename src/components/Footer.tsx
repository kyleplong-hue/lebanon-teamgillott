'use client';

import Link from 'next/link';
import { currentMonth } from '@/data/market';
import { TEAM_URL } from '@/data/config';

export default function Footer() {
  return (
    <footer className="bg-[#1F2930] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#CA3121] flex items-center justify-center">
                <span className="text-white font-bold text-sm">TG</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Team Gillott
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              Serving Lebanon, Corvallis, and Albany with expert real estate
              services. Your trusted partner in the Willamette Valley.
            </p>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/neighborhoods', label: 'Lebanon Neighborhoods' },
                { href: '/cities/albany', label: 'Albany' },
                { href: '/cities/corvallis', label: 'Corvallis' },
                { href: '/cities/compare', label: 'Compare Cities' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/market-report', label: 'Market Report' },
                { href: '/first-time-buyers', label: 'First-Time Buyers' },
                { href: '/schools', label: 'School Guide' },
                { href: '/selling', label: 'Selling Guide' },
                { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
                { href: '/blog', label: 'Blog' },
                { href: '/faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Market Pulse */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-4">
              Market Pulse
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-[#94a3b8]">Median Price</span>
                <span className="text-sm font-semibold tabular-nums">
                  ${(currentMonth.medianPrice / 1000).toFixed(0)}K
                </span>
              </div>
              <div className="w-full h-px bg-[#1e293b]" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-[#94a3b8]">Days on Market</span>
                <span className="text-sm font-semibold tabular-nums">
                  {currentMonth.avgDOM}
                </span>
              </div>
              <div className="w-full h-px bg-[#1e293b]" />
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-[#94a3b8]">30-Yr Rate</span>
                <span className="text-sm font-semibold tabular-nums">
                  {currentMonth.mortgageRate}%
                </span>
              </div>
              <div className="w-full h-px bg-[#1e293b]" />
              <Link
                href="/market-report"
                className="inline-block text-xs font-semibold text-[#CA3121] hover:text-[#FF6B4A] transition-colors mt-1"
              >
                View full report &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748b]">
            &copy; {new Date().getFullYear()} Team Gillott Real Estate &middot; Keller Williams Realty Mid-Willamette
          </p>
          <div className="flex items-center gap-6">
            <a
              href={TEAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors"
            >
              TeamGillott.com
            </a>
            <span className="text-[#1e293b]">|</span>
            <span className="text-xs text-[#64748b]">
              Data updated {currentMonth.monthFull}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
