const steps = [
  {
    num: '01',
    title: 'Free Audit',
    body: 'We analyze your website speed, Google Business Profile, reviews, local keyword rankings, and compare you to your top 3 competitors. No charge. No obligation.',
  },
  {
    num: '02',
    title: 'We Show You The Gap',
    body: 'You get a plain-English breakdown — where leads are falling off, how much it\'s costing you, and exactly what needs to be fixed. Delivered by Loom video or PDF.',
  },
  {
    num: '03',
    title: 'We Build The System',
    body: 'Website, CRM, automations, local SEO, review flows — all built for your trade, your market, your goals. You stay on the job. We handle the tech.',
  },
  {
    num: '04',
    title: 'You Get Jobs',
    body: 'Calls come in. Texts go out automatically. Reviews stack up. Your pipeline fills. You focus on doing the work — the system handles the rest.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">How It Works</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">
            Four Steps. No Fluff.
          </h2>
        </div>
        <div className="grid md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`px-8 py-10 ${i < steps.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-ink`}
            >
              <div className="font-condensed text-7xl text-paper [-webkit-text-stroke:2px_#0047FF] mb-6 leading-none select-none">
                {s.num}
              </div>
              <h3 className="font-condensed text-2xl text-ink mb-4">{s.title}</h3>
              <p className="font-body text-sm text-concrete leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
