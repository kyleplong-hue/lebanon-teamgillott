'use client';

import { TEAM_URL } from '@/data/config';

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaUrl?: string;
  variant?: 'primary' | 'dark' | 'subtle';
}

export default function CTABanner({
  heading = 'Ready to find your Lebanon home?',
  subheading = 'Let Team Gillott guide you through every step.',
  ctaText = 'Search Homes',
  ctaUrl = TEAM_URL,
  variant = 'primary',
}: CTABannerProps) {
  const variants = {
    primary: {
      bg: 'bg-[#CA3121]',
      heading: 'text-white',
      sub: 'text-white/70',
      btn: 'bg-white text-[#CA3121] hover:bg-white/90',
    },
    dark: {
      bg: 'bg-[#1F2930]',
      heading: 'text-white',
      sub: 'text-[#94a3b8]',
      btn: 'bg-[#CA3121] text-white hover:bg-[#a82919]',
    },
    subtle: {
      bg: 'bg-[#f1f5f9]',
      heading: 'text-[#354652]',
      sub: 'text-[#64748b]',
      btn: 'bg-[#CA3121] text-white hover:bg-[#a82919]',
    },
  };

  const v = variants[variant];

  return (
    <section className={`w-full ${v.bg} noise-overlay`}>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className={`text-3xl sm:text-4xl font-semibold tracking-tight ${v.heading} mb-4`}>
          {heading}
        </h2>
        {subheading && (
          <p className={`text-lg ${v.sub} mb-8 max-w-xl mx-auto`}>
            {subheading}
          </p>
        )}
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg ${v.btn} transition-all duration-200 active:scale-[0.98]`}
        >
          {ctaText}
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
