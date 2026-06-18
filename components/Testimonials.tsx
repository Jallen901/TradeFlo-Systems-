const testimonials = [
  {
    quote: 'I had a website from 2018 and was getting maybe 3 calls a month. TradeFlo rebuilt everything, set up our Google profile, and automated our review requests. We went from 22 reviews to 94 in two months and our phone doesn\'t stop ringing.',
    name: 'Marcus T.',
    trade: 'Roofing — Dallas, TX',
    result: '14 booked jobs / 60 days',
  },
  {
    quote: 'I was skeptical. I\'m not a tech guy. But they handled everything — I didn\'t have to touch a single thing. Now when someone calls and I miss it, they get a text back in under a minute and I\'ve closed jobs I never would have gotten.',
    name: 'Derek P.',
    trade: 'HVAC — Atlanta, GA',
    result: '$47,000 in new revenue',
  },
  {
    quote: 'We were the best pressure washing crew in our area but nobody knew it. They built us a real website, got us ranking on Google, and set up a system that follows up automatically. We\'re booked 6 weeks out now.',
    name: 'Jose R.',
    trade: 'Pressure Washing — Phoenix, AZ',
    result: 'Fully booked 6 weeks out',
  },
]

export default function Testimonials() {
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Results</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">
            Contractors Who Let The System Work
          </h2>
        </div>
        <div className="grid md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`px-8 py-10 ${i < testimonials.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-ink`}
            >
              <div className="font-condensed text-6xl text-blue/20 leading-none mb-4 select-none">&ldquo;</div>
              <p className="font-body text-sm text-concrete leading-relaxed mb-8">{t.quote}</p>
              <div className="border-t-2 border-ink pt-6">
                <p className="font-condensed text-xl text-ink">{t.name}</p>
                <p className="font-mono text-xs text-concrete uppercase tracking-widest mt-1">{t.trade}</p>
                <p className="font-mono text-xs text-blue uppercase tracking-widest mt-3">{t.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
