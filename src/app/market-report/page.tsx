import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { WebPageSchema } from '@/components/SchemaMarkup';
import { PriceTrendChart, SalesVolumeChart } from '@/components/MarketCharts';
import {
  currentMonth,
  marketTrends,
  cityComparisons,
  recentSales,
  mlsSource,
  formatPrice,
  formatPriceFull,
  getYoYChange,
} from '@/data/market';
import { blogPosts } from '@/data/blog';
import { siteUrl, TEAM_URL } from '@/data/config';
import { HERO_MARKET_REPORT } from '@/data/hero-images';

export const metadata = {
  title: 'Lebanon, Oregon Real Estate Market Report',
  description: `Latest Lebanon real estate market data: median price ${formatPrice(currentMonth.medianPrice)}, homes selling faster YoY. Compare to Corvallis and Albany.`,
  openGraph: {
    title: 'Lebanon Real Estate Market Report',
    description: 'Comprehensive market analysis for buyers and sellers in Lebanon, Oregon.',
    url: siteUrl('/market-report'),
    type: 'website',
  },
};

export default function MarketReport() {
  const yoYChange = getYoYChange();
  const yearAgoPrice = marketTrends[0].medianPrice;
  const currentPrice = currentMonth.medianPrice;
  const priceChangePercent = ((currentPrice - yearAgoPrice) / yearAgoPrice) * 100;
  const domChangePercent = yoYChange.dom;

  return (
    <main className="flex-1 w-full">
      {/* Hero Section */}
      <section
        className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${HERO_MARKET_REPORT}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-3 inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="text-sm font-semibold text-white">{currentMonth.monthFull}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Lebanon Real Estate Market
          </h1>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            Comprehensive market analysis for buyers and sellers. This month: homes selling faster, prices rising steadily.
          </p>
        </div>
      </section>

      {/* Key Metrics Grid (Bento) */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Median Price */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Median Price</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {formatPrice(currentMonth.medianPrice)}
              </p>
              <div className={`flex items-center gap-2 ${priceChangePercent >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d={priceChangePercent >= 0 ? "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414-1.414L13.586 7H12z" : "M12 13a1 1 0 110 2H7a1 1 0 01-1-1V9a1 1 0 112 0v3.586l4.293-4.293a1 1 0 011.414 1.414L9.414 13H12z"} clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">{priceChangePercent > 0 ? '+' : ''}{priceChangePercent.toFixed(1)}% YoY</span>
              </div>
            </div>

            {/* Days on Market */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Avg Days on Market</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {currentMonth.avgDOM}
              </p>
              <div className={`flex items-center gap-2 ${domChangePercent < 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d={domChangePercent < 0 ? "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414-1.414L13.586 7H12z" : "M12 13a1 1 0 110 2H7a1 1 0 01-1-1V9a1 1 0 112 0v3.586l4.293-4.293a1 1 0 011.414 1.414L9.414 13H12z"} clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">{domChangePercent.toFixed(1)}% YoY {domChangePercent < 0 ? '(faster)' : '(slower)'}</span>
              </div>
            </div>

            {/* Price Per Sqft */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Price per Sq Ft</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                ${currentMonth.pricePerSqft}
              </p>
              <p className="text-sm text-[#64748b]">vs. Corvallis at ${cityComparisons[1].pricePerSqft}</p>
            </div>

            {/* Avg Offers */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Avg Offers per Home</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {currentMonth.avgOffers}
              </p>
              <p className="text-sm text-[#64748b]">Competitive market</p>
            </div>

            {/* Active Listings */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 col-span-1">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Active Listings</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {currentMonth.activeListings}
              </p>
              <p className="text-sm text-[#64748b]">Months of supply: {currentMonth.inventory.toFixed(1)}</p>
            </div>

            {/* New Listings */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">New Listings</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {currentMonth.newListings}
              </p>
              <p className="text-sm text-[#64748b]">This month</p>
            </div>

            {/* Closed Sales */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">Closed Sales</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {currentMonth.closedSales}
              </p>
              <p className="text-sm text-[#64748b]">This month</p>
            </div>

            {/* Mortgage Rate */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">30-Yr Rate</p>
              <p className="text-4xl font-bold text-[#354652] mb-3 font-tabular-nums">
                {currentMonth.mortgageRate.toFixed(2)}%
              </p>
              <p className="text-sm text-[#64748b]">Current average</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends Charts */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-2 tracking-tight">12-Month Trends</h2>
          <p className="text-[#64748b] mb-10">See how the market has evolved over the past year</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Price Chart */}
            <div className="bg-[#f8fafb] rounded-2xl p-6 border border-[#e2e8f0]">
              <h3 className="text-lg font-semibold text-[#354652] mb-4">Median Price Trend</h3>
              <PriceTrendChart />
            </div>

            {/* Volume Chart */}
            <div className="bg-[#f8fafb] rounded-2xl p-6 border border-[#e2e8f0]">
              <h3 className="text-lg font-semibold text-[#354652] mb-4">Closed Sales Volume</h3>
              <SalesVolumeChart />
            </div>
          </div>
        </div>
      </section>

      {/* City Comparison Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-2 tracking-tight">How Lebanon Compares</h2>
          <p className="text-[#64748b] mb-10">Lebanon vs. nearby markets</p>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e2e8f0]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e2e8f0] bg-[#f8fafb]">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">City</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">Median Price</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">Days on Market</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">Price/Sq Ft</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">YoY Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {cityComparisons.map((city, idx) => (
                    <tr key={idx} className={`border-b border-[#e2e8f0] ${idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafb]'} hover:bg-[#f0f4f8] transition-colors`}>
                      <td className="px-6 py-4 font-semibold text-[#354652]">
                        {city.city === 'Lebanon' ? (
                          <span className="text-[#CA3121]">{city.city}</span>
                        ) : (
                          <Link
                            href={`/market-report/${city.city.toLowerCase().replace(' ', '-')}`}
                            className="text-[#CA3121] hover:underline"
                          >
                            {city.city}
                          </Link>
                        )}
                      </td>
                      <td className="px-6 py-4 text-[#354652] font-tabular-nums">{formatPriceFull(city.medianPrice)}</td>
                      <td className="px-6 py-4 text-[#354652] font-tabular-nums">{city.avgDOM} days</td>
                      <td className="px-6 py-4 text-[#354652] font-tabular-nums">${city.pricePerSqft}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold font-tabular-nums ${city.yoyGrowth > 4 ? 'text-emerald-600' : 'text-[#64748b]'}`}>
                            {city.yoyGrowth > 0 ? '+' : ''}{city.yoyGrowth.toFixed(1)}%
                          </span>
                          <div className="w-12 h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
                            <div
                              className={`h-full ${city.yoyGrowth > 4 ? 'bg-emerald-600' : 'bg-[#CA3121]'}`}
                              style={{ width: `${Math.min(city.yoyGrowth * 15, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Sold Homes */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-2 tracking-tight">Recently Sold Homes</h2>
          <p className="text-[#64748b] mb-10">Latest market activity in Lebanon</p>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e2e8f0]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e2e8f0] bg-[#f8fafb]">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">Address</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">Beds/Baths</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">Price</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">DOM</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748b] uppercase tracking-wide">Sold</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSales.map((sale, idx) => (
                    <tr key={idx} className={`border-b border-[#e2e8f0] ${idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafb]'} hover:bg-[#f0f4f8] transition-colors`}>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-[#354652]">{sale.address}</p>
                          <p className="text-sm text-[#64748b]">{sale.neighborhood}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#354652] font-semibold">{sale.beds}/{sale.baths}</td>
                      <td className="px-6 py-4 font-tabular-nums font-semibold text-[#354652]">{formatPriceFull(sale.price)}</td>
                      <td className="px-6 py-4 font-tabular-nums text-[#64748b]">{sale.dom}d</td>
                      <td className="px-6 py-4 text-sm text-[#64748b]">{sale.dateSold}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer & Seller Insights */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-12 tracking-tight">Market Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Buyers */}
            <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0]">
              <h3 className="text-xl font-bold text-[#354652] mb-6">What This Means for Buyers</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">Market Moving Fast</p>
                    <p className="text-[#64748b] text-sm">With an average of {currentMonth.avgDOM} days on market, homes aren't lingering. Be prepared to move quickly with a strong offer.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">Good Affordability</p>
                    <p className="text-[#64748b] text-sm">At {formatPrice(currentMonth.medianPrice)}, Lebanese homes offer strong value compared to Corvallis while maintaining vibrant community living.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">Competitive but Fair</p>
                    <p className="text-[#64748b] text-sm">With {currentMonth.avgOffers} offers per home, you'll face competition but it's not an all-out bidding war. Smart offers can still win.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Sellers */}
            <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0]">
              <h3 className="text-xl font-bold text-[#354652] mb-6">What This Means for Sellers</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">✓</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">Strong Demand</p>
                    <p className="text-[#64748b] text-sm">Homes are selling fast with robust buyer interest. Expect less time on market and multiple offers.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">✓</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">Prices on the Rise</p>
                    <p className="text-[#64748b] text-sm">With a {priceChangePercent.toFixed(1)}% year-over-year increase, home values are appreciating. List now to capture momentum.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CA3121] flex items-center justify-center text-white text-sm font-bold">✓</div>
                  <div>
                    <p className="font-semibold text-[#354652] mb-1">Homes Moving Quickly</p>
                    <p className="text-[#64748b] text-sm">Average time to sale is just {currentMonth.avgDOM} days—faster than nearly any market in the region.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Rates Card */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#CA3121]/10 to-[#0088bb]/10 rounded-2xl p-8 border border-[#CA3121]/20">
            <h3 className="text-2xl font-bold text-[#354652] mb-6">Current Interest Rates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-5xl font-bold text-[#CA3121] mb-2 font-tabular-nums">{currentMonth.mortgageRate.toFixed(2)}%</p>
                <p className="text-[#64748b] font-semibold">30-Year Fixed Rate</p>
                <p className="text-sm text-[#64748b] mt-2">As of {currentMonth.monthFull}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#e2e8f0]">
                <p className="text-sm font-semibold text-[#354652] mb-3">Monthly payment estimate:</p>
                <p className="text-2xl font-bold text-[#354652] mb-2 font-tabular-nums">$1,895</p>
                <p className="text-xs text-[#64748b]">Principal & interest on {formatPrice(currentMonth.medianPrice)} with 20% down at {currentMonth.mortgageRate.toFixed(2)}%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cross-Link */}
      {(() => {
        const latestReport = blogPosts.find(p => p.category === 'Market Report');
        if (!latestReport) return null;
        return (
          <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#e2e8f0]">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#f0f7fa] rounded-2xl p-6 md:p-8 border border-[#CA3121]/20 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[#CA3121] uppercase tracking-wider mb-2">Latest Analysis</p>
                  <h3 className="text-xl font-bold text-[#354652] tracking-tight leading-snug">
                    {latestReport.title}
                  </h3>
                  <p className="text-sm text-[#64748b] mt-2 line-clamp-2">{latestReport.excerpt}</p>
                </div>
                <Link
                  href={`/blog/${latestReport.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#CA3121] text-white font-semibold rounded-xl hover:bg-[#a82919] transition-colors whitespace-nowrap"
                >
                  Read full report &rarr;
                </Link>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Other City Market Reports */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Other City Market Reports
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cityComparisons.filter(c => c.city !== 'Lebanon').map((c) => (
              <Link
                key={c.city}
                href={`/market-report/${c.city.toLowerCase().replace(' ', '-')}`}
                className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">
                  {c.city} Market Report
                </h3>
                <p className="text-sm text-[#64748b]">
                  Avg price {formatPrice(c.medianPrice)} &middot; {c.numberSold} sold Q1
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
            <Link href="/compare" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Compare Neighborhoods</h3>
              <p className="text-sm text-[#64748b]">Interactive tool for side-by-side neighborhood analysis.</p>
            </Link>
            <Link href="/neighborhoods" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Neighborhood Guides</h3>
              <p className="text-sm text-[#64748b]">Detailed guides to each Lebanon neighborhood.</p>
            </Link>
            <Link href="/first-time-buyers" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">First-Time Buyer Guide</h3>
              <p className="text-sm text-[#64748b]">Complete buyer resource for Lebanon home purchases.</p>
            </Link>
            <Link href="/selling" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Selling Your Home</h3>
              <p className="text-sm text-[#64748b]">Complete guide to selling in today's market.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Buy or Sell in Lebanon?"
        subheading="Get a personalized market analysis and find your next home with Team Gillott."
        ctaText="Contact Team Gillott"
        ctaUrl={TEAM_URL}
        variant="primary"
      />

      {/* Data Note */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#f8fafb] border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto text-center text-sm text-[#64748b]">
          <p>
            <strong className="text-[#354652]">Updated quarterly.</strong> Data sourced from the{' '}
            <a href={mlsSource.statsPageUrl} target="_blank" rel="noopener noreferrer" className="text-[#CA3121] underline underline-offset-2">
              {mlsSource.name}
            </a>
            , as of {mlsSource.asOf}. All information deemed reliable but not guaranteed.
          </p>
        </div>
      </section>

      {/* Schema Markup */}
      <WebPageSchema
        title={`Lebanon, Oregon Real Estate Market Report — ${currentMonth.monthFull}`}
        description={`Latest Lebanon real estate market data: median price ${formatPrice(currentMonth.medianPrice)}, homes selling ${domChangePercent < 0 ? 'faster' : 'slower'} YoY. Compare to Corvallis and Albany.`}
        url={siteUrl('/market-report')}
      />
    </main>
  );
}
