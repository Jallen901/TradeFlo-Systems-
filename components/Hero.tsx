export default function Hero() {
  return (
    <section id="hero" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        <div className="px-8 py-20 md:py-32 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-ink">
          <h1 className="font-condensed text-6xl md:text-7xl lg:text-8xl leading-none text-ink mb-6">
            Stop Losing Jobs To Contractors With Worse Work
          </h1>
          <p className="font-body text-lg text-concrete mb-10 max-w-sm">
            You do better work. They have a better website. We fix that.
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
          {[
            { stat: '43%', label: 'of trade calls go unanswered' },
            { stat: '78%', label: 'of leads hire the first responder' },
            { stat: '<60s', label: 'our system texts back missed calls' },
          ].map(({ stat, label }) => (
            <div key={stat} className="border-t-2 border-concrete/30 pt-8">
              <div className="font-condensed text-6xl text-blue leading-none mb-2">{stat}</div>
              <div className="font-body text-concrete">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
