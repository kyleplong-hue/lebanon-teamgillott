import Link from 'next/link';
import { WebPageSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'South Lebanon Real Estate Guide | Team Gillott',
  description:
    'Discover South Lebanon neighborhoods with walkable downtown access, community events, and homes ranging from $320K-$420K. Professional real estate guide from Team Gillott.',
  keywords:
    'South Lebanon real estate, South Lebanon homes, Lebanon neighborhoods, Strawberry Plaza, Lebanon downtown',
};

export default function SouthLebanon() {
  return (
    <>
      <WebPageSchema
        title="South Lebanon Real Estate Guide"
        description="Complete guide to South Lebanon neighborhoods, homes, schools, and lifestyle. Explore properties close to downtown with walkable access to parks and amenities."
        url="https://lebanon.teamgillott.com/neighborhoods/south-lebanon"
      />
      <LocalBusinessSchema
        name="Team Gillott - South Lebanon Real Estate"
        description="Professional real estate services for South Lebanon, Oregon properties."
        url="https://www.teamgillott.com"
        areaServed={['South Lebanon', 'Lebanon', 'Corvallis', 'Albany']}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#0099cc] to-[#0077aa] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-sans">
            South Lebanon Real Estate Guide
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Close to downtown with walkable access to shops, restaurants, parks, and community
            events.
          </p>
          <div className="flex flex-wrap gap-4 text-lg font-semibold">
            <div>
              <div className="text-3xl text-[#ca3121]">$320K - $420K</div>
              <div className="text-blue-100 text-sm">Typical Price Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">About South Lebanon</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Character & Location</h3>
              <p className="text-gray-700 mb-4">
                South Lebanon is the heart of our community, characterized by its proximity to
                downtown Lebanon and easy walkability to essential amenities. This vibrant area
                combines the charm of established neighborhoods with modern conveniences.
              </p>
              <p className="text-gray-700">
                Residents enjoy direct access to Strawberry Plaza shopping, local restaurants,
                coffee shops, and year-round community events including the beloved Annual Strawberry
                Festival.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Property Types</h3>
              <p className="text-gray-700 mb-4">
                South Lebanon features a diverse mix of housing styles, from vintage charm single-family
                homes to newer construction. Properties range from small starter homes to larger family
                residences.
              </p>
              <p className="text-gray-700">
                Many homes feature updated kitchens and bathrooms while maintaining neighborhood character.
                Lot sizes vary, with some properties backing to neighborhood parks.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#0099cc] mb-6 font-sans">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: '🏙️',
                title: 'Downtown Proximity',
                description: 'Walking distance to shops, restaurants, and services',
              },
              {
                icon: '🛍️',
                title: 'Strawberry Plaza',
                description: 'Major shopping and dining destination in the neighborhood',
              },
              {
                icon: '🌳',
                title: 'River Park & Century Park',
                description: 'Beautiful parks for recreation and community gatherings',
              },
              {
                icon: '🎉',
                title: 'Community Events',
                description: 'Famous Strawberry Festival and year-round activities',
              },
            ].map((highlight, idx) => (
              <div key={idx} className="bg-[#ebeff2] p-6 rounded-lg">
                <div className="text-3xl mb-3">{highlight.icon}</div>
                <h4 className="font-bold text-[#354652] mb-2 font-sans">{highlight.title}</h4>
                <p className="text-gray-700 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">Schools & Education</h2>
          <div className="bg-white p-8 rounded-lg border-l-4 border-[#0099cc]">
            <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">
              Lebanon Community Schools
            </h3>
            <p className="text-gray-700 mb-4">
              South Lebanon is served by the Lebanon Community School District, which provides
              comprehensive K-12 education with strong community involvement.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Multiple elementary and secondary schools</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Active parent organizations and community support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Access to regional college and career pathways</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Residents Love */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">What Residents Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Downtown Walking Distance',
              'Community Events & Festivals',
              'Park Access & Recreation',
              'Diverse Local Businesses',
              'Established Neighborhoods',
              'Easy Access to Shopping',
              'Strong Sense of Community',
              'Central Lebanon Location',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-[#ebeff2] rounded-lg">
                <div className="text-2xl text-[#0099cc]">✓</div>
                <span className="font-semibold text-[#354652]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="w-full bg-gradient-to-r from-[#0099cc] to-[#0077aa] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center font-sans">Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-sans">$370K</div>
              <p className="text-blue-100">Average Home Price</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-sans">68 days</div>
              <p className="text-blue-100">Avg Days on Market</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-sans">45%</div>
              <p className="text-blue-100">Inventory Turnover</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Neighborhoods */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">
            Explore Other Lebanon Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/neighborhoods/east-lebanon"
              className="p-4 bg-[#ebeff2] rounded-lg hover:bg-[#dde5ea] transition-colors"
            >
              <h3 className="font-bold text-[#354652] mb-2 font-sans">East Lebanon</h3>
              <p className="text-sm text-gray-700">Gateway to Cascade foothills</p>
            </Link>
            <Link
              href="/neighborhoods/north-lebanon"
              className="p-4 bg-[#ebeff2] rounded-lg hover:bg-[#dde5ea] transition-colors"
            >
              <h3 className="font-bold text-[#354652] mb-2 font-sans">North Lebanon</h3>
              <p className="text-sm text-gray-700">Family-friendly developments</p>
            </Link>
            <Link
              href="/neighborhoods/hamilton-creek"
              className="p-4 bg-[#ebeff2] rounded-lg hover:bg-[#dde5ea] transition-colors"
            >
              <h3 className="font-bold text-[#354652] mb-2 font-sans">Hamilton Creek</h3>
              <p className="text-sm text-gray-700">Upscale custom estates</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to Find Your South Lebanon Home?"
        subheading="Connect with Team Gillott to explore available properties and neighborhoods."
        ctaText="Search Homes in South Lebanon"
        ctaUrl="https://www.teamgillott.com"
      />
    </>
  );
}
