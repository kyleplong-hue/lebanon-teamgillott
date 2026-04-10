/**
 * BLOG DATA LAYER
 *
 * Blog posts are data-driven. Add new posts here and they
 * automatically appear on the blog index and get their own
 * /blog/[slug] page via dynamic routing.
 *
 * Quarterly market report posts should reference data from
 * market.ts so the narrative matches the numbers.
 */

import { teamUrl } from './config';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;              // display date, e.g. "April 10, 2026"
  isoDate: string;           // ISO format for sorting/SEO
  category: BlogCategory;
  author: string;
  readTime: string;          // e.g. "5 min read"
  content: string[];         // array of paragraphs / content blocks
  highlights?: StatHighlight[];
  relatedSlugs?: string[];   // slugs of related posts
  externalSourceUrl?: string; // link to source data (e.g. stats page)
  seoTitle?: string;
  seoDescription?: string;
}

export interface StatHighlight {
  label: string;
  value: string;
  change?: string;           // e.g. "+3.4%" or "-1.5%"
  direction?: "up" | "down" | "flat";
}

export type BlogCategory =
  | "Market Report"
  | "Neighborhoods"
  | "Buying Guide"
  | "Selling Guide"
  | "Lifestyle"
  | "Education";

export const categoryColors: Record<BlogCategory, string> = {
  "Market Report": "bg-sky-100 text-sky-800",
  Neighborhoods: "bg-amber-100 text-amber-800",
  "Buying Guide": "bg-emerald-100 text-emerald-800",
  "Selling Guide": "bg-violet-100 text-violet-800",
  Lifestyle: "bg-rose-100 text-rose-800",
  Education: "bg-indigo-100 text-indigo-800",
};

