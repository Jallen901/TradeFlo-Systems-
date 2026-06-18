import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F0EDE8',
        ink: '#111110',
        blue: '#0047FF',
        concrete: '#7A7570',
      },
      fontFamily: {
        condensed: ['var(--font-barlow-condensed)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
        body: ['var(--font-barlow)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
