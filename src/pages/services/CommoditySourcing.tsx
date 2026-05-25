import PageHero from '../../components/PageHero'
import ServiceSidebar from '../../components/ServiceSidebar'
import ContactCTA from '../../components/ContactCTA'
import { getServiceBySlug } from '../../data/services'

const CAPABILITIES = [
  'Direct relationships with verified suppliers in key commodity sectors',
  'Focus on agricultural products (sugar, wheat, fertilisers)',
  'Precious metals and gemstones sourcing (gold, copper, diamonds)',
  'Energy products procurement (Jet A1, diesel, petroleum derivatives)',
]

const APPROACH = [
  'Start with smaller, manageable transactions to build track record',
  "Leverage founder's existing supplier relationships",
  'Focus on transparency and documentation throughout the process',
  'Gradual scaling based on successful project completion',
]

export default function CommoditySourcing() {
  const svc = getServiceBySlug('commodity-sourcing')
  return (
    <>
      <PageHero
        eyebrow={svc.tagline}
        title={
          <>
            Commodity sourcing &amp;{' '}
            <span className="text-veridion-rust">trade facilitation</span>.
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
                Current capabilities
              </div>
              <h2 className="font-display font-bold tracking-tight text-veridion-ink text-3xl sm:text-4xl leading-tight mb-8">
                What we source today.
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
                Our approach
              </div>
              <h2 className="font-display font-bold tracking-tight text-veridion-ink text-3xl sm:text-4xl leading-tight mb-4">
                Disciplined transactions, built to scale.
              </h2>
              <p className="text-veridion-muted leading-relaxed max-w-2xl mb-8">
                We have delivered similar results in areas such as logistics
                optimization, contract renegotiation, and sustainable sourcing.
                Each engagement is tailored to the client's goals and
                operational realities.
              </p>
              <ol className="space-y-3">
                {APPROACH.map((step, i) => (
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

            <div className="bg-veridion-ink rounded-card p-8 text-white">
              <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
                Industry experience
              </div>
              <p className="font-display text-xl leading-snug max-w-3xl">
                Want to learn how we've helped others in your industry? Contact
                us for access to additional case studies or a tailored
                consultation.
              </p>
            </div>
          </div>

          <ServiceSidebar activeSlug="commodity-sourcing" />
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
