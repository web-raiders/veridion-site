import { Link } from 'react-router-dom'

/**
 * Home — recreates the 8-section structure of the Framer reference
 * (.claude/framer-design-reference.md) using the Veridion content from
 * .claude/site-content.md. Imagery is sourced from /public/images and
 * should be replaced with client-supplied photography ahead of launch.
 */

const STATS = [
  { value: '450+', label: 'Square Kilometers' },
  { value: '50', label: 'Active Projects' },
  { value: '98.0%', label: 'Safety Record' },
  { value: '100%', label: 'Guaranteed Results' },
]

// Service cards — these blend the Framer 4-card structure with the live-site's
// 3 advisory services. Until the client confirms positioning (see open
// questions in site-content.md), we expose both directions.
const SERVICES = [
  {
    title: 'Commodity Sourcing',
    body:
      'We help businesses source high-quality commodities from trusted global suppliers — ensuring competitive pricing, supply reliability, and strategic procurement support.',
    to: '/services/commodity-sourcing',
  },
  {
    title: 'Development Finance Advisory',
    body:
      'Specialized financial solutions that enhance liquidity, manage market risks, and support seamless, compliant transactions in complex energy markets.',
    to: '/services/development-finance',
  },
  {
    title: 'Market Intelligence & Risk Advisory',
    body:
      'Our expansive global network connects clients with trusted partners, suppliers, and markets worldwide — enabling efficient operations and scalable growth.',
    to: '/services/market-intelligence',
  },
  {
    title: 'Global Real Estate',
    body:
      'Diversified opportunities across continents — we partner with private investors and government-backed initiatives to support growth and development.',
    to: '/services',
  },
]

const WHY_CARDS = [
  {
    title: 'Global Supplier Agreements',
    body:
      'We work directly with trusted suppliers worldwide to ensure reliable access, quality assurance, and long-term pricing stability.',
  },
  {
    title: 'Cost Efficiency',
    body:
      'Our sourcing strategies and streamlined processes help you reduce procurement costs without compromising on quality.',
  },
  {
    title: 'End-to-End Support',
    body:
      'From sourcing and financing to logistics and delivery, we manage every step so you can focus on growth.',
  },
  {
    title: '24/7 Support',
    body: 'Our team is available around the clock to assist you.',
  },
]

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-36 lg:pb-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-veridion-rust/10 text-veridion-rust text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-veridion-rust" />
            Veridion Resources Trade · Headquartered in London
          </div>
          <h1 className="font-display font-bold tracking-tight text-veridion-ink text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6">
            From Earth to Industry:
            <br />
            <span className="text-veridion-rust">Veridion Delivers.</span>
          </h1>
          <p className="text-lg text-veridion-muted max-w-xl mb-8 leading-relaxed">
            We specialize in connecting clients around the world with
            high-demand resources — agricultural products, minerals, energy,
            and essential goods — backed by trade finance and market expertise.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-card bg-veridion-rust hover:bg-veridion-rust-600 text-white font-semibold transition-colors"
            >
              Get Your Free Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 rounded-card border border-veridion-ink/15 hover:border-veridion-ink/40 text-veridion-ink font-semibold transition-colors"
            >
              See Our Services
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-card overflow-hidden shadow-xl ring-1 ring-veridion-ink/5">
            <img
              src="/images/worker-portrait.jpg"
              alt="Veridion field operations specialist on site"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          {/* Floating stat card — frosted glass over photo */}
          <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-white/85 backdrop-blur-card rounded-card shadow-xl p-5 max-w-[14rem]">
            <div className="font-display font-bold text-3xl text-veridion-ink">
              100<span className="text-veridion-rust">+</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-veridion-muted mt-1">
              Successful projects delivered
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="border-t border-veridion-sand/30 bg-veridion-surface">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/3] rounded-card overflow-hidden shadow-lg">
            <img
              src="/images/open-pit-mine.jpg"
              alt="Open-pit mining operation"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
            About us
          </div>
          <h2 className="font-display font-bold tracking-tight text-veridion-ink text-4xl sm:text-5xl leading-tight mb-5">
            Empowering global trade with precision.
          </h2>
          <p className="text-veridion-muted mb-8 leading-relaxed max-w-xl">
            Veridion Resources Trade (VRT) is an emerging commodity trading and
            development finance consultancy founded in 2025 to address critical
            gaps in global trade facilitation and project financing. Our name
            reflects our core values: <em>truth, vision, and resilience</em>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-3xl sm:text-4xl text-veridion-ink">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-veridion-muted mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="border-t border-veridion-sand/30">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-end mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
              What We Offer
            </div>
            <h2 className="font-display font-bold tracking-tight text-veridion-ink text-4xl sm:text-5xl leading-tight">
              Unlocking Earth's potential.
            </h2>
          </div>
          <p className="text-veridion-muted leading-relaxed max-w-xl lg:justify-self-end">
            We explore, transport, and optimize with expertise. Tailored
            solutions in commodities, finance, logistics, and strategic
            sourcing — designed to drive efficiency, reduce risk, and power
            global trade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative bg-white rounded-card p-6 border border-veridion-sand/30 hover:border-veridion-rust/40 hover:shadow-md transition-all"
            >
              <div className="font-display font-bold text-veridion-ink/30 text-sm mb-4">
                0{i + 1}
              </div>
              <h3 className="font-display font-semibold text-veridion-ink text-lg mb-2 group-hover:text-veridion-rust transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-veridion-muted leading-relaxed mb-5">
                {s.body}
              </p>
              <div className="text-sm font-semibold text-veridion-rust inline-flex items-center gap-1.5">
                Learn more
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Trust() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/haul-truck.jpg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-veridion-ink/65" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
          Sustainable trade
        </div>
        <h2 className="font-display font-bold tracking-tight text-white text-4xl sm:text-5xl max-w-3xl mx-auto leading-tight mb-8">
          Your trusted partner in sustainable resource development.
        </h2>
        <div className="font-display font-bold text-white text-6xl sm:text-7xl mb-2">
          100<span className="text-veridion-rust">+</span>
        </div>
        <div className="text-sm uppercase tracking-wider text-white/70 mb-8">
          Successful projects delivered
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 rounded-card bg-veridion-rust hover:bg-veridion-rust-600 text-white font-semibold transition-colors"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

