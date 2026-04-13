import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { WebPageSchema } from '@/components/SchemaMarkup';
import { siteUrl, TEAM_URL } from '@/data/config';
import { HERO_SCHOOLS } from '@/data/hero-images';

export default function SchoolsPage() {
  return (
    <>
      <WebPageSchema
        title="Lebanon, Oregon Schools Guide — Top-Rated School Districts"
        description="Explore Lebanon schools: 91% graduation rate, Sand Ridge Charter School, Lebanon Community School District 9. Find homes near top-rated schools."
        url={siteUrl("/schools")}
      />

      <section
        className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_SCHOOLS}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Lebanon, Oregon Schools Guide
          </h1>
          <p className="text-lg text-white/80">
            Discover excellent K-12 education options in Lebanon's vibrant school districts
          </p>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 tracking-tight">
            Lebanon Community School District 9
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-[#f8fafb] to-[#f8fafb] p-6 rounded-2xl border border-[#e2e8f0]">
              <p className="text-[#64748b] text-sm font-semibold uppercase mb-2">Total Students</p>
              <p className="text-3xl font-bold text-[#354652] tabular-nums">4,056</p>
            </div>
            <div className="bg-gradient-to-br from-[#f8fafb] to-[#f8fafb] p-6 rounded-2xl border border-[#e2e8f0]">
              <p className="text-[#64748b] text-sm font-semibold uppercase mb-2">Graduation Rate</p>
              <p className="text-3xl font-bold text-[#354652] tabular-nums">91%</p>
              <p className="text-sm text-green-600 mt-1">Above state average</p>
            </div>
            <div className="bg-gradient-to-br from-[#f8fafb] to-[#f8fafb] p-6 rounded-2xl border border-[#e2e8f0]">
              <p className="text-[#64748b] text-sm font-semibold uppercase mb-2">Schools (K-12)</p>
              <p className="text-3xl font-bold text-[#354652] tabular-nums">10</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-[#354652]">
            Lebanon Community School District 9 serves over 4,000 students across 10 schools, from kindergarten through high school. With a 91% graduation rate that exceeds Oregon state averages, the district is committed to academic excellence and student success.
          </p>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#354652] mb-8 tracking-tight">District Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
              <h3 className="text-lg font-semibold text-[#354652] mb-4">Reading Proficiency</h3>
              <div className="flex items-baseline gap-4">
                <p className="text-4xl font-bold text-[#CA3121] tabular-nums">42%</p>
                <p className="text-[#354652]">of students meet/exceed benchmarks</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
              <h3 className="text-lg font-semibold text-[#354652] mb-4">Math Proficiency</h3>
              <div className="flex items-baseline gap-4">
                <p className="text-4xl font-bold text-[#CA3121] tabular-nums">31%</p>
                <p className="text-[#354652]">of students meet/exceed benchmarks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 tracking-tight">Standout School</h2>
          <div className="bg-gradient-to-br from-[#f8fafb] to-[#f8fafb] p-8 rounded-2xl border border-[#e2e8f0]">
            <h3 className="text-2xl font-bold text-[#354652] mb-3 tracking-tight">
              Sand Ridge Charter School
            </h3>
            <p className="text-[#354652] mb-4 text-lg">
              A standout in the Lebanon area, Sand Ridge Charter School consistently outperforms district and state averages across reading and math proficiency.
            </p>
            <ul className="space-y-2 text-[#354652]">
              <li className="flex gap-3">
                <span className="text-[#CA3121] font-bold">+</span>
                <span>Above-district average proficiency in core subjects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#CA3121] font-bold">+</span>
                <span>Rigorous curriculum and high academic expectations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#CA3121] font-bold">+</span>
                <span>Strong college and career readiness programs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#CA3121] font-bold">+</span>
                <span>Active parent and community involvement</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-10 tracking-tight">Schools by Grade Level</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#354652] mb-6 tracking-tight">
              Elementary Schools
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
                <h4 className="text-lg font-semibold text-[#354652] mb-2">Cascade Elementary</h4>
                <p className="text-[#354652] mb-3">
                  Serving K-5 students with a focus on foundational skills and enrichment activities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
                <h4 className="text-lg font-semibold text-[#354652] mb-2">Tangent Elementary</h4>
                <p className="text-[#354652] mb-3">
                  Community-centered school emphasizing literacy and mathematics across K-5.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
                <h4 className="text-lg font-semibold text-[#354652] mb-2">Sweet Home Elementary</h4>
                <p className="text-[#354652] mb-3">
                  Dedicated to creating a safe, supportive learning environment for young learners.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
                <h4 className="text-lg font-semibold text-[#354652] mb-2">Other Elementary Schools</h4>
                <p className="text-[#354652] mb-3">
                  Additional elementary schools throughout the district serve neighborhoods across Lebanon and surrounding communities.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#354652] mb-6 tracking-tight">
              Middle Schools
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
                <h4 className="text-lg font-semibold text-[#354652] mb-2">Lebanon Middle School</h4>
                <p className="text-[#354652] mb-3">
                  Comprehensive 6-8 program with advanced academics, arts, and athletics preparing students for high school success.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
                <h4 className="text-lg font-semibold text-[#354652] mb-2">Additional Middle Schools</h4>
                <p className="text-[#354652] mb-3">
                  District serves students across multiple middle school programs in the region.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#354652] mb-6 tracking-tight">
              High School
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
              <h4 className="text-xl font-semibold text-[#354652] mb-2 tracking-tight">
                Lebanon High School
              </h4>
              <p className="text-[#354652] mb-4">
                The primary high school serving the Lebanon area, offering comprehensive 9-12 education with a strong emphasis on college and career readiness.
              </p>
              <ul className="space-y-2 text-[#354652]">
                <li className="flex gap-3">
                  <span className="text-[#CA3121]">→</span>
                  <span>Advanced Placement and honors courses</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CA3121]">→</span>
                  <span>Career and technical education programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CA3121]">→</span>
                  <span>Strong athletics and arts programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CA3121]">→</span>
                  <span>Dual enrollment opportunities with community colleges</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#354652] mb-6 tracking-tight">
              Charter School
            </h3>
            <div className="bg-gradient-to-br from-[#f8fafb] to-[#f8fafb] p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
              <h4 className="text-xl font-semibold text-[#354652] mb-2 tracking-tight">
                Sand Ridge Charter School
              </h4>
              <p className="text-[#354652] mb-4">
                An innovative charter school offering a specialized curriculum with rigorous academics and a track record of exceeding state and district benchmarks.
              </p>
              <div className="bg-white p-4 rounded-2xl border border-[#e2e8f0]">
                <p className="text-sm font-semibold text-[#354652] mb-2">Why Families Choose Sand Ridge:</p>
                <ul className="space-y-1 text-[#354652] text-sm">
                  <li>+ Above-average proficiency across core subjects</li>
                  <li>+ Personalized learning approaches</li>
                  <li>+ Strong school culture and community</li>
                  <li>+ Preparation for college and beyond</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 tracking-tight">
            How Schools Impact Home Values
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#f8fafb] to-[#f8fafb] p-6 rounded-2xl border border-[#e2e8f0]">
              <h3 className="text-lg font-semibold text-[#354652] mb-2">Higher Property Values</h3>
              <p className="text-[#354652]">
                Homes in excellent school districts typically command a 5-15% premium over homes in lower-rated districts. Parents are willing to pay more to secure quality education.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#f8fafb] to-[#f8fafb] p-6 rounded-2xl border border-[#e2e8f0]">
              <h3 className="text-lg font-semibold text-[#354652] mb-2">Faster Appreciation</h3>
              <p className="text-[#354652]">
                Properties in top school zones historically appreciate faster and retain value better during market downturns, as consistent demand from families keeps the market strong.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#f8fafb] to-[#f8fafb] p-6 rounded-2xl border border-[#e2e8f0]">
              <h3 className="text-lg font-semibold text-[#354652] mb-2">Easier Resale</h3>
              <p className="text-[#354652]">
                Properties near highly-rated schools have a larger buyer pool and spend less time on the market. Families actively prioritize school quality in their home search.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#f8fafb] to-[#f8fafb] p-6 rounded-2xl border border-[#e2e8f0]">
              <h3 className="text-lg font-semibold text-[#354652] mb-2">Community Stability</h3>
              <p className="text-[#354652]">
                Neighborhoods with excellent schools attract families who invest in their communities, leading to well-maintained properties and strong neighborhood stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-8 tracking-tight">Regional District Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
              <h3 className="text-lg font-bold text-[#354652] mb-3">
                Corvallis School District 509J
              </h3>
              <div className="space-y-2 text-[#354652]">
                <p>
                  <strong>Rating:</strong> B+ | <strong>#11 in Oregon</strong>
                </p>
                <p className="text-sm">
                  Highly regarded district with strong academics and research-based curriculum influenced by Oregon State University proximity.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]">
              <h3 className="text-lg font-bold text-[#354652] mb-3">
                Philomath School District
              </h3>
              <div className="space-y-2 text-[#354652]">
                <p>
                  <strong>Rating:</strong> B+ | <strong>#9 in Oregon</strong>
                </p>
                <p className="text-sm">
                  Excellent small-town district with personalized instruction and strong community engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/neighborhoods" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Find Homes Near Top Schools</h3>
              <p className="text-sm text-[#64748b]">Explore neighborhoods by school proximity and quality.</p>
            </Link>
            <Link href="/first-time-buyers" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">First-Time Buyer Guide</h3>
              <p className="text-sm text-[#64748b]">Get started on your home buying journey with expert guidance.</p>
            </Link>
            <Link href="/market-report" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Lebanon Market Report</h3>
              <p className="text-sm text-[#64748b]">Current market data and pricing trends in Lebanon.</p>
            </Link>
            <Link href="/moving-to-lebanon" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Moving to Lebanon Guide</h3>
              <p className="text-sm text-[#64748b]">Complete relocation resource with schools, employers, and community info.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Find Homes Near Top-Rated Schools"
        subheading="Let Team Gillott help you find a home in a great school district."
        ctaText="Explore Lebanon Homes"
        ctaUrl={TEAM_URL}
        variant="primary"
      />
    </>
  );
}
