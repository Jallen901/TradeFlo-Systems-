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
        <div className="grid md:grid-cols-3 gap-10 border-b border-concrete/20 pb-10 mb-10">
          <div>
            <p className="font-condensed text-3xl font-extrabold tracking-widest mb-2">
              TradeFlo<span className="text-blue">.</span>
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-concrete">
              Turn Clicks Into Calls.<br />Turn Calls Into Jobs.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-4">Navigation</p>
            <nav className="space-y-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block font-mono text-xs uppercase tracking-widest text-paper hover:text-blue transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-concrete mb-4">Contact</p>
            <a
              href="mailto:hello@tradeflosystems.com"
              className="font-mono text-xs text-paper hover:text-blue transition-colors"
            >
              hello@tradeflosystems.com
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-xs text-concrete uppercase tracking-widest">
            &copy; {new Date().getFullYear()} TradeFlo Systems. All rights reserved.
          </p>
          <p className="font-mono text-xs text-concrete uppercase tracking-widest">
            Built for the trades.
          </p>
        </div>
      </div>
    </footer>
  )
}
