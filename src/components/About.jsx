import { useTranslation } from 'react-i18next'

/* ═══════════════════════════════════════
   ABOUT COMPONENT
   ═══════════════════════════════════════ */
function About() {
  const { t } = useTranslation()

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-content reveal-left">
            <span className="about-label">{t('about.label')}</span>
            <h2>{t('about.heading1')}<br />{t('about.heading2')}</h2>
            <div className="about-line"></div>
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
          </div>
          <div className="about-image reveal-right">
            <img
              src="/images/services/about.jpg"
              alt="Premium craftsmanship by SQD"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
