import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ContactCTA from '../components/ContactCTA'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title={
          <>
            Tailored solutions in commodities, finance,{' '}
            <span className="text-veridion-rust">and strategic sourcing</span>.
          </>
        }
        subtitle="Designed to drive efficiency, reduce risk, and power global trade — for institutions, governments, and operators across emerging markets."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="border-b border-veridion-sand/30">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to={s.to}
              className="group bg-white rounded-card border border-veridion-sand/30 hover:border-veridion-rust/40 hover:shadow-md transition-all overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-veridion-ink">
                <img
                  src={
                    i === 0
                      ? '/images/haul-truck.jpg'
                      : i === 1
                      ? '/images/open-pit-mine.jpg'
                      : '/images/worker-portrait.jpg'
                  }
                  alt=""
                  aria-hidden
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-veridion-ink/40 to-transparent" />
                <div className="absolute top-4 left-4 text-white/90 font-display font-bold text-sm">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-2">
                  {s.tagline}
                </div>
                <h3 className="font-display font-semibold text-veridion-ink text-xl mb-3 group-hover:text-veridion-rust transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-veridion-muted leading-relaxed mb-5 flex-1">
                  {s.teaser}
                </p>
                <div className="text-sm font-semibold text-veridion-rust inline-flex items-center gap-1.5">
                  Explore service
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
