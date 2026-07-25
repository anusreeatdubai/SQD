import { CraftIcon, TailorIcon, EyeIcon, MachineIcon, BoxIcon, WrenchIcon, SparkleIcon } from './Icons'

/* ═══════════════════════════════════════
   WHY SQD COMPONENT
   ═══════════════════════════════════════ */
const whyData = [
  { icon: <CraftIcon />, text: 'Premium craftsmanship' },
  { icon: <TailorIcon />, text: 'Tailor-made solutions' },
  { icon: <EyeIcon />, text: 'Attention to detail' },
  { icon: <MachineIcon />, text: 'Advanced manufacturing' },
  { icon: <BoxIcon />, text: 'Premium materials' },
  { icon: <WrenchIcon />, text: 'Professional installation' },
  { icon: <SparkleIcon />, text: 'Luxury finishes' },
]

function WhySQD() {
  return (
    <section className="why-sqd section-alt" id="why-sqd">
      <div className="container">
        <div className="why-inner">
          <div className="why-image reveal-left">
            <img src="/images/factory/workshop.png" alt="SQD workshop" loading="lazy" />
          </div>
          <div className="why-content reveal-right">
            <span className="section-label">The SQD Difference</span>
            <h2>Why Choose SQD</h2>
            <div className="section-divider" style={{ margin: '1.5rem 0' }}></div>
            <div className="why-list">
              {whyData.map((item, i) => (
                <div key={i} className="why-item" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="why-item-icon">{item.icon}</div>
                  <span>{item.text}</span>
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
