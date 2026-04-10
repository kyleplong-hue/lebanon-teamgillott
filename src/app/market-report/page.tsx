import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { WebPageSchema } from '@/components/SchemaMarkup';

export default function MarketReport() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ebeff2]">
      <Header />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-[#0099cc] to-[#0077aa] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-sans">
              Lebanon, Oregon Real Estate Market Report
            </h1>
            <p className="text-lg text-blue-100">
              April 2026 — Comprehensive market analysis for buyers and sellers
            </p>
          </div>
        </section>

        {/* Key Metrics Cards */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Median Price Card */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#0099cc]">
                <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Median Price</p>
                <p className="text-3xl font-bold text-[#354652] mb-2">$395K</p>
                <p className="text-sm text-green-600 font-semibold">
                  +4.6% YoY
                </p>
              </div>

              {/* Days on Market Card */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#ca3121]">
                <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Avg Days on Market</p>
                <p className="text-3xl font-bold text-[#354652] mb-2">65</p>
                <p className="text-sm text-green-600 font-semibold">
                  -34.5% YoY (faster)
                </p>
              </div>

              {/* Price per Sqft Card */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#0099cc]">
                <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Price per Sq Ft</p>
                <p className="text-3xl font-bold text-[#354652] mb-2">$254</p>
                <p className="text-sm text-gray-500">
                  Regional benchmark
                </p>
              </div>

              {/* Avg Offers Card */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#ca3121]">
                <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Avg Offers per Home</p>
                <p className="text-3xl font-bold text-[#354652] mb-2">2</p>
                <p className="text-sm text-gray-500">
                  Competitive market
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Summary */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#354652] mb-6 font-sans">Market Summary</h2>
            <div className="prose prose-sm max-w-none text-[#354652]">
              <p className="text-lg leading-relaxed mb-4">
                Lebanon's real estate market is accelerating. Homes are selling{' '}
                <strong>34.5% faster</strong> than last year, driven by strong buyer demand and
                limited inventory. The median price of{' '}
                <strong>$395,000</strong> makes Lebanon significantly more affordable than
                neighboring Corvallis ($565K) while offering similar quality of life, excellent
                schools, and proximity to recreation.
              </p>
              <p className="text-lg leading-relaxed">
                With an average of 2 offers per home, the market is competitive but not
                aggressive. This is an excellent time for sellers to capitalize on strong
                demand, while buyers benefit from a wider selection than in previous years.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">How Lebanon Compares</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-[#0099cc] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Metric</th>
                    <th className="px-6 py-4 text-left font-semibold">Lebanon</th>
                    <th className="px-6 py-4 text-left font-semibold">Corvallis</th>
                    <th className="px-6 py-4 text-left font-semibold">Albany</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-[#354652]">Median Price</td>
                    <td className="px-6 py-4 text-[#354652]">$395,000</td>
                    <td className="px-6 py-4 text-[#354652]">$565,000</td>
                    <td className="px-6 py-4 text-[#354652]">$390,000</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-[#354652]">Avg Days on Market</td>
                    <td className="px-6 py-4 text-[#354652]">65 days</td>
                    <td className="px-6 py-4 text-[#354652]">70 days</td>
                    <td className="px-6 py-4 text-[#354652]">88 days</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-[#354652]">Price per Sq Ft</td>
                    <td className="px-6 py-4 text-[#354652]">$254</td>
                    <td className="px-6 py-4 text-[#354652]">$326</td>
                    <td className="px-6 py-4 text-[#354652]">$265</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What This Means for Buyers */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#354652] mb-6 font-sans">
              What This Means for Buyers
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#0099cc] text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#354652] mb-2">Market Moving Fast</h3>
                  <p className="text-[#354652]">
                    With an average days on market of 65 days, homes aren't lingering on the
                    market. If you find a home you like, be prepared to move quickly with a
                    strong offer.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#0099cc] text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#354652] mb-2">Good Affordability</h3>
                  <p className="text-[#354652]">
                    At $395K, Lebanese homes offer strong value compared to Corvallis and are
                    more affordable than many West Coast markets, while still being in a vibrant
                    community.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#0099cc] text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#354652] mb-2">Competitive but Fair</h3>
                  <p className="text-[#354652]">
                    With 2 offers per home on average, you'll face competition, but it's not an
                    all-out bidding war. Smart offers and clean inspections can still win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What This Means for Sellers */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#354652] mb-6 font-sans">
              What This Means for Sellers
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#ca3121] text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#354652] mb-2">Strong Demand</h3>
                  <p className="text-[#354652]">
                    The market has robust buyer interest. Homes are selling fast, which means
                    less time on the market and more potential offers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#ca3121] text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#354652] mb-2">Prices on the Rise</h3>
                  <p className="text-[#354652]">
                    With a 4.6% year-over-year price increase, home values are appreciating.
                    Listing now captures this upward momentum.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#ca3121] text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#354652] mb-2">Homes Moving Quickly</h3>
                  <p className="text-[#354652]">
                    Average time on market is just 65 days, meaning you'll transition from
                    listing to sold faster than nearly any market in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interest Rate Context */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#354652] mb-6 font-sans">Current Interest Rates</h2>
            <div className="bg-blue-50 border-l-4 border-[#0099cc] p-6 rounded">
              <p className="text-lg text-[#354652] mb-4">
                <strong>30-Year Fixed Rate:</strong> 6.12% (as of April 2026)
              </p>
              <p className="text-[#354652] mb-4">
                Rates have come down from the March highs near 6.50%, providing some relief for
                borrowers. However, even small changes in rates can impact monthly payments and
                affordability. If you've been waiting for rates to improve, now is a good time to
                get pre-approved.
              </p>
              <div className="bg-white p-4 rounded mt-4 border border-blue-200">
                <p className="text-sm text-[#354652]">
                  <strong>On a $395K home with 20% down ($79K):</strong> Monthly payment
                  (principal &amp; interest) is approximately $1,895 at current rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          heading="Get a Custom Market Analysis"
          subheading="Understand your home's value or find the right property in Lebanon."
          ctaText="Contact Team Gillott"
          ctaUrl="https://www.teamgillott.com"
        />

        {/* Data Note */}
        <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
            <p>
              <strong>Updated monthly.</strong> Data sourced from MLS and public records. Figures
              are current as of April 2026 and subject to change.
            </p>
          </div>
        </section>
      </main>
      <Footer />

      {/* Schema Markup */}
      <WebPageSchema
        title="Lebanon, Oregon Real Estate Market Report — April 2026"
        description="Latest Lebanon real estate market data: median price $395K, homes selling 34.5% faster. Compare to Corvallis and Albany."
        url="https://lebanon.teamgillott.com/market-report"
      />
    </div>
  );
}
