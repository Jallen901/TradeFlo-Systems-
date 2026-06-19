'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'

const squareData = [
  { id: 1,  src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80' },
  { id: 2,  src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
  { id: 3,  src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80' },
  { id: 4,  src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80' },
  { id: 5,  src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80' },
  { id: 7,  src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80' },
  { id: 9,  src: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=600&q=80' },
  { id: 10, src: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=600&q=80' },
  { id: 11, src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80' },
  { id: 12, src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80' },
  { id: 13, src: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=600&q=80' },
  { id: 14, src: 'https://images.unsplash.com/photo-1620626011761-996317702149?auto=format&fit=crop&w=600&q=80' },
  { id: 15, src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80' },
  { id: 16, src: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80' },
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
    <div className="grid grid-cols-4 grid-rows-4 h-[420px] gap-1 p-6">
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
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">

        {/* Left — headline + CTA */}
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
        <div className="bg-ink flex items-center justify-center overflow-hidden">
          <ShuffleGrid />
        </div>

      </div>
    </section>
  )
}
