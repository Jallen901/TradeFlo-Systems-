const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-12">
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
            <a href="mailto:leads@tradeflosystems.com" className="font-mono text-xs text-paper/70 hover:text-blue transition-colors block mb-4">
              leads@tradeflosystems.com
            </a>
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Follow</p>
            <a
              href="https://www.instagram.com/tradeflosystems/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper/70 hover:text-blue transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @tradeflosystems
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
