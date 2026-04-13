import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { WebPageSchema } from '@/components/SchemaMarkup';
import { siteUrl, TEAM_URL } from '@/data/config';
import { FAQAccordion } from './faq-accordion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'median-home-price',
    question: 'What is the median home price in Lebanon, Oregon?',
    answer:
      'As of April 2026, the median home price in Lebanon is approximately $395,000. This represents a 4.6% year-over-year increase and makes Lebanon significantly more affordable than neighboring Corvallis ($565K) while offering similar quality of life and amenities.',
  },
  {
    id: 'time-to-sell',
    question: 'How long does it take to sell a home in Lebanon?',
    answer:
      'The current average days on market (DOM) in Lebanon is 65 days, which is 34.5% faster than the previous year. This means homes are selling quickly in our market. However, actual time can vary based on price, condition, and market conditions. Proper pricing and presentation are key to selling quickly.',
  },
  {
    id: 'good-place-family',
    question: 'Is Lebanon a good place to raise a family?',
    answer:
      'Absolutely. Lebanon offers excellent schools (91% graduation rate), strong community values, safe neighborhoods, and abundant outdoor recreation. The cost of living is reasonable compared to larger cities, and there is a strong sense of community. Many families choose Lebanon specifically for the quality-of-life balance it provides.',
  },
  {
    id: 'distance-corvallis',
    question: 'How far is Lebanon from Corvallis?',
    answer:
      'Lebanon is approximately 18 miles east of Corvallis, about a 25-minute drive. This proximity gives you access to Oregon State University, cultural amenities, and a larger job market while maintaining the small-town feel and affordability that Lebanon offers.',
  },
  {
    id: 'school-district',
    question: 'What school district serves Lebanon?',
    answer:
      'Lebanon is served by Lebanon Community School District 9, which operates 10 schools serving over 4,000 students in K-12. The district has a 91% graduation rate, which exceeds state averages. Sand Ridge Charter School is a standout choice with above-average proficiency in core subjects.',
  },
  {
    id: 'first-time-buyer-programs',
    question: 'Are there first-time homebuyer programs in Oregon?',
    answer:
      'Yes. Oregon offers several programs: OHCS Flex Lending provides up to $60,000 or 20% of the purchase price in down payment assistance. The Corvallis area has additional local programs offering up to $20,000. Talk to a loan officer about which programs you may qualify for - many first-time buyers combine state and local programs to reduce their out-of-pocket costs.',
  },
  {
    id: 'best-neighborhoods',
    question: 'What are the best neighborhoods in Lebanon?',
    answer:
      'Lebanon has several desirable neighborhoods, each with its own character. South Lebanon offers suburban charm, East Lebanon provides proximity to outdoor recreation, North Lebanon has growing family-friendly developments, and Hamilton Creek is known for newer construction and modern amenities. The best neighborhood for you depends on your priorities - schools, commute, lifestyle, and budget all play a role.',
  },
  {
    id: 'lebanon-vs-albany',
    question: 'How does Lebanon compare to Albany for home buyers?',
    answer:
      'Lebanon and Albany are both affordable Willamette Valley communities. Lebanon has a median price of $395K with a 65-day average DOM, while Albany has a median of $390K with 88 DOM. Lebanon homes are selling faster, and Lebanon offers excellent schools and outdoor recreation. Albany is slightly closer to Salem employment centers. Both are strong options depending on your specific priorities.',
  },
  {
    id: 'property-tax-rate',
    question: 'What is the property tax rate in Lebanon, Oregon?',
    answer:
      'Oregon property taxes vary by location, but Linn County (where Lebanon is located) has an effective tax rate of approximately 0.97% of home value. This is relatively low compared to national averages. Your actual rate depends on local school funding, county, and city taxes. A real estate professional or tax assessor can provide your specific rate.',
  },
  {
    id: 'need-real-estate-agent',
    question: 'Do I need a real estate agent to buy a home in Lebanon?',
    answer:
      'While you are not legally required to use an agent, having professional representation is highly valuable. A buyer\'s agent understands the local market, negotiates on your behalf, handles complex paperwork, and often costs you nothing (the seller typically pays commission). For sellers, an agent is critical - they price your home strategically, market it professionally, and manage the transaction. Team Gillott\'s agents have deep local expertise.',
  },
  {
    id: 'closing-costs',
    question: 'What are closing costs in Oregon?',
    answer:
      'Closing costs typically range from 2-5% of the purchase price and include loan origination fees, appraisal, title insurance, escrow, recording fees, and taxes. In a $395K Lebanon home purchase, expect $7,900-$19,750 in closing costs. Buyers and sellers negotiate who pays which costs - your agent will clarify this during negotiations. It is important to budget for these upfront.',
  },
  {
    id: 'job-market',
    question: 'How is the job market in Lebanon?',
    answer:
      'Lebanon has a solid job market supported by major employers including a Lowes Distribution Center (650+ employees), Samaritan Hospital, Weyerhaeuser, and various local businesses. The proximity to Corvallis (25 minutes) opens access to Oregon State University employment and the tech sector. The region has historically low unemployment and diverse job opportunities across industries.',
  },
  {
    id: 'outdoor-recreation',
    question: 'What outdoor recreation is near Lebanon?',
    answer:
      'Lebanon is a recreation enthusiast\'s paradise. The area has over 300 acres of parks, 37+ trails covering 101 miles, and stunning natural attractions like McDowell Creek Falls. The Santiam River offers fishing and kayaking, and the Cascade Range is nearby for hiking and skiing. Whether you are into mountain biking, hiking, kayaking, or scenic drives, Lebanon offers abundant outdoor activities.',
  },
  {
    id: 'is-lebanon-growing',
    question: 'Is Lebanon, Oregon growing?',
    answer:
      'Yes. Lebanon has a population of approximately 19,950 and is growing at a steady rate of about 1.04% annually. This growth is driven by families attracted to the affordable cost of living, excellent schools, small-town feel, and proximity to larger employment centers. The market is strong without being overheated - a healthy balance for buyers and sellers.',
  },
  {
    id: 'what-is-cma',
    question: 'What is a CMA and why do I need one?',
    answer:
      'A CMA (Comparative Market Analysis) is a report comparing your home to recently sold, active, and expired listings in your area. It determines your home\'s market value. For sellers, an accurate CMA is critical - pricing too high sits on the market, too low leaves money on the table. For buyers, it ensures you are not overpaying. Team Gillott agents provide free, detailed CMAs to help you make informed decisions.',
  },
  {
    id: 'pre-approval-mortgage',
    question: 'How do I get pre-approved for a mortgage?',
    answer:
      'Contact a mortgage lender or bank and provide income verification, credit authorization, employment history, and asset documentation. Pre-approval typically takes 1-3 days and shows sellers you are a serious buyer. Current 30-year rates in Lebanon are around 6.12%. Getting pre-approved before house hunting strengthens your offer and clarifies your budget. Team Gillott can recommend trusted lenders.',
  },
  {
    id: 'home-inspection',
    question: 'What should I look for during a home inspection?',
    answer:
      'A professional home inspector examines the foundation, roof, plumbing, electrical, HVAC, water damage, pests, and structural integrity. You should attend the inspection and ask questions. Common issues include old wiring, plumbing problems, roof age, and foundation cracks. An inspection protects you - it is typically contingent on inspection and gives you grounds to renegotiate or walk away if major issues arise.',
  },
  {
    id: 'team-gillott-helps',
    question: 'How does Team Gillott help buyers in Lebanon?',
    answer:
      'Team Gillott provides comprehensive buyer services: market expertise, neighborhood knowledge, pre-approval guidance, property showings, comparative market analyses, negotiation on your behalf, inspection coordination, and closing support. We understand Lebanon\'s unique neighborhoods and market dynamics. Our agents are invested in the community and committed to finding you the right home at the right price.',
  },
];

