'use client';

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export default function CTABanner({
  heading = 'Ready to Find Your Lebanon Home?',
  subheading = 'Let Team Gillott guide you through the process.',
  ctaText = 'Search Homes on Team Gillott',
  ctaUrl = 'https://www.teamgillott.com',
}: CTABannerProps) {
  return (
    <section className="w-full bg-gradient-to-r from-[#0099cc] to-[#0077aa] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-sans">
          {heading}
        </h2>
        {subheading && (
          <p className="text-lg text-blue-100 mb-8">
            {subheading}
          </p>
        )}
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#ca3121] text-white font-semibold rounded-lg hover:bg-[#b8270d] transition-colors duration-200"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
