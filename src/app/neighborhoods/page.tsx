import Link from 'next/link';
import { WebPageSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';
import { neighborhoods } from '@/data/neighborhoods';
import { siteUrl, TEAM_URL } from '@/data/config';

export const metadata = {
  title: 'Lebanon, Oregon Neighborhoods | Team Gillott',
  description:
    'Explore all Lebanon neighborhoods including South Lebanon, East Lebanon, North Lebanon, and Hamilton Creek with detailed guides and market information.',
  keywords:
    'Lebanon neighborhoods, South Lebanon, East Lebanon, North Lebanon, Hamilton Creek, Lebanon OR',
};

export default function NeighborhoodsIndex() {
  return (
    <>
      <WebPageSchema
        title="Lebanon, Oregon Neighborhoods"
        description="Explore all neighborhoods in Lebanon, Oregon including detailed guides for South, East, North Lebanon and Hamilton Creek."
        url={siteUrl("/neighborhoods")}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#CA3121] to-[#1F2930] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Lebanon, Oregon Neighborhoods
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Discover distinct neighborhoods from downtown to the foothills, each offering unique
            character and lifestyle opportunities.
          </p>
        </div>
      </section>

      {/* Neighborhoods Grid - Asymmetric Layout */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
            {/* Featured card - spans 2 rows */}
            {neighborhoods.slice(0, 1).map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                href={`/neighborhoods/${neighborhood.slug}`}
                className="md:col-span-1 md:row-span-2 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#CA3121]/30 transition-all duration-300 border border-[#e2e8f0] flex flex-col group"
              >
                <div className="p-8 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-[#354652] mb-2 tracking-tight group-hover:text-[#CA3121] transition-colors">
                    {neighborhood.name}
                  </h2>
                  <p className="text-[#CA3121] font-semibold text-sm mb-4">
                    ${Math.round(neighborhood.priceRange.low / 1000)}K – ${Math.round(neighborhood.priceRange.high / 1000)}K
                  </p>
                  <p className="text-[#354652] mb-6 leading-relaxed flex-1">
                    {neighborhood.description}
                  </p>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-[#64748b] uppercase tracking-tight">Highlights</p>
                    <div className="flex flex-wrap gap-2">
                      {neighborhood.highlights.slice(0, 4).map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-block px-3 py-1 bg-[#e2e8f0] text-[#354652] text-xs font-medium rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
                    <div className="text-[#CA3121] font-semibold text-sm">Explore Guide →</div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Regular cards */}
            {neighborhoods.slice(1).map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                href={`/neighborhoods/${neighborhood.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#CA3121]/30 transition-all duration-300 border border-[#e2e8f0] flex flex-col group"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#354652] mb-2 tracking-tight group-hover:text-[#CA3121] transition-colors">
                    {neighborhood.name}
                  </h3>
                  <p className="text-[#CA3121] font-semibold text-sm mb-3">
                    ${Math.round(neighborhood.priceRange.low / 1000)}K – ${Math.round(neighborhood.priceRange.high / 1000)}K
                  </p>
                  <p className="text-[#64748b] text-sm leading-relaxed flex-1">
                    {neighborhood.tagline}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
                    <div className="text-[#CA3121] font-semibold text-sm">Explore →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Comparison Link */}
          <div className="mt-12 text-center">
            <Link
              href="/compare"
              className="inline-block px-6 py-3 bg-[#CA3121] text-white font-semibold rounded-2xl hover:bg-[#0088bb] transition-colors duration-300"
            >
              Compare Neighborhoods
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to Explore These Neighborhoods?"
        subheading="Connect with Team Gillott to schedule showings and get personalized neighborhood insights."
        ctaText="Contact Team Gillott"
        ctaUrl={TEAM_URL}
      />
    </>
  );
}
