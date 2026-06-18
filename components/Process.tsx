const steps = [
  {
    num: '01',
    title: 'Free Audit',
    body: 'We analyze your website speed, Google Business Profile, reviews, and local keyword rankings — then compare you to your top 3 competitors. Completely free. No obligation. Delivered in 24 hours.',
    tag: 'No cost. No catch.',
  },
  {
    num: '02',
    title: 'We Show You The Gap',
    body: 'You get a plain-English breakdown of where leads are falling off and how much it\'s costing you. Loom video or PDF — your choice. We show the numbers, not opinions.',
    tag: 'Data, not guesses.',
  },
  {
    num: '03',
    title: 'We Build The System',
    body: 'Website, CRM, automations, local SEO, review flows — built for your trade, your market, your goals. You stay on the job. We handle every piece of the tech.',
    tag: 'You stay on the tools.',
  },
  {
    num: '04',
    title: 'You Get Jobs',
    body: 'Calls come in. Missed calls get texted back in under 60 seconds. Reviews stack up. Your pipeline fills. One extra job often pays for the entire year of service.',
    tag: 'The system works while you work.',
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
              <div className="font-condensed text-7xl text-paper [-webkit-text-stroke:2px_#0047FF] mb-4 leading-none select-none">
                {s.num}
              </div>
              <h3 className="font-condensed text-2xl text-ink mb-3">{s.title}</h3>
              <p className="font-body text-sm text-concrete leading-relaxed mb-4">{s.body}</p>
              <span className="font-mono text-xs uppercase tracking-widest text-blue border-l-2 border-blue pl-3">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
