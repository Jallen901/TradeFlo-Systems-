'use client'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const trades = ['Roofing', 'HVAC', 'Solar', 'Plumbing', 'Pressure Washing', 'Hauling', 'General Contracting', 'Landscaping']
const jobDefaults: Record<string, number> = {
  Roofing: 18000, HVAC: 6000, Solar: 25000, Plumbing: 2000,
  'Pressure Washing': 500, Hauling: 400, 'General Contracting': 35000, Landscaping: 1200,
}

export default function Calculator() {
  const [trade, setTrade] = useState('Roofing')
  const [leads, setLeads] = useState(20)
  const [closeRate, setCloseRate] = useState(20)
  const [jobValue, setJobValue] = useState(18000)
  const { ref: headerRef, inView: headerInView } = useInView(0.3)
  const { ref: calcRef, inView: calcInView } = useInView(0.1)

  const handleTradeChange = (t: string) => {
    setTrade(t)
    setJobValue(jobDefaults[t] ?? 1000)
  }

  const current = Math.round(leads * (closeRate / 100) * jobValue)
  const potential = Math.round(leads * 1.3 * (Math.min(closeRate + 8, 60) / 100) * jobValue)
  const uplift = potential - current

  return (
    <section id="pricing" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="px-4 md:px-8 py-8 md:py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3 transition-all duration-500"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateX(-8px)' }}>
            Revenue Calculator
          </p>
          <h2 className="font-condensed text-4xl md:text-5xl lg:text-6xl text-ink transition-all duration-700"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateY(20px)', transitionDelay: '100ms' }}>
            What&apos;s The Gap Worth?
          </h2>
        </div>
        <div ref={calcRef} className="grid md:grid-cols-2">
          <div
            className="px-5 md:px-8 py-7 md:py-10 border-b-2 md:border-b-0 md:border-r-2 border-ink space-y-5 md:space-y-8 order-2 md:order-1 transition-all duration-700"
            style={{ opacity: calcInView ? 1 : 0, transform: calcInView ? 'none' : 'translateX(-20px)' }}
          >
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-3">Your Trade</label>
              <select
                value={trade}
                onChange={(e) => handleTradeChange(e.target.value)}
                className="w-full bg-paper border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue transition-colors"
              >
                {trades.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            {[
              { label: 'Monthly Leads', value: leads, set: setLeads, min: 5, max: 200, step: 1, display: `${leads}` },
              { label: 'Close Rate', value: closeRate, set: setCloseRate, min: 5, max: 60, step: 1, display: `${closeRate}%` },
              { label: 'Avg Job Value', value: jobValue, set: setJobValue, min: 200, max: 50000, step: 100, display: `$${jobValue.toLocaleString()}` },
            ].map(({ label, value, set, min, max, step, display }) => (
              <div key={label}>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-3">
                  {label}: <span className="text-blue font-bold">{display}</span>
                </label>
                <input
                  type="range" min={min} max={max} step={step} value={value}
                  onChange={(e) => set(Number(e.target.value))}
                  className="w-full accent-blue"
                />
              </div>
            ))}
          </div>

          <div
            className="px-5 md:px-8 py-7 md:py-10 bg-ink texture-stripe flex flex-col justify-center gap-5 md:gap-8 order-1 md:order-2 transition-all duration-700"
            style={{ opacity: calcInView ? 1 : 0, transform: calcInView ? 'none' : 'translateX(20px)', transitionDelay: '150ms' }}
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">Current Revenue</p>
              <p className="font-condensed text-4xl md:text-5xl text-paper">${current.toLocaleString()}<span className="font-mono text-sm text-white/40">/mo</span></p>
            </div>
            <div className="border-t border-white/10 pt-4 md:pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">With TradeFlo</p>
              <p className="font-condensed text-4xl md:text-5xl text-blue">${potential.toLocaleString()}<span className="font-mono text-sm text-white/40">/mo</span></p>
            </div>
            <div className="border-t border-white/10 pt-4 md:pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">Monthly Uplift</p>
              <p className="font-condensed text-5xl md:text-6xl text-blue font-bold">+${uplift.toLocaleString()}</p>
              <p className="font-mono text-xs text-white/40 mt-2">${(uplift * 12).toLocaleString()} per year left on the table</p>
            </div>
            <a href="#contact" className="font-mono text-xs uppercase tracking-widest font-bold bg-blue text-ink px-6 py-4 text-center hover:bg-paper transition-colors">
              Get My Free Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
