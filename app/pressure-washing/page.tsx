import Navbar from '@/components/Navbar'
import VideoHero from '@/components/VideoHero'
import Problem from '@/components/Problem'
import OfferStack from '@/components/OfferStack'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export const metadata = { title: 'Pressure Washing Websites & Lead Systems — TradeFlo Systems' }

export default function PressureWashingPage() {
  return (
    <main>
      <Navbar />
      <VideoHero
        trade="Pressure Washing"
        headline="A Full Schedule Doesn't Happen By Word Of Mouth Alone"
        sub="Volume is the game. A ranked site and review system keeps your calendar full year-round."
        stat={{ value: '8–12', label: 'jobs to break even — everything after is profit' }}
        avgJob="$250 – $800"
        breakeven="8–12 jobs / year"
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-man-pressure-washing-a-driveway-42089-large.mp4"
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
