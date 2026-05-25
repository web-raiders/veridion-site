import { Link } from 'react-router-dom'

/**
 * Bottom-of-page CTA block — used on most non-home pages to drive to /contact.
 * Verbatim copy adapted from the WordPress service pages.
 */
export default function ContactCTA() {
  return (
    <section className="border-t border-veridion-sand/30 bg-veridion-bg">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
          Let's start work together
        </div>
        <h2 className="font-display font-bold tracking-tight text-veridion-ink text-3xl sm:text-4xl leading-tight mb-4 max-w-2xl mx-auto">
          Please feel free to contact us. We'll get back to you within 1–2 business days.
        </h2>
        <p className="text-veridion-muted mb-8 max-w-2xl mx-auto">
          Or just call us now.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-card bg-veridion-rust hover:bg-veridion-rust-600 text-white font-semibold transition-colors"
          >
            Contact us
          </Link>
          <a
            href="tel:+447553824086"
            className="inline-flex items-center px-6 py-3 rounded-card border border-veridion-ink/15 hover:border-veridion-ink/40 text-veridion-ink font-semibold transition-colors"
          >
            +44 7553 824 086
          </a>
        </div>
      </div>
    </section>
  )
}
