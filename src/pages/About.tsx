export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
        About this scaffold
      </h1>
      <p className="text-slate-600 mb-6">
        This page is a placeholder route to demonstrate that client-side
        navigation works end-to-end. Replace the content here with whatever
        Veridion needs as more context arrives.
      </p>
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="font-semibold text-slate-900 mb-2">Project structure</h2>
        <pre className="text-xs text-slate-600 overflow-x-auto leading-relaxed">
{`src/
├── components/   # Shared UI (Layout, etc.)
├── pages/        # Route-level views
├── App.tsx       # Route definitions
├── main.tsx      # App entry + Router
└── index.css     # Tailwind directives`}
        </pre>
      </div>
    </div>
  )
}
