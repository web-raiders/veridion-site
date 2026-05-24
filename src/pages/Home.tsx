export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-veridion-50 text-veridion-700 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-veridion-500" />
          React boilerplate online
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-veridion-500 to-veridion-700 bg-clip-text text-transparent">
            Veridion
          </span>
        </h1>
        <p className="text-lg text-slate-600 mb-10">
          A scaffolded React + TypeScript application powered by Vite, Tailwind
          CSS, and React Router. Ready for whatever you build next.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#stack"
            className="px-5 py-2.5 rounded-lg bg-veridion-600 hover:bg-veridion-700 text-white text-sm font-semibold transition-colors"
          >
            View the stack
          </a>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 text-sm font-semibold transition-colors"
          >
            Vite docs ↗
          </a>
        </div>
      </div>

      <div id="stack" className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { name: 'React 18', desc: 'UI library with Strict Mode enabled' },
          { name: 'TypeScript', desc: 'Strict, modern compiler config' },
          { name: 'Vite', desc: 'Fast dev server + production builds' },
          { name: 'Tailwind CSS', desc: 'Utility-first styling, themed' },
          { name: 'React Router', desc: 'Declarative client-side routing' },
          { name: 'PostCSS', desc: 'Autoprefixer pipeline' },
          { name: 'Inter font', desc: 'Loaded via Google Fonts' },
          { name: 'Layout shell', desc: 'Header, footer, nested routes' },
        ].map((item) => (
          <div
            key={item.name}
            className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-sm transition-shadow"
          >
            <div className="font-semibold text-slate-900 mb-1">{item.name}</div>
            <div className="text-sm text-slate-500">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
