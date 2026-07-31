import { useTranslation } from 'react-i18next'

/* ═══════════════════════════════════════
   HERO COMPONENT
   ═══════════════════════════════════════ */
function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          src="/images/assets/hero-kitchen.jpg"
          alt="Luxury bespoke kitchen by SQD"
          loading="eager"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">

        <img 
          src="/images/assets/sqd-text.png" 
          alt="SQD" 
          className="hero-brand-img"
        />
        <h1>
          {t('hero.title')}
        </h1>
        <p className="hero-tagline">
          {t('hero.tagline')}
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            {t('hero.exploreProjects')}
          </a>
          <a href="#cta" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }) }}>
            {t('hero.requestConsultation')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
