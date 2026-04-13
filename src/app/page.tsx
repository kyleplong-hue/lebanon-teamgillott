import Link from 'next/link';
import { WebPageSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';
import { currentMonth, marketTrends, recentSales, formatPriceFull } from '@/data/market';
import { neighborhoods } from '@/data/neighborhoods';
import { SITE_URL, TEAM_URL } from '@/data/config';
import MarketSparkline from '@/components/MarketSparkline';
import { HERO_HOME } from '@/data/hero-images';

export const metadata = {
  title: 'Lebanon, Oregon Real Estate Guide | Team Gillott',
  description:
    'Explore Lebanon, Oregon real estate with Team Gillott. Discover neighborhoods, market insights, and find your perfect home in Lebanon, Corvallis, or Albany.',
  keywords:
    'Lebanon Oregon real estate, homes for sale Lebanon OR, Team Gillott, Lebanon neighborhoods',
};

export default function Home() {
  const yoyChange = (
    ((marketTrends[marketTrends.length - 1].medianPrice - marketTrends[0].medianPrice) /
      marketTrends[0].medianPrice) *
    100
  ).toFixed(1);

  return (
    <>
      <WebPageSchema
        title="Lebanon, Oregon Real Estate Guide"
        description="Explore neighborhoods and find your perfect home in Lebanon, Oregon with Team Gillott real estate services."
        url={SITE_URL}
      />
      <LocalBusinessSchema
        name="Team Gillott - Lebanon Real Estate"
        description="Professional real estate services serving Lebanon, Corvallis, and Albany, Oregon."
        url={TEAM_URL}
        areaServed={['Lebanon', 'Corvallis', 'Albany']}
      />

      {/* Hero — Left-aligned, asymmetric per taste-skill */}
      <section
        className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_HOME}')` }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left content — 3 cols */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 border border-white/25 rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-medium text-white/90">
                  Market updated {currentMonth.monthFull}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08] mb-6">
                Your guide to
                <br />
                <span className="text-white">Lebanon, Oregon</span>
                <br />
                real estate
              </h1>

              <p className="text-lg text-white/80 max-w-lg mb-8 leading-relaxed">
                Neighborhoods, market data, and local expertise. Team Gillott
                serves Lebanon, Corvallis, and Albany with professional real
                estate services.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={TEAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#CA3121] rounded-lg hover:bg-[#a82919] transition-all duration-200 active:scale-[0.98]"
                >
                  Search homes
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href="/market-report"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#354652] bg-white border border-white/20 rounded-lg hover:bg-white/90 transition-all duration-200"
                >
                  View market report
                </Link>
              </div>
            </div>

            {/* Right — Bento stat cards, 2 cols */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-1">Median price</p>
                <p className="text-2xl font-semibold tracking-tight text-[#354652] tabular-nums">
                  ${(currentMonth.medianPrice / 1000).toFixed(0)}K
                </p>
                <p className="text-xs font-medium text-emerald-600 mt-1">+{yoyChange}% YoY</p>
              </div>

              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-1">Days on market</p>
                <p className="text-2xl font-semibold tracking-tight text-[#354652] tabular-nums">
                  {currentMonth.avgDOM}
                </p>
                <p className="text-xs font-medium text-emerald-600 mt-1">Selling faster</p>
              </div>

              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-1">30-yr rate</p>
                <p className="text-2xl font-semibold tracking-tight text-[#354652] tabular-nums">
                  {currentMonth.mortgageRate}%
                </p>
                <p className="text-xs text-[#94a3b8] mt-1">Fixed rate</p>
              </div>

              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider mb-1">Active listings</p>
                <p className="text-2xl font-semibold tracking-tight text-[#354652] tabular-nums">
                  {currentMonth.activeListings}
                </p>
                <p className="text-xs text-[#94a3b8] mt-1">{currentMonth.inventory}mo supply</p>
              </div>

              {/* Sparkline card — spans full width */}
              <div className="col-span-2 bg-white rounded-2xl border border-[#e2e8f0] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider">12-month trend</p>
                  <Link href="/market-report" className="text-xs font-medium text-[#CA3121] hover:text-[#a82919] transition-colors">
                    Details &rarr;
                  </Link>
                </div>
                <MarketSparkline data={marketTrends} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods — Asymmetric grid, not 4 equal cards */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-[#354652] mb-3">
              Explore neighborhoods
            </h2>
            <p className="text-[#64748b] leading-relaxed">
              Four distinct areas, each with its own character. Find the one
              that fits your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Featured large card */}
            <Link
              href={`/neighborhoods/${neighborhoods[0].slug}`}
              className="lg:row-span-2 group relative bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:border-[#CA3121]/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#CA3121]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 h-full flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className="inline-flex px-2.5 py-1 bg-[#CA3121]/8 text-[#CA3121] text-xs font-semibold rounded-md mb-4">
                    Most popular
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#354652] mb-2">
                    {neighborhoods[0].name}
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                    {neighborhoods[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhoods[0].highlights.map((h) => (
                      <span key={h} className="px-2 py-0.5 text-xs text-[#64748b] bg-[#f1f5f9] rounded-md">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#e2e8f0]">
                  <span className="text-sm font-semibold text-[#354652] tabular-nums">
                    ${(neighborhoods[0].priceRange.low / 1000).toFixed(0)}K &ndash; ${(neighborhoods[0].priceRange.high / 1000).toFixed(0)}K
                  </span>
                  <span className="text-sm font-medium text-[#CA3121] group-hover:translate-x-1 transition-transform duration-200">
                    Explore &rarr;
                  </span>
                </div>
              </div>
            </Link>

            {/* Other 3 neighborhoods */}
            {neighborhoods.slice(1).map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="group bg-white rounded-2xl border border-[#e2e8f0] p-6 hover:border-[#CA3121]/30 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold tracking-tight text-[#354652] mb-1.5">
                  {n.name}
                </h3>
                <p className="text-xs text-[#CA3121] font-medium mb-3">{n.tagline}</p>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4 line-clamp-2">
                  {n.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[#e2e8f0]">
                  <span className="text-sm font-semibold text-[#354652] tabular-nums">
                    ${(n.priceRange.low / 1000).toFixed(0)}K &ndash; ${(n.priceRange.high / 1000).toFixed(0)}K
                  </span>
                  <span className="text-sm font-medium text-[#CA3121] group-hover:translate-x-1 transition-transform duration-200">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lebanon — Split layout, not centered */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left — 2 cols */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold tracking-tight text-[#354652] mb-4">
                Why Lebanon?
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                30% more affordable than Corvallis, 25 minutes away,
                and surrounded by 300+ acres of parks. Lebanon is one of
                Oregon&apos;s best-kept secrets.
              </p>
              <div className="bg-[#f8fafb] rounded-2xl border border-[#e2e8f0] p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-sm text-[#64748b]">Lebanon</span>
                  <span className="text-xl font-semibold tracking-tight text-[#CA3121] tabular-nums">
                    ${(currentMonth.medianPrice / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className="w-full bg-[#CA3121]/15 rounded-full h-2 mb-4">
                  <div className="bg-[#CA3121] h-2 rounded-full" style={{ width: '70%' }} />
                </div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-sm text-[#64748b]">Corvallis</span>
                  <span className="text-xl font-semibold tracking-tight text-[#CA3121] tabular-nums">$565K</span>
                </div>
                <div className="w-full bg-[#CA3121]/15 rounded-full h-2">
                  <div className="bg-[#CA3121] h-2 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            {/* Right — 3 cols, feature grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Location',
                  desc: '25 minutes to Corvallis and Albany via Highway 20. Strategic Willamette Valley position.',
                },
                {
                  title: 'Nature',
                  desc: '300+ acres of parks, Cascade foothills access, McDowell Creek Falls nearby.',
                },
                {
                  title: 'Economy',
                  desc: "Lowe's Distribution Center, Samaritan Hospital, and a growing local business scene.",
                },
                {
                  title: 'Schools',
                  desc: 'Lebanon CSD, Sand Ridge Charter (rated 9/10), and 91% graduation rate.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl border border-[#e2e8f0] hover:border-[#CA3121]/20 transition-colors duration-200"
                >
                  <h3 className="text-sm font-semibold text-[#354652] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recently Sold — Live data feel */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-1">
                Recently sold
              </h2>
              <p className="text-sm text-[#64748b]">Latest closings in Lebanon</p>
            </div>
            <Link
              href="/market-report"
              className="text-sm font-medium text-[#CA3121] hover:text-[#a82919] transition-colors hidden sm:block"
            >
              View market report &rarr;
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left text-xs font-medium text-[#94a3b8] uppercase tracking-wider pb-3 pr-4">Address</th>
                  <th className="text-left text-xs font-medium text-[#94a3b8] uppercase tracking-wider pb-3 pr-4">Neighborhood</th>
                  <th className="text-right text-xs font-medium text-[#94a3b8] uppercase tracking-wider pb-3 pr-4">Price</th>
                  <th className="text-right text-xs font-medium text-[#94a3b8] uppercase tracking-wider pb-3 pr-4 hidden sm:table-cell">Beds/Baths</th>
                  <th className="text-right text-xs font-medium text-[#94a3b8] uppercase tracking-wider pb-3 pr-4 hidden md:table-cell">Sq Ft</th>
                  <th className="text-right text-xs font-medium text-[#94a3b8] uppercase tracking-wider pb-3 hidden lg:table-cell">DOM</th>
                </tr>
              </thead>
              <tbody>
                {recentSales.map((sale, i) => (
                  <tr key={i} className="border-b border-[#f1f5f9] hover:bg-[#f8fafb] transition-colors">
                    <td className="py-3.5 pr-4 text-sm font-medium text-[#354652]">{sale.address}</td>
                    <td className="py-3.5 pr-4 text-sm text-[#64748b]">{sale.neighborhood}</td>
                    <td className="py-3.5 pr-4 text-sm font-semibold text-[#354652] text-right tabular-nums">
                      {formatPriceFull(sale.price)}
                    </td>
                    <td className="py-3.5 pr-4 text-sm text-[#64748b] text-right tabular-nums hidden sm:table-cell">
                      {sale.beds}/{sale.baths}
                    </td>
                    <td className="py-3.5 pr-4 text-sm text-[#64748b] text-right tabular-nums hidden md:table-cell">
                      {sale.sqft.toLocaleString()}
                    </td>
                    <td className="py-3.5 text-sm text-[#64748b] text-right tabular-nums hidden lg:table-cell">
                      {sale.dom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Links — Resources bento */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Resources for buyers and sellers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: '/first-time-buyers',
                title: 'First-time buyer guide',
                desc: 'Oregon assistance programs, step-by-step process, and affordability data.',
              },
              {
                href: '/selling',
                title: 'Selling your home',
                desc: 'Pricing strategy, staging tips, and timeline expectations for Lebanon sellers.',
              },
              {
                href: '/mortgage-calculator',
                title: 'Mortgage calculator',
                desc: 'Estimate monthly payments with current rates and down payment scenarios.',
              },
              {
                href: '/schools',
                title: 'School guide',
                desc: 'Lebanon CSD overview, school ratings, and how schools impact home values.',
              },
              {
                href: '/moving-to-lebanon',
                title: 'Moving to Lebanon guide',
                desc: 'Schools, employers, healthcare, recreation, and everything for your move.',
              },
              {
                href: '/faq',
                title: 'Frequently asked questions',
                desc: '18 answers about living in Lebanon, from property taxes to outdoor recreation.',
              },
              {
                href: '/agents',
                title: 'Meet Team Gillott',
                desc: 'Local expertise in Lebanon, Corvallis, and Albany real estate.',
              },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 transition-all duration-300 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-[#354652] mb-1.5 group-hover:text-[#CA3121] transition-colors">
                  {r.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to find your Lebanon home?"
        subheading="Let Team Gillott guide you through every step of your real estate journey."
        ctaText="Start your search"
        ctaUrl={TEAM_URL}
        variant="dark"
      />
    </>
  );
}
