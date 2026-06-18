import Navbar from '@/components/Navbar'
import VideoHero from '@/components/VideoHero'
import Problem from '@/components/Problem'
import OfferStack from '@/components/OfferStack'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export const metadata = { title: 'Solar Websites & Lead Systems — TradeFlo Systems' }

export default function SolarPage() {
  return (
    <main>
      <Navbar />
      <VideoHero
        trade="Solar"
        headline="One Closed Solar Deal Pays For A Full Year Of Marketing"
        sub="High-ticket buyers research before they call. Your site needs to earn that trust first."
        stat={{ value: '$25k', label: 'average solar installation value' }}
        avgJob="$15,000 – $35,000"
        breakeven="1 job / year"
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-solar-panels-on-a-field-4928-large.mp4"
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
