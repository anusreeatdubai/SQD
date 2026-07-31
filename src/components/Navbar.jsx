import { useState, useEffect } from 'react'

/* ═══════════════════════════════════════
   NAVBAR COMPONENT
   ═══════════════════════════════════════ */
function Navbar() {
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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`} id="navbar">
      <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
        <img src="/images/assets/sqd-logo.png" alt="SQD" />
      </a>

      <div className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        <a href="#history" onClick={(e) => handleNavClick(e, 'history')}>History</a>
        <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
        <a href="#factory" onClick={(e) => handleNavClick(e, 'factory')}>Factory</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
      </div>

      <button
        className="navbar-cta"
        onClick={(e) => handleNavClick(e, 'cta')}
      >
        Request Quote
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
