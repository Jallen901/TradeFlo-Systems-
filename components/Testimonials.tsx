'use client'
import { useInView } from '@/hooks/useInView'

const testimonials = [
  {
    quote: "We went from 22 reviews to 94 in two months. Phone doesn't stop ringing.",
    name: 'Marcus T.',
    company: 'Summit Roofing Co.',
    location: 'Dallas, TX',
    result: '+$168,000',
  },
  {
    quote: "I miss a call, they get a text in under a minute. I've closed jobs I never would have gotten.",
    name: 'Derek P.',
    company: 'Precision HVAC',
    location: 'Atlanta, GA',
    result: '+$47,000',
  },
  {
    quote: "They built us a real site and got us ranking. We're booked 6 weeks out.",
    name: 'Jose R.',
    company: 'Clean Slate PW',
    location: 'Phoenix, AZ',
    result: 'Booked 6 wks out',
  },
]

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const { ref, inView } = useInView(0.2)
  return (
    <div
      ref={ref}
      className={`px-4 md:px-8 py-8 md:py-10 flex flex-col transition-all duration-700 ${index < testimonials.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-ink`}
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(28px)', transitionDelay: `${index * 150}ms` }}
    >
      <div className="font-condensed text-3xl md:text-4xl text-blue mb-2">{t.result}</div>
      <div className="h-px bg-blue/30 mb-5 transition-all duration-700 ease-out" style={{ width: inView ? '60px' : '0px', transitionDelay: `${index * 150 + 300}ms` }} />
      <p className="font-body text-sm md:text-base text-ink leading-relaxed mb-6 md:mb-8 flex-1">&ldquo;{t.quote}&rdquo;</p>
      <div className="border-t-2 border-ink pt-4 md:pt-5">
        <p className="font-condensed text-lg text-ink">{t.name}</p>
        <p className="font-mono text-xs text-concrete uppercase tracking-widest mt-1">{t.company} — {t.location}</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref: headerRef, inView: headerInView } = useInView(0.3)
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="px-4 md:px-8 py-8 md:py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3 transition-all duration-500"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateX(-8px)' }}>
            Results
          </p>
          <h2 className="font-condensed text-4xl md:text-5xl lg:text-6xl text-ink transition-all duration-700"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateY(20px)', transitionDelay: '100ms' }}>
            The System Works
          </h2>
        </div>
        <div className="grid md:grid-cols-3">
          {testimonials.map((t, i) => <TestimonialCard key={t.name} t={t} index={i} />)}
        </div>
      </div>
    </section>
  )
}
