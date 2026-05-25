import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-32 text-center">
      <div className="text-veridion-rust font-display font-bold text-sm uppercase tracking-[0.2em] mb-2">
        404
      </div>
      <h1 className="font-display font-bold tracking-tight text-veridion-ink text-5xl mb-4">
        Page not found.
      </h1>
      <p className="text-veridion-muted mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex px-6 py-3 rounded-card bg-veridion-rust hover:bg-veridion-rust-600 text-white font-semibold transition-colors"
      >
        Back home
      </Link>
    </section>
  )
}
