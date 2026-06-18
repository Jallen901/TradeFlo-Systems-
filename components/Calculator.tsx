'use client'
import { useState } from 'react'

const industryDefaults: Record<string, number> = {
  Roofing: 18000, HVAC: 6000, Solar: 25000, Plumbing: 2000, 'Pressure Washing': 500, Hauling: 400,
}

export default function Calculator() {
  const [industry, setIndustry] = useState('Roofing')
  const [leads, setLeads] = useState(20)
  const [closeRate, setCloseRate] = useState(20)
  const [jobValue, setJobValue] = useState(18000)

  const current = Math.round(leads * (closeRate / 100) * jobValue)
  const potential = Math.round(leads * 1.6 * (Math.min(closeRate + 15, 80) / 100) * jobValue)
  const uplift = potential - current

  return (
    <section id="pricing" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Calculator</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">What&apos;s The Gap Worth?</h2>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="px-8 py-10 border-b-2 md:border-b-0 md:border-r-2 border-ink space-y-8">
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-3">Trade</label>
              <select value={industry} onChange={(e) => { setIndustry(e.target.value); setJobValue(industryDefaults[e.target.value] ?? 1000) }}
                className="w-full bg-paper border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue">
                {Object.keys(industryDefaults).map((ind) => <option key={ind}>{ind}</option>)}
              </select>
            </div>
            {[
              { label: 'Monthly Leads', value: leads, set: setLeads, min: 5, max: 200, display: `${leads}` },
              { label: 'Close Rate', value: closeRate, set: setCloseRate, min: 5, max: 60, display: `${closeRate}%` },
              { label: 'Avg Job Value', value: jobValue, set: setJobValue, min: 200, max: 50000, step: 100, display: `$${jobValue.toLocaleString()}` },
            ].map(({ label, value, set, min, max, step, display }) => (
              <div key={label}>
                <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-3">
                  {label}: <span className="text-blue">{display}</span>
                </label>
                <input type="range" min={min} max={max} step={step ?? 1} value={value}
                  onChange={(e) => set(Number(e.target.value))} className="w-full accent-blue" />
              </div>
            ))}
          </div>

          <div className="px-8 py-10 bg-ink flex flex-col justify-center gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-2">Current Revenue</p>
              <p className="font-condensed text-5xl text-paper">${current.toLocaleString()}<span className="font-mono text-sm text-concrete">/mo</span></p>
            </div>
            <div className="border-t-2 border-concrete/30 pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-2">With TradeFlo</p>
              <p className="font-condensed text-5xl text-blue">${potential.toLocaleString()}<span className="font-mono text-sm text-concrete">/mo</span></p>
            </div>
            <div className="border-t-2 border-concrete/30 pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-2">Monthly Uplift</p>
              <p className="font-condensed text-6xl text-blue">+${uplift.toLocaleString()}</p>
            </div>
            <a href="#contact" className="font-mono text-xs uppercase tracking-widest bg-blue text-paper px-6 py-4 text-center hover:bg-paper hover:text-ink transition-colors">
              Get My Free Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
