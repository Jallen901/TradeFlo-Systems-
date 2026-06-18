'use client'
import { useState } from 'react'

const industryDefaults: Record<string, number> = {
  Roofing: 18000,
  HVAC: 6000,
  Solar: 25000,
  Plumbing: 2000,
  'Pressure Washing': 500,
  Hauling: 400,
}

export default function Calculator() {
  const [industry, setIndustry] = useState('Roofing')
  const [leads, setLeads] = useState(20)
  const [closeRate, setCloseRate] = useState(20)
  const [jobValue, setJobValue] = useState(industryDefaults['Roofing'])

  const currentRevenue = Math.round(leads * (closeRate / 100) * jobValue)
  const improvedLeads = Math.round(leads * 1.6)
  const improvedClose = Math.min(closeRate + 15, 80)
  const potentialRevenue = Math.round(improvedLeads * (improvedClose / 100) * jobValue)
  const uplift = potentialRevenue - currentRevenue

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setIndustry(val)
    setJobValue(industryDefaults[val] ?? 1000)
  }

  return (
    <section id="pricing" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Revenue Calculator</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">
            See What A Better System Is Worth
          </h2>
        </div>
        <div className="grid md:grid-cols-2">
          {/* Inputs */}
          <div className="px-8 py-10 border-b-2 md:border-b-0 md:border-r-2 border-ink space-y-8">
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-3">Industry</label>
              <select
                value={industry}
                onChange={handleIndustryChange}
                className="w-full bg-paper border-2 border-ink px-4 py-3 font-body text-ink focus:outline-none focus:border-blue"
              >
                {Object.keys(industryDefaults).map((ind) => (
                  <option key={ind}>{ind}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-3">
                Monthly Leads: <span className="text-blue">{leads}</span>
              </label>
              <input
                type="range" min={5} max={200} value={leads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="w-full accent-blue"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-3">
                Close Rate: <span className="text-blue">{closeRate}%</span>
              </label>
              <input
                type="range" min={5} max={60} value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full accent-blue"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-concrete block mb-3">
                Avg Job Value: <span className="text-blue">${jobValue.toLocaleString()}</span>
              </label>
              <input
                type="range" min={200} max={50000} step={100} value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="w-full accent-blue"
              />
            </div>
          </div>

          {/* Output */}
          <div className="px-8 py-10 bg-ink text-paper flex flex-col justify-center gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-2">Current Monthly Revenue</p>
              <p className="font-condensed text-5xl text-paper">${currentRevenue.toLocaleString()}</p>
            </div>
            <div className="border-t-2 border-concrete/30 pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-2">With TradeFlo Systems</p>
              <p className="font-condensed text-5xl text-blue">${potentialRevenue.toLocaleString()}</p>
            </div>
            <div className="border-t-2 border-concrete/30 pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-2">Potential Monthly Uplift</p>
              <p className="font-condensed text-5xl text-blue">+${uplift.toLocaleString()}</p>
              <p className="font-mono text-xs text-concrete mt-3">
                Based on 60% more leads captured + 15pt close rate improvement from faster follow-up.
              </p>
            </div>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest bg-blue text-paper px-6 py-4 text-center hover:bg-paper hover:text-ink transition-colors mt-2"
            >
              Get My Free Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
