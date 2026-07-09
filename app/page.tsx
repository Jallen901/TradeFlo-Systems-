import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Hero from '@/components/Hero'
import OfferStack from '@/components/OfferStack'
import Process from '@/components/Process'
import Calculator from '@/components/Calculator'
import FAQ from '@/components/FAQ'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Ticker />
        <Hero />
        <Process />
        <OfferStack />
        <Calculator />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
