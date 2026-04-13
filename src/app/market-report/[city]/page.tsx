import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, getCity } from '@/data/cities';
import {
  cityComparisons,
  mlsSource,
  formatPrice,
  formatPriceFull,
  currentMonth,
} from '@/data/market';
import { WebPageSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';
import { siteUrl, TEAM_URL } from '@/data/config';
import {
  HERO_ALBANY,
  HERO_CORVALLIS,
  HERO_SWEET_HOME,
} from '@/data/hero-images';

interface PageProps {
  params: Promise<{ city: string }>;
}

const cityHeroImages: Record<string, string> = {
  albany: HERO_ALBANY,
  corvallis: HERO_CORVALLIS,
  'sweet-home': HERO_SWEET_HOME,
};

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `${city.name}, Oregon Real Estate Market Report | Team Gillott`,
    description: `${city.name} market data: avg price ${formatPrice(city.avgSoldPrice)}, ${city.numberSold} homes sold Q1 2026, ${city.avgDOM} avg days on market. Compare to Lebanon and other Willamette Valley cities.`,
    openGraph: {
      title: `${city.name} Real Estate Market Report — Q1 2026`,
      description: `Comprehensive market analysis for ${city.name}, Oregon. Average sold price ${formatPrice(city.avgSoldPrice)}.`,
      type: 'website',
      url: siteUrl(`/market-report/${slug}`),
    },
  };
}

