import Link from 'next/link';
import { WebPageSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';
import { getNeighborhood, getOtherNeighborhoods } from '@/data/neighborhoods';

export const metadata = {
  title: 'East Lebanon Real Estate Guide | Team Gillott',
  description:
    'Discover East Lebanon with gateway to Cascade foothills, larger lots, outdoor recreation, and homes ranging from $350K-$475K. Professional real estate guide from Team Gillott.',
  keywords:
    'East Lebanon real estate, East Lebanon homes, McDowell Creek Falls, Cheadle Lake, Lebanon neighborhoods',
};

export default function EastLebanon() {
  const neighborhood = getNeighborhood('east-lebanon');
  const otherNeighborhoods = getOtherNeighborhoods('east-lebanon');

  if (!neighborhood) return null;

  return (
    <>
      <WebPageSchema
        title="East Lebanon Real Estate Guide"
        description="Complete guide to East Lebanon neighborhoods, homes with larger lots, outdoor recreation access, and lifestyle. Gateway to Cascade foothills hiking and lakes."
        url="https://lebanon.justsoldle.com/neighborhoods/east-lebanon"
      />
      <LocalBusinessSchema
        name="Team Gillott - East Lebanon Real Estate"
        description="Professional real estate services for East Lebanon, Oregon properties."
        url="https://www.teamgillott.com"
        areaServed={['East Lebanon', 'Lebanon', 'Corvallis', 'Albany']}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#0099cc] to-[#0077aa] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            {neighborhood.name}
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            {neighborhood.tagline}
          </p>
          <div className="flex items-baseline gap-6">
            <div>
              <div className="text-3xl font-bold text-[#c4371a] tabular-nums">
                ${Math.round(neighborhood.priceRange.low / 1000)}K – ${Math.round(neighborhood.priceRange.high / 1000)}K
              </div>
              <div className="text-blue-100 text-sm">Typical Price Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* Character & Property Types */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#1a2b36] mb-4 tracking-tight">Character</h2>
              <p className="text-[#1a2b36] leading-relaxed">
                {neighborhood.character}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a2b36] mb-4 tracking-tight">Property Types</h2>
              <p className="text-[#1a2b36] leading-relaxed">
                {neighborhood.propertyTypes}
              </p>
            </div>
          </div>

          {/* Key Highlights Cards */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a2b36] mb-6 tracking-tight">Key Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {neighborhood.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="bg-[#f8fafb] border border-[#e2e8f0] rounded-2xl p-4 hover:shadow-md hover:border-[#0099cc]/30 transition-all duration-300"
                >
                  <p className="text-[#1a2b36] text-sm font-semibold">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2b36] mb-8 tracking-tight">Market Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 text-center">
              <div className="text-3xl font-bold text-[#0099cc] tabular-nums mb-2">
                ${Math.round(neighborhood.avgPrice / 1000)}K
              </div>
              <p className="text-[#64748b] text-sm font-medium">Average Home Price</p>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 text-center">
              <div className="text-3xl font-bold text-[#0099cc] tabular-nums mb-2">
                {neighborhood.avgDOM} days
              </div>
              <p className="text-[#64748b] text-sm font-medium">Avg Days on Market</p>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 text-center">
              <div className="text-3xl font-bold text-[#0099cc] tabular-nums mb-2">
                {neighborhood.turnoverRate}%
              </div>
              <p className="text-[#64748b] text-sm font-medium">Inventory Turnover</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2b36] mb-8 tracking-tight">Schools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {neighborhood.schools.map((school) => (
              <div
                key={school}
                className="bg-[#f8fafb] border border-[#e2e8f0] rounded-2xl p-6"
              >
                <p className="text-[#1a2b36] font-semibold">{school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Residents Love */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2b36] mb-8 tracking-tight">What Residents Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {neighborhood.lovelist.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-[#e2e8f0] rounded-2xl p-4">
                <span className="text-[#0099cc] font-bold mt-0.5 flex-shrink-0">+</span>
                <span className="text-[#1a2b36] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Neighborhoods */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2b36] mb-8 tracking-tight">
            Explore Other Lebanon Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherNeighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="bg-[#f8fafb] border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-md hover:border-[#0099cc]/30 transition-all duration-300 group"
              >
                <h3 className="font-bold text-[#1a2b36] mb-2 group-hover:text-[#0099cc] transition-colors">
                  {n.name}
                </h3>
                <p className="text-[#64748b] text-sm">{n.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to Find Your East Lebanon Home?"
        subheading="Connect with Team Gillott to explore properties and experience the outdoor lifestyle."
        ctaText="Search Homes in East Lebanon"
        ctaUrl="https://www.teamgillott.com"
      />
    </>
  );
}
