export default function Hero() {
  return (
    <section id="hero" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        {/* Left — copy */}
        <div className="px-8 py-16 md:py-24 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-4">
            Digital Growth Agency — Trade Businesses
          </p>
          <h1 className="font-condensed text-5xl md:text-6xl lg:text-7xl leading-none text-ink mb-6">
            Stop Losing Jobs To Contractors With Worse Work
          </h1>
          <p className="font-body text-lg text-concrete mb-10 max-w-md">
            You do better work. They have a better website. We fix that.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="font-mono text-sm uppercase tracking-widest bg-blue text-paper px-8 py-4 hover:bg-ink transition-colors"
            >
              Get Free Audit
            </a>
            <a
              href="#services"
              className="font-mono text-sm uppercase tracking-widest border-2 border-ink text-ink px-8 py-4 hover:bg-ink hover:text-paper transition-colors"
            >
              See Our Work
            </a>
          </div>
        </div>

        {/* Right — stats */}
        <div className="bg-ink px-8 py-16 md:py-24 flex flex-col justify-center gap-10">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete">
            The numbers your competitors already know
          </p>
          {[
            { stat: '43%', label: 'of calls go unanswered by trade businesses' },
            { stat: '78%', label: 'of leads go with the first contractor who responds' },
            { stat: '$0', label: 'spent on ads — just systems that convert' },
          ].map(({ stat, label }) => (
            <div key={stat} className="border-t-2 border-concrete/30 pt-8">
              <div className="font-condensed text-6xl text-blue leading-none mb-2">{stat}</div>
              <div className="font-body text-concrete text-base">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
