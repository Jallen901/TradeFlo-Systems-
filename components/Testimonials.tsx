const testimonials = [
  {
    quote: 'I had a website from 2018 and was getting maybe 3 calls a month. TradeFlo rebuilt everything, set up our Google profile, and automated our review requests. We went from 22 reviews to 94 in two months and our phone doesn\'t stop ringing.',
    name: 'Marcus T.',
    company: 'Summit Roofing Co.',
    trade: 'Roofing',
    location: 'Dallas, TX',
    result: '14 booked jobs in 60 days',
    revenue: '+$168,000',
  },
  {
    quote: 'I was skeptical. I\'m not a tech guy. But they handled everything — I didn\'t have to touch a single thing. Now when someone calls and I miss it, they get a text back in under a minute. I\'ve closed jobs I never would have gotten.',
    name: 'Derek P.',
    company: 'Precision HVAC',
    trade: 'HVAC',
    location: 'Atlanta, GA',
    result: '$47,000 in new revenue',
    revenue: '+$47,000',
  },
  {
    quote: 'We were the best pressure washing crew in our area but nobody knew it. They built us a real site, got us ranking on Google, and set up a system that follows up automatically. We\'re booked 6 weeks out now.',
    name: 'Jose R.',
    company: 'Clean Slate PW',
    trade: 'Pressure Washing',
    location: 'Phoenix, AZ',
    result: 'Fully booked 6 weeks out',
    revenue: '+$8,400/mo',
  },
]

export default function Testimonials() {
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Real Results</p>
            <h2 className="font-condensed text-5xl md:text-6xl text-ink">
              Contractors Who Let The System Work
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-concrete max-w-xs text-right hidden md:block">
            Names and companies shared with permission.
          </p>
        </div>
        <div className="grid md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`px-8 py-10 flex flex-col ${i < testimonials.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-ink`}
            >
              {/* Result badge */}
              <div className="bg-blue text-paper font-condensed text-3xl px-4 py-3 mb-6 inline-block self-start">
                {t.revenue}
              </div>
              <p className="font-body text-sm text-concrete leading-relaxed mb-8 flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t-2 border-ink pt-6">
                <p className="font-condensed text-xl text-ink">{t.name}</p>
                <p className="font-mono text-xs text-blue uppercase tracking-widest mt-1">{t.company}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-mono text-xs text-concrete uppercase tracking-widest">{t.trade}</span>
                  <span className="text-concrete">·</span>
                  <span className="font-mono text-xs text-concrete uppercase tracking-widest">{t.location}</span>
                </div>
                <div className="mt-3 border-l-2 border-blue pl-3">
                  <p className="font-mono text-xs text-concrete uppercase tracking-widest">{t.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
