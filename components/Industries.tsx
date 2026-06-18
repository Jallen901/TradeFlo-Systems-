const industries = [
  { name: 'Roofing', avg: '$12,000 – $25,000', breakeven: '1 job / year' },
  { name: 'HVAC', avg: '$3,000 – $12,000', breakeven: '2–3 jobs / year' },
  { name: 'Solar', avg: '$15,000 – $35,000', breakeven: '1 job / year' },
  { name: 'Plumbing', avg: '$500 – $5,000', breakeven: '3–5 jobs / year' },
  { name: 'Pressure Washing', avg: '$250 – $800', breakeven: '8–12 jobs / year' },
  { name: 'Hauling', avg: '$200 – $600', breakeven: '10–15 jobs / year' },
]

export default function Industries() {
  return (
    <section id="industries" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Industries We Serve</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">
            Built For The Trades
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Trade</th>
                <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Avg Job Value</th>
                <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Break-Even Point</th>
                <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4 hidden md:table-cell">Our Take</th>
              </tr>
            </thead>
            <tbody>
              {industries.map((ind, i) => (
                <tr key={ind.name} className={`border-b border-ink/20 hover:bg-ink/5 transition-colors ${i === industries.length - 1 ? 'border-b-0' : ''}`}>
                  <td className="font-condensed text-2xl text-ink px-8 py-5">{ind.name}</td>
                  <td className="font-mono text-sm text-blue px-8 py-5">{ind.avg}</td>
                  <td className="font-mono text-sm text-concrete px-8 py-5">{ind.breakeven}</td>
                  <td className="font-body text-sm text-concrete px-8 py-5 hidden md:table-cell">
                    One extra job pays for a full year of service.
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
