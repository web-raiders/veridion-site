import { Link } from 'react-router-dom'

type Crumb = { label: string; to?: string }

interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  crumbs?: Crumb[]
}

/**
 * Consistent page header used by every non-home page.
 * Sits beneath the floating pill nav; tops out with extra padding
 * so the nav doesn't crowd the headline.
 */
export default function PageHero({ eyebrow, title, subtitle, crumbs }: PageHeroProps) {
  return (
    <section className="bg-veridion-surface border-b border-veridion-sand/30">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="text-xs text-veridion-muted mb-4">
            <ol className="flex items-center gap-1.5 flex-wrap">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {c.to ? (
                    <Link to={c.to} className="hover:text-veridion-rust transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-veridion-body">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
          {eyebrow}
        </div>
        <h1 className="font-display font-bold tracking-tight text-veridion-ink text-5xl sm:text-6xl leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-veridion-muted max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
