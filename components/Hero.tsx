'use client'
import { useEffect, useRef } from 'react'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'

const monthlyData = [38, 52, 44, 61, 55, 73, 65, 80, 70, 88, 78, 95]
const months = ['J','F','M','A','M','J','J','A','S','O','N','D']

const metrics = [
  { label: 'Jobs Booked', value: 94, suffix: '/mo' },
  { label: 'Response Rate', value: 98, suffix: '%' },
]

function MetricCard({ label, value, suffix, inView, delay }: {
  label: string; value: number; suffix: string; inView: boolean; delay: string
}) {
  const count = useCountUp(value, inView, 1600)
  return (
    <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(12px)', transition: 'all 0.6s ease', transitionDelay: delay }}>
      <div className="font-condensed text-2xl text-blue leading-none">
        {count}<span className="font-mono text-xs text-steel ml-0.5">{suffix}</span>
      </div>
      <div className="font-mono text-xs text-steel/60 uppercase tracking-wide mt-0.5">{label}</div>
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

        {/* Left — cream bg, dark text */}
        <div className="relative px-8 py-20 md:py-36 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-ink overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0 texture-stripe-light pointer-events-none" />
          <div ref={headRef} className="relative">
            <p
              className="font-mono text-xs uppercase tracking-widest text-blue mb-4 transition-all duration-500"
              style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateX(-12px)' }}
            >
              Built For Hard Work. Engineered For Growth.
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
              <a href="#contact" className="font-mono text-sm uppercase tracking-widest bg-blue text-paper font-bold px-8 py-4 hover:bg-ink transition-colors">
                Get Free Audit
              </a>
              <a href="#services" className="font-mono text-sm uppercase tracking-widest border-2 border-ink text-ink px-8 py-4 hover:bg-ink hover:text-paper transition-colors">
                How It Works
              </a>
            </div>
          </div>
        </div>

        {/* Right — dark panel with data dashboard */}
        <div ref={statsRef} className="bg-ink texture-stripe px-8 py-16 md:py-28 flex flex-col justify-center gap-6">

          {/* Dashboard card */}
          <div
            className="border border-white/10 p-6 transition-all duration-700"
            style={{ opacity: statsInView ? 1 : 0, transform: statsInView ? 'none' : 'translateY(24px)' }}
          >
            <div className="flex items-center justify-between mb-5">
              <p className="font-mono text-xs text-steel/50 uppercase tracking-widest">Performance Overview</p>
              <span className="font-mono text-xs text-blue border border-blue/30 px-2 py-0.5">Live</span>
            </div>

            {/* Metric pills */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {metrics.map((m, i) => (
                <MetricCard key={m.label} {...m} inView={statsInView} delay={`${i * 120 + 200}ms`} />
              ))}
            </div>

            {/* Bar chart */}
            <div
              className="transition-all duration-500"
              style={{ opacity: statsInView ? 1 : 0, transitionDelay: '400ms' }}
            >
              <p className="font-mono text-xs text-steel/40 uppercase tracking-widest mb-2">Monthly Jobs Closed</p>
              <div className="flex items-end gap-1 h-14">
                {monthlyData.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-blue/25 transition-all duration-700 ease-out"
                      style={{
                        height: statsInView ? `${(h / 95) * 100}%` : '0%',
                        transitionDelay: `${i * 40 + 400}ms`,
                        backgroundColor: i === monthlyData.length - 1 ? 'rgba(43,94,232,0.8)' : undefined,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-1 mt-1">
                {months.map((m) => (
                  <div key={m} className="flex-1 text-center font-mono text-[9px] text-steel/30">{m}</div>
                ))}
              </div>
            </div>

            {/* Bottom stat */}
            <div
              className="border-t border-white/10 mt-5 pt-5 flex items-center justify-between transition-all duration-500"
              style={{ opacity: statsInView ? 1 : 0, transitionDelay: '700ms' }}
            >
              <div>
                <span className="font-condensed text-2xl text-blue">+168%</span>
                <span className="font-mono text-xs text-steel/50 ml-2">avg client growth</span>
              </div>
              <div className="text-right">
                <div className="font-mono text-xs text-green-400">↑ 43%</div>
                <div className="font-mono text-xs text-steel/40">vs industry avg</div>
              </div>
            </div>
          </div>

          {/* Key stat pills below card */}
          <div
            className="grid grid-cols-3 gap-3 transition-all duration-700"
            style={{ opacity: statsInView ? 1 : 0, transform: statsInView ? 'none' : 'translateY(16px)', transitionDelay: '600ms' }}
          >
            {[
              { n: '43%', label: 'Calls unanswered industry avg' },
              { n: '78%', label: 'Hire the first responder' },
              { n: '<60s', label: 'Our text-back speed' },
            ].map((s) => (
              <div key={s.n} className="border border-white/10 p-3">
                <div className="font-condensed text-xl text-blue leading-none mb-1">{s.n}</div>
                <div className="font-mono text-[10px] text-steel/50 uppercase leading-tight">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
