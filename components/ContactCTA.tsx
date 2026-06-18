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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', businessType: '', phone: '', website: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        {/* Left */}
        <div className="px-8 py-16 border-b-2 md:border-b-0 md:border-r-2 border-ink flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-4">Free Audit — No Pitch. No Obligation.</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink mb-6 leading-none">
            Find Out Exactly Where Your Leads Are Falling Off
          </h2>
          <p className="font-body text-base text-concrete mb-8 max-w-sm">
            We&apos;ll analyze your website, Google Business Profile, reviews, and local rankings — then send you a plain-English breakdown of what it&apos;s costing you. Completely free. Delivered in 24 hours.
          </p>
          <div className="space-y-3 mb-8">
            {[
              'Website speed + conversion audit',
              'Google Business Profile analysis',
              'Local keyword ranking report',
              'Competitor comparison (top 3)',
              'Revenue opportunity estimate',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-blue font-mono text-xs">--</span>
                <span className="font-body text-sm text-concrete">{item}</span>
              </div>
            ))}
          </div>
          {/* Trust signals */}
          <div className="border-t-2 border-ink pt-6 space-y-3">
            {[
              'We respond within 2 hours during business hours',
              'No sales call required to get your audit',
              'One contractor per trade per market — exclusivity guaranteed',
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <span className="text-blue font-mono text-xs mt-0.5 shrink-0">01</span>
                <span className="font-mono text-xs text-concrete uppercase tracking-wider">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="px-8 py-16">
          {status === 'success' ? (
            <div className="h-full flex flex-col justify-center">
              <div className="border-2 border-blue px-8 py-10">
                <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">Audit Request Received</p>
                <p className="font-condensed text-3xl text-ink mb-4">We&apos;ll be in touch within 2 hours.</p>
                <p className="font-body text-sm text-concrete">Your free audit is being prepared. Check your phone — we may text you first.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-2">Your Name</label>
                <input
                  name="name" value={form.name} onChange={handleChange} required
                  className="w-full bg-transparent border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-2">Your Trade</label>
                <select
                  name="businessType" value={form.businessType} onChange={handleChange} required
                  className="w-full bg-paper border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors"
                >
                  <option value="">Select your trade</option>
                  {businessTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-2">Phone Number</label>
                <input
                  name="phone" value={form.phone} onChange={handleChange} required type="tel"
                  className="w-full bg-transparent border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-2">
                  Website URL <span className="text-concrete/60 normal-case">(optional — we&apos;ll find it if blank)</span>
                </label>
                <input
                  name="website" value={form.website} onChange={handleChange} type="url"
                  className="w-full bg-transparent border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors"
                  placeholder="https://yoursite.com"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full font-mono text-sm uppercase tracking-widest bg-blue text-paper py-4 hover:bg-ink transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Get My Free Audit →'}
              </button>
              <p className="font-mono text-xs text-concrete uppercase tracking-widest text-center">
                Free. 24-hour turnaround. No sales pressure.
              </p>
              {status === 'error' && (
                <p className="font-mono text-xs text-red-600 uppercase tracking-widest text-center">
                  Something went wrong. Email hello@tradeflosystems.com
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
