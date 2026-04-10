import Link from "next/link";
import { WebPageSchema } from "@/components/SchemaMarkup";
import CTABanner from "@/components/CTABanner";
import { blogPosts, categoryColors } from "@/data/blog";

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
        url="https://lebanon.teamgillott.com/blog"
      />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#0a2540] to-[#0e3a5c] text-white py-16 px-4 sm:px-6 lg:px-8">
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
            <div className="md:w-2/5 bg-gradient-to-br from-[#0099cc] to-[#0077aa] p-8 flex flex-col justify-center min-h-[220px]">
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
              <h2 className="text-xl md:text-2xl font-bold text-[#1a2b36] mt-3 tracking-tight leading-snug">
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
                      <p className="font-bold text-[#1a2b36] tabular-nums">
                        {h.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <span className="inline-flex items-center gap-1 text-[#0099cc] font-medium text-sm mt-4">
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
                <div className="h-2 bg-gradient-to-r from-[#0099cc] to-[#0077aa]" />
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
                  <h3 className="text-lg font-bold text-[#1a2b36] tracking-tight leading-snug line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#64748b] mt-2 leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-[#0099cc] text-sm font-medium mt-4 inline-flex items-center gap-1">
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
          <h2 className="text-3xl font-bold text-[#1a2b36] mb-4 tracking-tight">
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
              className="flex-1 px-4 py-3 border border-[#e2e8f0] rounded-xl focus:outline-none focus:border-[#0099cc] focus:ring-1 focus:ring-[#0099cc]"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#0099cc] text-white font-semibold rounded-xl hover:bg-[#0077aa] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-[#94a3b8] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Ready to Get Started?"
        subheading="Whether you're buying or selling, Team Gillott is here to help."
        ctaText="Contact a Team Gillott Agent"
        ctaUrl="https://www.teamgillott.com"
        variant="primary"
      />
    </>
  );
}