export default async function CityMarketReport({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const heroImage = cityHeroImages[slug] || HERO_ALBANY;
  const yoyChange = city.yoyPriceChange;
  const salesChange = city.numberSold - city.prevYearSold;
  const salesChangePercent = ((salesChange / city.prevYearSold) * 100).toFixed(1);
  const listToSoldRatio = ((city.avgSoldPrice / city.avgListPrice) * 100).toFixed(1);
  const inventoryMonths = (city.activeListings / (city.numberSold / 3)).toFixed(1);

  // Monthly payment estimate (20% down, 30-yr fixed)
  const loanAmount = city.avgSoldPrice * 0.8;
  const monthlyRate = currentMonth.mortgageRate / 100 / 12;
  const numPayments = 360;
  const monthlyPayment = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
  );

  const otherCities = cities.filter((c) => c.slug !== slug);

  return (
    <main className="flex-1 w-full">
      <WebPageSchema
        title={`${city.name}, Oregon Real Estate Market Report — ${mlsSource.quarterLabel}`}
        description={`${city.name} market data: avg sold price ${formatPrice(city.avgSoldPrice)}, ${city.numberSold} homes sold, ${city.avgDOM} avg DOM.`}
        url={siteUrl(`/market-report/${slug}`)}
      />

      {/* Hero */}
      <section
        className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-3 inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="text-sm font-semibold text-white">{mlsSource.quarterLabel}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {city.name} Real Estate Market
          </h1>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            {city.heroDescription}
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Avg Sold Price</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {formatPrice(city.avgSoldPrice)}
              </p>
              <div className={`flex items-center gap-2 ${yoyChange >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                <span className="text-sm font-semibold">
                  {yoyChange > 0 ? '+' : ''}{yoyChange.toFixed(1)}% YoY
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Avg Days on Market</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {city.avgDOM}
              </p>
              <p className="text-sm text-[#64748b]">Residential &lt;1 acre</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Homes Sold (Q1)</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {city.numberSold}
              </p>
              <div className={`flex items-center gap-2 ${salesChange >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                <span className="text-sm font-semibold">
                  {salesChange > 0 ? '+' : ''}{salesChangePercent}% vs Q1 2025
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Active Listings</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {city.activeListings}
              </p>
              <p className="text-sm text-[#64748b]">{inventoryMonths} months supply</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Price per Sq Ft</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                ${city.pricePerSqft}
              </p>
              <p className="text-sm text-[#64748b]">vs. Lebanon at $245</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Avg List Price</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {formatPrice(city.avgListPrice)}
              </p>
              <p className="text-sm text-[#64748b]">{listToSoldRatio}% list-to-sold</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">30-Yr Rate</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {currentMonth.mortgageRate.toFixed(2)}%
              </p>
              <p className="text-sm text-[#64748b]">Current average</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Est. Monthly Payment</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                ${monthlyPayment.toLocaleString()}
              </p>
              <p className="text-sm text-[#64748b]">20% down, P&I only</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Compares */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-2 tracking-tight">
            How {city.name} Compares
          </h2>
          <p className="text-[#64748b] mb-10">Side-by-side with other Willamette Valley markets</p>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e2e8f0]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e2e8f0] bg-[#f8fafb]">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">City</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">Avg Price</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">Avg DOM</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">$/Sq Ft</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">YoY</th>
                  </tr>
                </thead>
                <tbody>
                  {cityComparisons.map((comp, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-[#e2e8f0] ${
                        comp.city.toLowerCase().replace(' ', '-') === slug
                          ? 'bg-[#CA3121]/5 font-semibold'
                          : idx % 2 === 0
                          ? 'bg-white'
                          : 'bg-[#f8fafb]'
                      } hover:bg-[#f0f4f8] transition-colors`}
                    >
                      <td className="px-6 py-4 font-semibold text-[#354652]">
                        {comp.city === 'Lebanon' ? (
                          <Link href="/market-report" className="text-[#CA3121] hover:underline">
                            {comp.city}
                          </Link>
                        ) : comp.city.toLowerCase().replace(' ', '-') === slug ? (
                          <span className="text-[#CA3121]">{comp.city}</span>
                        ) : (
                          <Link
                            href={`/market-report/${comp.city.toLowerCase().replace(' ', '-')}`}
                            className="text-[#CA3121] hover:underline"
                          >
                            {comp.city}
                          </Link>
                        )}
                      </td>
                      <td className="px-6 py-4 text-[#354652] font-tabular-nums">{formatPriceFull(comp.medianPrice)}</td>
                      <td className="px-6 py-4 text-[#354652] font-tabular-nums">{comp.avgDOM} days</td>
                      <td className="px-6 py-4 text-[#354652] font-tabular-nums">${comp.pricePerSqft}</td>
                      <td className="px-6 py-4">
                        <span className={`font-semibold font-tabular-nums ${comp.yoyGrowth >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                          {comp.yoyGrowth > 0 ? '+' : ''}{comp.yoyGrowth.toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-8 text-[#354652] leading-relaxed">
            {city.comparedToLebanon}
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-2 tracking-tight">
            {city.name} Neighborhoods
          </h2>
          <p className="text-[#64748b] mb-10">Where to buy in {city.name}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.neighborhoods.map((n, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#e2e8f0] hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#354652] mb-1">{n.name}</h3>
                <p className="text-sm text-[#CA3121] font-semibold mb-3">{n.priceRange}</p>
                <p className="text-sm text-[#64748b] leading-relaxed">{n.character}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer & Seller Insights */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-12 tracking-tight">Market Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#f8fafb] rounded-2xl p-8 border border-[#e2e8f0]">
              <h3 className="text-xl font-bold text-[#354652] mb-6">What This Means for Buyers</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">
                      {yoyChange < 0 ? 'Price Correction Opportunity' : 'Appreciating Market'}
                    </p>
                    <p className="text-[#64748b] text-sm">
                      {yoyChange < 0
                        ? `${city.name} prices are down ${Math.abs(yoyChange).toFixed(1)}% YoY — a window for buyers to get more home for their money.`
                        : `Prices are up ${yoyChange.toFixed(1)}% YoY. Acting sooner means buying before further appreciation.`}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">{city.activeListings} Active Listings</p>
                    <p className="text-[#64748b] text-sm">
                      With {inventoryMonths} months of supply and {city.avgDOM} avg days on market, there is
                      {Number(inventoryMonths) > 4 ? ' healthy selection' : ' moderate selection'} for buyers.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">Est. ${monthlyPayment.toLocaleString()}/mo</p>
                    <p className="text-[#64748b] text-sm">
                      At {formatPrice(city.avgSoldPrice)} with 20% down and {currentMonth.mortgageRate.toFixed(2)}% rate.
                      {' '}
                      <Link href="/mortgage-calculator" className="text-[#CA3121] hover:underline">
                        Try our calculator
                      </Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8fafb] rounded-2xl p-8 border border-[#e2e8f0]">
              <h3 className="text-xl font-bold text-[#354652] mb-6">What This Means for Sellers</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">&#10003;</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">{listToSoldRatio}% List-to-Sold Ratio</p>
                    <p className="text-[#64748b] text-sm">
                      Homes are selling close to asking price. Proper pricing is key to a fast sale in {city.name}.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">&#10003;</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">{city.numberSold} Sales This Quarter</p>
                    <p className="text-[#64748b] text-sm">
                      {salesChange > 0
                        ? `Sales volume is up ${salesChangePercent}% from Q1 2025 — buyer demand is growing.`
                        : `Sales volume is down ${Math.abs(Number(salesChangePercent))}% from Q1 2025 — strategic pricing is important.`}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">&#10003;</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">{city.avgDOM} Average Days on Market</p>
                    <p className="text-[#64748b] text-sm">
                      Well-priced homes in {city.name} are moving. Contact Team Gillott for a free CMA to price your home right.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Market Reports */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Other Market Reports
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/market-report"
              className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">
                Lebanon Market Report
              </h3>
              <p className="text-sm text-[#64748b]">
                Avg price {formatPrice(currentMonth.medianPrice)} &middot; {currentMonth.closedSales} sold Q1
              </p>
            </Link>
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/market-report/${c.slug}`}
                className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">
                  {c.name} Market Report
                </h3>
                <p className="text-sm text-[#64748b]">
                  Avg price {formatPrice(c.avgSoldPrice)} &middot; {c.numberSold} sold Q1
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/cities/${slug}`}
              className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">
                {city.name} City Guide
              </h3>
              <p className="text-sm text-[#64748b]">Neighborhoods, schools, employers, and lifestyle.</p>
            </Link>
            <Link href="/cities/compare" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Compare All Cities</h3>
              <p className="text-sm text-[#64748b]">Side-by-side data for Lebanon, Albany, Corvallis, and Sweet Home.</p>
            </Link>
            <Link href="/first-time-buyers" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">First-Time Buyer Guide</h3>
              <p className="text-sm text-[#64748b]">Oregon assistance programs and buying process.</p>
            </Link>
            <Link href="/mortgage-calculator" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Mortgage Calculator</h3>
              <p className="text-sm text-[#64748b]">Calculate your monthly payment for {city.name} homes.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading={`Ready to Buy or Sell in ${city.name}?`}
        subheading={`Get a personalized ${city.name} market analysis from Team Gillott.`}
        ctaText="Contact Team Gillott"
        ctaUrl={TEAM_URL}
        variant="primary"
      />

      {/* Data Note */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#f8fafb] border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto text-center text-sm text-[#64748b]">
          <p>
            <strong className="text-[#354652]">Updated quarterly.</strong> Data sourced from the{' '}
            <a
              href={mlsSource.statsPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CA3121] underline underline-offset-2"
            >
              {mlsSource.name}
            </a>
            , as of {mlsSource.asOf}. All information deemed reliable but not guaranteed.
          </p>
        </div>
      </section>
    </main>
  );
}
