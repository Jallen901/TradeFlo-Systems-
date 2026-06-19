'use client'
import { useInView } from '@/hooks/useInView'

const steps = [
  { num: '01', title: 'Free Audit', body: 'We analyze your site, Google profile, reviews, and competitors. Delivered in 24 hours. No charge.' },
  { num: '02', title: 'See The Gap', body: "Plain-English breakdown of where leads fall off and what it's costing you. Loom video or PDF." },
  { num: '03', title: 'We Build It', body: 'Website, CRM, automations, SEO. You stay on the job — we handle the tech.' },
  { num: '04', title: 'You Get Jobs', body: 'Calls in. Texts out. Reviews stack. One extra job usually pays for the full year.' },
]

function StepCard({ num, title, body, index }: { num: string; title: string; body: string; index: number }) {
  const { ref, inView } = useInView(0.2)
  return (
    <div
      ref={ref}
      className={`px-8 py-10 transition-all duration-700 ${index < steps.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-ink`}
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(28px)', transitionDelay: `${index * 120}ms` }}
    >
      <div className="font-condensed text-6xl text-ink/10 [-webkit-text-stroke:2px_#C9A84C] mb-5 leading-none select-none">{num}</div>
      <h3 className="font-condensed text-2xl text-ink mb-2">{title}</h3>
      <div className="h-px bg-blue mb-4 transition-all duration-500" style={{ width: inView ? '32px' : '0px', transitionDelay: `${index * 120 + 300}ms` }} />
      <p className="font-body text-sm text-concrete leading-relaxed">{body}</p>
    </div>
  )
}

export default function Process() {
  const { ref: headerRef, inView: headerInView } = useInView(0.3)
  return (
    <section id="process" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3 transition-all duration-500"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateX(-8px)' }}>
            How It Works
          </p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink transition-all duration-700"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateY(20px)', transitionDelay: '100ms' }}>
            Four Steps. No Fluff.
          </h2>
        </div>
        <div className="grid md:grid-cols-4">
          {steps.map((s, i) => <StepCard key={s.num} {...s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
