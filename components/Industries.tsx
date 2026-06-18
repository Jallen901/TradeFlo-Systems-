const industries = [
  { name: 'Roofing', avg: '$12,000 – $25,000', breakeven: '1 job / year', hook: 'One storm season with a ranked site pays for years of service.' },
  { name: 'HVAC', avg: '$3,000 – $12,000', breakeven: '2–3 jobs / year', hook: 'Missed calls in peak season cost you more than our system ever will.' },
  { name: 'Solar', avg: '$15,000 – $35,000', breakeven: '1 job / year', hook: 'One closed deal covers a full year. Every lead after that is profit.' },
  { name: 'Plumbing', avg: '$500 – $5,000', breakeven: '3–5 jobs / year', hook: 'Speed wins in plumbing. Our missed-call text back responds in under 60 seconds.' },
  { name: 'Pressure Washing', avg: '$250 – $800', breakeven: '8–12 jobs / year', hook: 'Volume is the game. A ranked site and review system fills your calendar.' },
  { name: 'Hauling', avg: '$200 – $600', breakeven: '10–15 jobs / year', hook: 'Repeat business and referrals — our CRM keeps you top of mind.' },
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
          <p className="font-body text-base text-concrete mt-4">
            Every trade is different. We know the numbers that matter for yours.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Trade</th>
                <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Avg Job Value</th>
                <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4">Break-Even</th>
                <th className="font-mono text-xs uppercase tracking-widest text-concrete text-left px-8 py-4 hidden lg:table-cell">Why It Works</th>
              </tr>
            </thead>
            <tbody>
              {industries.map((ind, i) => (
                <tr key={ind.name} className={`border-b border-ink/20 hover:bg-blue/5 transition-colors group ${i === industries.length - 1 ? 'border-b-0' : ''}`}>
                  <td className="font-condensed text-2xl text-ink px-8 py-5 group-hover:text-blue transition-colors">{ind.name}</td>
                  <td className="font-mono text-sm text-blue px-8 py-5 font-medium">{ind.avg}</td>
                  <td className="font-mono text-sm text-concrete px-8 py-5">{ind.breakeven}</td>
                  <td className="font-body text-sm text-concrete px-8 py-5 hidden lg:table-cell max-w-xs">{ind.hook}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
