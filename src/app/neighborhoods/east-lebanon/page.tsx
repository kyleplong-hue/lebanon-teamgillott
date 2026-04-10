import Link from 'next/link';
import { WebPageSchema, LocalBusinessSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'East Lebanon Real Estate Guide | Team Gillott',
  description:
    'Discover East Lebanon with gateway to Cascade foothills, larger lots, outdoor recreation, and homes ranging from $350K-$475K. Professional real estate guide from Team Gillott.',
  keywords:
    'East Lebanon real estate, East Lebanon homes, McDowell Creek Falls, Cheadle Lake, Lebanon neighborhoods',
};

export default function EastLebanon() {
  return (
    <>
      <WebPageSchema
        title="East Lebanon Real Estate Guide"
        description="Complete guide to East Lebanon neighborhoods, homes with larger lots, outdoor recreation access, and lifestyle. Gateway to Cascade foothills hiking and lakes."
        url="https://lebanon.teamgillott.com/neighborhoods/east-lebanon"
      />
      <LocalBusinessSchema
        name="Team Gillott - East Lebanon Real Estate"
        description="Professional real estate services for East Lebanon, Oregon properties."
        url="https://www.teamgillott.com"
        areaServed={['East Lebanon', 'Lebanon', 'Corvallis', 'Albany']}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#0099cc] to-[#0077aa] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-sans">
            East Lebanon Real Estate Guide
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Gateway to Cascade foothills with larger lots, rural character, and abundant outdoor
            recreation.
          </p>
          <div className="flex flex-wrap gap-4 text-lg font-semibold">
            <div>
              <div className="text-3xl text-[#ca3121]">$350K - $475K</div>
              <div className="text-blue-100 text-sm">Typical Price Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">About East Lebanon</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Character & Location</h3>
              <p className="text-gray-700 mb-4">
                East Lebanon is Lebanon's gateway to the natural wonders of the Cascade foothills.
                This area offers a unique blend of rural charm and city convenience, perfect for
                those seeking more space and outdoor lifestyle opportunities.
              </p>
              <p className="text-gray-700">
                Larger lots provide room for gardens, workshops, and outdoor pursuits while remaining
                convenient to downtown Lebanon and surrounding communities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Property Types</h3>
              <p className="text-gray-700 mb-4">
                East Lebanon features a range of properties from smaller acreage homesteads to
                mid-sized rural estates. Many homes sit on half-acre to multi-acre parcels.
              </p>
              <p className="text-gray-700">
                Properties often include mature trees, privacy, and views of surrounding foothills.
                Popular for those who want horses, gardens, or simply more personal outdoor space.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#0099cc] mb-6 font-sans">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: '⛰️',
                title: 'Cascade Access',
                description: 'Gateway to hiking, camping, and mountain recreation',
              },
              {
                icon: '🌲',
                title: 'McDowell Creek Falls',
                description: 'Popular hiking destination with scenic waterfall',
              },
              {
                icon: '💧',
                title: 'Cheadle Lake',
                description: 'Water recreation and scenic lake activities nearby',
              },
              {
                icon: '🏞️',
                title: 'Larger Lots',
                description: 'Properties with more land for privacy and outdoor space',
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

      {/* Outdoor Recreation Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#ebeff2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 font-sans">Outdoor Recreation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Hiking & Nature</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>McDowell Creek Falls Trail - beautiful waterfall hike</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Cascade Range foothills with numerous trails</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Scenic viewpoints and old-growth forest access</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0099cc] mb-4 font-sans">Water Activities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Cheadle Lake for swimming, kayaking, and picnicking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Fish hatchery visits and wildlife viewing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ca3121] font-bold">•</span>
                  <span>Pleasant year-round water recreation opportunities</span>
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
              East Lebanon families benefit from the Lebanon Community School District with school bus
              service throughout the area and strong rural community values.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Quality education in a rural community setting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Strong connection to outdoor education and nature programs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ca3121] font-bold">•</span>
                <span>Regional college and career preparation pathways</span>
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
              'Mountain Access & Hiking',
              'Larger Home Sites',
              'Privacy & Seclusion',
              'Outdoor Recreation',
              'Lake Activities',
              'Rural Character',
              'Scenic Views',
              'Wildlife & Nature',
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
              <div className="text-4xl font-bold mb-2 font-sans">72 days</div>
              <p className="text-blue-100">Avg Days on Market</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-sans">38%</div>
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
        heading="Ready to Find Your East Lebanon Home?"
        subheading="Connect with Team Gillott to explore properties and experience the outdoor lifestyle."
        ctaText="Search Homes in East Lebanon"
        ctaUrl="https://www.teamgillott.com"
      />
    </>
  );
}
