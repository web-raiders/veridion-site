import { useState, useEffect } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'

const PHONE_DISPLAY = '+44 7553 824 086'
const PHONE_HREF = 'tel:+447553824086'
const EMAIL = 'info@veridionresourcestrade.com'
const ADDRESS = 'Gable House, Suite C Room 3, 1 Balfour Road, Ilford, Essex, IG1 4HP, United Kingdom'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/services', label: 'Services', end: false },
  { to: '/contact', label: 'Contact', end: false },
] as const

/**
 * BrandMark — fixed in the top-left corner of every page.
 * Logo slot uses a dashed-border placeholder to make it obvious that the
 * real logo asset is still to be supplied. Replace the inner div with an
 * <img src="/logo.svg" /> when delivered.
 */
function BrandMark() {
  return (
    <Link
      to="/"
      aria-label="Veridion Resources Trade — home"
      className="fixed top-4 left-4 z-30 flex items-center gap-3 bg-white/80 backdrop-blur-card rounded-full pl-2 pr-3 sm:pr-4 py-1.5 border border-veridion-sand/40 shadow-[0_8px_30px_-12px_rgba(13,13,13,0.18)] hover:shadow-[0_12px_40px_-12px_rgba(13,13,13,0.28)] transition-shadow"
    >
      {/* Placeholder for client-supplied logo */}
      <div className="w-10 h-10 rounded-full bg-veridion-rust/5 border-2 border-dashed border-veridion-rust/60 flex items-center justify-center shrink-0">
        <span className="text-veridion-rust font-display font-bold text-[10px] uppercase tracking-wider">
          Logo
        </span>
      </div>
      <div className="leading-tight hidden sm:block">
        <div className="font-display font-semibold text-veridion-ink text-sm">
          Veridion
        </div>
        <div className="text-[9px] uppercase tracking-[0.18em] text-veridion-muted">
          Resources Trade
        </div>
      </div>
    </Link>
  )
}

/**
 * Header — fixed pill nav, centered. Doesn't take flow space so pages
 * own their top padding (PageHero uses pt-32, Home hero uses pt-32 sm+).
 * - Resting (desktop): just the 4 nav links.
 * - Hover (desktop): "Get In Touch" CTA reveals on the right.
 * - Mobile (<md): a hamburger toggles a dropdown panel with all links.
 */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  // Close mobile menu on route change so a tap doesn't leave the panel hanging.
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Close mobile menu when window resizes past mobile breakpoint.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close on Escape.
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
      isActive
        ? 'text-veridion-rust'
        : 'text-veridion-body hover:text-veridion-ink'
    }`

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-20 flex justify-center px-4 pointer-events-none">
        <div className="group pointer-events-auto flex items-center gap-1 bg-white/80 backdrop-blur-card border border-veridion-sand/40 rounded-full shadow-[0_8px_30px_-12px_rgba(13,13,13,0.18)] px-2 py-2 transition-[box-shadow] duration-300 hover:shadow-[0_12px_40px_-12px_rgba(13,13,13,0.28)]">
          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-0">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop "Get In Touch" CTA — slides in on hover */}
          <div
            aria-hidden="true"
            className="hidden md:grid grid-cols-[0fr] group-hover:grid-cols-[1fr] transition-[grid-template-columns] duration-300 ease-out"
          >
            <div className="overflow-hidden">
              <Link
                to="/contact"
                className="ml-1 inline-flex items-center px-4 py-2 rounded-full bg-veridion-ink text-white text-sm font-semibold hover:bg-veridion-rust transition-colors whitespace-nowrap opacity-0 group-hover:opacity-100 [transition:opacity_300ms,background-color_200ms]"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-panel"
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-veridion-ink hover:bg-veridion-bg transition-colors"
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 6L18 18M6 18L18 6" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 7H20M4 12H20M4 17H20" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile dropdown panel — sits below the nav pill */}
      <div
        id="mobile-menu-panel"
        className={`md:hidden fixed top-[5.5rem] left-4 right-4 z-20 transition-all duration-200 origin-top ${
          mobileOpen
            ? 'opacity-100 scale-y-100 pointer-events-auto'
            : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-card border border-veridion-sand/40 shadow-[0_20px_50px_-12px_rgba(13,13,13,0.25)] p-2">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-card text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-veridion-rust/10 text-veridion-rust'
                      : 'text-veridion-body hover:bg-veridion-bg'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-2 pt-2 border-t border-veridion-sand/30 px-2 pb-2">
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-3 rounded-card bg-veridion-ink text-white text-sm font-semibold hover:bg-veridion-rust transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop tap-to-close (mobile only) */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 z-10 bg-veridion-ink/20 backdrop-blur-sm"
        />
      )}
    </>
  )
}

function Footer() {
  return (
    <footer className="bg-veridion-ink text-veridion-bg/90 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-card bg-veridion-rust/15 border-2 border-dashed border-veridion-rust/60 flex items-center justify-center">
              <span className="text-veridion-rust font-display font-bold text-[9px] uppercase tracking-wider">
                Logo
              </span>
            </div>
            <div className="font-display font-semibold text-white text-lg">
              Veridion Resources Trade
            </div>
          </div>
          <p className="text-sm text-veridion-bg/60 leading-relaxed">
            Building tomorrow's community trading solutions.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-veridion-bg/70">
            <li>
              <a href={PHONE_HREF} className="hover:text-veridion-rust transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-veridion-rust transition-colors break-all">
                {EMAIL}
              </a>
            </li>
            <li className="pt-2 text-veridion-bg/60">{ADDRESS}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Information
          </h4>
          <ul className="space-y-2 text-sm text-veridion-bg/70">
            <li>
              <Link to="/about" className="hover:text-veridion-rust transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services/commodity-sourcing" className="hover:text-veridion-rust transition-colors">
                Commodity Sourcing
              </Link>
            </li>
            <li>
              <Link to="/services/development-finance" className="hover:text-veridion-rust transition-colors">
                Development Finance Advisory
              </Link>
            </li>
            <li>
              <Link to="/services/market-intelligence" className="hover:text-veridion-rust transition-colors">
                Market Intelligence & Risk Advisory
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-veridion-rust transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Newsletter
          </h4>
          <p className="text-sm text-veridion-bg/70 mb-3">
            Subscribe to our newsletter to be updated.
          </p>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              // TODO: wire to a real newsletter endpoint
            }}
          >
            <input
              type="email"
              required
              placeholder="Email"
              className="flex-1 min-w-0 px-3 py-2 rounded-card bg-white/10 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-veridion-rust"
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-card bg-veridion-rust hover:bg-veridion-rust-600 text-white text-sm font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-veridion-bg/50">
          <div>© {new Date().getFullYear()} Veridion Resources Trade. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#sitemap" className="hover:text-veridion-rust transition-colors">Sitemap</a>
            <a href="#terms" className="hover:text-veridion-rust transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-veridion-rust transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="min-h-full flex flex-col bg-veridion-bg">
      <BrandMark />
      <Header />
      {/* main itself has no top padding — pages own their own top clearance.
          The fixed nav occupies ~y=16..72; pages should start at y=104+ minimum.
          PageHero uses pt-32 (128px) which covers it. Home hero needs pt-32 too. */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
