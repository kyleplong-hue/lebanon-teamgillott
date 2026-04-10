import Link from 'next/link';
import { WebPageSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Lebanon, Oregon Real Estate Guide | Team Gillott',
  description:
    'Explore Lebanon, Oregon real estate with Team Gillott. Discover neighborhoods, market insights, and find your perfect home in Lebanon, Corvallis, or Albany.',
  keywords:
    'Lebanon Oregon real estate, homes for sale Lebanon OR, Team Gillott, Lebanon neighborhoods',
  openGraph: {
    title: 'Lebanon, Oregon Real Estate Guide',
    description:
      'Discover neighborhoods and find homes in Lebanon, Oregon with Team Gillott real estate services.',
    type: 'website',
  },
};

const neighborhoods = [
  {
    id: 'south-lebanon',
    name: 'South Lebanon',
    description: 'Close to downtown with walkable shops, restaurants, and community events.',
    href: '/neighborhoods/south-lebanon',
  },
  {
    id: 'east-lebanon',
    name: 'East Lebanon',
    description: 'Gateway to scenic Cascade foothills with outdoor recreation and larger lots.',
    href: '/neighborhoods/east-lebanon',
  },
  {
    id: 'north-lebanon',
    name: 'North Lebanon',
    description: 'Family-friendly with newer developments and excellent commuter access.',
    href: '/neighborhoods/north-lebanon',
  },
  {
    id: 'hamilton-creek',
    name: 'Hamilton Creek',
    description: 'Upscale, private estates on rolling hills with expansive green spaces.',
    href: '/neighborhoods/hamilton-creek',
  },
];

const stats = [
  { label: 'Median Price', value: '$395K' },
  { label: 'Avg Days on Market', value: '65 days' },
  { label: 'Population', value: '19,950' },
  { label: 'YoY Growth', value: '+4.6%' },
];

export default function Home() {
  return (
    <>
      <WebPageSchema
        title="Lebanon, Oregon Real Estate Guide"
        description="Explore neighborhoods and find your perfect home in Lebanon, Oregon with Team Gillott real estate services."
        url="https://lebanon.teamgillott.com"
      />
      <LocalBusinessSchema
        name="Team Gillott - Lebanon Real Estate"
        description="Professional real estate services serving Lebanon, Corvallis, and Albany, Oregon."
        url="https://www.teamgillott.com"
        areaServed={['Lebanon', 'Corvallis', 'Albany']}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#0099cc] to-[#0077aa] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-sans">
            Your Guide to Lebanon, Oregon Real Estate
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover neighborhoods, market insights, and find your perfect home. Team Gillott serves
            Lebanon, Corvallis, and Albany with professional real estate expertise.
          </p>
          <a
            href="https://www.teamgillott.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#ca3121] text-white font-semibold text-lg rounded-lg hover:bg-[#b8270d] transition-colors duration-200"
          >
            Search Homes
          </a>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#0099cc] font-sans mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Preview Grid */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#354652] mb-12 text-center font-sans">
            Explore Lebanon Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map(neighborhood => (
              <Link
                key={neighborhood.id}
                href={neighborhood.href}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-[#0099cc]"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#354652] mb-3 font-sans">
                    {neighborhood.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{neighborhood.description}</p>
                  <div className="text-[#0099cc] font-semibold flex items-center gap-2">
                    Explore Guide <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lebanon Section */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#354652] mb-8 text-center font-sans">
            Why Lebanon?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Location & Access</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Just 25 minutes to Corvallis and Albany</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Easy Highway 20 access for regional commutes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Strategic location between Willamette Valley cities</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Natural Beauty</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Over 300 acres of parks and green spaces</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Gateway to Cascade foothills for outdoor recreation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Scenic hiking, water recreation, and nature trails</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Growing Economy</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Lowe's Distribution Center brings employment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Samaritan Hospital serves regional healthcare</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Thriving community events and local businesses</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Affordability</h3>
              <div className="bg-[#ebeff2] p-6 rounded-lg">
                <div className="mb-4">
                  <p className="text-gray-600 text-sm mb-2">Lebanon Median Home Price</p>
                  <p className="text-3xl font-bold text-[#0099cc] font-sans">$395K</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Corvallis Median Home Price</p>
                  <p className="text-3xl font-bold text-[#ca3121] font-sans">$565K</p>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  30% more affordable than nearby Corvallis while maintaining excellent access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Snapshot Teaser */}
      <section className="w-full bg-gradient-to-r from-[#0099cc] via-[#0088bb] to-[#0077aa] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-sans">Market Snapshot</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Get the latest Lebanon real estate market data, trends, and insights.
          </p>
          <Link
            href="/market-report"
            className="inline-block px-6 py-3 bg-white text-[#0099cc] font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            View Full Market Report
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Find Your Lebanon Home?"
        subheading="Let Team Gillott guide you through every step of your real estate journey."
        ctaText="Start Your Search"
        ctaUrl="https://www.teamgillott.com"
      />
    </>
  );
}
