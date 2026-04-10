import Link from "next/link";
import { WebPageSchema } from "@/components/SchemaMarkup";
import CTABanner from "@/components/CTABanner";
import { blogPosts, categoryColors } from "@/data/blog";
import { siteUrl, TEAM_URL } from "@/data/config";

export const metadata = {
  title: "Lebanon Real Estate Blog | Market Reports & Guides",
  description:
    "Stay informed on Lebanon, Corvallis, and Albany real estate trends, quarterly market reports, and community news from Team Gillott.",
  keywords:
    "Lebanon Oregon real estate blog, home buying guide, real estate trends, Oregon housing market, market report",
  openGraph: {
    title: "Lebanon Real Estate Blog",
    description:
      "Quarterly market reports, buyer guides, and real estate news for Lebanon, Corvallis, and Albany, Oregon.",
    type: "website",
    url: siteUrl("/blog"),
  },
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <WebPageSchema
        title="Lebanon Real Estate Blog"
        description="Stay informed on Lebanon, Corvallis, and Albany real estate trends, market insights, and community news."
        url={siteUrl("/blog")}
      />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#1F2930] to-[#2a3842] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Lebanon Real Estate Blog
          </h1>
          <p className="text-lg text-white/70">
            Quarterly market reports, buyer guides, and neighborhood insights
            for Lebanon, Corvallis, and Albany, Oregon.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full bg-[#f8fafb] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#e2e8f0]">
        <div className="max-w-5xl mx-auto">
          <Link
            href={`/blog/${featured.slug}`}
            className="block bg-white rounded-2xl shadow-sm border border-[#e2e8f0] overflow-hidden hover:shadow-md transition-shadow md:flex"
          >
            <div className="md:w-2/5 bg-gradient-to-br from-[#CA3121] to-[#1F2930] p-8 flex flex-col justify-center min-h-[220px]">
              <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                Latest
              </span>
              <span className="text-white text-3xl font-bold mt-2 tracking-tight leading-tight">
                {featured.category === "Market Report"
                  ? "Q1 2026"
                  : featured.category}
              </span>
              <span className="text-white/60 text-sm mt-2">
                {featured.date}
              </span>
            </div>
            <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
              <span
                className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium ${
                  categoryColors[featured.category]
                }`}
              >
                {featured.category}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-[#354652] mt-3 tracking-tight leading-snug">
                {featured.title}
              </h2>
              <p className="text-[#64748b] text-sm mt-3 leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>
              {featured.highlights && (
                <div className="flex gap-4 mt-4">
                  {featured.highlights.slice(0, 3).map((h) => (
                    <div key={h.label} className="text-sm">
                      <span className="text-[#64748b] text-xs">
                        {h.label}
                      </span>
                      <p className="font-bold text-[#354652] tabular-nums">
                        {h.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <span className="inline-flex items-center gap-1 text-[#CA3121] font-medium text-sm mt-4">
                Read full report &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="w-full bg-[#f8fafb] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-2 bg-gradient-to-r from-[#CA3121] to-[#1F2930]" />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        categoryColors[post.category]
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-[#94a3b8]">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#354652] tracking-tight leading-snug line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#64748b] mt-2 leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-[#CA3121] text-sm font-medium mt-4 inline-flex items-center gap-1">
                    Read more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#354652] mb-4 tracking-tight">
            Get quarterly market updates
          </h2>
          <p className="text-[#64748b] mb-8">
            We publish a new market report every quarter with fresh MLS data.
            Subscribe to get it delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:border-[#CA3121] focus:ring-1 focus:ring-[#CA3121]"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#CA3121] text-white font-semibold rounded-xl hover:bg-[#a82919] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-[#94a3b8] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Related Resources */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/market-report" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Full Market Report</h3>
              <p className="text-sm text-[#64748b]">Comprehensive current market data and analysis.</p>
            </Link>
            <Link href="/neighborhoods" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Neighborhood Guides</h3>
              <p className="text-sm text-[#64748b]">Deep dives into each Lebanon neighborhood.</p>
            </Link>
            <Link href="/first-time-buyers" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">First-Time Buyer Guide</h3>
              <p className="text-sm text-[#64748b]">Complete resource for first-time home buyers.</p>
            </Link>
            <Link href="/faq" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Frequently Asked Questions</h3>
              <p className="text-sm text-[#64748b]">Answers to common questions about Lebanon real estate.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Get Started?"
        subheading="Whether you're buying or selling, Team Gillott is here to help."
        ctaText="Contact a Team Gillott Agent"
        ctaUrl={TEAM_URL}
        variant="primary"
      />
    </>
  );
}
