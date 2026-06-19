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
    <header className="bg-ink border-b-2 border-ink sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="font-condensed text-2xl font-extrabold tracking-widest text-paper uppercase">
          TradeFlo<span className="text-blue"> Systems</span><span className="text-blue">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-paper/70 hover:text-blue transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#services"
            className="font-mono text-xs uppercase tracking-widest bg-blue text-ink font-bold px-4 py-2 hover:bg-paper transition-colors"
          >
            See Pricing
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-paper transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-paper transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-paper transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t-2 border-white/10 bg-ink">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-mono text-xs uppercase tracking-widest px-6 py-4 border-b border-white/10 text-paper/70 hover:text-blue"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="block font-mono text-xs uppercase tracking-widest px-6 py-4 bg-blue text-ink font-bold hover:bg-paper text-center"
          >
            See Pricing
          </a>
        </nav>
      )}
    </header>
  )
}
