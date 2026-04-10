import Link from 'next/link';
import { WebPageSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'North Lebanon Real Estate Guide | Team Gillott',
  description:
    'Discover North Lebanon family-friendly neighborhoods with newer construction, employment hub access, and homes ranging from $375K-$450K. Perfect for commuters. Real estate guide from Team Gillott.',
  keywords:
    'North Lebanon real estate, North Lebanon homes, family neighborhoods, Lebanon newer construction, Lowes Distribution Center',
};

export default function NorthLebanon() {
  return (
    <>
      <WebPageSchema
        title="North Lebanon Real Estate Guide"
        description="Complete guide to North Lebanon neighborhoods with newer developments, family-friendly features, and excellent commute access to Corvallis and Albany."
        url="https://lebanon.teamgillott.com/neighborhoods/north-lebanon"
      />
      <LocalBusinessSchema
        name="Team Gillott - North Lebanon Real Estate"
        description="Professional real estate services for North Lebanon, Oregon properties."
        url="https://www.teamgillott.com"
        areaServed={['North Lebanon', 'Lebanon', 'Corvallis', 'Albany']}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#0099cc] to-[#0077aa] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-sans">
            North Lebanon Real Estate Guide
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Family-friendly neighborhoods with newer developments, excellent schools, and easy
            commute access to Corvallis and Albany.
          </p>
          <div className="flex flex-wrap gap-4 text-lg font-semibold">
            <div>
              <div className="text-3xl text-[#ca3121]">$375K - $450K</div>
              <div className="text-blue-100 text-sm">Typical Price Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">About North Lebanon</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Character & Location</h3>
              <p className="text-gray-700 mb-4">
                North Lebanon is the modern, family-oriented heart of our community. With newer
                neighborhoods, quality schools, and strategic location near major employers like the
                Lowe's Distribution Center, this area appeals to families and working professionals.
              </p>
              <p className="text-gray-700">
                Excellent Highway 20 access makes commuting to Corvallis and Albany seamless for those
                working in the region's universities and businesses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Property Types</h3>
              <p className="text-gray-700 mb-4">
                North Lebanon features primarily newer construction and modern subdivisions designed
                with families in mind. Properties include contemporary homes with updated floor plans
                and energy-efficient features.
              </p>
              <p className="text-gray-700">
                Neighborhoods offer consistent architecture, well-maintained common areas, and
                proximity to parks and schools. Many homes include 3-4 bedrooms and two-car garages.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#0099cc] mb-6 font-sans">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Family-Friendly',
                description: 'Newer developments designed for families',
              },
              {
                icon: '🏫',
                title: 'Quality Schools',
                description: 'Excellent schools and educational opportunities',
              },
              {
                icon: '💼',
                title: 'Employment Hub',
                description: 'Near Lowe\'s Distribution Center and regional jobs',
              },
              {
                icon: '🛣️',
                title: 'Easy Commute',
                description: 'Quick access to Corvallis, Albany, and Highway 20',
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

      {/* Employment & Commuting */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#ebeff2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">Employment & Commuting</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Local Employment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Lowe's Distribution Center - major regional employer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Samaritan Hospital healthcare employment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Growing retail and service sector opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Easy Regional Access</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>25 minutes to Corvallis and OSU employment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>30 minutes to Albany and regional businesses</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Direct Highway 20 access for smooth commuting</span>
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
              North Lebanon has direct access to the Lebanon Community School District with multiple
              schools serving the area and modern school facilities.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Modern school buildings and facilities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Strong academic programs and extracurricular activities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Community involvement and parent engagement</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Access to college prep and career pathways</span>
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
              'Modern Homes & Construction',
              'Great Schools Nearby',
              'Easy Commute to Work',
              'Family-Friendly Community',
              'Newer Subdivisions',
              'Convenient Amenities',
              'Growing Neighborhoods',
              'Quality of Life',
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
              <div className="text-4xl font-bold mb-2 font-sans">$412K</div>
              <p className="text-blue-100">Average Home Price</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-sans">62 days</div>
              <p className="text-blue-100">Avg Days on Market</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-sans">52%</div>
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
              href="/neighborhoods/south-lebanon"
              className="p-4 bg-[#ebeff2] rounded-lg hover:bg-[#dde5ea] transition-colors"
            >
              <h3 className="font-bold text-[#354652] mb-2 font-sans">South Lebanon</h3>
              <p className="text-sm text-gray-700">Close to downtown</p>
            </Link>
            <Link
              href="/neighborhoods/east-lebanon"
              className="p-4 bg-[#ebeff2] rounded-lg hover:bg-[#dde5ea] transition-colors"
            >
              <h3 className="font-bold text-[#354652] mb-2 font-sans">East Lebanon</h3>
              <p className="text-sm text-gray-700">Gateway to Cascades</p>
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
        heading="Ready to Find Your North Lebanon Home?"
        subheading="Connect with Team Gillott to explore family-friendly neighborhoods and new construction."
        ctaText="Search Homes in North Lebanon"
        ctaUrl="https://www.teamgillott.com"
      />
    </>
  );
}
