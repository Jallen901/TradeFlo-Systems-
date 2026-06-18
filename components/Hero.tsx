export default function Hero() {
  return (
    <section id="hero" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        {/* Left */}
        <div className="px-8 py-16 md:py-24 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-4">
            Digital Growth Agency — Trade Businesses
          </p>
          <h1 className="font-condensed text-5xl md:text-6xl lg:text-7xl leading-none text-ink mb-6">
            Stop Losing Jobs To Contractors With Worse Work
          </h1>
          <p className="font-body text-lg text-concrete mb-4 max-w-md">
            You do better work. They have a better website. We fix that.
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-10 max-w-md border-l-2 border-blue pl-4">
            We only work with one contractor per trade per market. Your competitors can&apos;t hire us once you do.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="font-mono text-sm uppercase tracking-widest bg-blue text-paper px-8 py-4 hover:bg-ink transition-colors"
            >
              Get Free Audit — No Pitch
            </a>
            <a
              href="#services"
              className="font-mono text-sm uppercase tracking-widest border-2 border-ink text-ink px-8 py-4 hover:bg-ink hover:text-paper transition-colors"
            >
              See How It Works
            </a>
          </div>
          <p className="font-mono text-xs text-concrete mt-4">
            Free. Takes 24 hours. No sales call required.
          </p>
        </div>

        {/* Right — stats */}
        <div className="bg-ink px-8 py-16 md:py-24 flex flex-col justify-center gap-8">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete">
            The numbers your competitors already know
          </p>
          {[
            { stat: '43%', label: 'of trade business calls go unanswered every day' },
            { stat: '78%', label: 'of leads hire the first contractor who responds' },
            { stat: '60s', label: 'is all it takes — our system texts back missed calls automatically' },
          ].map(({ stat, label }) => (
            <div key={stat} className="border-t-2 border-concrete/30 pt-6">
              <div className="font-condensed text-6xl text-blue leading-none mb-2">{stat}</div>
              <div className="font-body text-concrete text-base">{label}</div>
            </div>
          ))}
          <div className="border-t-2 border-concrete/30 pt-6">
            <p className="font-mono text-xs text-concrete uppercase tracking-widest mb-1">Trusted by contractors in</p>
            <p className="font-condensed text-2xl text-paper">Roofing · HVAC · Solar · Plumbing · Hauling</p>
          </div>
        </div>
      </div>
    </section>
  )
}
