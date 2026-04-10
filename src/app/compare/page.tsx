import Link from 'next/link';
import NeighborhoodCompare from '@/components/NeighborhoodCompare';
import CTABanner from '@/components/CTABanner';
import { WebPageSchema } from '@/components/SchemaMarkup';
import { siteUrl, TEAM_URL } from '@/data/config';

export const metadata = {
  title: 'Compare Neighborhoods | Lebanon, Oregon Real Estate',
  description:
    'Side-by-side comparison of Lebanon neighborhoods. Compare prices, market stats, schools, and neighborhood character to find your perfect Lebanon home.',
  keywords:
    'Lebanon neighborhood comparison, compare neighborhoods, real estate comparison, Lebanon OR',
};

export default function ComparePage() {
  return (
    <>
      <WebPageSchema
        title="Compare Lebanon Neighborhoods"
        description="Interactive side-by-side comparison tool for Lebanon, Oregon neighborhoods. Compare prices, statistics, schools, and characteristics."
        url={siteUrl("/compare")}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#CA3121] to-[#1F2930] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Compare Lebanon Neighborhoods
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Find your perfect fit with our interactive comparison tool. Select any two neighborhoods to see detailed side-by-side stats, pricing, and community features.
          </p>
        </div>
      </section>

      {/* Comparison Tool */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <NeighborhoodCompare />
      </section>

      {/* Info Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] tracking-tight mb-8 text-center">
            How to Use This Tool
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <div className="w-10 h-10 rounded-full bg-[#CA3121] text-white flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#354652] mb-3">Select Neighborhoods</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Use the dropdown menus to pick any two neighborhoods you'd like to compare.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <div className="w-10 h-10 rounded-full bg-[#CA3121] text-white flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#354652] mb-3">Review the Data</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Compare price ranges, market statistics, schools, and neighborhood character side-by-side.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <div className="w-10 h-10 rounded-full bg-[#CA3121] text-white flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#354652] mb-3">Make Your Choice</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Ready to explore? Contact Team Gillott for a personalized neighborhood tour.
              </p>
            </div>
          </div>

          {/* Key Metrics Explanation */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-[#e2e8f0]">
            <h3 className="text-xl font-semibold text-[#354652] mb-6">Understanding the Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#354652] mb-2">Price Range & Average Price</h4>
                <p className="text-sm text-[#64748b]">
                  The price range shows the typical spread of home values, while the average price indicates the median listing price in that neighborhood.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#354652] mb-2">Days on Market (DOM)</h4>
                <p className="text-sm text-[#64748b]">
                  The average number of days a home stays on the market before selling. Lower is typically faster-moving.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#354652] mb-2">Turnover Rate</h4>
                <p className="text-sm text-[#64748b]">
                  The annual percentage of homes sold relative to total homes in the neighborhood. Higher rates indicate more activity.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#354652] mb-2">Character & Property Types</h4>
                <p className="text-sm text-[#64748b]">
                  Details about the architectural style, property sizes, and neighborhood vibe to help you match your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/neighborhoods" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Full Neighborhood Guides</h3>
              <p className="text-sm text-[#64748b]">Detailed information on each Lebanon neighborhood.</p>
            </Link>
            <Link href="/market-report" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">City-Wide Market Data</h3>
              <p className="text-sm text-[#64748b]">Comprehensive pricing and market trends for Lebanon.</p>
            </Link>
            <Link href="/blog" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Latest Market Insights</h3>
              <p className="text-sm text-[#64748b]">Blog posts with quarterly reports and neighborhood analysis.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Find Your Lebanon Home?"
        subheading="Compare neighborhoods, explore listings, and connect with our expert agents today."
        ctaText="Search Homes Now"
        ctaUrl={TEAM_URL}
        variant="primary"
      />
    </>
  );
}
