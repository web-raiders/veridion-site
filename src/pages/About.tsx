import PageHero from '../components/PageHero'
import ContactCTA from '../components/ContactCTA'

const ROADMAP = [
  {
    phase: 'Phase 1',
    years: '2025–2026',
    title: 'Foundation Building',
    items: [
      'Complete 5–10 successful commodity transactions',
      'Establish formal partnerships with 2–3 European financial institutions. We have already established a formal partnership with one Dutch bank based in Madrid, Spain.',
      'Build documented track record and client testimonials',
      'Develop standardised processes and risk management frameworks',
    ],
  },
  {
    phase: 'Phase 2',
    years: '2026–2027',
    title: 'Capability Expansion',
    items: [
      'Expand team with specialised trading and finance professionals',
      'Increase transaction volumes and values',
      'Develop proprietary market intelligence capabilities',
      'Establish regional offices or partnerships',
    ],
  },
  {
    phase: 'Phase 3',
    years: '2027–2028',
    title: 'Market Leadership',
    items: [
      'Become recognised player in niche commodity segments',
      'Launch innovative financing products',
      'Expand geographic coverage',
    ],
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Veridion"
        title={
          <>
            We are building tomorrow's{' '}
            <span className="text-veridion-rust">community trading solutions</span>.
          </>
        }
        subtitle="Veridion Resources Trade (VRT) is an emerging commodity trading and development finance consultancy founded in 2025 to address critical gaps in global trade facilitation and project financing."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Story */}
      <section className="border-b border-veridion-sand/30">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <div className="space-y-5 text-veridion-body leading-relaxed">
            <h2 className="font-display font-bold text-veridion-ink text-3xl sm:text-4xl tracking-tight">
              Our founding story
            </h2>
            <p>
              VRT was established in <strong>March 2025</strong> in response to the
              rapidly evolving commodity trading landscape and the increasing
              demand for specialised trade facilitation services.
            </p>
            <p>
              Our founder, <strong>Aisha Al-Waily</strong>, recognised significant
              opportunities emerging from a global market in transition — and
              positioned VRT to become a trusted partner for governments and
              institutions seeking reliable access to essential commodities and
              innovative financing solutions.
            </p>
            <p>
              Our name <em>"Veridion"</em> reflects our core commitment to{' '}
              <strong>truth, vision, and resilience</strong> — values that guide
              every partnership we forge and every solution we develop. While we
              are in our initial stages, our foundation is built on deep industry
              relationships, emerging-market expertise, and a clear understanding
              of the evolving commodity trading landscape.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-card overflow-hidden shadow-lg">
              <img
                src="/images/worker-forklift.jpg"
                alt="Veridion operations on site"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-veridion-surface border-b border-veridion-sand/30">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-card p-8 border border-veridion-sand/30">
            <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
              Our mission
            </div>
            <p className="font-display text-veridion-ink text-xl leading-snug">
              To establish VRT as a reliable bridge between verified global
              suppliers and institutional buyers, while developing innovative
              trade finance solutions that support sustainable development and
              economic growth in emerging markets.
            </p>
          </div>
          <div className="bg-veridion-ink rounded-card p-8 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
              Our vision
            </div>
            <p className="font-display text-xl leading-snug">
              To become a recognised and trusted partner for governments and
              development institutions seeking efficient access to critical
              commodities and tailored financing solutions, contributing to
              global economic development and energy transition goals.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-b border-veridion-sand/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
              Where we're heading
            </div>
            <h2 className="font-display font-bold tracking-tight text-veridion-ink text-4xl sm:text-5xl leading-tight">
              A three-phase roadmap, 2025–2028.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {ROADMAP.map((p, i) => (
              <div
                key={p.phase}
                className="bg-white rounded-card border border-veridion-sand/30 p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold">
                    {p.phase}
                  </div>
                  <div className="text-xs text-veridion-muted">{p.years}</div>
                </div>
                <h3 className="font-display font-semibold text-veridion-ink text-xl mb-4">
                  {p.title}
                </h3>
                <ul className="space-y-2.5 text-sm text-veridion-muted">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full bg-veridion-rust mt-2 shrink-0"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-veridion-sand/30 text-xs text-veridion-muted">
                  Step {i + 1} of 3
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-veridion-surface border-b border-veridion-sand/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
            Our locations
          </div>
          <h2 className="font-display font-bold tracking-tight text-veridion-ink text-3xl sm:text-4xl leading-tight mb-10">
            Headquartered in London.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-card p-6 border border-veridion-sand/30 md:col-span-1">
              <div className="font-display font-semibold text-veridion-ink text-lg mb-2">
                UK Office (HQ)
              </div>
              <p className="text-sm text-veridion-muted leading-relaxed">
                Gable House, Suite C Room 3,<br />
                1 Balfour Road, Ilford,<br />
                Essex, IG1 4HP,<br />
                United Kingdom
              </p>
            </div>
            <div className="bg-white rounded-card p-6 border border-veridion-sand/30 md:col-span-2">
              <div className="font-display font-semibold text-veridion-ink text-lg mb-2">
                Working hours
              </div>
              <p className="text-sm text-veridion-muted leading-relaxed">
                Monday – Friday, 7:00am – 6:00pm. Saturday, Sunday, and public
                holidays closed. For urgent enquiries outside hours, email{' '}
                <a
                  href="mailto:info@veridionresourcestrade.com"
                  className="text-veridion-rust hover:underline"
                >
                  info@veridionresourcestrade.com
                </a>{' '}
                — we monitor inbound priority enquiries 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
