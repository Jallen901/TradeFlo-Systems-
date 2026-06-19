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
    <>
      <Navbar />
      <main id="main-content">
        <Ticker />
        <Hero />
        <Problem />
        <OfferStack />
        <Process />
        <Industries />
        <Calculator />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
