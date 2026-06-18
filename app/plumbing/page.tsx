import Navbar from '@/components/Navbar'
import VideoHero from '@/components/VideoHero'
import Problem from '@/components/Problem'
import OfferStack from '@/components/OfferStack'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export const metadata = { title: 'Plumbing Websites & Lead Systems — TradeFlo Systems' }

export default function PlumbingPage() {
  return (
    <main>
      <Navbar />
      <VideoHero
        trade="Plumbing"
        headline="Emergency Calls Go To Whoever Answers First. That Should Be You."
        sub="Plumbing is speed and trust. We automate both — fast sites, instant follow-up, stacked reviews."
        stat={{ value: '<60s', label: 'our system texts back missed calls' }}
        avgJob="$500 – $5,000"
        breakeven="3–5 jobs / year"
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-plumber-working-under-a-sink-42091-large.mp4"
      />
      <Problem />
      <OfferStack />
      <Process />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}
