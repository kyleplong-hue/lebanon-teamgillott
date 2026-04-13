import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { WebPageSchema } from '@/components/SchemaMarkup';
import { siteUrl, TEAM_URL } from '@/data/config';
import { HERO_MOVING_GUIDE } from '@/data/hero-images';
import {
  cityServices,
  schoolDistrict,
  schools,
  employers,
  healthcare,
  recreation,
  gyms,
  organizations,
  onlineCommunities,
  events,
  shopping,
  transportation,
  movingFaqs,
} from '@/data/moving-guide';

export const metadata = {
  title: 'Moving to Lebanon, Oregon — 2026 Relocation Guide',
  description:
    'Everything you need for moving to Lebanon, OR. Schools, employers, healthcare, outdoor recreation, cost of living, and neighborhoods.',
  keywords:
    'moving to Lebanon Oregon, relocating to Lebanon OR, Lebanon Oregon relocation guide, living in Lebanon Oregon, Lebanon community guide',
  openGraph: {
    title: 'Moving to Lebanon, Oregon — The Complete Relocation Guide',
    description:
      'Schools, employers, healthcare, outdoor recreation, cost of living, and everything else you need to plan your move to Lebanon, OR.',
    type: 'website',
  },
};

export default function MovingToLebanonPage() {
  return (
    <>
      <WebPageSchema
        title="Moving to Lebanon, Oregon — 2026 Relocation Guide"
        description="Everything you need for moving to Lebanon, OR. Schools, employers, healthcare, outdoor recreation, cost of living, and neighborhoods."
        url={siteUrl('/moving-to-lebanon')}
      />

      {/* ── HERO ── */}
      <section
        className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_MOVING_GUIDE}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-3">
            The Ultimate Relocation Resource
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Moving to Lebanon, Oregon
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Small-town charm, affordable housing, and a gateway to the Cascades — here's everything you need to plan your move.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
              <p className="text-2xl sm:text-3xl font-bold text-white tabular-nums">~18K</p>
              <p className="text-xs text-white/60 mt-1">Population</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
              <p className="text-2xl sm:text-3xl font-bold text-white tabular-nums">$395K</p>
              <p className="text-xs text-white/60 mt-1">Median Home Price</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
              <p className="text-2xl sm:text-3xl font-bold text-white tabular-nums">0%</p>
              <p className="text-xs text-white/60 mt-1">Sales Tax</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
              <p className="text-2xl sm:text-3xl font-bold text-white tabular-nums">300+</p>
              <p className="text-xs text-white/60 mt-1">Acres of Parks</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV ── */}
      <section className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#e2e8f0] sticky top-16 z-40">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
          {[
            { href: '#city-services', label: 'City Services' },
            { href: '#schools', label: 'Schools' },
            { href: '#employers', label: 'Jobs' },
            { href: '#healthcare', label: 'Healthcare' },
            { href: '#outdoors', label: 'Outdoors' },
            { href: '#community', label: 'Community' },
            { href: '#daily-life', label: 'Daily Life' },
            { href: '#getting-around', label: 'Getting Around' },
            { href: '#faq', label: 'FAQ' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-[#64748b] hover:text-[#CA3121] hover:bg-[#CA3121]/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── CITY SERVICES ── */}
      <section id="city-services" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-3 tracking-tight">
            City Services &amp; Utilities
          </h2>
          <p className="text-[#64748b] mb-10">
            The essentials you'll need when you first arrive — setting up utilities, getting a library card, and knowing who to call.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cityServices.map((svc) => (
              <div
                key={svc.name}
                className="bg-[#f8fafb] p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#354652] mb-2">{svc.name}</h3>
                <p className="text-sm text-[#354652] leading-relaxed mb-3">{svc.description}</p>
                <div className="space-y-1 text-sm text-[#64748b]">
                  {svc.phone && <p>Phone: {svc.phone}</p>}
                  {svc.address && <p>{svc.address}</p>}
                  {svc.hours && <p>{svc.hours}</p>}
                  {svc.website && (
                    <a
                      href={svc.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[#CA3121] hover:underline mt-1"
                    >
                      Visit website &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOLS ── */}
      <section id="schools" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb] scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-3 tracking-tight">
            Schools &amp; Education
          </h2>
          <p className="text-[#64748b] mb-10">
            Lebanon Community School District 9 serves the area with a strong graduation rate and charter school options.
          </p>

          {/* District stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] text-center">
              <p className="text-2xl font-bold text-[#354652] tabular-nums">{schoolDistrict.students.toLocaleString()}</p>
              <p className="text-xs text-[#64748b] mt-1">Students</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] text-center">
              <p className="text-2xl font-bold text-[#354652] tabular-nums">{schoolDistrict.schools}</p>
              <p className="text-xs text-[#64748b] mt-1">Schools</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] text-center">
              <p className="text-2xl font-bold text-[#354652] tabular-nums">{schoolDistrict.graduationRate}</p>
              <p className="text-xs text-[#64748b] mt-1">Grad Rate</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] text-center">
              <p className="text-2xl font-bold text-[#CA3121]">K–12</p>
              <p className="text-xs text-[#64748b] mt-1">Full Range</p>
            </div>
          </div>

          {/* School list */}
          <div className="space-y-3">
            {schools.map((school) => (
              <div
                key={school.name}
                className="bg-white p-5 rounded-2xl border border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div>
                  <h3 className="font-semibold text-[#354652]">{school.name}</h3>
                  <p className="text-sm text-[#64748b]">
                    {school.type} &middot; Grades {school.grades}
                    {school.enrollment && <> &middot; {school.enrollment.toLocaleString()} students</>}
                  </p>
                  {school.highlight && (
                    <p className="text-sm text-[#CA3121] mt-1">{school.highlight}</p>
                  )}
                </div>
                {school.rating && (
                  <span className="text-sm font-semibold text-[#354652] bg-[#f8fafb] px-3 py-1 rounded-lg whitespace-nowrap">
                    {school.rating} <span className="text-[#64748b] font-normal">({school.ratingSource})</span>
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/schools" className="text-sm font-semibold text-[#CA3121] hover:underline">
              Full school guide &rarr;
            </Link>
            <a
              href={schoolDistrict.greatSchoolsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#64748b] hover:text-[#354652]"
            >
              GreatSchools ratings &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── EMPLOYERS & ECONOMY ── */}
      <section id="employers" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-3 tracking-tight">
            Jobs &amp; Major Employers
          </h2>
          <p className="text-[#64748b] mb-10">
            Lebanon's economy is anchored by healthcare, manufacturing, logistics, and forestry — with easy commuting access to Corvallis and Albany.
          </p>
          <div className="space-y-4">
            {employers.map((emp) => (
              <div
                key={emp.name}
                className="bg-[#f8fafb] p-6 rounded-2xl border border-[#e2e8f0]"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-semibold text-[#354652]">{emp.name}</h3>
                  <span className="text-xs font-semibold uppercase text-[#64748b] tracking-wider">
                    {emp.industry}
                    {emp.employees && <> &middot; {emp.employees}</>}
                  </span>
                </div>
                <p className="text-sm text-[#354652] leading-relaxed">{emp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEALTHCARE ── */}
      <section id="healthcare" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb] scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-3 tracking-tight">
            Healthcare &amp; Medical
          </h2>
          <p className="text-[#64748b] mb-10">
            Lebanon has a community hospital, urgent care clinics, and primary care providers — plus access to the full Samaritan Health Services network.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {healthcare.map((provider) => (
              <div
                key={provider.name}
                className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0]"
              >
                <span className="text-xs font-semibold uppercase text-[#CA3121] tracking-wider">{provider.type}</span>
                <h3 className="text-lg font-semibold text-[#354652] mt-1 mb-2">{provider.name}</h3>
                <p className="text-sm text-[#354652] leading-relaxed mb-3">{provider.description}</p>
                <div className="text-sm text-[#64748b] space-y-1">
                  <p>{provider.address}</p>
                  {provider.hours && <p>{provider.hours}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTDOOR RECREATION ── */}
      <section id="outdoors" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-3 tracking-tight">
            Outdoor Recreation
          </h2>
          <p className="text-[#64748b] mb-10">
            From in-town lakeside trails to alpine wilderness an hour east, Lebanon is an outdoor lover's base camp.
          </p>
          <div className="space-y-6">
            {recreation.map((area) => (
              <div
                key={area.name}
                className="bg-gradient-to-br from-[#f8fafb] to-white p-6 rounded-2xl border border-[#e2e8f0]"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-[#354652]">{area.name}</h3>
                  <span className="text-xs font-semibold uppercase text-[#64748b] tracking-wider">
                    {area.type}
                    {area.distance && <> &middot; {area.distance}</>}
                  </span>
                </div>
                <p className="text-[#354652] mb-4">{area.description}</p>
                <ul className="space-y-1.5">
                  {area.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-[#354652]">
                      <span className="text-[#CA3121] font-bold mt-0.5">+</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {area.website && (
                  <a
                    href={area.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-[#CA3121] hover:underline mt-3"
                  >
                    Learn more &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FITNESS ── */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb] scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#354652] mb-6 tracking-tight">
            Gyms &amp; Fitness
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {gyms.map((gym) => (
              <div key={gym.name} className="bg-white p-4 rounded-xl border border-[#e2e8f0] text-center">
                <p className="font-semibold text-[#354652] text-sm">{gym.name}</p>
                <p className="text-xs text-[#64748b] mt-1">{gym.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY & ORGANIZATIONS ── */}
      <section id="community" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-3 tracking-tight">
            Community &amp; Organizations
          </h2>
          <p className="text-[#64748b] mb-10">
            Lebanon has an active civic life — service clubs, a lively downtown association, and signature events that bring the community together.
          </p>

          {/* Events */}
          <h3 className="text-xl font-bold text-[#354652] mb-4">Annual Events</h3>
          <div className="space-y-4 mb-12">
            {events.map((event) => (
              <div key={event.name} className="bg-[#f8fafb] p-6 rounded-2xl border border-[#e2e8f0]">
                <h4 className="text-lg font-semibold text-[#354652] mb-1">{event.name}</h4>
                <p className="text-sm text-[#CA3121] font-medium mb-2">
                  {event.timing}
                  {event.location && <> &middot; {event.location}</>}
                </p>
                <p className="text-sm text-[#354652]">{event.description}</p>
                {event.website && (
                  <a
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-[#CA3121] hover:underline mt-2"
                  >
                    More info &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Organizations */}
          <h3 className="text-xl font-bold text-[#354652] mb-4">Organizations &amp; Clubs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {organizations.map((org) => (
              <div key={org.name} className="bg-[#f8fafb] p-5 rounded-2xl border border-[#e2e8f0]">
                <h4 className="font-semibold text-[#354652] mb-1">{org.name}</h4>
                <p className="text-sm text-[#64748b]">{org.description}</p>
                {org.website && (
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-[#CA3121] hover:underline mt-2"
                  >
                    Visit &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Online communities */}
          <h3 className="text-xl font-bold text-[#354652] mb-4">Connect Online</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {onlineCommunities.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#f8fafb] p-4 rounded-xl border border-[#e2e8f0] hover:border-[#CA3121]/30 transition-colors"
              >
                <p className="font-semibold text-sm text-[#354652] group-hover:text-[#CA3121] transition-colors">
                  {c.name}
                </p>
                <p className="text-xs text-[#64748b] mt-1">{c.platform}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── DAILY LIFE ── */}
      <section id="daily-life" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb] scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-3 tracking-tight">
            Shopping &amp; Daily Life
          </h2>
          <p className="text-[#64748b] mb-10">
            Lebanon has all the essentials — grocery stores, a weekly farmers market, and everyday retail — with more options a quick drive away in Albany and Corvallis.
          </p>

          <h3 className="text-xl font-bold text-[#354652] mb-4">Grocery &amp; Food</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {shopping.grocery.map((store) => (
              <div key={store.name} className="bg-white p-5 rounded-2xl border border-[#e2e8f0]">
                <h4 className="font-semibold text-[#354652]">{store.name}</h4>
                {store.address && <p className="text-sm text-[#64748b]">{store.address}</p>}
                {store.note && <p className="text-sm text-[#64748b] mt-1">{store.note}</p>}
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0]">
            <h4 className="font-semibold text-[#354652] mb-2">{shopping.farmersMarket.name}</h4>
            <p className="text-sm text-[#354652]">
              {shopping.farmersMarket.hours} &middot; {shopping.farmersMarket.location}
            </p>
            <p className="text-sm text-[#64748b] mt-1">
              Season: {shopping.farmersMarket.season}
            </p>
          </div>
        </div>
      </section>

      {/* ── TRANSPORTATION ── */}
      <section id="getting-around" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-3 tracking-tight">
            Getting Around
          </h2>
          <p className="text-[#64748b] mb-10">
            Most residents drive — Lebanon is easy to navigate with minimal traffic. Public transit connects to Albany for regional access.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Local transit */}
            <div>
              <h3 className="text-lg font-bold text-[#354652] mb-4">Local Transit</h3>
              <div className="space-y-3">
                {transportation.local.map((t) => (
                  <div key={t.name} className="bg-[#f8fafb] p-5 rounded-2xl border border-[#e2e8f0]">
                    <h4 className="font-semibold text-[#354652]">{t.name}</h4>
                    <p className="text-sm text-[#64748b] mt-1">{t.description}</p>
                    {t.hours && <p className="text-xs text-[#64748b] mt-1">{t.hours}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Airports */}
            <div>
              <h3 className="text-lg font-bold text-[#354652] mb-4">Nearest Airports</h3>
              <div className="space-y-3">
                {transportation.airports.map((a) => (
                  <div key={a.name} className="bg-[#f8fafb] p-5 rounded-2xl border border-[#e2e8f0]">
                    <h4 className="font-semibold text-[#354652]">{a.name}</h4>
                    <p className="text-sm text-[#64748b] mt-1">{a.distance}</p>
                    <p className="text-xs text-[#64748b]">{a.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Distance table */}
          <h3 className="text-lg font-bold text-[#354652] mt-10 mb-4">Distance to Nearby Cities</h3>
          <div className="bg-[#f8fafb] rounded-2xl border border-[#e2e8f0] overflow-hidden">
            <div className="grid grid-cols-3 text-xs font-semibold uppercase text-[#64748b] tracking-wider px-5 py-3 border-b border-[#e2e8f0]">
              <span>City</span>
              <span>Distance</span>
              <span>Drive Time</span>
            </div>
            {transportation.nearestCities.map((city, i) => (
              <div
                key={city.name}
                className={`grid grid-cols-3 px-5 py-3 text-sm ${i < transportation.nearestCities.length - 1 ? 'border-b border-[#e2e8f0]' : ''}`}
              >
                <span className="font-medium text-[#354652]">{city.name}</span>
                <span className="text-[#64748b] tabular-nums">{city.distance}</span>
                <span className="text-[#64748b] tabular-nums">{city.driveTime}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb] scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#354652] mb-10 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {movingFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-[#354652] font-semibold hover:text-[#CA3121] transition-colors">
                  {faq.question}
                  <span className="ml-4 text-[#64748b] group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-[#354652] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* FAQ JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: movingFaqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* ── NEIGHBORHOODS CROSS-LINK ── */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Explore Lebanon Neighborhoods
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/neighborhoods/south-lebanon" className="group p-5 bg-[#f8fafb] rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">South Lebanon</h3>
              <p className="text-sm text-[#64748b]">Downtown walkability, community events, $320K–$420K</p>
            </Link>
            <Link href="/neighborhoods/east-lebanon" className="group p-5 bg-[#f8fafb] rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">East Lebanon</h3>
              <p className="text-sm text-[#64748b]">Cascade foothills access, larger lots, $350K–$475K</p>
            </Link>
            <Link href="/neighborhoods/north-lebanon" className="group p-5 bg-[#f8fafb] rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">North Lebanon</h3>
              <p className="text-sm text-[#64748b]">Newer builds, family-friendly, $375K–$450K</p>
            </Link>
            <Link href="/neighborhoods/hamilton-creek" className="group p-5 bg-[#f8fafb] rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Hamilton Creek</h3>
              <p className="text-sm text-[#64748b]">Estate properties, rolling hills, $425K–$600K+</p>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link href="/neighborhoods" className="text-sm font-semibold text-[#CA3121] hover:underline">
              View all neighborhoods &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED RESOURCES ── */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-[#354652] mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/market-report" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Lebanon Market Report</h3>
              <p className="text-sm text-[#64748b]">Current pricing, trends, and inventory data.</p>
            </Link>
            <Link href="/first-time-buyers" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">First-Time Buyer Guide</h3>
              <p className="text-sm text-[#64748b]">Oregon assistance programs and step-by-step buying process.</p>
            </Link>
            <Link href="/schools" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">School Guide</h3>
              <p className="text-sm text-[#64748b]">Detailed district comparison and performance data.</p>
            </Link>
            <Link href="/mortgage-calculator" className="group p-5 bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#CA3121]/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-semibold text-[#354652] group-hover:text-[#CA3121] transition-colors mb-1">Mortgage Calculator</h3>
              <p className="text-sm text-[#64748b]">Estimate monthly payments for Lebanon homes.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Make Lebanon Home?"
        subheading="Team Gillott knows every neighborhood, school zone, and hidden gem in Lebanon. Let us help you find the perfect home."
        ctaText="Browse Lebanon Homes"
        ctaUrl={TEAM_URL}
        variant="primary"
      />
    </>
  );
}
