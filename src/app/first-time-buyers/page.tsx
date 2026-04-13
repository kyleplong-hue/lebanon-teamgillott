import Link from 'next/link';
import { WebPageSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';
import { siteUrl, TEAM_URL } from '@/data/config';

export const metadata = {
  title: 'First-Time Home Buyer Guide Lebanon Oregon 2026 | Team Gillott',
  description:
    'Complete first-time home buyer guide for Lebanon, Oregon. Learn about Oregon assistance programs that can save you $60,000.',
  keywords:
    'first time home buyer Oregon, Lebanon home buying guide, first time buyer assistance, OHCS Flex Lending',
  openGraph: {
    title: 'First-Time Home Buyer Guide — Lebanon, Oregon 2026',
    description:
      'Step-by-step guide for first-time homebuyers in Lebanon, Oregon with affordability tips and Oregon assistance programs.',
    type: 'website',
  },
};

const buyingSteps = [
  {
    number: 1,
    title: 'Check Your Budget',
    description: `Current 30-year mortgage rate: 6.12%. On a $395K home with 5% down ($19,750), your monthly payment is approximately $2,280 (including taxes and insurance). Use our mortgage calculator on teamgillott.com to explore different scenarios and understand what you can afford.`,
  },
  {
    number: 2,
    title: 'Get Pre-Approved',
    description: `Talk to a local lender before you start looking. We have trusted referral partners who specialize in first-time buyers. Pre-approval gives you a competitive edge and shows sellers you're a serious buyer.`,
  },
  {
    number: 3,
    title: 'Explore Oregon Programs',
    description: `Oregon offers generous first-time buyer assistance programs. See the details below.`,
  },
  {
    number: 4,
    title: 'Find Your Home',
    description: `Ready to search? Explore our Lebanon neighborhood guides to learn about different areas. Then, connect with one of our buyer's agents to start your search.`,
    ctaText: 'Explore Neighborhoods',
    ctaLink: '/neighborhoods',
  },
  {
    number: 5,
    title: 'Make an Offer',
    description: `Current market: homes average 2 competing offers and 65 days on market. Strategy matters. Our agents guide you through competitive bidding, inspection contingencies, and closing timelines.`,
  },
  {
    number: 6,
    title: 'Close & Move In',
    description: `Oregon closing costs typically range from 2–5% of purchase price. We handle final inspections, title review, appraisal coordination, and all closing logistics to ensure a smooth handoff to your new home.`,
  },
];

const oregonPrograms = [
  {
    title: 'OHCS Flex Lending Program',
    subtitle: 'Up to $60,000 or 20% of purchase price',
    requirements: 'First-time or first-generation buyers at ≤100% Area Median Income (AMI)',
    details:
      'Oregon Housing and Community Services (OHCS) offers below-market-rate loans for eligible first-time buyers. Funds can be used for down payment, closing costs, or rate buy-down. Combined with other assistance, this is one of the most generous programs in Oregon.',
    link: 'https://www.oregon.gov/ohcs',
  },
  {
    title: 'Corvallis First Time Home Buyer Program',
    subtitle: 'Up to $20,000 zero-interest loan',
    requirements: 'First-time buyers purchasing in Corvallis area, income limits apply',
    details:
      'The City of Corvallis and Corvallis Housing Authority offer down payment and closing cost assistance loans at zero interest. No monthly payment during first 2 years; deferred repayment thereafter.',
    link: 'https://www.ci.corvallis.or.us/',
  },
  {
    title: 'FHA Loans',
    subtitle: '3.5% down payment option',
    requirements: 'FICO score ≥580, debt-to-income ratio ≤43%',
    details:
      'Federal Housing Administration (FHA) loans are designed for first-time and low-credit buyers. With as little as 3.5% down, you can become a homeowner. FHA is popular in Lebanon because it opens homeownership to more buyers.',
    link: 'https://www.fha.com/',
  },
  {
    title: 'VA Loans (if eligible)',
    subtitle: '0% down payment',
    requirements: 'Active duty, reservist, veteran, or surviving spouse',
    details:
      'If you served in the military, VA loans offer zero-down financing with no PMI (private mortgage insurance). This is one of the most generous programs available.',
    link: 'https://www.va.gov/housing-assistance/',
  },
];

const affordabilityComparison = [
  {
    city: 'Lebanon',
    median: '$395K',
    downPayment: '$19,750 (5%)',
    monthlyPayment: '$2,280',
  },
  {
    city: 'Corvallis',
    median: '$565K',
    downPayment: '$28,250 (5%)',
    monthlyPayment: '$3,260',
  },
  {
    city: 'Albany',
    median: '$390K',
    downPayment: '$19,500 (5%)',
    monthlyPayment: '$2,250',
  },
  {
    city: 'Sweet Home',
    median: '$335K',
    downPayment: '$16,750 (5%)',
    monthlyPayment: '$1,935',
  },
];

export default function FirstTimeBuyersPage() {
  return (
    <>
      <WebPageSchema
        title="First-Time Home Buyer Guide — Lebanon, Oregon 2026"
        description="Complete guide for first-time homebuyers in Lebanon, Oregon, including Oregon assistance programs that can save you $60,000."
        url={siteUrl("/first-time-buyers")}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#CA3121] to-[#1F2930] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 tracking-tight">
            First-Time Home Buyer Guide — Lebanon, Oregon 2026
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl">
            Lebanon is one of the most affordable markets in the Willamette Valley. Median price: $395K vs $565K in Corvallis. Plus, Oregon offers generous assistance programs to help you buy.
          </p>
        </div>
      </section>

      {/* Affordability Snapshot */}
      <section className="w-full bg-[#f8fafb] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 tracking-tight">
            Affordability Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#CA3121]">
                  <th className="text-left py-4 px-4 font-bold text-[#354652]">City</th>
                  <th className="text-left py-4 px-4 font-bold text-[#354652]">Median Price</th>
                  <th className="text-left py-4 px-4 font-bold text-[#354652]">5% Down</th>
                  <th className="text-left py-4 px-4 font-bold text-[#354652]">Est. Monthly</th>
                </tr>
              </thead>
              <tbody>
                {affordabilityComparison.map((city, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-[#e2e8f0] ${idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafb]'}`}
                  >
                    <td className="text-left py-4 px-4 font-semibold text-[#354652]">
                      {city.city}
                    </td>
                    <td className="py-4 px-4 text-[#354652] font-semibold tabular-nums">
                      {city.median}
                    </td>
                    <td className="py-4 px-4 text-[#64748b]">{city.downPayment}</td>
                    <td className="py-4 px-4 text-[#64748b] tabular-nums">{city.monthlyPayment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[#64748b] text-sm">
            * Estimates based on 6.12% 30-year fixed rate, including taxes, insurance, and HOA where applicable. Actual payment varies.
          </p>
        </div>
      </section>

      {/* Six-Step Process */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#354652] mb-12 tracking-tight">
            Your Step-by-Step Path to Homeownership
          </h2>

          <div className="space-y-8">
            {buyingSteps.map(step => (
              <div
                key={step.number}
                className="bg-white rounded-2xl shadow-md hover:shadow-md transition-all duration-300 p-8 border border-[#e2e8f0]"
              >
                <div className="flex gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#CA3121] text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#354652] mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#354652] leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.ctaText && step.ctaLink && (
                      <Link
                        href={step.ctaLink}
                        className="inline-flex items-center gap-2 text-[#CA3121] font-semibold hover:text-[#a82919] transition-colors"
                      >
                        {step.ctaText} <span>→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6">
            <Link
              href="/mortgage-calculator"
              className="inline-block px-6 py-3 bg-[#CA3121] text-white font-semibold rounded-2xl hover:shadow-md transition-all duration-300"
            >
              Try Our Mortgage Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Oregon Assistance Programs */}
      <section className="w-full bg-[#f8fafb] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#354652] mb-4 tracking-tight">
            Oregon First-Time Buyer Programs
          </h2>
          <p className="text-[#354652] mb-12 max-w-2xl">
            Oregon is one of the most generous states for first-time buyer assistance. These programs can save you $20,000–$60,000+.
          </p>

          <div className="space-y-8">
            {oregonPrograms.map((program, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#e2e8f0] hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#354652] mb-2 tracking-tight">
                      {program.title}
                    </h3>
                    <p className="text-lg font-semibold text-[#CA3121] mb-3">
                      {program.subtitle}
                    </p>
                  </div>
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-[#CA3121] text-white font-semibold rounded-2xl hover:shadow-md transition-all duration-300 whitespace-nowrap"
                  >
                    Learn More →
                  </a>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-bold text-[#354652] uppercase tracking-wide mb-2">
                    Requirements
                  </p>
                  <p className="text-[#64748b] text-sm">{program.requirements}</p>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#354652] uppercase tracking-wide mb-2">
                    Details
                  </p>
                  <p className="text-[#354652] leading-relaxed">{program.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-red-50 border-l-4 border-[#CA3121] rounded-2xl">
            <p className="text-[#354652]">
              <span className="font-bold">Important:</span> Most Oregon assistance programs require you to complete homebuyer education and meet with a certified housing counselor. These sessions are often free or low-cost. We can provide referrals to approved counselors in Lebanon.
            </p>
          </div>
        </div>
      </section>

      {/* Buyer Checklist */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#354652] mb-12 tracking-tight">
            First-Time Buyer Checklist
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Check your credit score',
              'Save for down payment & closing costs',
              'Get pre-approved for a mortgage',
              'Research Oregon assistance programs',
              'Complete homebuyer education course',
              'Meet with a housing counselor',
              'Get pre-approved letter from lender',
              'Start shopping for a home',
              'Make an offer and negotiate',
              'Complete home inspection',
              'Finalize appraisal',
              'Clear to close & schedule walkthrough',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 bg-[#f8fafb] p-4 rounded-2xl border border-[#e2e8f0]">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#CA3121]">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
                <p className="text-[#354652]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lebanon Neighborhoods CTA */}
      <section className="w-full bg-gradient-to-r from-[#CA3121] to-[#1F2930] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            Ready to Explore Lebanon Neighborhoods?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            Each neighborhood offers different lifestyles, price points, and amenities. Learn what makes each area special.
          </p>
          <Link
            href="/neighborhoods"
            className="inline-block px-8 py-3 bg-[#CA3121] text-white font-semibold rounded-2xl hover:shadow-md transition-all duration-300"
          >
            Explore Neighborhoods
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#f8fafb] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#354652] mb-12 tracking-tight">
            Common First-Time Buyer Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How much do I need to save for a down payment?',
                a: 'Minimum depends on your loan type. FHA loans require 3.5% down. Conventional loans typically require 5–20% down. Oregon assistance programs can help cover much of this.',
              },
              {
                q: 'What if I have bad credit?',
                a: 'FHA loans accept credit scores as low as 580. Some programs target low-credit borrowers. Start by talking to a lender about your options.',
              },
              {
                q: 'What are closing costs?',
                a: 'Closing costs typically range from 2–5% of the purchase price and cover lender fees, appraisals, title insurance, and legal fees. Many Oregon programs help cover these.',
              },
              {
                q: 'How long does the home buying process take?',
                a: 'Typically 30–45 days from offer to closing, assuming no major issues. In Lebanon, the average is 65 days on market, so plan accordingly.',
              },
              {
                q: 'Can I get an inspection before making an offer?',
                a: 'You can order a pre-offer inspection, but most buyers make an offer contingent on inspection. This protects you.',
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] hover:shadow-md transition-all duration-300"
              >
                <summary className="p-6 cursor-pointer hover:bg-[#f8fafb] transition-colors flex items-center justify-between">
                  <h3 className="font-bold text-[#354652] tracking-tight">{item.q}</h3>
                  <span className="text-[#CA3121] font-bold group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#354652] border-t border-[#e2e8f0]">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How much do I need to save for a down payment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Minimum depends on your loan type. FHA loans require 3.5% down. Conventional loans typically require 5–20% down. Oregon assistance programs can help cover much of this.',
                },
              },
              {
                '@type': 'Question',
                name: 'What if I have bad credit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'FHA loans accept credit scores as low as 580. Some programs target low-credit borrowers. Start by talking to a lender about your options.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are closing costs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Closing costs typically range from 2–5% of the purchase price and cover lender fees, appraisals, title insurance, and legal fees. Many Oregon programs help cover these.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does the home buying process take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Typically 30–45 days from offer to closing, assuming no major issues. In Lebanon, the average is 65 days on market, so plan accordingly.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I get an inspection before making an offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can order a pre-offer inspection, but most buyers make an offer contingent on inspection. This protects you.',
                },
              },
            ],
          }),
        }}
      />

      {/* Related Resources */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/moving-to-lebanon" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Moving to Lebanon Guide</h3>
              <p className="text-sm text-[#64748b]">Everything you need for relocating — schools, employers, healthcare, and community.</p>
            </Link>
            <Link href="/mortgage-calculator" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Mortgage Calculator</h3>
              <p className="text-sm text-[#64748b]">Estimate monthly payments with current rates and down payment scenarios.</p>
            </Link>
            <Link href="/neighborhoods" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Explore Neighborhoods</h3>
              <p className="text-sm text-[#64748b]">Find the right area for your lifestyle and budget.</p>
            </Link>
            <Link href="/market-report" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Lebanon Market Report</h3>
              <p className="text-sm text-[#64748b]">Current pricing trends and inventory data.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Talk to a Lebanon Buyer's Agent"
        subheading="Ready to start your home buying journey? Let Team Gillott guide you through every step."
        ctaText="Schedule Your Consultation"
        ctaUrl={TEAM_URL}
      />
    </>
  );
}
