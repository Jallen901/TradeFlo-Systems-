'use client'
import { useInView } from '@/hooks/useInView'

const problems = [
  { num: '01', title: 'No Website Or A Bad One', body: 'Customers assume the contractor with the better site does better work. First impressions cost you jobs.' },
  { num: '02', title: 'Missed Calls = Lost Jobs', body: "You're on the job. You miss the call. They call the next guy. Without a follow-up system, that lead is gone." },
  { num: '03', title: 'No Reviews = No Trust', body: 'People decide in 30 seconds. If your competitor has 200 reviews and you have 12, you\'re invisible.' },
  { num: '04', title: 'Competitors Outranking You', body: "The top 3 results get 70% of clicks. If you're not in the map pack, you don't exist to that customer." },
]

function ProblemCard({ num, title, body, index }: { num: string; title: string; body: string; index: number }) {
  const { ref, inView } = useInView(0.2)
  return (
    <div
      ref={ref}
      className={`px-8 py-10 transition-all duration-700 ${index < problems.length - 1 ? 'border-b-2 lg:border-b-0 lg:border-r-2' : ''} border-ink`}
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(28px)', transitionDelay: `${index * 100}ms` }}
    >
      <div className="font-mono text-xs text-blue tracking-widest mb-4">{num}</div>
      <h3 className="font-condensed text-xl text-ink mb-3">{title}</h3>
      <div className="h-px bg-blue/40 mb-4 transition-all duration-500 ease-out" style={{ width: inView ? '40px' : '0px', transitionDelay: `${index * 100 + 300}ms` }} />
      <p className="font-body text-sm text-concrete leading-relaxed">{body}</p>
    </div>
  )
}

export default function Problem() {
  const { ref: headerRef, inView: headerInView } = useInView(0.3)
  return (
    <section id="problem" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="px-8 py-12 border-b-2 border-ink">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3 transition-all duration-500"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateX(-8px)' }}>
            The Problem
          </p>
          <h2 className="font-condensed text-5xl md:text-6xl text-ink transition-all duration-700"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'none' : 'translateY(20px)', transitionDelay: '100ms' }}>
            The Leak Isn&apos;t Your Work
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <ProblemCard key={p.num} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
