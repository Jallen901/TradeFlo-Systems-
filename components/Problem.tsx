const problems = [
  { num: '01', title: 'No Website Or A Bad One', body: 'Customers assume the contractor with the better site does better work. First impressions cost you jobs.' },
  { num: '02', title: 'Missed Calls = Lost Jobs', body: 'You\'re on the job. You miss the call. They call the next guy. Without a follow-up system, that lead is gone.' },
  { num: '03', title: 'No Reviews = No Trust', body: 'People decide in 30 seconds. If your competitor has 200 reviews and you have 12, you\'re invisible.' },
  { num: '04', title: 'Competitors Outranking You', body: 'The top 3 results get 70% of clicks. If you\'re not in the map pack, you don\'t exist to that customer.' },
]

export default function Problem() {
  return (
    <section id="problem" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-3">The Problem</p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink">The Leak Isn&apos;t Your Work</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <div key={p.num} className={`px-8 py-10 ${i < problems.length - 1 ? 'border-b-2 lg:border-b-0 lg:border-r-2' : ''} border-ink`}>
              <div className="font-mono text-xs text-blue tracking-widest mb-4">{p.num}</div>
              <h3 className="font-condensed text-xl text-ink mb-3">{p.title}</h3>
              <p className="font-body text-sm text-concrete leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
