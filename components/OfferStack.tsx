const tiers = [
  {
    step: 'Step 1',
    name: 'Website Build',
    price: '$1,500 – $5,000',
    cadence: 'One-Time',
    features: ['Conversion-focused site', 'Tap-to-call', 'Trade-specific copy', 'Quote form + call tracking', 'Basic local SEO'],
    cta: 'Start With A Website',
  },
  {
    step: 'Step 2',
    name: 'Growth System',
    price: '$300 – $1,500',
    cadence: '/month',
    features: ['Everything in Step 1', 'Hosting + maintenance', 'Local SEO + Google Business', 'Review automation', 'Monthly reporting'],
    cta: 'Build My Growth System',
  },
  {
    step: 'Step 3',
    name: 'Automation OS',
    price: '$2,000 – $10,000+',
    cadence: '/month',
    features: ['Everything in Step 2', 'AI receptionist', 'Missed-call text back <60s', 'Automated follow-up', 'Google Ads management'],
    cta: 'Get The Full System',
  },
]

export default function OfferStack() {
  return (
    <section id="services" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Services</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">Start Small. Scale Up.</h2>
        </div>
        <div className="grid md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div key={tier.name} className={`px-8 py-10 flex flex-col ${i === 1 ? 'bg-ink' : ''} ${i < tiers.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-ink`}>
              <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-2">{tier.step}</p>
              <h3 className={`font-condensed text-3xl mb-1 ${i === 1 ? 'text-paper' : 'text-ink'}`}>{tier.name}</h3>
              <div className={`border-t-2 my-5 ${i === 1 ? 'border-concrete/30' : 'border-ink'}`} />
              <p className={`font-condensed text-3xl mb-1 ${i === 1 ? 'text-paper' : 'text-ink'}`}>{tier.price}</p>
              <p className="font-mono text-xs text-concrete mb-6">{tier.cadence}</p>
              <ul className="flex-1 space-y-2 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-blue font-mono text-xs mt-0.5 shrink-0">—</span>
                    <span className={`font-body text-sm ${i === 1 ? 'text-concrete' : 'text-concrete'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`font-mono text-xs uppercase tracking-widest px-6 py-3 text-center transition-colors ${i === 1 ? 'bg-blue text-paper hover:bg-paper hover:text-ink' : 'bg-ink text-paper hover:bg-blue'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="px-8 py-5 border-t-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete">One contractor per trade per market — territory exclusivity included.</p>
        </div>
      </div>
    </section>
  )
}