// ─── BLOG POSTS ─────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    slug: "sweet-home-oregon-affordable-cascade-living",
    title: "Sweet Home, Oregon: The Most Affordable City in the Mid-Willamette Valley",
    excerpt:
      "At $330K average home price, Sweet Home offers Cascade Range access and small-town living at the lowest price point in the region. Here's what buyers need to know.",
    date: "April 10, 2026",
    isoDate: "2026-04-10",
    category: "Lifestyle",
    author: "Team Gillott",
    readTime: "5 min read",
    seoTitle: "Sweet Home Oregon Real Estate Guide 2026 | Affordable Cascade Living",
    seoDescription:
      "Sweet Home Oregon real estate guide. $330K avg price, outdoor recreation, neighborhoods, and why buyers are choosing Sweet Home over pricier valley alternatives.",
    highlights: [
      { label: "Avg Home Price", value: "$330,467", change: "-4.8%", direction: "down" },
      { label: "Active Listings", value: "49", change: "", direction: "flat" },
      { label: "Avg Days on Market", value: "102", change: "", direction: "flat" },
      { label: "Price per Sq Ft", value: "$212", change: "", direction: "flat" },
    ],
    content: [
      "Sweet Home, Oregon sits 12 miles east of Lebanon at the foot of the Cascade Range, and it's quietly become one of the best-value real estate markets in the Willamette Valley. With an average sold price of $330,467 in Q1 2026, it's the most affordable city [Team Gillott](/) serves — and the outdoor access is unmatched.",

      "## Why Sweet Home?",

      "The draw is simple: you get mountain-town living at valley prices. Foster Reservoir, Green Peter Lake, and the Santiam River are all within 15 minutes. McDowell Creek Falls and Cascadia State Park offer world-class hiking. The Oregon Jamboree brings 20,000+ visitors annually. And a 15-minute drive puts you in [Lebanon](/) for groceries, healthcare, and services.",

      "## The Market Right Now",

      "Sweet Home's market is buyer-friendly in Q1 2026. Prices declined 4.8% year-over-year, creating opportunity for those who've been priced out of [Albany](/cities/albany) or [Lebanon](/). With 49 active listings and only 37 sales in Q1, inventory is strong. Homes average 102 days on market, giving buyers time to negotiate.",

      "## Four Neighborhoods to Know",

      "[Downtown Sweet Home](/cities/sweet-home) ($250K–$340K) is the walkable core with local shops and updated older homes. North Sweet Home ($300K–$380K) has the newer subdivisions popular with families. Holley/South Valley ($350K–$500K) is where you'll find hobby farms and horse properties. And the Foster/Upper Santiam corridor ($280K–$450K) is the outdoor enthusiast's dream — waterfront properties near the reservoirs.",

      "## The Commute Factor",

      "Sweet Home is 15 minutes to [Lebanon](/) and 30 minutes to [Albany](/cities/albany) via US-20. Many residents work in Lebanon or Albany and enjoy Sweet Home's lower costs of living. The drive is scenic rather than stressful — no highway congestion, just the Santiam Canyon.",

      "## Who Should Consider Sweet Home?",

      "Sweet Home is ideal for outdoor enthusiasts, retirees on a fixed income, remote workers, and families who prioritize space over urban amenities. At $212 per square foot — the lowest in the mid-valley — your budget goes further here than anywhere else Team Gillott serves. Use our [city comparison tool](/cities/compare) to see how Sweet Home stacks up.",

      "If you're exploring options in the mid-Willamette Valley, Sweet Home deserves a serious look. Contact [Team Gillott](/) for a personalized tour.",
    ],
    relatedSlugs: [
      "q1-2026-lebanon-market-report",
      "5-reasons-families-moving-to-lebanon",
    ],
  },
  {
    slug: "best-neighborhoods-willamette-valley-2026",
    title: "Best Neighborhoods in the Willamette Valley: A City-by-City Guide",
    excerpt:
      "From Lebanon's walkable downtown to Corvallis's university district, here are the top neighborhoods across four mid-valley cities for every budget and lifestyle.",
    date: "April 10, 2026",
    isoDate: "2026-04-10",
    category: "Neighborhoods",
    author: "Team Gillott",
    readTime: "7 min read",
    seoTitle: "Best Neighborhoods Willamette Valley Oregon 2026 | Team Gillott",
    seoDescription:
      "Top neighborhoods in Lebanon, Albany, Corvallis, and Sweet Home Oregon. Price ranges, lifestyle, schools, and outdoor access for every budget.",
    content: [
      "Choosing where to live in the Willamette Valley comes down to more than just price. Each of the four cities Team Gillott serves has distinct neighborhoods with their own character. Here's the definitive guide for 2026.",

      "## Lebanon: Small-Town Heart, Big Value",

      "Lebanon ($377K average) offers four distinct areas. [South Lebanon](/neighborhoods/south-lebanon) ($280K–$380K) is the walkable downtown core with established homes and the weekly farmers market. [East Lebanon](/neighborhoods/east-lebanon) ($320K–$420K) sits in the Cascade foothills with larger lots and McDowell Creek Falls nearby. [North Lebanon](/neighborhoods/north-lebanon) ($350K–$450K) has modern builds, Sand Ridge Charter School, and easy Highway 20 commuting. And [Hamilton Creek](/neighborhoods/hamilton-creek) ($520K–$650K) is the premium address — estate-sized lots, creek frontage, and no HOA.",

      "## Albany: History Meets Convenience",

      "[Albany](/cities/albany) ($446K average) anchors the central valley with four neighborhoods. The Historic Districts ($280K–$450K) boast 700+ Victorian and Craftsman homes across four National Register districts — walkable and full of character. North Albany ($400K–$600K) is the family favorite with top schools and easy Corvallis access. East Albany ($350K–$500K) offers newer construction near I-5. South Albany ($320K–$420K) provides the most affordable entry with larger lots.",

      "## Corvallis: University Town Premium",

      "[Corvallis](/cities/corvallis) ($593K average) commands the highest prices but delivers nationally ranked schools and a vibrant downtown. North Corvallis ($500K–$750K) is the premier family area near Bald Hill. South Corvallis ($400K–$600K) has an artsy, walkable character near natural areas. West Corvallis/Philomath ($450K–$650K) features newer developments with valley views. Downtown/Campus ($350K–$550K) offers urban walkability near OSU.",

      "## Sweet Home: Maximum Value, Maximum Outdoors",

      "[Sweet Home](/cities/sweet-home) ($330K average) is the budget leader with unmatched outdoor access. Downtown ($250K–$340K) has the walkable main street with local shops. North Sweet Home ($300K–$380K) is where young families find new construction. Holley/South Valley ($350K–$500K) offers hobby farms and horse properties. And Foster/Upper Santiam ($280K–$450K) puts you minutes from Foster Reservoir and Green Peter Lake.",

      "## Quick Comparison by Budget",

      "Under $300K: Downtown Sweet Home or South Lebanon. $300K–$400K: North Sweet Home, North Lebanon, or South Albany. $400K–$500K: East Albany, West Corvallis, or Historic Albany. $500K+: Hamilton Creek, North Corvallis, or North Albany. These ranges are based on Q1 2026 MLS data and shift quarterly.",

      "## The Bottom Line",

      "The Willamette Valley offers something for every lifestyle and budget within a 30-minute driving radius. Whether you want a $250K starter near the Cascades or a $750K family home near Oregon State, Team Gillott can help you find the right neighborhood. Use our [interactive city comparison tool](/cities/compare) to explore the data, or contact [Team Gillott](/) for a personalized tour.",
    ],
    relatedSlugs: [
      "sweet-home-oregon-affordable-cascade-living",
      "q1-2026-lebanon-market-report",
    ],
  },
  {
    slug: "q1-2026-lebanon-market-report",
    title: "Lebanon Market Report: Q1 2026 -- Sales Up 21%, Prices Climb to $377K",
    excerpt:
      "Lebanon's residential market showed strong momentum in Q1 2026. Total sales reached 75 homes (up from 59 in Q1 2025), with the average sold price climbing to $377,115. Here's the full breakdown from the Willamette Valley MLS.",
    date: "April 10, 2026",
    isoDate: "2026-04-10",
    category: "Market Report",
    author: "Team Gillott",
    readTime: "6 min read",
    externalSourceUrl: teamUrl('/info/stats2'),
    seoTitle: "Lebanon Oregon Real Estate Market Report Q1 2026 | Team Gillott",
    seoDescription:
      "Q1 2026 Lebanon Oregon real estate market report. 75 homes sold, average price $377,115, 105 avg days on market. Data from Willamette Valley MLS.",
    highlights: [
      { label: "Avg Sold Price", value: "$377,115", change: "+3.4%", direction: "up" },
      { label: "Homes Sold (Q1)", value: "75", change: "+27%", direction: "up" },
      { label: "Avg Days on Market", value: "105", change: "+35%", direction: "down" },
      { label: "Active Listings", value: "46", change: "", direction: "flat" },
    ],
    content: [
      "Lebanon's residential real estate market gained significant traction in the first quarter of 2026, according to data from the Willamette Valley MLS as of March 31, 2026. Total home sales across both residential categories reached 75, a notable increase from 59 sales during the same period last year.",

      "## Residential Under 1 Acre",

      "The core residential segment (homes on less than 1 acre) saw 57 closed sales in Q1 2026, up from 47 in Q1 2025. The average sold price rose to $377,115, a 3.4% increase from last year's $364,842. The average list price of $379,815 indicates homes are selling very close to their asking price, with just a 0.7% spread between list and sale prices.",

      "Average days on market increased to 105 days, up from 78 days in Q1 2025. While this might suggest a cooling pace, it's important to note that Q1 is historically the slowest selling season, and the increase in total sales volume tells a more optimistic story about buyer activity.",

      "## Residential Over 1 Acre (Acreage Properties)",

      "The acreage market was particularly active, with 18 homes sold compared to just 12 in Q1 2025, a 50% increase. The average sold price for properties on more than 1 acre jumped to $715,672, up significantly from $678,537 last year. These properties take longer to sell, averaging 182 days on market, reflecting the specialized nature of rural and acreage purchases in the Lebanon area.",

      "## Current Inventory",

      "As of March 31, there were 46 active residential listings (under 1 acre) with an average of 58 days on market, and 42 active acreage listings averaging 123 days on market. Combined, Lebanon has 88 homes available for buyers, offering reasonable selection across price points.",

      "## How Lebanon Compares to Nearby Cities",

      "Lebanon continues to offer the strongest value proposition in the mid-Willamette Valley. At $377,115, the average home price is significantly below [Corvallis](/cities/corvallis) ($593,250) and more affordable than [Albany](/cities/albany) ($446,343). Only [Sweet Home](/cities/sweet-home) comes in lower at $330,467, though that market saw a 4.8% price decline year-over-year.",

      "Corvallis saw its average sold price rise 4.1% to $593,250 with 68 sales in Q1, while Albany posted 147 sales (the highest volume in the region) but experienced a slight 1.5% price decrease to $446,343.",

      "## County-Level Trends",

      "Linn County as a whole recorded 280 total sales in Q1 2026 (up from 273 in Q1 2025), with an average sold price of $393,707. Benton County saw 133 sales with an average price of $556,679. Both counties show steady activity compared to the post-2022 slowdown years.",

      "## Historical Context",

      "Looking at Q1 total sales over the past seven years, Lebanon's 75 sales in 2026 represent a meaningful recovery from the 59 sales in both 2023 and 2025, though still below the 2022 peak of 122. The market appears to be finding a sustainable rhythm after the volatility of the pandemic-era boom and subsequent correction.",

      "## What This Means for Buyers and Sellers",

      "For buyers: Lebanon remains the [best value in the region](/cities/compare), with prices roughly 36% below Corvallis. The increase in active inventory means more choices, and the longer days on market provide more negotiating room than during the frenzied 2021-2022 period.",

      "For sellers: Prices are rising, and the gap between list and sold prices is narrow, meaning well-priced homes are being received well by the market. The key is accurate pricing, as the longer average days on market suggest buyers are being selective.",

      "Data sourced from the Willamette Valley MLS, as of March 31, 2026. For a personalized market analysis of your property or neighborhood, contact [Team Gillott](/)",
    ],
    relatedSlugs: [
      "sweet-home-oregon-affordable-cascade-living",
      "5-reasons-families-moving-to-lebanon",
      "hamilton-creek-vs-south-lebanon",
    ],
  },
  {
    slug: "5-reasons-families-moving-to-lebanon",
    title: "5 Reasons Families Are Moving to Lebanon, Oregon",
    excerpt:
      "From affordable housing to top-rated schools and easy access to outdoor recreation, discover why families are choosing Lebanon over more expensive Willamette Valley alternatives.",
    date: "April 1, 2026",
    isoDate: "2026-04-01",
    category: "Lifestyle",
    author: "Team Gillott",
    readTime: "4 min read",
    seoTitle: "5 Reasons Families Are Moving to Lebanon Oregon | Team Gillott",
    seoDescription:
      "Why families choose Lebanon Oregon. Affordable homes, great schools, outdoor recreation, and community. Learn what makes Lebanon a top choice.",
    content: [
      "Lebanon, Oregon has been quietly attracting families from across the Willamette Valley and beyond. While cities like [Corvallis](/cities/corvallis) and [Albany](/cities/albany) get more name recognition, Lebanon offers a combination of affordability, community, and quality of life that's hard to beat. Here are five reasons families are making the move.",

      "## 1. Affordability That Actually Means Something",

      "With an average home price of $377,115 in Q1 2026, Lebanon offers homes at roughly 36% less than Corvallis and 16% less than Albany. For a family, that difference can mean the gap between a cramped starter home and a comfortable 3-bedroom with a yard. See our [full market report](/market-report) for the latest data.",

      "## 2. Strong School Options",

      "[Lebanon Community Schools](/schools) serve the area with several well-regarded elementary schools, a middle school, and Lebanon High School. The district has invested in both academics and extracurricular programs. For families with younger children, the smaller class sizes compared to larger Corvallis or Albany schools are a draw.",

      "## 3. Outdoor Recreation at Your Doorstep",

      "Lebanon sits at the gateway to the Cascade foothills. Cheadle Lake, Waterloo County Park, and McDowell Creek Falls are all within a short drive. The [Cascade foothills](/neighborhoods/east-lebanon) offer fishing, kayaking, and swimming in summer. For families who value weekend adventures without a long drive, the access is unmatched.",

      "## 4. A Genuine Small-Town Community",

      "The Strawberry Festival, Friday night football, and local coffee shops where the barista knows your name. Lebanon has the kind of community fabric that's become rare. Neighbors look out for each other, local businesses thrive, and there's a pace of life that lets families actually spend time together.",

      "## 5. Growing Without Losing Its Character",

      "Lebanon is growing, but thoughtfully. New construction in areas like [North Lebanon](/neighborhoods/north-lebanon) and [Hamilton Creek](/neighborhoods/hamilton-creek) is adding inventory without the overdevelopment that has changed the character of some other Willamette Valley towns. The city has invested in infrastructure, parks, and downtown revitalization while keeping the small-town feel intact.",

      "If you're considering a move to Lebanon, [Team Gillott](/) can help you explore neighborhoods, understand the market, and find the right fit for your family.",
    ],
    relatedSlugs: [
      "q1-2026-lebanon-market-report",
      "hamilton-creek-vs-south-lebanon",
    ],
  },
  {
    slug: "first-time-buyer-oregon-programs",
    title: "First-Time Buyer Guide: Oregon Programs That Can Save You Thousands",
    excerpt:
      "Oregon offers several down payment assistance and first-time buyer programs. Here's what's available in 2026 and how to qualify.",
    date: "March 25, 2026",
    isoDate: "2026-03-25",
    category: "Buying Guide",
    author: "Team Gillott",
    readTime: "5 min read",
    content: [
      "Buying your first home in Oregon doesn't have to mean scraping together a massive down payment. Several state and local programs exist specifically to help first-time buyers get into a home. Here's what's available as of 2026.",

      "## Oregon Bond Residential Loan Program",

      "Offered through Oregon Housing and Community Services (OHCS), this program provides below-market interest rates for first-time buyers. Income limits and purchase price caps apply, but for Lebanon's price range, most buyers will qualify. The program can be combined with down payment assistance.",

      "## Down Payment Assistance",

      "OHCS also offers the Oregon Down Payment Assistance program, which provides up to $15,000 toward your down payment. This is structured as a second mortgage with favorable terms. Combined with a competitive first mortgage rate, this can dramatically reduce what you need to bring to closing.",

      "## USDA Rural Development Loans",

      "[Lebanon](/) qualifies for USDA Rural Development loans, which offer zero down payment financing for eligible buyers. Income limits apply, but for a family of four, the limit is generous enough to cover most first-time buyers in the area. This is one of Lebanon's hidden advantages over larger cities like [Corvallis](/cities/corvallis) or [Albany](/cities/albany), which don't qualify.",

      "## VA Loans",

      "For veterans and active military, VA loans offer zero down payment with no private mortgage insurance. Combined with Lebanon's lower price point, this makes homeownership very accessible for military families.",

      "## What This Means in Real Numbers",

      "On a $377,000 home ([Lebanon's current average](/market-report)), a conventional loan with 5% down means $18,850 out of pocket. With Oregon's down payment assistance, that drops to roughly $3,850. A USDA loan brings it to zero down. The monthly payment difference between a 5% down conventional and a USDA loan on this price point is roughly $150/month in PMI savings.",

      "Ready to explore your options? [Team Gillott](/) works with lenders who specialize in these programs and can walk you through the process.",
    ],
    relatedSlugs: [
      "q1-2026-lebanon-market-report",
      "5-reasons-families-moving-to-lebanon",
    ],
  },
  {
    slug: "hamilton-creek-vs-south-lebanon",
    title: "Hamilton Creek vs South Lebanon: Which Neighborhood Fits You?",
    excerpt:
      "Two of Lebanon's most popular neighborhoods offer very different lifestyles. Here's a side-by-side comparison to help you decide.",
    date: "March 18, 2026",
    isoDate: "2026-03-18",
    category: "Neighborhoods",
    author: "Team Gillott",
    readTime: "4 min read",
    content: [
      "Lebanon has distinct neighborhoods, each with its own character. Two of the most searched are [Hamilton Creek](/neighborhoods/hamilton-creek) (the rural, upscale area) and [South Lebanon](/neighborhoods/south-lebanon) (the walkable, established core). Here's how they compare.",

      "## Price Point",

      "Hamilton Creek averages $520K-$650K, reflecting larger lots, newer construction, and acreage properties. South Lebanon comes in at $280K-$380K, making it the more accessible option for first-time buyers and young families. The price gap is significant, but so is what you get for it.",

      "## Lifestyle",

      "Hamilton Creek is quiet, rural, and private. Think larger lots, views of the Cascade foothills, and space for animals or gardens. It attracts buyers who want elbow room and don't mind a longer drive to town.",

      "South Lebanon is the opposite: walkable to downtown, close to schools and parks, and connected to the community. Historic homes sit alongside renovated properties, giving the area an established, lived-in character.",

      "## Days on Market",

      "Hamilton Creek properties tend to sit longer (60-90+ days) due to the higher price point and more specialized buyer pool. South Lebanon moves faster, with well-priced homes often going in 45-60 days.",

      "## Schools",

      "Both neighborhoods are served by Lebanon Community Schools. South Lebanon has the advantage of walkability to several elementary schools. Hamilton Creek families typically drive to school, but the trade-off is the rural environment kids grow up in.",

      "## The Bottom Line",

      "Choose [Hamilton Creek](/neighborhoods/hamilton-creek) if you want space, privacy, and a rural feel and have a higher budget. Choose [South Lebanon](/neighborhoods/south-lebanon) if you want walkability, community, and a lower entry point. Both are great places to live, just for different reasons.",

      "Want to tour properties in either neighborhood? [Team Gillott](/) knows every street in Lebanon and can help you find the right fit.",
    ],
    relatedSlugs: [
      "q1-2026-lebanon-market-report",
      "5-reasons-families-moving-to-lebanon",
    ],
  },
];

// ─── HELPER FUNCTIONS ───────────────────────────────────────

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getPost(slug);
  if (!post?.relatedSlugs) return [];
  return post.relatedSlugs
    .map((s) => getPost(s))
    .filter((p): p is BlogPost => p !== undefined);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
