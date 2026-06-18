const testimonials = [
  {
    quote: 'We went from 22 reviews to 94 in two months. Phone doesn\'t stop ringing.',
    name: 'Marcus T.',
    company: 'Summit Roofing Co.',
    location: 'Dallas, TX',
    result: '+$168,000',
  },
  {
    quote: 'I miss a call, they get a text in under a minute. I\'ve closed jobs I never would have gotten.',
    name: 'Derek P.',
    company: 'Precision HVAC',
    location: 'Atlanta, GA',
    result: '+$47,000',
  },
  {
    quote: 'They built us a real site and got us ranking. We\'re booked 6 weeks out.',
    name: 'Jose R.',
    company: 'Clean Slate PW',
    location: 'Phoenix, AZ',
    result: 'Booked 6 wks out',
  },
]

export default function Testimonials() {
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">Results</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">The System Works</h2>
        </div>
        <div className="grid md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`px-8 py-10 flex flex-col ${i < testimonials.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-ink`}>
              <div className="font-condensed text-4xl text-blue mb-6">{t.result}</div>
              <p className="font-body text-base text-ink leading-relaxed mb-8 flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t-2 border-ink pt-5">
                <p className="font-condensed text-lg text-ink">{t.name}</p>
                <p className="font-mono text-xs text-concrete uppercase tracking-widest mt-1">{t.company} — {t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
