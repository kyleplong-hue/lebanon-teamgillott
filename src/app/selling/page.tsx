import { WebPageSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Selling Your Lebanon Home Guide | Team Gillott',
  description:
    'Complete guide to selling your home in Lebanon, Oregon. Learn our proven process for getting top dollar and selling faster.',
  keywords:
    'sell home Lebanon Oregon, home selling guide, real estate tips, sell my house',
  openGraph: {
    title: 'Selling Your Lebanon Home Guide',
    description:
      'A step-by-step guide to selling your Lebanon, Oregon home with Team Gillott real estate services.',
    type: 'website',
  },
};

const sellingSteps = [
  {
    number: 1,
    title: 'Get a Free CMA',
    description:
      'We analyze comparable sales in your neighborhood to price your home right. Lebanon median is $395K but varies significantly by area ($320K–$600K+). Proper pricing is key to attracting qualified buyers and getting top dollar.',
  },
  {
    number: 2,
    title: 'Prepare Your Home',
    description:
      'Staging tips specific to the Lebanon market: curb appeal matters in smaller markets, declutter, fresh paint, and highlight outdoor spaces. Lebanon buyers love outdoor access and natural surroundings.',
  },
  {
    number: 3,
    title: 'List & Market',
    description:
      'Professional photography, MLS listing, Google Business Profile posts, social media promotion, targeted digital ads, and open house strategy. We leverage every channel to get your home in front of qualified buyers.',
  },
  {
    number: 4,
    title: 'Negotiate & Close',
    description:
      'Current market: homes get 2 offers average, selling in 65 days. We handle inspections, appraisals, title work, and closing coordination to ensure a smooth closing.',
  },
];

const whyChoose = [
  {
    title: 'Local Market Expertise',
    description: 'Deep knowledge of Lebanon neighborhoods, pricing trends, and buyer behavior. We know what works.',
  },
  {
    title: 'Lebanon-Specific Pricing',
    description:
      'Smart pricing based on neighborhood comparables. We get your home in front of the right buyers at the right price.',
  },
  {
    title: 'Digital Marketing',
    description:
      'Comprehensive online strategy including professional photography, 3D tours, SEO, Google Business Profile optimization, social media, and targeted digital ads.',
  },
  {
    title: 'Full-Service Support',
    description:
      'From listing to closing, we handle inspections, appraisals, title coordination, and all closing logistics.',
  },
];

