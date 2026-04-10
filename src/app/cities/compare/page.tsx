import { Metadata } from 'next';
import Link from 'next/link';
import { WebPageSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';
import { cityComparisons, formatPriceFull, mlsSource } from '@/data/market';
import { siteUrl, TEAM_URL } from '@/data/config';

export const metadata: Metadata = {
  title: 'Compare Lebanon vs Albany vs Corvallis | Team Gillott',
  description:
    'Side-by-side comparison of Lebanon, Albany, Corvallis, and Sweet Home real estate markets. Average prices, days on market, inventory, and more from Q1 2026 MLS data.',
  openGraph: {
    title: 'Compare Lebanon vs Albany vs Corvallis | Team Gillott',
    description:
      'Side-by-side city comparison: prices, inventory, and market trends across the Willamette Valley.',
    type: 'website',
    url: siteUrl('/cities/compare'),
  },
  alternates: {
    canonical: siteUrl('/cities/compare'),
  },
};

export default function CityComparePage() {
  // Sort by avg price ascending for the bar chart
  const sorted = [...cityComparisons].sort((a, b) => a.medianPrice - b.medianPrice);
  const maxPrice = Math.max(...sorted.map((c) => c.medianPrice));

  return (
    <>
      <WebPageSchema
        title="Compare Willamette Valley Cities"
        description="Side-by-side comparison of Lebanon, Albany, Corvallis, and Sweet Home real estate markets."
        url={siteUrl('/cities/compare')}
      />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#CA3121] to-[#1F2930] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            Compare Willamette Valley cities
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Side-by-side market data for Lebanon, Albany, Corvallis, and Sweet Home.
            All data from {mlsSource.name}, {mlsSource.quarterLabel}.
          </p>
        </div>
      </section>

      {/* Visual Price Comparison */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Average sold price comparison
          </h2>

          <div className="space-y-6 mb-12">
            {sorted.map((city) => {
              const pct = (city.medianPrice / maxPrice) * 100;
              const isLebanon = city.city === 'Lebanon';
              return (
                <div key={city.city}>
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {city.city === 'Lebanon' || city.city === 'Albany' || city.city === 'Corvallis' ? (
                        <Link
                          href={city.city === 'Lebanon' ? '/' : `/cities/${city.city.toLowerCase()}`}
                          className="text-base font-semibold text-[#354652] hover:text-[#CA3121] transition-colors"
                        >
                          {city.city}
                        </Link>
                      ) : (
                        <span className="text-base font-semibold text-[#354652]">{city.city}</span>
                      )}
                      {isLebanon && (
                        <span className="text-xs font-medium text-[#CA3121] bg-[#CA3121]/8 px-2 py-0.5 rounded-full">
                          Primary
                        </span>
                      )}
                    </div>
                    <span className="text-lg font-semibold text-[#354652] tabular-nums">
                      {formatPriceFull(city.medianPrice)}
                    </span>
                  </div>
                  <div className="w-full bg-[#f1f5f9] rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-4 rounded-full transition-all duration-700 ${
                        isLebanon ? 'bg-[#CA3121]' : 'bg-[#CA3121]/40'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <span className={`text-xs font-medium ${
                      city.yoyGrowth >= 0 ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {city.yoyGrowth >= 0 ? '+' : ''}{city.yoyGrowth}% YoY
                    </span>
                    <span className="text-xs text-[#94a3b8]">{city.avgDOM} avg DOM</span>
                    <span className="text-xs text-[#94a3b8]">{city.numberSold} sold Q1</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail Table */}
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-6">
            Full comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#e2e8f0]">
                  <th className="text-left text-xs font-medium text-[#94a3b8] uppercase tracking-wider pb-3 pr-4">
                    Metric
                  </th>
                  {cityComparisons.map((c) => (
                    <th
                      key={c.city}
                      className={`text-right text-xs font-medium uppercase tracking-wider pb-3 px-3 ${
                        c.city === 'Lebanon' ? 'text-[#CA3121]' : 'text-[#94a3b8]'
                      }`}
                    >
                      {c.city}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: 'Avg Sold Price',
                    values: cityComparisons.map((c) => formatPriceFull(c.medianPrice)),
                  },
                  {
                    label: 'Avg List Price',
                    values: cityComparisons.map((c) => formatPriceFull(c.avgListPrice)),
                  },
                  {
                    label: 'YoY Price Change',
                    values: cityComparisons.map((c) =>
                      `${c.yoyGrowth >= 0 ? '+' : ''}${c.yoyGrowth}%`
                    ),
                  },
                  {
                    label: 'Avg Days on Market',
                    values: cityComparisons.map((c) => c.avgDOM.toString()),
                  },
                  {
                    label: 'Homes Sold (Q1)',
                    values: cityComparisons.map((c) => c.numberSold.toString()),
                  },
                  {
                    label: 'Prev Year Sold (Q1)',
                    values: cityComparisons.map((c) => c.prevYearSold.toString()),
                  },
                  {
                    label: 'Active Listings',
                    values: cityComparisons.map((c) => c.activeListings.toString()),
                  },
                  {
                    label: 'Price per Sq Ft',
                    values: cityComparisons.map((c) => `$${c.pricePerSqft}`),
                  },
                  {
                    label: 'Population',
                    values: cityComparisons.map((c) => c.population.toLocaleString()),
                  },
                ].map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-[#f1f5f9] ${
                      i % 2 === 0 ? 'bg-[#f8fafb]' : ''
                    }`}
                  >
                    <td className="py-3.5 pr-4 text-sm font-medium text-[#354652]">
                      {row.label}
                    </td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        className={`py-3.5 px-3 text-sm text-right tabular-nums ${
                          cityComparisons[j].city === 'Lebanon'
                            ? 'font-semibold text-[#354652]'
                            : 'text-[#64748b]'
                        }`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-[#94a3b8] mt-4">
            Source: {mlsSource.name}, {mlsSource.quarterLabel}. Residential properties under 1 acre.
          </p>
        </div>
      </section>

      {/* City Cards */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Explore each city
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/"
              className="group p-6 rounded-2xl border-2 border-[#CA3121]/20 bg-[#CA3121]/5 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[#354652] group-hover:text-[#CA3121] mb-1">
                Lebanon
              </h3>
              <p className="text-sm text-[#CA3121] font-medium mb-2">Primary coverage</p>
              <p className="text-sm text-[#64748b]">
                Neighborhoods, market data, schools, and full buyer/seller guides.
              </p>
            </Link>
            <Link
              href="/cities/albany"
              className="group p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[#354652] group-hover:text-[#CA3121] mb-1">
                Albany
              </h3>
              <p className="text-sm text-[#64748b] mb-2">Historic charm, affordability</p>
              <p className="text-sm text-[#64748b]">
                700+ historic homes, strong employer base, central location.
              </p>
            </Link>
            <Link
              href="/cities/corvallis"
              className="group p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[#354652] group-hover:text-[#CA3121] mb-1">
                Corvallis
              </h3>
              <p className="text-sm text-[#64748b] mb-2">University town, top quality of life</p>
              <p className="text-sm text-[#64748b]">
                OSU, tech sector, nationally ranked schools.
              </p>
            </Link>
            <div className="p-6 rounded-2xl border border-dashed border-[#e2e8f0]">
              <h3 className="text-lg font-semibold text-[#94a3b8] mb-1">
                Sweet Home
              </h3>
              <p className="text-sm text-[#94a3b8] mb-2">Coming soon</p>
              <p className="text-sm text-[#94a3b8]">
                Gateway to the Cascades. Full guide in development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Related resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/market-report"
              className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">
                Lebanon Market Report
              </h3>
              <p className="text-sm text-[#64748b]">
                Full quarterly data with charts and trend analysis.
              </p>
            </Link>
            <Link
              href="/compare"
              className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">
                Neighborhood Comparison
              </h3>
              <p className="text-sm text-[#64748b]">
                Compare Lebanon neighborhoods side-by-side.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Find your Willamette Valley home"
        subheading="Team Gillott serves Lebanon, Albany, Corvallis, and the entire mid-valley."
        ctaText="Start your search"
        ctaUrl={TEAM_URL}
        variant="dark"
      />
    </>
  );
}
