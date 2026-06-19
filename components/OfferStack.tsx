'use client'
import { useInView } from '@/hooks/useInView'

const tiers = [
  {
    step: 'Step 1',
    name: 'Website Build',
    price: '$1,500 – $5,000',
    cadence: 'One-Time',
    features: ['Conversion-focused site', 'Tap-to-call', 'Trade-specific copy', 'Quote form + call tracking', 'Basic local SEO'],
    cta: 'Start With A Website',
    highlight: false,
  },
  {
    step: 'Step 2',
    name: 'Growth System',
    price: '$300 – $1,500',
    cadence: '/month',
    features: ['Everything in Step 1', 'Hosting + maintenance', 'Local SEO + Google Business', 'Review automation', 'Monthly reporting'],
    cta: 'Build My Growth System',
    highlight: true,
  },
  {
    step: 'Step 3',
    name: 'Automation OS',
    price: '$2,000 – $10,000+',
    cadence: '/month',
    features: ['Everything in Step 2', 'AI receptionist', 'Missed-call text back <60s', 'Automated follow-up', 'Google Ads management'],
    cta: 'Get The Full System',
    highlight: false,
  },
]

function TierCard({ tier, index }: { tier: typeof tiers[0]; index: number }) {
  const { ref, inView } = useInView(0.15)
  return (
    <div
      ref={ref}
      className={`px-8 py-10 flex flex-col transition-all duration-700 ${tier.highlight ? 'bg-ink' : ''} ${index < tiers.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-ink`}
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(32px)', transitionDelay: `${index * 120}ms` }}
    >
      <p className="font-mono text-xs uppercase tracking-widest text-blue mb-2">{tier.step}</p>
      <h3 className={`font-condensed text-3xl mb-1 ${tier.highlight ? 'text-paper' : 'text-ink'}`}>{tier.name}</h3>
      <div className={`h-px my-5 ${tier.highlight ? 'bg-white/10' : 'bg-blue'} transition-all duration-500 ease-out`} style={{ width: inView ? '100%' : '0%', transitionDelay: `${index * 120 + 300}ms` }} />
      <p className={`font-condensed text-3xl mb-1 ${tier.highlight ? 'text-blue' : 'text-ink'}`}>{tier.price}</p>
      <p className="font-mono text-xs text-concrete mb-6">{tier.cadence}</p>
      <ul className="flex-1 space-y-3 mb-8">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className="text-blue font-mono text-xs mt-0.5 shrink-0">—</span>
            <span className={`font-body text-sm ${tier.highlight ? 'text-concrete' : 'text-concrete'}`}>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`font-mono text-xs uppercase tracking-widest px-6 py-3 text-center transition-colors font-bold ${tier.highlight ? 'bg-blue text-ink hover:bg-paper' : 'bg-ink text-paper hover:bg-blue hover:text-ink'}`}
      >
        {tier.cta}
      </a>
    </div>
  )
}

export default function OfferStack() {
  const { ref: headerRef, inView: headerInView } = useInView(0.3)
  return (
    <section id="services" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3 transition-all duration-500"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateX(-8px)' }}>
            Services
          </p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink transition-all duration-700"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateY(20px)', transitionDelay: '100ms' }}>
            Start Small. Scale Up.
          </h2>
        </div>
        <div className="grid md:grid-cols-3">
          {tiers.map((tier, i) => <TierCard key={tier.name} tier={tier} index={i} />)}
        </div>
        <div className="px-8 py-5 border-t-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete">One contractor per trade per market — territory exclusivity included.</p>
        </div>
      </div>
    </section>
  )
}