export default function SellingPage() {
  return (
    <>
      <WebPageSchema
        title="Selling Your Lebanon, Oregon Home — A Complete Guide"
        description="Step-by-step guide to selling your Lebanon home with Team Gillott. Learn our proven selling process."
        url="https://lebanon.teamgillott.com/selling"
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#ca3121] to-[#b8270d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 font-sans">
            Selling Your Lebanon, Oregon Home — A Complete Guide
          </h1>
          <p className="text-lg sm:text-xl text-red-100 max-w-2xl mx-auto">
            Lebanon homes are selling 34.5% faster than last year — seller leverage is strong heading into spring 2026.
          </p>
        </div>
      </section>

      {/* Market Context */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ca3121] font-sans mb-2">
                $395K
              </div>
              <p className="text-gray-700 text-sm">
                Lebanon Median Home Price
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ca3121] font-sans mb-2">
                65 days
              </div>
              <p className="text-gray-700 text-sm">
                Average Days on Market
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ca3121] font-sans mb-2">
                2 offers
              </div>
              <p className="text-gray-700 text-sm">
                Average Competing Offers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four-Step Process */}
      <section className="w-full bg-[#ebeff2] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#354652] mb-12 text-center font-sans">
            Our Four-Step Selling Process
          </h2>

          <div className="space-y-8">
            {sellingSteps.map(step => (
              <div
                key={step.number}
                className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#ca3121]"
              >
                <div className="flex gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#ca3121] text-white font-bold text-xl font-sans">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#354652] mb-3 font-sans">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sell With Team Gillott */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#354652] mb-12 text-center font-sans">
            Why Sell With Team Gillott?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#ca3121] text-white font-bold font-sans">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#354652] mb-2 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling Timeline */}
      <section className="w-full bg-[#ebeff2] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#354652] mb-12 text-center font-sans">
            Typical Timeline
          </h2>

          <div className="space-y-4">
            {[
              { phase: 'Initial Consultation & CMA', duration: '1 week' },
              { phase: 'Home Staging & Photography', duration: '1–2 weeks' },
              { phase: 'Marketing Launch & Showings', duration: 'Ongoing' },
              { phase: 'Offer Review & Negotiation', duration: '1–3 weeks' },
              { phase: 'Inspection Period & Appraisal', duration: '1–2 weeks' },
              { phase: 'Closing Coordination', duration: '1–2 weeks' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-[#ca3121] font-sans min-w-12">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#354652]">{item.phase}</p>
                </div>
                <div className="text-gray-600 text-sm">{item.duration}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-700 text-sm">
            Total time to closing: typically 45–90 days depending on market conditions and your situation.
          </p>
        </div>
      </section>

      {/* Price Range by Area */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#354652] mb-12 text-center font-sans">
            Lebanon Pricing by Neighborhood
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#ca3121]">
                  <th className="text-left py-4 px-4 font-bold text-[#354652] text-sm">
                    Neighborhood
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-[#354652] text-sm">
                    Median Price
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-[#354652] text-sm">
                    Range
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-[#354652] text-sm">
                    Days on Market
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    area: 'South Lebanon',
                    median: '$380K',
                    range: '$320K–$480K',
                    dom: '58 days',
                  },
                  {
                    area: 'East Lebanon',
                    median: '$395K',
                    range: '$350K–$550K',
                    dom: '62 days',
                  },
                  {
                    area: 'North Lebanon',
                    median: '$410K',
                    range: '$370K–$520K',
                    dom: '68 days',
                  },
                  {
                    area: 'Hamilton Creek',
                    median: '$550K',
                    range: '$480K–$750K+',
                    dom: '75 days',
                  },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`border-b ${
                      idx % 2 === 0 ? 'bg-[#ebeff2]' : 'bg-white'
                    }`}
                  >
                    <td className="py-4 px-4 text-[#354652] font-semibold">
                      {item.area}
                    </td>
                    <td className="py-4 px-4 text-gray-700">{item.median}</td>
                    <td className="py-4 px-4 text-gray-700">{item.range}</td>
                    <td className="py-4 px-4 text-gray-700">{item.dom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-center text-gray-700 text-sm">
            * Data represents recent market trends in Lebanon, Oregon. Prices vary by condition, lot size, and amenities.
          </p>
        </div>
      </section>

      {/* Staging Tips */}
      <section className="w-full bg-[#ebeff2] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#354652] mb-12 text-center font-sans">
            Home Staging Tips for Lebanon Buyers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Curb Appeal',
                tips: [
                  'Fresh exterior paint or power wash',
                  'Landscaping and mulch',
                  'Welcoming front door with new hardware',
                ],
              },
              {
                title: 'Interior Presentation',
                tips: [
                  'Declutter and depersonalize',
                  'Neutral paint colors (whites, grays, beiges)',
                  'Clean, bright, and light',
                ],
              },
              {
                title: 'Outdoor Spaces',
                tips: [
                  'Highlight decks and patios',
                  'Create outdoor living zones',
                  'Emphasize garden spaces and views',
                ],
              },
              {
                title: 'Key Rooms',
                tips: [
                  'Modern kitchen finishes',
                  'Fresh bathrooms with updated fixtures',
                  'Bedroom staging emphasizes space',
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#354652] mb-4 font-sans">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIdx) => (
                    <li key={tipIdx} className="flex gap-3 text-gray-700">
                      <span className="text-[#ca3121] font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#ca3121] to-[#b8270d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-sans">
            Ready to Sell?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Get your free home valuation today and discover what your Lebanon home is worth in today's market.
          </p>
          <a
            href="https://www.teamgillott.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-[#ca3121] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get Your Free Home Valuation
          </a>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Find Your Perfect Buyer?"
        subheading="Let Team Gillott guide you through a successful home sale."
        ctaText="Schedule Your Consultation"
        ctaUrl="https://www.teamgillott.com"
      />
    </>
  );
}
