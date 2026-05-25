import PageHero from '../../components/PageHero'
import ServiceSidebar from '../../components/ServiceSidebar'
import ContactCTA from '../../components/ContactCTA'
import { getServiceBySlug } from '../../data/services'

const CAPABILITIES = [
  'Preliminary partnerships with European financial institutions',
  'Focus on structuring smaller-scale development projects',
  'Expertise in emerging market financing challenges',
  'Advisory services for project feasibility and structuring',
]

const STRATEGY = [
  'Begin with advisory and consulting services',
  'Build relationships with established financial partners',
  'Develop expertise in specific geographic markets',
  'Gradually expand to larger project financing',
]

export default function DevelopmentFinance() {
  const svc = getServiceBySlug('development-finance')
  return (
    <>
      <PageHero
        eyebrow={svc.tagline}
        title={
          <>
            Development finance{' '}
            <span className="text-veridion-rust">advisory</span>.
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
                Emerging capabilities
              </div>
              <h2 className="font-display font-bold tracking-tight text-veridion-ink text-3xl sm:text-4xl leading-tight mb-8">
                Where we add value today.
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {CAPABILITIES.map((c) => (
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
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
                Growth strategy
              </div>
              <h2 className="font-display font-bold tracking-tight text-veridion-ink text-3xl sm:text-4xl leading-tight mb-4">
                More than capital — expertise, structure, and trust.
              </h2>
              <p className="text-veridion-muted leading-relaxed max-w-2xl mb-8">
                Navigating complex trade environments requires more than just
                capital — it demands expertise, structure, and trust. We offer
                a full suite of trade finance solutions tailored to support
                international transactions, capital-intensive projects, and
                government-backed initiatives.
              </p>
              <ol className="space-y-3">
                {STRATEGY.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-4 bg-veridion-surface rounded-card border border-veridion-sand/30 p-5"
                  >
                    <span className="font-display font-bold text-veridion-rust text-2xl shrink-0 w-8">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-veridion-body leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ServiceSidebar activeSlug="development-finance" />
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
