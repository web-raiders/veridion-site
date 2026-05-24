import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <div className="text-veridion-600 font-semibold mb-2">404</div>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
        Page not found
      </h1>
      <p className="text-slate-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex px-5 py-2.5 rounded-lg bg-veridion-600 hover:bg-veridion-700 text-white text-sm font-semibold transition-colors"
      >
        Back home
      </Link>
    </div>
  )
}
