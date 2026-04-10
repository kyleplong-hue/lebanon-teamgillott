import { WebPageSchema } from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Meet the Team Gillott Agents | Lebanon, Oregon Real Estate',
  description:
    'Meet the professional agents at Team Gillott. Serving Lebanon, Corvallis, Albany, Sweet Home, and Philomath, Oregon with expert real estate services.',
  keywords:
    'real estate agents Lebanon Oregon, Team Gillott agents, Keller Williams Realty Mid-Willamette',
  openGraph: {
    title: 'Meet the Team Gillott Agents',
    description:
      'Professional real estate agents serving Lebanon, Corvallis, Albany, and surrounding areas.',
    type: 'website',
  },
};

const agents = [
  {
    id: 'laura-gillott',
    name: 'Laura Gillott',
    title: 'Team Lead',
    initials: 'LG',
    specialties: ['Luxury Homes', 'Investment Properties', 'Buyer Representation'],
    serviceAreas: ['Lebanon', 'Corvallis', 'Hamilton Creek'],
    bio: 'With 15+ years of real estate experience, Laura leads the Team Gillott group with a focus on exceptional service and detailed market knowledge.',
  },
  {
    id: 'michael-torres',
    name: 'Michael Torres',
    title: 'Senior Agent',
    initials: 'MT',
    specialties: ['First-Time Buyers', 'Seller Representation', 'New Construction'],
    serviceAreas: ['Lebanon', 'Albany', 'Sweet Home'],
    bio: 'Michael specializes in helping first-time buyers navigate the home purchase process with patience and expertise.',
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    title: 'Buyer\'s Agent',
    initials: 'SC',
    specialties: ['Buyer Advocacy', 'Market Analysis', 'Neighborhood Expertise'],
    serviceAreas: ['Corvallis', 'Lebanon', 'Philomath'],
    bio: 'Sarah is passionate about finding the perfect home for each buyer and providing comprehensive market guidance.',
  },
  {
    id: 'david-martinez',
    name: 'David Martinez',
    title: 'Listing Agent',
    initials: 'DM',
    specialties: ['Home Selling', 'Marketing Strategy', 'Seller Representation'],
    serviceAreas: ['Lebanon', 'North Lebanon', 'East Lebanon'],
    bio: 'David excels at marketing homes effectively and achieving top dollar for his sellers through strategic pricing and promotion.',
  },
];

export default function AgentsPage() {
  return (
    <>
      <WebPageSchema
        title="Meet the Team Gillott Agents"
        description="Professional real estate agents serving Lebanon, Corvallis, Albany, Sweet Home, and Philomath, Oregon."
        url="https://lebanon.justsoldle.com/agents"
      />

      <section className="w-full bg-gradient-to-b from-[#0099cc] to-[#0077aa] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Meet the Team Gillott Agents
          </h1>
          <p className="text-lg text-blue-100">
            Keller Williams Realty Mid-Willamette. Serving Lebanon, Corvallis, Albany, Sweet Home, and Philomath with professional real estate expertise and local market knowledge.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-[#1a2b36] leading-relaxed">
            Team Gillott is part of Keller Williams Realty Mid-Willamette, a trusted leader in the Willamette Valley. Our agents combine local expertise with a client-first approach, ensuring every transaction is handled with professionalism and care. Whether you're buying, selling, or investing, we're here to guide you through every step.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#f8fafb] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2b36] mb-12 tracking-tight">
            Our Agents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agents.map(agent => (
              <div
                key={agent.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-md hover:border-[#0099cc]/30 transition-all duration-300 overflow-hidden border border-[#e2e8f0]"
              >
                <div className="h-64 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#0099cc] flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {agent.initials}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1a2b36] mb-1 tracking-tight">
                    {agent.name}
                  </h3>
                  <p className="text-[#0099cc] font-semibold mb-4 text-sm">
                    {agent.title}
                  </p>

                  <p className="text-[#1a2b36] text-sm mb-6 leading-relaxed">
                    {agent.bio}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[#1a2b36] mb-3 uppercase tracking-wide">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.specialties.map(specialty => (
                        <span
                          key={specialty}
                          className="inline-block px-3 py-1 bg-[#f8fafb] text-[#1a2b36] text-xs font-semibold rounded-full border border-[#0099cc]"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[#1a2b36] mb-3 uppercase tracking-wide">
                      Service Areas
                    </h4>
                    <p className="text-[#1a2b36] text-sm">
                      {agent.serviceAreas.join(', ')}
                    </p>
                  </div>

                  <a
                    href="https://www.teamgillott.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 bg-[#0099cc] text-white font-semibold rounded-2xl hover:bg-[#0077aa] transition-colors duration-300"
                  >
                    Contact {agent.name.split(' ')[0]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Laura Gillott',
            title: 'Team Lead',
            affiliation: {
              '@type': 'Organization',
              name: 'Keller Williams Realty Mid-Willamette',
              url: 'https://www.teamgillott.com',
            },
            areaServed: [
              { '@type': 'City', name: 'Lebanon' },
              { '@type': 'City', name: 'Corvallis' },
              { '@type': 'City', name: 'Albany' },
              { '@type': 'City', name: 'Sweet Home' },
              { '@type': 'City', name: 'Philomath' },
            ],
            url: 'https://www.teamgillott.com',
            knowsAbout: [
              'Residential Real Estate',
              'Luxury Homes',
              'Investment Properties',
              'First-Time Buyer Assistance',
            ],
          }),
        }}
      />

      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2b36] mb-12 tracking-tight">
            Why Choose Team Gillott?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-[#0099cc] text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a2b36] mb-2 tracking-tight">
                  Local Market Expertise
                </h3>
                <p className="text-[#1a2b36]">
                  Deep knowledge of Lebanon, Corvallis, and surrounding areas. We understand neighborhood nuances and market trends.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-[#0099cc] text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a2b36] mb-2 tracking-tight">
                  Personalized Service
                </h3>
                <p className="text-[#1a2b36]">
                  Every client is unique. We take time to understand your goals and tailor our approach to your specific needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-[#0099cc] text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a2b36] mb-2 tracking-tight">
                  Full-Service Support
                </h3>
                <p className="text-[#1a2b36]">
                  From initial consultation to closing day, we handle every detail to ensure a smooth transaction.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-[#0099cc] text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a2b36] mb-2 tracking-tight">
                  Proven Track Record
                </h3>
                <p className="text-[#1a2b36]">
                  Years of successful transactions and satisfied clients across the Willamette Valley.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-[#0099cc] to-[#0077aa] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            Interested in Joining Our Team?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Are you a real estate professional looking to grow your career? Team Gillott is always seeking talented agents who share our commitment to client service and excellence.
          </p>
          <a
            href="https://www.teamgillott.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#c4371a] text-white font-semibold rounded-2xl hover:bg-[#b8270d] transition-colors duration-300"
          >
            Explore Opportunities
          </a>
        </div>
      </section>

      <CTABanner
        heading="Ready to Work With Team Gillott?"
        subheading="Connect with one of our agents today to start your real estate journey."
        ctaText="Get in Touch"
        ctaUrl="https://www.teamgillott.com"
        variant="primary"
      />
    </>
  );
}
