'use client'
import { useState } from 'react'

const businessTypes = ['Roofing', 'HVAC', 'Solar', 'Plumbing', 'Pressure Washing', 'Hauling', 'Other']

export default function ContactCTA() {
  const [form, setForm] = useState({ name: '', businessType: '', phone: '', website: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) { setStatus('success'); setForm({ name: '', businessType: '', phone: '', website: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        <div className="px-8 py-16 border-b-2 md:border-b-0 md:border-r-2 border-ink flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-4">Free Audit</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink mb-6 leading-none">
            Find Out Where Your Leads Are Falling Off
          </h2>
          <p className="font-body text-base text-concrete mb-8 max-w-sm">
            We analyze your site, Google profile, reviews, and top competitors — then send you a plain-English breakdown. Free. 24 hours. No sales call.
          </p>
          <div className="space-y-2 font-mono text-xs uppercase tracking-widest text-concrete">
            <p>— Website + speed audit</p>
            <p>— Google Business analysis</p>
            <p>— Competitor comparison</p>
            <p>— Revenue opportunity estimate</p>
          </div>
        </div>

        <div className="px-8 py-16">
          {status === 'success' ? (
            <div className="h-full flex flex-col justify-center">
              <div className="border-2 border-blue px-8 py-10">
                <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">Received</p>
                <p className="font-condensed text-3xl text-ink mb-3">We&apos;ll be in touch within 2 hours.</p>
                <p className="font-body text-sm text-concrete">Check your phone — we may text you first.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-2">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith"
                  className="w-full bg-transparent border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors" />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-2">Trade</label>
                <select name="businessType" value={form.businessType} onChange={handleChange} required
                  className="w-full bg-paper border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors">
                  <option value="">Select your trade</option>
                  {businessTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-2">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="(555) 000-0000"
                  className="w-full bg-transparent border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors" />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-2">Website <span className="normal-case text-concrete/50">(optional)</span></label>
                <input name="website" value={form.website} onChange={handleChange} type="url" placeholder="https://yoursite.com"
                  className="w-full bg-transparent border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors" />
              </div>
              <button type="submit" disabled={status === 'loading'}
                className="w-full font-mono text-sm uppercase tracking-widest bg-blue text-paper py-4 hover:bg-ink transition-colors disabled:opacity-50">
                {status === 'loading' ? 'Sending...' : 'Get My Free Audit →'}
              </button>
              {status === 'error' && <p className="font-mono text-xs text-red-600 uppercase tracking-widest text-center">Something went wrong. Email hello@tradeflosystems.com</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
