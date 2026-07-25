import './index.css'
import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import WhySQD from './components/WhySQD'
import Factory from './components/Factory'
import HowWeWork from './components/HowWeWork'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

/* ═══════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════ */
function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhySQD />
      <Factory />
      <HowWeWork />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
