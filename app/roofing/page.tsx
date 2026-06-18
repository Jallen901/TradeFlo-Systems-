import Navbar from '@/components/Navbar'
import VideoHero from '@/components/VideoHero'
import Problem from '@/components/Problem'
import OfferStack from '@/components/OfferStack'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export const metadata = { title: 'Roofing Websites & Lead Systems — TradeFlo Systems' }

export default function RoofingPage() {
  return (
    <main>
      <Navbar />
      <VideoHero
        trade="Roofing"
        headline="The Best Roofer In Town Shouldn't Lose Bids To A Worse One"
        sub="One ranked site. One storm season. One extra job pays for years."
        stat={{ value: '$18k', label: 'average roofing job value' }}
        avgJob="$12,000 – $25,000"
        breakeven="1 job / year"
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-workers-on-a-roof-4875-large.mp4"
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
