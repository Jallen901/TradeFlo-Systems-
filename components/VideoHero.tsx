'use client'

interface VideoHeroProps {
  trade: string
  headline: string
  sub: string
  stat: { value: string; label: string }
  avgJob: string
  breakeven: string
  videoSrc: string
}

export default function VideoHero({ trade, headline, sub, stat, avgJob, breakeven, videoSrc }: VideoHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-end border-b-2 border-ink overflow-hidden">
      {/* Background video */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/75" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-4">{trade}</p>
          <h1 className="font-condensed text-6xl md:text-7xl lg:text-8xl leading-none text-paper mb-6">
            {headline}
          </h1>
          <p className="font-body text-lg text-concrete mb-10 max-w-sm">{sub}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="font-mono text-sm uppercase tracking-widest bg-blue text-paper px-8 py-4 hover:bg-paper hover:text-ink transition-colors">
              Get Free Audit
            </a>
            <a href="/" className="font-mono text-sm uppercase tracking-widest border-2 border-paper text-paper px-8 py-4 hover:bg-paper hover:text-ink transition-colors">
              Our Services
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:items-end">
          <div className="text-right">
            <div className="font-condensed text-7xl text-blue leading-none">{stat.value}</div>
            <div className="font-body text-concrete mt-1">{stat.label}</div>
          </div>
          <div className="border-t border-concrete/30 pt-6 w-full md:text-right">
            <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-1">Avg Job Value</p>
            <p className="font-condensed text-3xl text-paper">{avgJob}</p>
          </div>
          <div className="border-t border-concrete/30 pt-6 w-full md:text-right">
            <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-1">Break-Even With TradeFlo</p>
            <p className="font-condensed text-3xl text-blue">{breakeven}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
