import PageHero from '../../components/PageHero'
import ServiceSidebar from '../../components/ServiceSidebar'
import ContactCTA from '../../components/ContactCTA'
import { getServiceBySlug } from '../../data/services'

const SPECIALISED = [
  'Market analysis for emerging commodity categories',
  'Risk assessment for cross-border transactions',
  'Regulatory compliance guidance',
  'Supply chain optimisation consulting',
]

const ADVANTAGE = [
  'Focus on data-driven market analysis',
  'Understanding of regional market dynamics',
  'Agile response to market opportunities',
  'Personalised service approach',
]

export default function MarketIntelligence() {
  const svc = getServiceBySlug('market-intelligence')
  return (
    <>
      <PageHero
        eyebrow={svc.tagline}
        title={
          <>
            Market intelligence &amp;{' '}
            <span className="text-veridion-rust">risk advisory</span>.
          </>
        }
        subtitle={svc.heroIntro}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: svc.shortTitle },
        ]}
      />

      <section className="border-b border-veridion-sand/30">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1fr_320px] gap-12">
          <div className="space-y-16">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
                Specialised services
              </div>
              <h2 className="font-display font-bold tracking-tight text-veridion-ink text-3xl sm:text-4xl leading-tight mb-8">
                What we deliver.
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {SPECIALISED.map((c) => (
                  <li
                    key={c}
                    className="bg-white rounded-card border border-veridion-sand/30 p-5 flex gap-3"
                  >
                    <span
                      aria-hidden
                      className="w-8 h-8 rounded-card bg-veridion-rust/10 flex items-center justify-center text-veridion-rust font-bold shrink-0"
                    >
                      ✓
                    </span>
                    <span className="text-sm text-veridion-body leading-relaxed pt-1.5">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-veridion-muted leading-relaxed max-w-2xl mt-8">
                Whether you're expanding into new markets or optimizing
                existing operations, we bridge the gaps with a dependable
                international network.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
                Competitive advantage
              </div>
              <h2 className="font-display font-bold tracking-tight text-veridion-ink text-3xl sm:text-4xl leading-tight mb-8">
                Why clients choose Veridion.
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {ADVANTAGE.map((a, i) => (
                  <div
                    key={a}
                    className="bg-veridion-surface rounded-card border border-veridion-sand/30 p-5"
                  >
                    <div className="font-display font-bold text-veridion-rust mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="text-veridion-body leading-relaxed">
                      {a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ServiceSidebar activeSlug="market-intelligence" />
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
