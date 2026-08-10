import { useTranslation } from 'react-i18next'

/* ═══════════════════════════════════════
   FACTORY COMPONENT
   ═══════════════════════════════════════ */
const factoryImages = [
  '/images/factory/cncnesting.png',
  '/images/factory/panelsaw.png',
  '/images/factory/workshoponly.png',
  '/images/factory/edgebander.png',
  '/images/factory/cut.png',
  '/images/factory/cabinet.png',
]

function Factory() {
  const { t } = useTranslation()
  const items = t('factory.items', { returnObjects: true })

  return (
    <section className="section" id="factory">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">{t('factory.label')}</span>
          <h2 className="section-title">{t('factory.title')}</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            {t('factory.subtitle')}
          </p>
        </div>
        <div className="factory-grid">
          {items.map((title, i) => (
            <div key={i} className="factory-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <img src={factoryImages[i]} alt={title} loading="lazy" />
              <div className="factory-card-label">
                <span>{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Factory
