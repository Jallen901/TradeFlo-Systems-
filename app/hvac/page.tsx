import Navbar from '@/components/Navbar'
import VideoHero from '@/components/VideoHero'
import Problem from '@/components/Problem'
import OfferStack from '@/components/OfferStack'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export const metadata = { title: 'HVAC Websites & Lead Systems — TradeFlo Systems' }

export default function HvacPage() {
  return (
    <main>
      <Navbar />
      <VideoHero
        trade="HVAC"
        headline="Peak Season Is Coming. Will Your Phone Ring Or Theirs?"
        sub="Missed calls in July cost you $6,000+ jobs. We text back in under 60 seconds."
        stat={{ value: '78%', label: 'of HVAC leads hire the first responder' }}
        avgJob="$3,000 – $12,000"
        breakeven="2–3 jobs / year"
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-technician-repairing-an-air-conditioner-42090-large.mp4"
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
