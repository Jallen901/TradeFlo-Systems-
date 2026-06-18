const tiers = [
  {
    label: 'Entry',
    name: 'Website Build',
    price: '$1,500 – $5,000',
    cadence: 'One-Time',
    tag: 'Start Here',
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
  },
  {
    label: 'Growth',
    name: 'Growth System',
    price: '$300 – $1,500',
    cadence: '/month',
    tag: 'Most Popular',
    features: [
      'Everything in Website Build',
      'Hosting + maintenance',
      'Local SEO management',
      'CRM setup + pipeline',
      'Google Business Profile management',
      'Review automation',
      'Monthly performance reporting',
    ],
  },
  {
    label: 'Premium',
    name: 'Automation OS',
    price: '$2,000 – $10,000+',
    cadence: '/month',
    tag: 'Full System',
    features: [
      'Everything in Growth System',
      'AI receptionist (24/7)',
      'Missed-call text back — under 60 seconds',
      'Automated quote + follow-up sequences',
      'Full CRM sales pipeline',
      'Email + SMS lead nurture',
      'Google Ads management',
    ],
  },
]

export default function OfferStack() {
  return (
    <section id="services" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Our Services</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">
            Three Ways We Grow Your Business
          </h2>
        </div>
        <div className="grid md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`px-8 py-10 flex flex-col ${i < tiers.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-ink`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-concrete">{tier.label}</span>
                <span className="font-mono text-xs uppercase tracking-widest bg-blue text-paper px-3 py-1">{tier.tag}</span>
              </div>
              <h3 className="font-condensed text-3xl text-ink mb-2">{tier.name}</h3>
              <div className="border-t-2 border-ink my-4" />
              <div className="mb-6">
                <span className="font-condensed text-4xl text-ink">{tier.price}</span>
                <span className="font-mono text-sm text-concrete ml-1">{tier.cadence}</span>
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-blue font-mono text-xs mt-1 shrink-0">--</span>
                    <span className="font-body text-sm text-concrete">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="font-mono text-xs uppercase tracking-widest bg-ink text-paper px-6 py-3 text-center hover:bg-blue transition-colors"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
