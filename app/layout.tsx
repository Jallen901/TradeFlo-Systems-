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
  title: 'TradeFlo Systems',
  description: 'Digital growth systems for blue-collar trade businesses. Roofing, HVAC, plumbing, solar, pressure washing, hauling. Get your free audit today.',
  keywords: ['trade business marketing', 'roofing website', 'HVAC digital marketing', 'contractor leads', 'blue collar growth', 'trade contractor website'],
  authors: [{ name: 'TradeFlo Systems' }],
  metadataBase: new URL('https://tradeflosystems.com'),
  openGraph: {
    type: 'website',
    url: 'https://tradeflosystems.com',
    title: 'TradeFlo Systems — Built For Hard Work. Engineered For Growth.',
    description: 'Stop losing jobs to contractors with worse work. We build digital growth systems for trade businesses that get you more calls, more jobs, more revenue.',
    siteName: 'TradeFlo Systems',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TradeFlo Systems — Built For Hard Work. Engineered For Growth.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradeFlo Systems — Built For Hard Work. Engineered For Growth.',
    description: 'Stop losing jobs to contractors with worse work. Digital growth systems for trade businesses.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${ibmPlexMono.variable} ${barlow.variable}`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue focus:text-paper focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
