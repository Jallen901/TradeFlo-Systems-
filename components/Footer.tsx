const links = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 border-b border-white/10 pb-10 mb-10">
          <div>
            <p className="font-condensed text-3xl font-extrabold tracking-widest mb-1">
              TradeFlo<span className="text-steel"> Systems</span><span className="text-blue">.</span>
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-1">
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
            <a href="mailto:hello@tradeflowsystems.com" className="font-mono text-xs text-paper/70 hover:text-blue transition-colors">
              hello@tradeflowsystems.com
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} TradeFlo Systems. All rights reserved.
          </p>
          <p className="font-mono text-xs text-blue uppercase tracking-widest font-bold">
            Built for the trades.
          </p>
        </div>
      </div>
    </footer>
  )
}
