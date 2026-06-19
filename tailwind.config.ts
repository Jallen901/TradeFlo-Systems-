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
        paper: '#F5F2EC',
        ink: '#0D1B2A',
        blue: '#C9A84C',
        concrete: '#7A7570',
      },
      keyframes: {
        sweepRight: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'sweep-right': 'sweepRight 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
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
