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

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#0099cc] to-[#0077aa] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 font-sans">
            Lebanon Real Estate Blog
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            Stay informed on Lebanon, Corvallis, and Albany real estate trends, market insights, and community news.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-[#0099cc]"
              >
                {/* Post Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#0099cc] to-[#0077aa] flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-5xl mb-2">📄</div>
                    <p className="text-sm opacity-75">Featured Image</p>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Date */}
                  <p className="text-gray-500 text-sm mb-3">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-[#354652] mb-4 font-sans line-clamp-3">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-2 text-[#0099cc] font-semibold hover:text-[#0077aa] transition-colors"
                  >
                    Read More <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination / Load More */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Showing 4 of 12 recent posts
            </p>
            <button className="px-8 py-3 border-2 border-[#0099cc] text-[#0099cc] font-semibold rounded-lg hover:bg-[#0099cc] hover:text-white transition-colors duration-200">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="w-full bg-[#ebeff2] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#354652] mb-4 font-sans">
            Subscribe for Monthly Updates
          </h2>
          <p className="text-gray-700 mb-8">
            Get the latest Lebanon real estate market trends, buyer tips, and neighborhood guides delivered to your inbox every month.
          </p>

          {/* Subscribe Form */}
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0099cc]"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#0099cc] text-white font-semibold rounded-lg hover:bg-[#0077aa] transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-12 text-center font-sans">
            Explore by Topic
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Market Trends', icon: '📈', count: 8 },
              { name: 'Buying Guide', icon: '🏡', count: 12 },
              { name: 'Selling Guide', icon: '🔑', count: 6 },
              { name: 'Neighborhoods', icon: '🗺️', count: 9 },
            ].map(cat => (
              <div
                key={cat.name}
                className="p-6 bg-[#ebeff2] rounded-lg hover:shadow-md transition-shadow text-center cursor-pointer hover:bg-[#dae4eb]"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-[#354652] mb-2 font-sans">{cat.name}</h3>
                <p className="text-gray-600 text-sm">{cat.count} posts</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Get Started?"
        subheading="Whether you're buying or selling, Team Gillott is here to help."
        ctaText="Contact a Team Gillott Agent"
        ctaUrl="https://www.teamgillott.com"
      />
    </>
  );
}
