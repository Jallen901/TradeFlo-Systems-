const industries = [
  { name: 'Roofing', avg: '$12k – $25k', breakeven: '1 job / year' },
  { name: 'HVAC', avg: '$3k – $12k', breakeven: '2–3 jobs / year' },
  { name: 'Solar', avg: '$15k – $35k', breakeven: '1 job / year' },
  { name: 'Plumbing', avg: '$500 – $5k', breakeven: '3–5 jobs / year' },
  { name: 'Pressure Washing', avg: '$250 – $800', breakeven: '8–12 jobs / year' },
  { name: 'Hauling', avg: '$200 – $600', breakeven: '10–15 jobs / year' },
]

export default function Industries() {
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
            {industries.map((ind, i) => (
              <tr key={ind.name} className={`${i < industries.length - 1 ? 'border-b border-ink/20' : ''} hover:bg-ink/5 transition-colors`}>
                <td className="font-condensed text-2xl text-ink px-8 py-5">{ind.name}</td>
                <td className="font-mono text-sm text-blue px-8 py-5">{ind.avg}</td>
                <td className="font-mono text-sm text-concrete px-8 py-5">{ind.breakeven}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
