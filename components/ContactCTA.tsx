'use client'
import { useInView } from '@/hooks/useInView'
import { useEffect } from 'react'

export default function ContactCTA() {
  const { ref: leftRef, inView: leftInView } = useInView(0.15)
  const { ref: rightRef, inView: rightInView } = useInView(0.15)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <section id="contact" className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">

        {/* Left — info */}
        <div
          ref={leftRef}
          className="bg-ink texture-stripe px-4 md:px-8 py-8 md:py-12 border-b-2 md:border-b-0 md:border-r-2 border-white/10 flex flex-col justify-start transition-all duration-700"
          style={{ opacity: leftInView ? 1 : 0, transform: leftInView ? 'none' : 'translateX(-24px)' }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-4">Free Audit</p>
          <h2 className="font-condensed text-4xl md:text-5xl lg:text-6xl text-paper mb-4 leading-none">
            Find Out Where Your Leads Are Falling Off
          </h2>
          <div className="h-px bg-blue mb-6 transition-all duration-700" style={{ width: leftInView ? '60px' : '0px', transitionDelay: '400ms' }} />
          <p className="font-body text-base text-white/60 max-w-sm mb-8">
            Free. 24 hours. No sales call. Just a plain-English breakdown of what's costing you jobs.
          </p>
          <ul className="space-y-3">
            {['No contract required', 'Results in 24 hours', 'One contractor per market'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-blue font-mono text-xs shrink-0">—</span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — GHL form */}
        <div
          ref={rightRef}
          className="px-4 md:px-8 py-8 md:py-12 transition-all duration-700"
          style={{ opacity: rightInView ? 1 : 0, transform: rightInView ? 'none' : 'translateX(24px)', transitionDelay: '150ms' }}
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/8AqmrBUX0OwAi49jvW15"
            style={{ width: '100%', height: '560px', border: 'none', borderRadius: '0' }}
            id="inline-8AqmrBUX0OwAi49jvW15"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 0"
            data-height="520"
            data-layout-iframe-id="inline-8AqmrBUX0OwAi49jvW15"
            data-form-id="8AqmrBUX0OwAi49jvW15"
            title="Free Audit Form"
          />
        </div>

      </div>
    </section>
  )
}
