'use client'
import { useInView } from '@/hooks/useInView'

const industries = [
  { name: 'Roofing', avg: '$12k – $25k', breakeven: '1 job / year' },
  { name: 'HVAC', avg: '$3k – $12k', breakeven: '2–3 jobs / year' },
  { name: 'Solar', avg: '$15k – $35k', breakeven: '1 job / year' },
  { name: 'Electrical', avg: '$500 – $8k', breakeven: '2–4 jobs / year' },
  { name: 'Plumbing', avg: '$500 – $5k', breakeven: '3–5 jobs / year' },
  { name: 'General Contracting', avg: '$10k – $100k', breakeven: '1 job / year' },
  { name: 'Landscaping', avg: '$500 – $5k', breakeven: '3–6 jobs / year' },
  { name: 'Pest Control', avg: '$150 – $600', breakeven: '10–20 jobs / year' },
]

export default function Industries() {
  const { ref: headerRef, inView: headerInView } = useInView(0.3)
  const { ref: tableRef, inView: tableInView } = useInView(0.1)

  return (
    <section id="industries" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3 transition-all duration-500"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateX(-8px)' }}>
            Industries
          </p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink transition-all duration-700"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateY(20px)', transitionDelay: '100ms' }}>
            Built For The Trades
          </h2>
        </div>
        <div ref={tableRef}>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Trade</th>
                <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Avg Job</th>
                <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Break-Even</th>
              </tr>
            </thead>
            <tbody>
              {industries.map((ind, i) => (
                <tr
                  key={ind.name}
                  className={`${i < industries.length - 1 ? 'border-b border-ink/20' : ''} hover:bg-blue/5 transition-all duration-500`}
                  style={{ opacity: tableInView ? 1 : 0, transform: tableInView ? 'none' : 'translateX(-16px)', transitionDelay: `${i * 60}ms` }}
                >
                  <td className="font-condensed text-2xl text-ink px-8 py-5">{ind.name}</td>
                  <td className="font-mono text-sm text-blue font-bold px-8 py-5">{ind.avg}</td>
                  <td className="font-mono text-sm text-concrete px-8 py-5">{ind.breakeven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
