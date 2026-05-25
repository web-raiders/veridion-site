import { Link } from 'react-router-dom'
import { SERVICES, type ServiceSlug } from '../data/services'

interface Props {
  activeSlug: ServiceSlug
}

/**
 * Sidebar shown on each service detail page — cross-links the other services
 * and exposes a "Brochure" + contact CTA card. Mirrors the pattern used on
 * each service page of the live WordPress site.
 */
export default function ServiceSidebar({ activeSlug }: Props) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-32 self-start">
      <div className="bg-white rounded-card border border-veridion-sand/30 p-5">
        <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
          Our services
        </div>
        <ul className="space-y-1">
          {SERVICES.map((s) => {
            const active = s.slug === activeSlug
            return (
              <li key={s.slug}>
                <Link
                  to={s.to}
                  className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-card text-sm transition-colors ${
                    active
                      ? 'bg-veridion-rust/10 text-veridion-rust font-semibold'
                      : 'text-veridion-body hover:bg-veridion-bg'
                  }`}
                >
                  <span>{s.shortTitle}</span>
                  <span aria-hidden className={active ? 'text-veridion-rust' : 'text-veridion-muted'}>
                    →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="bg-veridion-ink rounded-card p-5 text-white">
        <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-2">
          Brochure
        </div>
        <p className="text-sm text-white/80 mb-4 leading-relaxed">
          Download our document to see specific data of the service and how we
          work.
        </p>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 rounded-card bg-veridion-rust hover:bg-veridion-rust-600 text-white text-sm font-semibold transition-colors"
          onClick={() => {
            // TODO: wire to real brochure PDF when client supplies it
            alert('Brochure coming soon.')
          }}
        >
          Download PDF
        </button>
      </div>

      <div className="bg-white rounded-card border border-veridion-sand/30 p-5">
        <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-2">
          Let's start work together
        </div>
        <p className="text-sm text-veridion-muted mb-4 leading-relaxed">
          Please feel free to contact us. We'll get back to you within 1–2
          business days. Or just call us now.
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="tel:+447553824086"
              className="text-veridion-ink hover:text-veridion-rust transition-colors font-medium"
            >
              +44 7553 824 086
            </a>
          </li>
          <li>
            <a
              href="mailto:info@veridionresourcestrade.com"
              className="text-veridion-ink hover:text-veridion-rust transition-colors font-medium break-all"
            >
              info@veridionresourcestrade.com
            </a>
          </li>
          <li className="pt-2 text-veridion-muted leading-relaxed">
            Gable House, Suite C Room 3, 1 Balfour Road, Ilford, Essex, IG1 4HP,
            United Kingdom
          </li>
        </ul>
      </div>
    </aside>
  )
}
