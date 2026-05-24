import { Outlet, NavLink } from 'react-router-dom'

export default function Layout() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-veridion-600'
        : 'text-slate-600 hover:text-veridion-600'
    }`

  return (
    <div className="min-h-full flex flex-col bg-slate-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-veridion-500 to-veridion-700 flex items-center justify-center text-white font-bold">
              V
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Veridion
            </span>
          </NavLink>
          <nav className="flex items-center gap-1">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Veridion. Boilerplate ready for content.
        </div>
      </footer>
    </div>
  )
}
