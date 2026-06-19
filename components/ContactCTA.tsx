'use client'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const businessTypes = ['Roofing', 'HVAC', 'Solar', 'Plumbing', 'Pressure Washing', 'Hauling', 'Other']

export default function ContactCTA() {
  const [form, setForm] = useState({ name: '', businessType: '', phone: '', website: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { ref: leftRef, inView: leftInView } = useInView(0.15)
  const { ref: rightRef, inView: rightInView } = useInView(0.15)

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

        {/* Left — info */}
        <div
          ref={leftRef}
          className="bg-ink texture-stripe px-4 md:px-8 py-10 md:py-16 border-b-2 md:border-b-0 md:border-r-2 border-white/10 flex flex-col justify-center transition-all duration-700"
          style={{ opacity: leftInView ? 1 : 0, transform: leftInView ? 'none' : 'translateX(-24px)' }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-4">Free Audit</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-paper mb-4 leading-none">
            Find Out Where Your Leads Are Falling Off
          </h2>
          <div className="h-px bg-blue mb-6 transition-all duration-700" style={{ width: leftInView ? '60px' : '0px', transitionDelay: '400ms' }} />
          <p className="font-body text-base text-white/60 max-w-sm">
            Free. 24 hours. No sales call. Just a plain-English breakdown of what's costing you jobs.
          </p>
        </div>

        {/* Right — form */}
        <div
          ref={rightRef}
          className="px-4 md:px-8 py-10 md:py-16 transition-all duration-700"
          style={{ opacity: rightInView ? 1 : 0, transform: rightInView ? 'none' : 'translateX(24px)', transitionDelay: '150ms' }}
        >
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
              {[
                { name: 'name', label: 'Name', type: 'text', placeholder: 'John Smith' },
                { name: 'phone', label: 'Phone', type: 'tel', placeholder: '(555) 000-0000' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-2">{field.label}</label>
                  <input
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-2">Trade</label>
                <select
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  required
                  className="w-full bg-paper border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors"
                >
                  <option value="">Select your trade</option>
                  {businessTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-2">
                  Website <span className="normal-case text-concrete/50">(optional)</span>
                </label>
                <input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  type="url"
                  placeholder="https://yoursite.com"
                  className="w-full bg-transparent border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full font-mono text-sm uppercase tracking-widest font-bold bg-blue text-ink py-4 hover:bg-ink hover:text-paper transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Get My Free Audit →'}
              </button>
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
