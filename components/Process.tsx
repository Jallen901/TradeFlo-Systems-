const steps = [
  { num: '01', title: 'Free Audit', body: 'We analyze your site, Google profile, reviews, and competitors. Delivered in 24 hours. No charge.' },
  { num: '02', title: 'See The Gap', body: 'Plain-English breakdown of where leads fall off and what it\'s costing you. Loom video or PDF.' },
  { num: '03', title: 'We Build It', body: 'Website, CRM, automations, SEO. You stay on the job — we handle the tech.' },
  { num: '04', title: 'You Get Jobs', body: 'Calls in. Texts out. Reviews stack. One extra job usually pays for the full year.' },
]

export default function Process() {
  return (
    <section id="process" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">How It Works</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">Four Steps. No Fluff.</h2>
        </div>
        <div className="grid md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.num} className={`px-8 py-10 ${i < steps.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-ink`}>
              <div className="font-condensed text-6xl text-paper [-webkit-text-stroke:2px_#0047FF] mb-5 leading-none select-none">{s.num}</div>
              <h3 className="font-condensed text-2xl text-ink mb-3">{s.title}</h3>
              <p className="font-body text-sm text-concrete leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
