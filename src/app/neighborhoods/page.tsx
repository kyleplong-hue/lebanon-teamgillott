import Link from 'next/link';
import { WebPageSchema } from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Lebanon, Oregon Neighborhoods | Team Gillott',
  description:
    'Explore all Lebanon neighborhoods including South Lebanon, East Lebanon, North Lebanon, and Hamilton Creek with detailed guides and market information.',
  keywords:
    'Lebanon neighborhoods, South Lebanon, East Lebanon, North Lebanon, Hamilton Creek, Lebanon OR',
};

const neighborhoods = [
  {
    id: 'south-lebanon',
    name: 'South Lebanon',
    description:
      'Close to downtown Lebanon with walkable access to Strawberry Plaza, shops, restaurants, and community events like the Annual Strawberry Festival.',
    priceRange: '$320K - $420K',
    highlights: [
      'Downtown proximity',
      'River Park nearby',
      'Walkable to amenities',
      'Community events',
    ],
    href: '/neighborhoods/south-lebanon',
  },
  {
    id: 'east-lebanon',
    name: 'East Lebanon',
    description:
      'Gateway to the Cascade foothills offering larger lots, rural charm with city convenience, and excellent outdoor recreation including McDowell Creek Falls and Cheadle Lake.',
    priceRange: '$350K - $475K',
    highlights: [
      'Larger lots',
      'Rural feel',
      'Mountain access',
      'Outdoor recreation',
    ],
    href: '/neighborhoods/east-lebanon',
  },
  {
    id: 'north-lebanon',
    name: 'North Lebanon',
    description:
      'Family-friendly neighborhoods with newer developments, proximity to the Lowe\'s Distribution Center for employment, and excellent Highway 20 access for Corvallis and Albany commutes.',
    priceRange: '$375K - $450K',
    highlights: [
      'New construction',
      'Family-friendly',
      'Employment hub access',
      'Easy commute',
    ],
    href: '/neighborhoods/north-lebanon',
  },
  {
    id: 'hamilton-creek',
    name: 'Hamilton Creek',
    description:
      'Upscale southwestern Lebanon with rolling hills, expansive green spaces, custom estates, and a premium price point for those seeking privacy and acreage.',
    priceRange: '$425K - $600K+',
    highlights: [
      'Premium estates',
      'Rolling hills',
      'Privacy & space',
      'Custom builds',
    ],
    href: '/neighborhoods/hamilton-creek',
  },
];

export default function NeighborhoodsIndex() {
  return (
    <>
      <WebPageSchema
        title="Lebanon, Oregon Neighborhoods"
        description="Explore all neighborhoods in Lebanon, Oregon including detailed guides for South, East, North Lebanon and Hamilton Creek."
        url="https://lebanon.teamgillott.com/neighborhoods"
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#0099cc] to-[#0077aa] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-sans">
            Lebanon, Oregon Neighborhoods
          </h1>
          <p className="text-lg text-blue-100">
            Discover distinct neighborhoods from downtown to the foothills, each offering unique
            character and lifestyle opportunities.
          </p>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {neighborhoods.map(neighborhood => (
              <div
                key={neighborhood.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-[#0099cc]"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-[#354652] mb-2 font-sans">
                    {neighborhood.name}
                  </h2>
                  <div className="text-[#ca3121] font-semibold mb-4">{neighborhood.priceRange}</div>
                  <p className="text-gray-700 mb-6">{neighborhood.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-[#354652] mb-3 uppercase tracking-wide font-sans">
                      Highlights
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {neighborhood.highlights.map(highlight => (
                        <span
                          key={highlight}
                          className="inline-block px-3 py-1 bg-[#ebeff2] text-[#354652] text-xs font-semibold rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={neighborhood.href}
                    className="inline-block px-6 py-3 bg-[#0099cc] text-white font-semibold rounded-lg hover:bg-[#0088bb] transition-colors duration-200"
                  >
                    Explore Full Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-gradient-to-r from-[#0099cc] to-[#0077aa] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-sans">Ready to Explore These Neighborhoods?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Contact Team Gillott to schedule a showing or get personalized neighborhood insights.
          </p>
          <a
            href="https://www.teamgillott.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#ca3121] text-white font-semibold rounded-lg hover:bg-[#b8270d] transition-colors duration-200"
          >
            Contact Team Gillott
          </a>
        </div>
      </section>
    </>
  );
}
