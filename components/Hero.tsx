'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'

// Local trade photos (WebP for performance)
const squareData = [
  ...Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    src: `/images/hero/trade_photo_${String(i + 1).padStart(2, '0')}.webp`,
  })),
  { id: 33, src: '/images/hero/01_carpenter.webp' },
  { id: 34, src: '/images/hero/02_tools.webp' },
  { id: 35, src: '/images/hero/03_electrician.webp' },
  { id: 36, src: '/images/hero/04_roofer.webp' },
  { id: 37, src: '/images/hero/05_welder.webp' },
  { id: 38, src: '/images/hero/06_tradeflow_logo.webp' },
  { id: 39, src: '/images/hero/07_hvac_technician.webp' },
  { id: 40, src: '/images/hero/08_plumber.webp' },
  { id: 41, src: '/images/hero/09_painter.webp' },
  { id: 42, src: '/images/hero/10_construction_sunset.webp' },
  { id: 43, src: '/images/hero/11_job_overview_dashboard.webp' },
  { id: 44, src: '/images/hero/12_woodworker.webp' },
]

const shuffle = (arr: typeof squareData) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const generateSquares = () =>
  shuffle(squareData).slice(0, 16).map((sq, i) => (
    <motion.div
      key={i}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className="w-full h-full overflow-hidden"
      style={{
        backgroundColor: '#F5F2EC',
        backgroundImage: `url(${sq.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  ))

function ShuffleGrid() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [squares, setSquares] = useState(generateSquares)

  useEffect(() => {
    const run = () => {
      setSquares(generateSquares())
      timerRef.current = setTimeout(run, 3000)
    }
    timerRef.current = setTimeout(run, 3000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-full flex-1 gap-1" style={{ gridTemplateRows: 'repeat(4, minmax(80px, 1fr))' }}>
      {squares}
    </div>
  )
}

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
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
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2">

        {/* Left — cream bg, dark text */}
        <div className="relative px-5 md:px-8 py-10 md:py-36 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-ink overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0 texture-stripe-light pointer-events-none" />
          <div ref={headRef} className="relative">
            <p
              className="font-mono text-xs uppercase tracking-widest text-blue mb-4 transition-all duration-500"
              style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateX(-12px)' }}
            >
              Built For Hard Work. Engineered For Growth.
            </p>
            <h1
              className="font-condensed text-5xl md:text-7xl lg:text-8xl leading-none text-ink mb-4 transition-all duration-700"
              style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateY(24px)', transitionDelay: '100ms' }}
            >
              You Do The Work. We Get The Calls.
            </h1>
            <div
              className="mb-6 h-0.5 bg-blue origin-left transition-all duration-700 ease-out"
              style={{ width: headInView ? '80px' : '0px', transitionDelay: '400ms' }}
            />
            <p
              className="font-body text-base md:text-lg text-concrete mb-8 md:mb-10 max-w-sm transition-all duration-700"
              style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateY(16px)', transitionDelay: '200ms' }}
            >
              TradeFlo builds the websites, automations, and lead systems that put your trade back in front of every customer searching for it.
            </p>
            <div
              className="flex flex-wrap gap-4 transition-all duration-700"
              style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateY(16px)', transitionDelay: '300ms' }}
            >
              <a href="#contact" className="font-mono text-sm uppercase tracking-widest bg-blue text-paper font-bold px-8 py-4 hover:bg-ink transition-colors">
                Get Free Audit
              </a>
            </div>

            {/* Stat pills */}
            <div
              className="grid grid-cols-3 gap-3 mt-8 md:mt-10 transition-all duration-700"
              style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateY(16px)', transitionDelay: '450ms' }}
            >
              {[
                { n: '43%', label: 'Calls go unanswered', sub: 'Industry avg' },
                { n: '78%', label: 'Hire first responder', sub: 'Of homeowners' },
                { n: '<60s', label: 'Text-back speed', sub: 'TradeFlo avg' },
              ].map((s) => (
                <div key={s.n} className="border-t-2 border-ink pt-3">
                  <div className="font-condensed text-xl md:text-2xl text-blue leading-none">{s.n}</div>
                  <div className="font-mono text-[10px] text-concrete uppercase tracking-wide mt-1 leading-tight">{s.label}</div>
                  <div className="font-mono text-[9px] text-concrete/50 uppercase tracking-wide mt-0.5 leading-tight">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — shuffle photo grid */}
        <div className="bg-paper self-stretch min-h-[320px] md:min-h-[600px] flex flex-col">
          <ShuffleGrid />
        </div>

      </div>
    </section>
  )
}
