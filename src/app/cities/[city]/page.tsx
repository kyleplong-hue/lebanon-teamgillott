import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, getCity, getOtherCities } from '@/data/cities';
import { formatPriceFull, mlsSource } from '@/data/market';
import { siteUrl, TEAM_URL } from '@/data/config';
import { WebPageSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';
import { HERO_ALBANY, HERO_CORVALLIS, HERO_SWEET_HOME } from '@/data/hero-images';

const cityHeroImages: Record<string, string> = {
  albany: HERO_ALBANY,
  corvallis: HERO_CORVALLIS,
  'sweet-home': HERO_SWEET_HOME,
};

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  const title = `${city.name}, Oregon Real Estate | Team Gillott`;
  const description = `Explore ${city.name}, Oregon real estate: average home price ${formatPriceFull(city.avgSoldPrice)}, ${city.numberSold} homes sold Q1 2026. Neighborhood guides, market data, and expert insights from Team Gillott.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: siteUrl(`/cities/${city.slug}`),
    },
    alternates: {
      canonical: siteUrl(`/cities/${city.slug}`),
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const otherCities = getOtherCities(slug);
  const priceDirection = city.yoyPriceChange >= 0 ? 'up' : 'down';
  const priceColor = city.yoyPriceChange >= 0 ? 'text-emerald-600' : 'text-red-600';
  const absChange = Math.abs(city.yoyPriceChange);

  return (
    <>
      <WebPageSchema
        title={`${city.name}, Oregon Real Estate Guide`}
        description={`${city.name} real estate market data, neighborhoods, and home buying resources from Team Gillott.`}
        url={siteUrl(`/cities/${city.slug}`)}
      />
      <LocalBusinessSchema
        name={`Team Gillott - ${city.name} Real Estate`}
        description={`Professional real estate services serving ${city.name}, Oregon and the Willamette Valley.`}
        url={TEAM_URL}
        areaServed={[city.name, 'Lebanon', 'Corvallis', 'Albany']}
      />

      {/* Hero */}
      <section
        className="relative w-full min-h-[70vh] flex items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${cityHeroImages[city.slug] || HERO_ALBANY}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-medium text-white/90">
                  {mlsSource.quarterLabel} MLS Data
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08] mb-6">
                {city.name}, Oregon
                <br />
                <span className="text-white/70">real estate</span>
              </h1>

              <p className="text-lg text-white/80 max-w-lg mb-8 leading-relaxed">
                {city.heroDescription}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={TEAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#CA3121] bg-white rounded-lg hover:bg-white/90 transition-all duration-200 active:scale-[0.98]"
                >
                  Search {city.name} homes
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href={`/market-report/${city.slug}`}
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  {city.name} market report
                </Link>
              </div>
            </div>

            {/* Stat cards */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {city.highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-5"
                >
                  <p className="text-xs font-medium text-white/60 uppercase tracking-wider mb-1">
                    {h.label}
                  </p>
                  <p className="text-2xl font-semibold tracking-tight text-white tabular-nums">
                    {h.value}
                  </p>
                  {h.detail && (
                    <p className="text-xs text-white/50 mt-1">{h.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Snapshot */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-[#354652] mb-3">
              {city.name} market snapshot
            </h2>
            <p className="text-[#64748b] leading-relaxed">
              Q1 2026 data from {mlsSource.name}. {city.numberSold} residential sales under 1 acre.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
              <p className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-1">
                Avg Sold Price
              </p>
              <p className="text-2xl font-semibold tracking-tight text-[#354652] tabular-nums">
                {formatPriceFull(city.avgSoldPrice)}
              </p>
              <p className={`text-xs font-medium mt-1 ${priceColor}`}>
                {priceDirection === 'up' ? '+' : ''}{city.yoyPriceChange}% YoY
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
              <p className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-1">
                Avg Days on Market
              </p>
              <p className="text-2xl font-semibold tracking-tight text-[#354652] tabular-nums">
                {city.avgDOM}
              </p>
              <p className="text-xs text-[#94a3b8] mt-1">Residential &lt;1 acre</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
              <p className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-1">
                Active Listings
              </p>
              <p className="text-2xl font-semibold tracking-tight text-[#354652] tabular-nums">
                {city.activeListings}
              </p>
              <p className="text-xs text-[#94a3b8] mt-1">Current inventory</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
              <p className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-1">
                Price per Sq Ft
              </p>
              <p className="text-2xl font-semibold tracking-tight text-[#354652] tabular-nums">
                ${city.pricePerSqft}
              </p>
              <p className="text-xs text-[#94a3b8] mt-1">Average</p>
            </div>
          </div>

          {/* Comparison to Lebanon */}
          <div className="bg-[#f8fafb] rounded-2xl border border-[#e2e8f0] p-8">
            <h3 className="text-lg font-semibold text-[#354652] mb-3">
              {city.name} vs Lebanon
            </h3>
            <p className="text-[#64748b] leading-relaxed mb-6">
              {city.comparedToLebanon}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-1">{city.name}</p>
                <p className="text-lg font-semibold text-[#354652] tabular-nums">
                  {formatPriceFull(city.avgSoldPrice)}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-1">Lebanon</p>
                <p className="text-lg font-semibold text-[#CA3121] tabular-nums">
                  {formatPriceFull(377115)}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-1">Difference</p>
                <p className="text-lg font-semibold text-[#354652] tabular-nums">
                  {formatPriceFull(Math.abs(city.avgSoldPrice - 377115))}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-1">Drive Time</p>
                <p className="text-lg font-semibold text-[#354652]">{city.driveTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Live Here */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold tracking-tight text-[#354652] mb-4">
                Why {city.name}?
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Population {city.population.toLocaleString()} ({city.populationGrowth}).
                {city.distanceFromLebanon} of Lebanon via {city.driveTime.split(' via ')[1] || 'US-20'}.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/cities/compare"
                  className="text-sm font-medium text-[#CA3121] hover:text-[#a82919] transition-colors"
                >
                  Compare all cities &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {city.whyLiveHere.map((reason, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-[#e2e8f0] hover:border-[#CA3121]/20 transition-colors duration-200"
                >
                  <p className="text-sm text-[#354652] leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-[#354652] mb-3">
              {city.name} neighborhoods
            </h2>
            <p className="text-[#64748b] leading-relaxed">
              Explore distinct areas of {city.name}, each with its own character and price point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {city.neighborhoods.map((n) => (
              <div
                key={n.name}
                className="group bg-white rounded-2xl border border-[#e2e8f0] p-6 hover:border-[#CA3121]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-[#354652]">
                      {n.name}
                    </h3>
                    <p className="text-xs text-[#CA3121] font-medium">{n.tagline}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#354652] tabular-nums whitespace-nowrap">
                    {n.priceRange}
                  </span>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed">{n.character}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools & Employers */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Schools */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-6">
                Schools
              </h2>
              <div className="bg-[#f8fafb] rounded-2xl border border-[#e2e8f0] p-6 mb-4">
                <p className="text-sm font-semibold text-[#354652] mb-1">{city.schoolDistrict}</p>
                <ul className="space-y-2 mt-3">
                  {city.schoolHighlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#64748b]">
                      <span className="text-[#CA3121] mt-0.5 flex-shrink-0">&#x2713;</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Top Employers */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-6">
                Major employers
              </h2>
              <div className="space-y-3">
                {city.topEmployers.map((e) => (
                  <div
                    key={e.name}
                    className="flex items-center justify-between p-4 bg-[#f8fafb] rounded-xl border border-[#e2e8f0]"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#354652]">{e.name}</p>
                      <p className="text-xs text-[#64748b]">{e.sector}</p>
                    </div>
                    {e.employees && (
                      <span className="text-xs font-medium text-[#94a3b8] tabular-nums">
                        {e.employees}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Recreation */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Outdoor recreation near {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.outdoorRec.map((r, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/20 transition-colors"
              >
                <p className="text-sm text-[#354652] leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-[#354652] mb-8">
            Frequently asked questions about {city.name}
          </h2>
          <div className="space-y-4">
            {city.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-[#f8fafb] rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <summary className="p-6 cursor-pointer hover:bg-white transition-colors flex items-center justify-between">
                  <h3 className="font-semibold text-[#354652] tracking-tight pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-[#CA3121] font-bold group-open:rotate-180 transition-transform flex-shrink-0">
                    &#x25BC;
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#64748b] leading-relaxed border-t border-[#e2e8f0]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Explore more
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/market-report"
              className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">
                Market Report
              </h3>
              <p className="text-sm text-[#64748b]">
                Full quarterly market data with charts and city comparisons.
              </p>
            </Link>
            <Link
              href="/neighborhoods"
              className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">
                Lebanon Neighborhoods
              </h3>
              <p className="text-sm text-[#64748b]">
                Explore Lebanon&apos;s four distinct neighborhoods.
              </p>
            </Link>
            {otherCities.map((oc) => (
              <Link
                key={oc.slug}
                href={`/cities/${oc.slug}`}
                className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">
                  {oc.name} Real Estate
                </h3>
                <p className="text-sm text-[#64748b]">
                  {oc.tagline}
                </p>
              </Link>
            ))}
            <Link
              href="/cities/compare"
              className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">
                Compare Cities
              </h3>
              <p className="text-sm text-[#64748b]">
                Side-by-side comparison of Lebanon, Albany, and Corvallis.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Find your home in ${city.name}`}
        subheading="Team Gillott serves the entire Willamette Valley with expert local knowledge."
        ctaText={`Search ${city.name} homes`}
        ctaUrl={TEAM_URL}
        variant="dark"
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: city.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
