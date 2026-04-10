import Link from 'next/link';
import { WebPageSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Lebanon Real Estate Blog | Market Trends & Guides',
  description:
    'Stay informed on Lebanon, Corvallis, and Albany real estate trends, market insights, and community news from Team Gillott.',
  keywords:
    'Lebanon Oregon real estate blog, home buying guide, real estate trends, Oregon housing market',
  openGraph: {
    title: 'Lebanon Real Estate Blog',
    description:
      'Market insights, buyer guides, and real estate news for Lebanon, Corvallis, and Albany, Oregon.',
    type: 'website',
  },
};

const blogPosts = [
  {
    id: 'lebanon-spring-2026',
    title: 'Lebanon Market Update: Spring 2026 — Prices Up 4.6%, Homes Selling Faster',
    date: '2026-04-08',
    category: 'Market Trends',
    categoryColor: 'bg-blue-100 text-[#0099cc]',
    excerpt:
      'Spring is bringing momentum to the Lebanon real estate market. Median prices have climbed 4.6% year-over-year, and homes are selling significantly faster. What does this mean for buyers and sellers?',
    href: '#',
  },
  {
    id: 'families-moving-to-lebanon',
    title: '5 Reasons Families Are Moving to Lebanon, Oregon',
    date: '2026-04-01',
    category: 'Lifestyle',
    categoryColor: 'bg-green-100 text-green-700',
    excerpt:
      'From excellent schools to outdoor recreation and affordable housing, Lebanon offers families everything they need. Discover why more families are choosing Lebanon as their home.',
    href: '#',
  },
  {
    id: 'first-time-buyer-oregon-programs',
    title: 'First-Time Buyer Guide: Oregon Programs That Can Save You $60,000',
    date: '2026-03-25',
    category: 'Education',
    categoryColor: 'bg-purple-100 text-purple-700',
    excerpt:
      'Oregon offers generous first-time buyer assistance programs. Learn about OHCS Flex Lending, down payment assistance, and zero-interest loans that could transform your home buying journey.',
    href: '/first-time-buyers',
  },
  {
    id: 'hamilton-creek-vs-south-lebanon',
    title: 'Hamilton Creek vs South Lebanon: Which Neighborhood Is Right for You?',
    date: '2026-03-18',
    category: 'Neighborhoods',
    categoryColor: 'bg-orange-100 text-orange-700',
    excerpt:
      'Comparing two of Lebanon\'s most popular neighborhoods? Here\'s what sets Hamilton Creek and South Lebanon apart in terms of price, lifestyle, and community vibe.',
    href: '#',
  },
];

export default function BlogPage() {
  return (
    <>
      <WebPageSchema
        title="Lebanon Real Estate Blog"
        description="Stay informed on Lebanon, Corvallis, and Albany real estate trends, market insights, and community news."
        url="https://lebanon.teamgillott.com/blog"
      />

      <section className="w-full bg-gradient-to-b from-[#0099cc] to-[#0077aa] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Lebanon Real Estate Blog
          </h1>
          <p className="text-lg text-blue-100">
            Stay informed on Lebanon, Corvallis, and Albany real estate trends, market insights, and community news.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#f8fafb] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-md hover:border-[#0099cc]/30 transition-all duration-300 overflow-hidden border border-[#e2e8f0]"
              >
                <div className="h-48 bg-gradient-to-br from-[#0099cc] to-[#0077aa] flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-5xl mb-2">Article</div>
                    <p className="text-sm opacity-75">Featured Image</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </div>

                  <p className="text-[#64748b] text-sm mb-3 tabular-nums">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>

                  <h2 className="text-xl font-bold text-[#1a2b36] mb-4 tracking-tight line-clamp-3">
                    {post.title}
                  </h2>

                  <p className="text-[#1a2b36] text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-2 text-[#0099cc] font-semibold hover:text-[#0077aa] transition-colors duration-300"
                  >
                    Read More <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#1a2b36] mb-6">
              Showing 4 of 12 recent posts
            </p>
            <button className="px-8 py-3 border-2 border-[#0099cc] text-[#0099cc] font-semibold rounded-2xl hover:bg-[#0099cc] hover:text-white transition-colors duration-300">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a2b36] mb-4 tracking-tight">
            Subscribe for Monthly Updates
          </h2>
          <p className="text-[#1a2b36] mb-8">
            Get the latest Lebanon real estate market trends, buyer tips, and neighborhood guides delivered to your inbox every month.
          </p>

          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-[#e2e8f0] rounded-2xl focus:outline-none focus:border-[#0099cc] focus:ring-1 focus:ring-[#0099cc] transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#0099cc] text-white font-semibold rounded-2xl hover:bg-[#0077aa] transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-[#64748b] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#f8fafb] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a2b36] mb-12 tracking-tight">
            Explore by Topic
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Market Trends', label: 'Chart', count: 8 },
              { name: 'Buying Guide', label: 'Home', count: 12 },
              { name: 'Selling Guide', label: 'Key', count: 6 },
              { name: 'Neighborhoods', label: 'Map', count: 9 },
            ].map(cat => (
              <div
                key={cat.name}
                className="p-6 bg-white rounded-2xl hover:shadow-md hover:border-[#0099cc]/30 transition-all duration-300 text-center cursor-pointer border border-[#e2e8f0]"
              >
                <div className="text-3xl mb-3 font-semibold text-[#0099cc]">{cat.label}</div>
                <h3 className="font-bold text-[#1a2b36] mb-2">{cat.name}</h3>
                <p className="text-[#64748b] text-sm tabular-nums">{cat.count} posts</p>
              </div>
            ))}
          </div>
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
