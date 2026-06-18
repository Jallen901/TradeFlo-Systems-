import type { Metadata } from 'next'
import { Barlow_Condensed, IBM_Plex_Mono, Barlow } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'TradeFlo Systems — Turn Clicks Into Calls. Turn Calls Into Jobs.',
  description: 'Digital growth systems for blue-collar trade businesses. Roofing, HVAC, plumbing, solar, pressure washing, hauling.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${ibmPlexMono.variable} ${barlow.variable}`}>
        {children}
      </body>
    </html>
  )
}
