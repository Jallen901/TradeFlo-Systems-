const tiers = [
  {
    step: 'Step 1',
    label: 'Entry',
    name: 'Website Build',
    price: '$1,500 – $5,000',
    cadence: 'One-Time',
    tag: 'Start Here',
    hook: 'Get found. Get called. Get jobs.',
    features: [
      'Conversion-focused site, mobile-optimized',
      'Tap-to-call on every page',
      'Sales copy written for your trade',
      'Before/after gallery',
      'Quote request form',
      'Call tracking setup',
      'Speed optimization',
      'Basic local SEO',
    ],
    cta: 'Start With A Website',
  },
  {
    step: 'Step 2',
    label: 'Growth',
    name: 'Growth System',
    price: '$300 – $1,500',
    cadence: '/month',
    tag: 'Most Popular',
    hook: 'Build your presence. Stack your reviews. Own your market.',
    features: [
      'Everything in Website Build',
      'Hosting + maintenance',
      'Local SEO management',
      'CRM setup + pipeline',
      'Google Business Profile management',
      'Review automation',
      'Monthly performance reporting',
    ],
    cta: 'Build My Growth System',
  },
  {
    step: 'Step 3',
    label: 'Premium',
    name: 'Automation OS',
    price: '$2,000 – $10,000+',
    cadence: '/month',
    tag: 'Full System',
    hook: 'Never miss a lead. Close more jobs. Run on autopilot.',
    features: [
      'Everything in Growth System',
      'AI receptionist (24/7)',
      'Missed-call text back — under 60 seconds',
      'Automated quote + follow-up sequences',
      'Full CRM sales pipeline',
      'Email + SMS lead nurture',
      'Google Ads management',
    ],
    cta: 'Get The Full System',
  },
]

export default function OfferStack() {
  return (
    <section id="services" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Our Services</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">
            Start Where You Are. Grow From There.
          </h2>
          <p className="font-body text-base text-concrete mt-4 max-w-xl">
            Every client starts with a foundation and grows into a full system. Most break even on the first extra job.
          </p>
        </div>
        <div className="grid md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`px-8 py-10 flex flex-col ${i === 1 ? 'bg-ink text-paper' : ''} ${i < tiers.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-ink`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs uppercase tracking-widest ${i === 1 ? 'text-concrete' : 'text-concrete'}`}>{tier.step}</span>
                <span className="font-mono text-xs uppercase tracking-widest bg-blue text-paper px-3 py-1">{tier.tag}</span>
              </div>
              <h3 className={`font-condensed text-3xl mb-1 ${i === 1 ? 'text-paper' : 'text-ink'}`}>{tier.name}</h3>
              <p className={`font-body text-sm mb-4 ${i === 1 ? 'text-concrete' : 'text-concrete'}`}>{tier.hook}</p>
              <div className={`border-t-2 my-4 ${i === 1 ? 'border-concrete/30' : 'border-ink'}`} />
              <div className="mb-6">
                <span className={`font-condensed text-4xl ${i === 1 ? 'text-paper' : 'text-ink'}`}>{tier.price}</span>
                <span className="font-mono text-sm text-concrete ml-1">{tier.cadence}</span>
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-blue font-mono text-xs mt-1 shrink-0">--</span>
                    <span className={`font-body text-sm ${i === 1 ? 'text-concrete' : 'text-concrete'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`font-mono text-xs uppercase tracking-widest px-6 py-3 text-center transition-colors ${
                  i === 1
                    ? 'bg-blue text-paper hover:bg-paper hover:text-ink'
                    : 'bg-ink text-paper hover:bg-blue'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="px-8 py-6 border-t-2 border-ink bg-ink/5">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete text-center">
            Territory exclusivity included — we only work with one contractor per trade per market.
          </p>
        </div>
      </div>
    </section>
  )
}
