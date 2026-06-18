'use client'
import { useTrade } from './TradeContext'

export default function Hero() {
  const { selected } = useTrade()

  return (
    <section id="hero" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        <div className="px-8 py-20 md:py-32 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-ink transition-all duration-300">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-4">{selected.name}</p>
          <h1 className="font-condensed text-5xl md:text-6xl lg:text-7xl leading-none text-ink mb-6">
            {selected.headline}
          </h1>
          <p className="font-body text-lg text-concrete mb-10 max-w-sm">
            {selected.sub}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="font-mono text-sm uppercase tracking-widest bg-blue text-paper px-8 py-4 hover:bg-ink transition-colors">
              Get Free Audit
            </a>
            <a href="#services" className="font-mono text-sm uppercase tracking-widest border-2 border-ink text-ink px-8 py-4 hover:bg-ink hover:text-paper transition-colors">
              How It Works
            </a>
          </div>
        </div>

        <div className="bg-ink px-8 py-20 md:py-32 flex flex-col justify-center gap-10">
          <div className="border-b-2 border-concrete/30 pb-8">
            <div className="font-condensed text-7xl text-blue leading-none mb-2">{selected.stat.value}</div>
            <div className="font-body text-concrete">{selected.stat.label}</div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Avg Job Value</p>
            <p className="font-condensed text-4xl text-paper">{selected.avgJob}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Break-Even Point</p>
            <p className="font-condensed text-4xl text-blue">{selected.breakeven}</p>
          </div>
          <div className="border-t-2 border-concrete/30 pt-6">
            <p className="font-body text-sm text-concrete italic">{selected.pain}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
