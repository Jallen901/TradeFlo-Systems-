'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'

// Verified working Unsplash URLs from original component
const squareData = [
  { id: 1,  src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 2,  src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 3,  src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 4,  src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 5,  src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 6,  src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 7,  src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 8,  src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 9,  src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 10, src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 11, src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 12, src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 13, src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 14, src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 15, src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 16, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
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
  shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className="w-full h-full overflow-hidden"
      style={{
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
    <div className="grid grid-cols-4 w-full gap-1" style={{ gridTemplateRows: 'repeat(4, 1fr)', minHeight: '100%' }}>
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
        <div className="relative px-6 md:px-8 py-14 md:py-36 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-ink overflow-hidden">
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
              More Calls. More Jobs. Less Chasing.
            </h1>
            <div
              className="mb-6 h-0.5 bg-blue origin-left transition-all duration-700 ease-out"
              style={{ width: headInView ? '80px' : '0px', transitionDelay: '400ms' }}
            />
            <p
              className="font-body text-lg text-concrete mb-10 max-w-sm transition-all duration-700"
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
              <a href="#services" className="font-mono text-sm uppercase tracking-widest border-2 border-ink text-ink px-8 py-4 hover:bg-ink hover:text-paper transition-colors">
                How It Works
              </a>
            </div>

            {/* Stat pills */}
            <div
              className="grid grid-cols-3 gap-3 mt-10 transition-all duration-700"
              style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateY(16px)', transitionDelay: '450ms' }}
            >
              {[
                { n: '43%', label: 'Calls go unanswered' },
                { n: '78%', label: 'Hire first responder' },
                { n: '<60s', label: 'Our text-back speed' },
              ].map((s) => (
                <div key={s.n} className="border-t-2 border-ink pt-3">
                  <div className="font-condensed text-2xl text-blue leading-none">{s.n}</div>
                  <div className="font-mono text-[10px] text-concrete uppercase tracking-wide mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — shuffle photo grid */}
        <div className="bg-ink self-stretch min-h-[320px] md:min-h-0">
          <ShuffleGrid />
        </div>

      </div>
    </section>
  )
}
