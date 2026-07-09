'use client'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const faqs = [
  {
    q: 'Do I need to provide content or photos?',
    a: 'No. We write all the copy for you based on your trade, service area, and what makes you different. If you have job photos we can use them, but we have a full library of trade photography if not.',
  },
  {
    q: 'What if I already have a website?',
    a: "We'll audit it for free and tell you honestly if it can be improved or if starting fresh makes more sense. We don't push new builds if your current site can be fixed.",
  },
  {
    q: 'How fast will I see results?',
    a: 'Your website goes live in under a week. SEO results typically show in 60–90 days. Automations like missed call text-back work from day one — the moment the system is live, no lead goes unanswered.',
  },
  {
    q: 'Do you work with all trades?',
    a: 'Yes. Roofing, HVAC, plumbing, solar, pressure washing, landscaping, hauling, general contracting — if you get calls from homeowners or property managers, we can build your system.',
  },
  {
    q: 'What makes TradeFlo different from a regular marketing agency?',
    a: "We only work with trade businesses. We don't do restaurants, e-commerce, or corporate clients. This means our copy, our SEO strategy, and our automations are built specifically for how trade jobs get sold — fast responses, local trust, and word of mouth.",
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No long-term contracts on monthly services. We earn your business every month. The website build is a one-time fee you own outright.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      className="border-b-2 border-ink transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)', transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 md:px-8 py-5 md:py-6 text-left group"
      >
        <span className="font-condensed text-lg md:text-xl text-ink group-hover:text-blue transition-colors pr-4">{q}</span>
        <span className={`shrink-0 font-mono text-blue text-xl transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-4 md:px-8 pb-6">
          <p className="font-body text-sm md:text-base text-concrete leading-relaxed max-w-2xl">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const { ref: headerRef, inView: headerInView } = useInView(0.3)
  return (
    <section id="faq" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="px-4 md:px-8 py-8 md:py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3 transition-all duration-500"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateX(-8px)' }}>
            FAQ
          </p>
          <h2 className="font-condensed text-4xl md:text-5xl lg:text-6xl text-ink transition-all duration-700"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateY(20px)', transitionDelay: '100ms' }}>
            Questions We Always Get
          </h2>
        </div>
        <div>
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} index={i} />)}
        </div>
      </div>
    </section>
  )
}
