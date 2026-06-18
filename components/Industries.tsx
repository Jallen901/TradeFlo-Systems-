'use client'
import { useTrade } from './TradeContext'

const industries = [
  { name: 'Roofing', avg: '$12k – $25k', breakeven: '1 job / year' },
  { name: 'HVAC', avg: '$3k – $12k', breakeven: '2–3 jobs / year' },
  { name: 'Solar', avg: '$15k – $35k', breakeven: '1 job / year' },
  { name: 'Plumbing', avg: '$500 – $5k', breakeven: '3–5 jobs / year' },
  { name: 'Pressure Washing', avg: '$250 – $800', breakeven: '8–12 jobs / year' },
  { name: 'Hauling', avg: '$200 – $600', breakeven: '10–15 jobs / year' },
]

export default function Industries() {
  const { selected } = useTrade()

  return (
    <section id="industries" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Industries</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">Built For The Trades</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-ink">
              <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Trade</th>
              <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Avg Job</th>
              <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Break-Even</th>
            </tr>
          </thead>
          <tbody>
            {industries.map((ind, i) => {
              const isSelected = ind.name === selected.name
              return (
                <tr key={ind.name} className={`${i < industries.length - 1 ? 'border-b border-ink/20' : ''} transition-colors ${isSelected ? 'bg-ink' : 'hover:bg-ink/5'}`}>
                  <td className={`font-condensed text-2xl px-8 py-5 ${isSelected ? 'text-paper' : 'text-ink'}`}>
                    {ind.name}
                    {isSelected && <span className="font-mono text-xs text-blue ml-3 uppercase tracking-widest">← you</span>}
                  </td>
                  <td className={`font-mono text-sm px-8 py-5 ${isSelected ? 'text-blue' : 'text-blue'}`}>{ind.avg}</td>
                  <td className={`font-mono text-sm px-8 py-5 ${isSelected ? 'text-concrete' : 'text-concrete'}`}>{ind.breakeven}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
