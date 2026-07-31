import { useTranslation } from 'react-i18next'

/* ═══════════════════════════════════════
   SERVICES COMPONENT
   ═══════════════════════════════════════ */
const servicesImages = [
  '/images/services/residential.png',
  '/images/services/commercial.png',
  '/images/services/kitchens.png',
  '/images/services/wardrobe.png',
  '/images/services/joinery.png',
  '/images/services/machine.jpeg',
  '/images/services/wood.png',
  '/images/services/b2b.png',
]

function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true })

  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">{t('services.label')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
        </div>
      </div>
      <div className="services-grid">
        {items.map((title, i) => (
          <div key={i} className="service-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <img src={servicesImages[i]} alt={title} loading="lazy" />
            <div className="service-card-overlay">
              <h4>{title}</h4>
              <div className="service-card-line"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
