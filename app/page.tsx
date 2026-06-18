import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import OfferStack from '@/components/OfferStack'
import Process from '@/components/Process'
import Industries from '@/components/Industries'
import Calculator from '@/components/Calculator'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Ticker />
      <Hero />
      <Problem />
      <OfferStack />
      <Process />
      <Industries />
      <Calculator />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}
