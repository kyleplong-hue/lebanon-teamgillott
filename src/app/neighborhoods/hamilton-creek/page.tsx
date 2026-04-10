import Link from 'next/link';
import { WebPageSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Hamilton Creek Real Estate Guide | Team Gillott',
  description:
    'Discover Hamilton Creek upscale estate properties with rolling hills, privacy, and custom homes ranging from $425K-$600K+. Premium Lebanon real estate from Team Gillott.',
  keywords:
    'Hamilton Creek real estate, Hamilton Creek Lebanon, luxury homes Lebanon OR, custom estates, Lebanon premium properties',
};

export default function HamiltonCreek() {
  return (
    <>
      <WebPageSchema
        title="Hamilton Creek Real Estate Guide"
        description="Complete guide to Hamilton Creek upscale neighborhoods with premium custom estates, rolling hills, and privacy in Lebanon, Oregon."
        url="https://lebanon.teamgillott.com/neighborhoods/hamilton-creek"
      />
      <LocalBusinessSchema
        name="Team Gillott - Hamilton Creek Real Estate"
        description="Professional real estate services for Hamilton Creek, Oregon premium properties."
        url="https://www.teamgillott.com"
        areaServed={['Hamilton Creek', 'Lebanon', 'Corvallis', 'Albany']}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#0099cc] to-[#0077aa] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-sans">
            Hamilton Creek Real Estate Guide
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Southwestern Lebanon's upscale neighborhoods featuring rolling hills, custom estates,
            and premium privacy.
          </p>
          <div className="flex flex-wrap gap-4 text-lg font-semibold">
            <div>
              <div className="text-3xl text-[#ca3121]">$425K - $600K+</div>
              <div className="text-blue-100 text-sm">Premium Price Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">About Hamilton Creek</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Character & Location</h3>
              <p className="text-gray-700 mb-4">
                Hamilton Creek represents Lebanon's most prestigious neighborhood. Located in
                southwestern Lebanon, this area features rolling hills, expansive green spaces, and
                distinctly upscale properties designed for those seeking the finest in rural Oregon
                living.
              </p>
              <p className="text-gray-700">
                Properties typically sit on multiple acres with views, privacy, and space for horses,
                gardens, and extensive outdoor pursuits. This is Lebanon's signature luxury community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Property Types</h3>
              <p className="text-gray-700 mb-4">
                Hamilton Creek features custom estates, luxury homes, and upscale properties. Many homes
                are custom-built with high-end finishes, expansive floor plans, and premium materials.
              </p>
              <p className="text-gray-700">
                Properties include acreage estates (often 2-10+ acres), custom designs, premium
                architectures, and often feature guest houses, workshops, stables, and extensive
                landscaping.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#0099cc] mb-6 font-sans">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: '👑',
                title: 'Upscale Community',
                description: 'Lebanon\'s most prestigious neighborhoods and estates',
              },
              {
                icon: '🏞️',
                title: 'Rolling Hills',
                description: 'Scenic terrain with views and natural beauty',
              },
              {
                icon: '🏡',
                title: 'Custom Estates',
                description: 'Premium builds with luxury finishes and design',
              },
              {
                icon: '🌳',
                title: 'Privacy & Space',
                description: 'Multi-acre parcels for ultimate seclusion',
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

      {/* Luxury Living Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#ebeff2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">
            The Hamilton Creek Lifestyle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Property Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>2-10+ acre estate parcels with room for horses</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Custom architectural homes with premium finishes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Guest houses, workshops, and outbuildings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Gated entries and professional landscaping</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Outdoor Living</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Horse farms and equestrian facilities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Gardens, orchards, and private recreation areas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Hill views and natural surroundings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Room for hobby farms and personal projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">Schools & Education</h2>
          <div className="bg-[#ebeff2] p-8 rounded-lg border-l-4 border-[#0099cc]">
            <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">
              Lebanon Community Schools
            </h3>
            <p className="text-gray-700 mb-4">
              Hamilton Creek families have access to Lebanon Community School District with school
              transportation and comprehensive educational services.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Quality education within a rural estate setting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>School transportation to and from Hamilton Creek</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>College prep and advanced learning programs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Regional college and university pathways</span>
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
              'Premium Estates & Acreage',
              'Absolute Privacy',
              'Scenic Rolling Hills',
              'Custom Homes',
              'Space for Horses & Projects',
              'Exclusive Community',
              'Rural Luxury Living',
              'Natural Beauty & Views',
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
              <div className="text-4xl font-bold mb-2 font-sans">$525K</div>
              <p className="text-blue-100">Average Home Price</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-sans">85 days</div>
              <p className="text-blue-100">Avg Days on Market</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-sans">28%</div>
              <p className="text-blue-100">Inventory Turnover</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">
            A Premium Investment in Your Lifestyle
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Hamilton Creek represents Lebanon's most prestigious address. These estates combine the
            tranquility of rural living with the convenience of being close to Corvallis and Albany.
            Properties in this neighborhood are carefully maintained, architecturally distinguished,
            and situated on substantial acreage.
          </p>
          <p className="text-gray-700">
            Whether you're seeking a horse farm, a custom estate, or the ultimate in privacy and
            space, Hamilton Creek offers Lebanon's finest residential properties. These homes
            appreciate steadily and represent a significant lifestyle investment.
          </p>
        </div>
      </section>

      {/* Nearby Neighborhoods */}
      <section className="w-full bg-[#ebeff2] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">
            Explore Other Lebanon Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/neighborhoods/south-lebanon"
              className="p-4 bg-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-[#354652] mb-2 font-sans">South Lebanon</h3>
              <p className="text-sm text-gray-700">Close to downtown</p>
            </Link>
            <Link
              href="/neighborhoods/east-lebanon"
              className="p-4 bg-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-[#354652] mb-2 font-sans">East Lebanon</h3>
              <p className="text-sm text-gray-700">Gateway to Cascades</p>
            </Link>
            <Link
              href="/neighborhoods/north-lebanon"
              className="p-4 bg-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-[#354652] mb-2 font-sans">North Lebanon</h3>
              <p className="text-sm text-gray-700">Family neighborhoods</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to Own Your Hamilton Creek Estate?"
        subheading="Connect with Team Gillott for exclusive showings of premium properties and expert guidance."
        ctaText="Explore Hamilton Creek Properties"
        ctaUrl="https://www.teamgillott.com"
      />
    </>
  );
}