function WhyVeridion() {
  return (
    <section className="border-t border-veridion-sand/30 bg-veridion-surface">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
            Why Veridion
          </div>
          <h2 className="font-display font-bold tracking-tight text-veridion-ink text-4xl sm:text-5xl leading-tight">
            Built to deliver from sourcing to settlement.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY_CARDS.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-card p-6 border border-veridion-sand/30"
            >
              <div className="w-10 h-10 rounded-card bg-veridion-rust/10 flex items-center justify-center mb-4">
                <span className="w-2 h-2 rounded-full bg-veridion-rust" />
              </div>
              <h3 className="font-display font-semibold text-veridion-ink mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-veridion-muted leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="border-t border-veridion-sand/30">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="aspect-[5/4] rounded-card overflow-hidden shadow-lg">
            <img
              src="/images/worker-forklift.jpg"
              alt="Veridion operations team member on site"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
            Get in touch
          </div>
          <h2 className="font-display font-bold tracking-tight text-veridion-ink text-4xl sm:text-5xl leading-tight mb-5">
            Trade smarter with Veridion.
          </h2>
          <p className="text-veridion-muted mb-8 leading-relaxed max-w-lg">
            Move with confidence. Veridion ensures responsible, efficient, and
            sustainable resource development — from sourcing through delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-card bg-veridion-rust hover:bg-veridion-rust-600 text-white font-semibold transition-colors"
            >
              Book Your Consultation
            </Link>
            <a
              href="mailto:info@veridionresourcestrade.com"
              className="inline-flex items-center px-6 py-3 rounded-card border border-veridion-ink/15 hover:border-veridion-ink/40 text-veridion-ink font-semibold transition-colors"
            >
              info@veridionresourcestrade.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Trust />
      <WhyVeridion />
      <FinalCTA />
    </>
  )
}
