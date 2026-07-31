import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './index.css'
import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import History from './components/History'
import Services from './components/Services'
import Projects from './components/Projects'
import WhySQD from './components/WhySQD'
import Factory from './components/Factory'
import HowWeWork from './components/HowWeWork'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

/* ═══════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════ */
function App() {
  const { i18n } = useTranslation()
  useReveal()

  /* Set document direction and language on language change */
  useEffect(() => {
    const updateDir = (lng) => {
      const dir = lng === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = lng
      document.documentElement.dir = dir
    }

    // Set on mount
    updateDir(i18n.language)

    // Listen for changes
    i18n.on('languageChanged', updateDir)
    return () => i18n.off('languageChanged', updateDir)
  }, [i18n])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <History />
      <Services />
      <Projects />
      <WhySQD />
      <Factory />
      <HowWeWork />
      <Testimonials />
      <CTA />
      <Footer />
      <Chatbot />
    </>
  )
}

export default App
