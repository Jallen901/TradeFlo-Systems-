'use client'
import { useState } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-paper border-b-2 border-ink sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="font-condensed text-2xl font-extrabold tracking-widest text-ink uppercase">
          TradeFlo<span className="text-blue">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-ink hover:text-blue transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-widest bg-ink text-paper px-4 py-2 hover:bg-blue transition-colors"
          >
            Get Free Audit
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t-2 border-ink bg-paper">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-mono text-xs uppercase tracking-widest px-6 py-4 border-b border-ink/20 hover:text-blue"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block font-mono text-xs uppercase tracking-widest px-6 py-4 bg-ink text-paper hover:bg-blue text-center"
          >
            Get Free Audit
          </a>
        </nav>
      )}
    </header>
  )
}