export default function FAQPage() {
  return (
    <>
      <WebPageSchema
        title="Frequently Asked Questions - Lebanon Real Estate"
        description="Get answers to your Lebanon real estate questions: median home prices, schools, neighborhoods, first-time buyer programs, and more."
        url={siteUrl("/faq")}
      />

      <section className="w-full bg-gradient-to-br from-[#CA3121] to-[#1F2930] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/80">
            Get answers to common questions about buying and selling in Lebanon, Oregon
          </p>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 p-6 bg-gradient-to-br from-[#f8fafb] to-[#f8fafb] rounded-2xl border border-[#e2e8f0]">
            <p className="text-[#354652] leading-relaxed">
              Have a specific question? Explore our comprehensive Q and A below. Click on any question to reveal the answer. If you don't find what you are looking for, reach out to Team Gillott directly.
            </p>
          </div>

          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Related Resources */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/market-report" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Lebanon Market Report</h3>
              <p className="text-sm text-[#64748b]">View current market data, trends, and pricing insights.</p>
            </Link>
            <Link href="/first-time-buyers" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">First-Time Buyers Guide</h3>
              <p className="text-sm text-[#64748b]">Step-by-step guidance for your first home purchase.</p>
            </Link>
            <Link href="/schools" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Lebanon Schools Guide</h3>
              <p className="text-sm text-[#64748b]">Explore top-rated schools and school districts.</p>
            </Link>
            <Link href="/neighborhoods" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Explore Neighborhoods</h3>
              <p className="text-sm text-[#64748b]">Discover the character and charm of each Lebanon neighborhood.</p>
            </Link>
            <Link href="/moving-to-lebanon" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Moving to Lebanon Guide</h3>
              <p className="text-sm text-[#64748b]">The complete relocation resource — city services, jobs, healthcare, and more.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Have More Questions?"
        subheading="Talk to a local expert who knows Lebanon inside and out."
        ctaText="Contact Team Gillott Today"
        ctaUrl={TEAM_URL}
        variant="primary"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
