import { ChatIcon, PenIcon, SwatchIcon, CogIcon, SearchIcon, TruckIcon } from './Icons'

/* ═══════════════════════════════════════
   HOW WE WORK (Timeline)
   ═══════════════════════════════════════ */
const timelineData = [
  { step: '01', title: 'Consultation', icon: <ChatIcon /> },
  { step: '02', title: 'Concept Design', icon: <PenIcon /> },
  { step: '03', title: 'Material Selection', icon: <SwatchIcon /> },
  { step: '04', title: 'Precision Manufacturing', icon: <CogIcon /> },
  { step: '05', title: 'Quality Inspection', icon: <SearchIcon /> },
  { step: '06', title: 'Professional Installation', icon: <TruckIcon /> },
]

function HowWeWork() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Process</span>
          <h2 className="section-title">How We Work</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A refined process ensuring exceptional results, from initial consultation to final installation.
          </p>
        </div>
        <div className="timeline">
          {timelineData.map((item, i) => (
            <div key={i} className="timeline-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="timeline-content">
                <span className="timeline-number">{item.step}</span>
                <h4>{item.title}</h4>
              </div>
              <div className="timeline-dot">
                {item.icon}
              </div>
              <div className="timeline-content" style={{ visibility: 'hidden' }}>
                <span className="timeline-number">{item.step}</span>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
