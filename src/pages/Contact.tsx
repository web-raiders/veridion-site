import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'

const PHONE_DISPLAY = '+44 7553 824 086'
const PHONE_HREF = 'tel:+447553824086'
const EMAIL = 'info@veridionresourcestrade.com'

type Status = 'idle' | 'sending' | 'sent' | 'error'

/**
 * Encode a FormData object for Netlify Forms.
 * Netlify expects `application/x-www-form-urlencoded`, NOT multipart/JSON.
 */
function encodeForNetlify(data: FormData): string {
  const params = new URLSearchParams()
  data.forEach((value, key) => {
    if (typeof value === 'string') {
      params.append(key, value)
    }
  })
  return params.toString()
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg(null)

    const form = e.currentTarget
    const data = new FormData(form)

    // Local dev: Netlify Forms endpoint doesn't exist, so simulate success.
    // The hidden static form in index.html is what production needs.
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      await new Promise((r) => setTimeout(r, 500))
      setStatus('sent')
      form.reset()
      return
    }

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForNetlify(data),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please email us directly.',
      )
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Drop a line"
        title={
          <>
            Let's start a <span className="text-veridion-rust">project</span>.
          </>
        }
        subtitle="Get in touch about commodity sourcing, development finance, market intelligence — or anything else on your mind. We respond within 1–2 business days."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="border-b border-veridion-sand/30">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          {/* Form */}
          <div className="bg-white rounded-card border border-veridion-sand/30 p-8">
            <h2 className="font-display font-semibold text-veridion-ink text-2xl mb-1">
              Send us a message
            </h2>
            <p className="text-sm text-veridion-muted mb-8">
              Tell us a little about what you're working on.
            </p>

            {status === 'sent' ? (
              <div className="bg-veridion-rust/10 border border-veridion-rust/30 rounded-card p-6">
                <div className="font-display font-semibold text-veridion-ink mb-1">
                  Thanks — message received.
                </div>
                <p className="text-sm text-veridion-body">
                  We'll be back to you within 1–2 business days at the email
                  you provided.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm font-semibold text-veridion-rust hover:text-veridion-rust-600"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                className="space-y-5"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/*
                  Netlify needs `form-name` in the POST body to route the
                  submission to the right form. The hidden static form in
                  index.html declares the schema; this `name="contact"` matches.
                */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot — visually hidden, real users won't fill this in.
                    Bots that crawl the DOM and auto-fill every input will,
                    and Netlify drops those submissions silently. */}
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don't fill this out if you're human:{' '}
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-veridion-muted font-semibold mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full px-3 py-2.5 rounded-card bg-veridion-bg border border-veridion-sand/40 focus:outline-none focus:border-veridion-rust text-veridion-ink"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-veridion-muted font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full px-3 py-2.5 rounded-card bg-veridion-bg border border-veridion-sand/40 focus:outline-none focus:border-veridion-rust text-veridion-ink"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-veridion-muted font-semibold mb-2">
                    Company (optional)
                  </label>
                  <input
                    name="company"
                    autoComplete="organization"
                    className="w-full px-3 py-2.5 rounded-card bg-veridion-bg border border-veridion-sand/40 focus:outline-none focus:border-veridion-rust text-veridion-ink"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-veridion-muted font-semibold mb-2">
                    Topic
                  </label>
                  <select
                    name="topic"
                    className="w-full px-3 py-2.5 rounded-card bg-veridion-bg border border-veridion-sand/40 focus:outline-none focus:border-veridion-rust text-veridion-ink"
                    defaultValue="commodity-sourcing"
                  >
                    <option value="commodity-sourcing">Commodity Sourcing</option>
                    <option value="development-finance">Development Finance Advisory</option>
                    <option value="market-intelligence">Market Intelligence &amp; Risk Advisory</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-veridion-muted font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 rounded-card bg-veridion-bg border border-veridion-sand/40 focus:outline-none focus:border-veridion-rust text-veridion-ink resize-y"
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-card p-4 text-sm">
                    <strong className="font-semibold">Couldn't send:</strong>{' '}
                    {errorMsg ?? 'Unknown error.'} Please email us directly at{' '}
                    <a href={`mailto:${EMAIL}`} className="underline">
                      {EMAIL}
                    </a>
                    .
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center px-6 py-3 rounded-card bg-veridion-rust hover:bg-veridion-rust-600 text-white font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>

          {/* Info column */}
          <div className="space-y-4">
            <div className="bg-veridion-ink rounded-card p-6 text-white">
              <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
                Veridion Resources Trade (HQ)
              </div>
              <p className="text-white/85 leading-relaxed">
                Gable House, Suite C Room 3,<br />
                1 Balfour Road, Ilford,<br />
                Essex, IG1 4HP,<br />
                United Kingdom
              </p>
            </div>

            <div className="bg-white rounded-card border border-veridion-sand/30 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
                Mail &amp; phone
              </div>
              <ul className="space-y-2 text-veridion-body">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="hover:text-veridion-rust transition-colors break-all"
                  >
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={PHONE_HREF}
                    className="hover:text-veridion-rust transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-card border border-veridion-sand/30 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-veridion-rust font-semibold mb-3">
                Working hours
              </div>
              <p className="text-veridion-body leading-relaxed">
                Mon – Fri, 7:00am – 6:00pm.
              </p>
              <p className="text-sm text-veridion-muted mt-1">
                Saturday, Sunday &amp; public holidays closed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
