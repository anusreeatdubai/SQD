import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/* ═══════════════════════════════════════
   NAVBAR COMPONENT
   ═══════════════════════════════════════ */
function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMobileOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(newLang)
    setMobileOpen(false)
  }

  const langLabel = i18n.language === 'ar' ? '🇬🇧 English' : '🇦🇪 العربية'

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`} id="navbar">
      <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
        <img src="/images/assets/sqd-logo.png" alt="SQD" />
      </a>

      <div className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>{t('navbar.home')}</a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t('navbar.about')}</a>
        <a href="#history" onClick={(e) => handleNavClick(e, 'history')}>{t('navbar.history')}</a>
        <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>{t('navbar.services')}</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>{t('navbar.projects')}</a>
        <a href="#factory" onClick={(e) => handleNavClick(e, 'factory')}>{t('navbar.factory')}</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t('navbar.contact')}</a>
        {/* Language switcher inside mobile menu */}
        <button className="lang-switcher lang-switcher-mobile" onClick={toggleLanguage} aria-label="Switch language">
          {langLabel}
        </button>
      </div>

      {/* Language switcher - desktop */}
      <button className="lang-switcher lang-switcher-desktop" onClick={toggleLanguage} aria-label="Switch language">
        {langLabel}
      </button>

      <button
        className="navbar-cta"
        onClick={(e) => handleNavClick(e, 'cta')}
      >
        {t('navbar.requestQuote')}
      </button>

      <button
        className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar
