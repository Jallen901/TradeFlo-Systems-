const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-b border-white/10 pb-8 md:pb-10 mb-8 md:mb-10">
          <div>
            <p className="font-condensed text-2xl md:text-3xl font-extrabold tracking-widest mb-1">
              TradeFlo<span className="text-steel"> Systems</span><span className="text-blue">.</span>
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-white/40">
              Built for hard work. Engineered for growth.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">Navigation</p>
            <nav className="space-y-2">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="block font-mono text-xs uppercase tracking-widest text-paper/70 hover:text-blue transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">Contact</p>
            <a href="mailto:leads@tradeflosystems.com" className="font-mono text-xs text-paper/70 hover:text-blue transition-colors">
              leads@tradeflosystems.com
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} TradeFlo Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="font-mono text-xs text-white/30 uppercase tracking-widest hover:text-blue transition-colors">Privacy Policy</a>
            <p className="font-mono text-xs text-blue uppercase tracking-widest font-bold">
              Built for the trades.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
