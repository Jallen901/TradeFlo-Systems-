'use client'
import { useEffect, useRef } from 'react'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'

const stats = [
  { value: 43, prefix: '', suffix: '%', label: 'of trade calls go unanswered' },
  { value: 78, prefix: '', suffix: '%', label: 'of leads hire the first responder' },
  { value: 60, prefix: '<', suffix: 's', label: 'our system texts back missed calls' },
]

function StatItem({ value, prefix, suffix, label, inView, delay }: {
  value: number; prefix: string; suffix: string; label: string; inView: boolean; delay: string
}) {
  const count = useCountUp(value, inView, 1800)
  return (
    <div
      className="border-t-2 border-white/10 pt-8 transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(28px)', transitionDelay: delay }}
    >
      <div className="font-condensed text-6xl text-blue leading-none mb-2">{prefix}{count}{suffix}</div>
      <div className="font-body text-sm text-white/60 uppercase tracking-wide">{label}</div>
    </div>
  )
}

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const { ref: statsRef, inView: statsInView } = useInView(0.1)
  const { ref: headRef, inView: headInView } = useInView(0.05)

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" className="border-b-2 border-ink overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">

        {/* Left — cream bg, navy text */}
        <div className="relative px-8 py-20 md:py-36 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-ink overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0 texture-stripe-light pointer-events-none" />
          <div ref={headRef} className="relative">
            <p
              className="font-mono text-xs uppercase tracking-widest text-blue mb-4 transition-all duration-500"
              style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateX(-12px)' }}
            >
              Digital Growth — Trade Businesses
            </p>
            <h1
              className="font-condensed text-6xl md:text-7xl lg:text-8xl leading-none text-ink mb-4 transition-all duration-700"
              style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateY(24px)', transitionDelay: '100ms' }}
            >
              Stop Losing Jobs To Contractors With Worse Work
            </h1>
            <div
              className="mb-6 h-0.5 bg-blue origin-left transition-all duration-700 ease-out"
              style={{ width: headInView ? '80px' : '0px', transitionDelay: '400ms' }}
            />
            <p
              className="font-body text-lg text-concrete mb-10 max-w-sm transition-all duration-700"
              style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateY(16px)', transitionDelay: '200ms' }}
            >
              You do better work. They have a better website. We fix that.
            </p>
            <div
              className="flex flex-wrap gap-4 transition-all duration-700"
              style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateY(16px)', transitionDelay: '300ms' }}
            >
              <a href="#contact" className="font-mono text-sm uppercase tracking-widest bg-blue text-ink font-bold px-8 py-4 hover:bg-ink hover:text-paper transition-colors">
                Get Free Audit
              </a>
              <a href="#services" className="font-mono text-sm uppercase tracking-widest border-2 border-ink text-ink px-8 py-4 hover:bg-ink hover:text-paper transition-colors">
                How It Works
              </a>
            </div>
          </div>
        </div>

        {/* Right — navy bg, gold counting stats */}
        <div ref={statsRef} className="bg-ink texture-stripe px-8 py-20 md:py-36 flex flex-col justify-center gap-10">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} inView={statsInView} delay={`${i * 180}ms`} />
          ))}
        </div>

      </div>
    </section>
  )
}
