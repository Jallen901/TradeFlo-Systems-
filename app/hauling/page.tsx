import Navbar from '@/components/Navbar'
import VideoHero from '@/components/VideoHero'
import Problem from '@/components/Problem'
import OfferStack from '@/components/OfferStack'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export const metadata = { title: 'Hauling Websites & Lead Systems — TradeFlo Systems' }

export default function HaulingPage() {
  return (
    <main>
      <Navbar />
      <VideoHero
        trade="Hauling"
        headline="Repeat Business And Referrals Don't Build Themselves"
        sub="A CRM, review system, and local SEO keeps you top of mind when they need you next."
        stat={{ value: '10–15', label: 'jobs to break even — then pure profit' }}
        avgJob="$200 – $600"
        breakeven="10–15 jobs / year"
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-dump-truck-unloading-gravel-42088-large.mp4"
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
