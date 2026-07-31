import { useTranslation } from 'react-i18next'
import { ChatIcon, PenIcon, SwatchIcon, CogIcon, SearchIcon, TruckIcon } from './Icons'

/* ═══════════════════════════════════════
   HOW WE WORK (Timeline)
   ═══════════════════════════════════════ */
const stepNumbers = ['01', '02', '03', '04', '05', '06']
const stepIcons = [
  <ChatIcon />,
  <PenIcon />,
  <SwatchIcon />,
  <CogIcon />,
  <SearchIcon />,
  <TruckIcon />,
]

function HowWeWork() {
  const { t } = useTranslation()
  const steps = t('howWeWork.steps', { returnObjects: true })

  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">{t('howWeWork.label')}</span>
          <h2 className="section-title">{t('howWeWork.title')}</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            {t('howWeWork.subtitle')}
          </p>
        </div>
        <div className="timeline">
          {steps.map((title, i) => (
            <div key={i} className="timeline-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="timeline-content">
                <span className="timeline-number">{stepNumbers[i]}</span>
                <h4>{title}</h4>
              </div>
              <div className="timeline-dot">
                {stepIcons[i]}
              </div>
              <div className="timeline-content" style={{ visibility: 'hidden' }}>
                <span className="timeline-number">{stepNumbers[i]}</span>
                <h4>{title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
