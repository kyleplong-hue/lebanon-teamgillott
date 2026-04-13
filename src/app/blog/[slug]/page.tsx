import { notFound } from "next/navigation";
import Link from "next/link";
import {
  blogPosts,
  getPost,
  getRelatedPosts,
  categoryColors,
} from "@/data/blog";
import { currentMonth, mlsSource, formatPriceFull } from "@/data/market";
import { SITE_URL, TEAM_URL, siteUrl, teamUrl } from "@/data/config";
import { HERO_BLOG } from "@/data/hero-images";
import CTABanner from "@/components/CTABanner";

/**
 * Parse markdown-style inline links [text](/path) and render as Next.js Links.
 * Supports both internal (/path) and external (https://) links.
 */
function renderInlineLinks(text: string): React.ReactNode[] {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    // Text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const linkText = match[1];
    const href = match[2];
    const isExternal = href.startsWith("http");

    if (isExternal) {
      parts.push(
        <a
          key={match.index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#CA3121] underline underline-offset-2 hover:text-[#a82919] transition-colors"
        >
          {linkText}
        </a>
      );
    } else {
      parts.push(
        <Link
          key={match.index}
          href={href}
          className="text-[#CA3121] underline underline-offset-2 hover:text-[#a82919] transition-colors"
        >
          {linkText}
        </Link>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  // Remaining text after last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.seoTitle || `${post.title} | Team Gillott`,
    description:
      post.seoDescription ||
      post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.isoDate,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  // Article structured data for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Organization",
      name: "Team Gillott",
      url: TEAM_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Team Gillott at Keller Williams Realty Mid-Willamette",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl(`/blog/${post.slug}`),
    },
    ...(post.category === "Market Report" && {
      about: {
        "@type": "Place",
        name: "Lebanon, Oregon",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lebanon",
          addressRegion: "OR",
          addressCountry: "US",
        },
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section
        className="relative bg-cover bg-center py-16 md:py-24"
        style={{ backgroundImage: `url('${HERO_BLOG}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                categoryColors[post.category]
              }`}
            >
              {post.category}
            </span>
            <span className="text-white/60 text-sm">{post.date}</span>
            <span className="text-white/40 text-sm">-</span>
            <span className="text-white/60 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#CA3121] flex items-center justify-center text-white font-bold text-sm">
              TG
            </div>
            <div>
              <p className="text-white text-sm font-medium">{post.author}</p>
              <p className="text-white/50 text-xs">
                Licensed Oregon Broker
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Highlights */}
      {post.highlights && post.highlights.length > 0 && (
        <section className="bg-[#f0f7fa] border-b border-[#e2e8f0]">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {post.highlights.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 shadow-sm"
                >
                  <p className="text-xs font-medium text-[#64748b] uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-[#354652] mt-1 tabular-nums">
                    {stat.value}
                  </p>
                  {stat.change && (
                    <p
                      className={`text-sm mt-1 font-medium ${
                        stat.direction === "up"
                          ? "text-emerald-600"
                          : stat.direction === "down"
                          ? "text-red-500"
                          : "text-[#64748b]"
                      }`}
                    >
                      {stat.direction === "up" && "\u2191 "}
                      {stat.direction === "down" && "\u2193 "}
                      {stat.change} YoY
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="prose-custom">
          {post.content.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-[#354652] mt-10 mb-4 tracking-tight"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p
                key={i}
                className="text-[#374151] leading-relaxed mb-5 text-[16.5px]"
              >
                {renderInlineLinks(block)}
              </p>
            );
          })}
        </div>

        {/* Source Attribution */}
        {post.externalSourceUrl && (
          <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
            <p className="text-sm text-[#64748b]">
              Data sourced from the{" "}
              <a
                href={post.externalSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CA3121] underline underline-offset-2"
              >
                {mlsSource.name}
              </a>
              , as of {mlsSource.asOf}. All information is deemed reliable
              but not guaranteed.
            </p>
          </div>
        )}

        {/* Market Data Sidebar */}
        {post.category === "Market Report" && (
          <div className="mt-8 bg-[#f8fafb] rounded-2xl p-6 border border-[#e2e8f0]">
            <h3 className="text-lg font-bold text-[#354652] mb-4">
              Current Lebanon Market Snapshot
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-[#64748b]">Avg Sold Price</span>
                <p className="font-bold text-[#354652] tabular-nums">
                  {formatPriceFull(currentMonth.medianPrice)}
                </p>
              </div>
              <div>
                <span className="text-[#64748b]">Active Listings</span>
                <p className="font-bold text-[#354652] tabular-nums">
                  {currentMonth.activeListings}
                </p>
              </div>
              <div>
                <span className="text-[#64748b]">Avg Days on Market</span>
                <p className="font-bold text-[#354652] tabular-nums">
                  {currentMonth.avgDOM}
                </p>
              </div>
              <div>
                <span className="text-[#64748b]">30-Yr Mortgage Rate</span>
                <p className="font-bold text-[#354652] tabular-nums">
                  {currentMonth.mortgageRate}%
                </p>
              </div>
            </div>
            <Link
              href="/market-report"
              className="inline-block mt-4 text-sm text-[#CA3121] font-medium hover:underline"
            >
              View full market report &rarr;
            </Link>
          </div>
        )}
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-[#f8fafb] py-12 border-t border-[#e2e8f0]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#354652] mb-6 tracking-tight">
              Related articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0] hover:shadow-md transition-shadow"
                >
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      categoryColors[rp.category]
                    }`}
                  >
                    {rp.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#354652] mt-3 leading-snug">
                    {rp.title}
                  </h3>
                  <p className="text-sm text-[#64748b] mt-2 line-clamp-2">
                    {rp.excerpt}
                  </p>
                  <p className="text-xs text-[#94a3b8] mt-3">{rp.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABanner variant="dark" />
    </>
  );
}
