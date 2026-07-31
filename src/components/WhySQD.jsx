import { useTranslation } from 'react-i18next'
import { CraftIcon, TailorIcon, EyeIcon, MachineIcon, BoxIcon, WrenchIcon, SparkleIcon } from './Icons'

/* ═══════════════════════════════════════
   WHY SQD COMPONENT
   ═══════════════════════════════════════ */
const whyIcons = [
  <CraftIcon />,
  <TailorIcon />,
  <EyeIcon />,
  <MachineIcon />,
  <BoxIcon />,
  <WrenchIcon />,
  <SparkleIcon />,
]

function WhySQD() {
  const { t } = useTranslation()
  const items = t('whySqd.items', { returnObjects: true })

  return (
    <section className="why-sqd section-alt" id="why-sqd">
      <div className="container">
        <div className="why-inner">
          <div className="why-image reveal-left">
            <img src="/images/factory/workshop.png" alt="SQD workshop" loading="lazy" />
          </div>
          <div className="why-content reveal-right">
            <span className="section-label">{t('whySqd.label')}</span>
            <h2>{t('whySqd.title')}</h2>
            <div className="section-divider" style={{ margin: '1.5rem 0' }}></div>
            <div className="why-list">
              {items.map((text, i) => (
                <div key={i} className="why-item" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="why-item-icon">{whyIcons[i]}</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhySQD
