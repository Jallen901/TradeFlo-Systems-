const problems = [
  {
    num: '01',
    title: 'No Website — Or A Bad One',
    body: 'Your competitor built a $200 template site and is ranking above you on Google. Customers assume they\'re bigger, better, more professional. First impressions cost you jobs.',
  },
  {
    num: '02',
    title: 'Missed Calls = Lost Jobs',
    body: 'You\'re on the roof, under a sink, or driving a truck. You can\'t answer every call. Without a system to follow up in under 60 seconds, that lead calls the next guy.',
  },
  {
    num: '03',
    title: 'No Reviews = No Trust',
    body: 'People search, they read reviews, they decide in 30 seconds. If you have 12 reviews and your competitor has 200, you\'re invisible. Reviews don\'t collect themselves.',
  },
  {
    num: '04',
    title: 'Competitors Outranking You',
    body: 'Local SEO is a war for the map pack. The top 3 results get 70% of clicks. If you\'re not there, you\'re invisible — no matter how good your work is.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">The Problem</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">
            The Leak In Your Business Isn&apos;t Your Work
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <div
              key={p.num}
              className={`px-8 py-10 ${i < problems.length - 1 ? 'border-b-2 lg:border-b-0 lg:border-r-2' : ''} border-ink`}
            >
              <div className="font-mono text-xs text-blue tracking-widest mb-4">{p.num}</div>
              <h3 className="font-condensed text-2xl text-ink mb-4 leading-tight">{p.title}</h3>
              <p className="font-body text-sm text-concrete leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
