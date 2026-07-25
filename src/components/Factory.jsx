import { CogIcon, CraftIcon, BoxIcon } from './Icons'

/* ═══════════════════════════════════════
   FACTORY COMPONENT
   ═══════════════════════════════════════ */
const factoryImages = [
  { title: 'CNC Nesting Machine', image: '/images/factory/cncnesting.png', hasImage: true },
  { title: 'Panel Saw', image: '/images/factory/panelsaw.png', hasImage: true },
  { title: 'Workshop', image: '/images/factory/workshoponly.jpeg', hasImage: true },
  { title: 'Edge Banding Machine', image: '/images/factory/edgebander.png', hasImage: true  },
  { title: 'Precision Cutting', image: '/images/factory/cut.png', hasImage: true  },
  { title: 'Cabinet Assembly', image: '/images/factory/cabinet.png', hasImage: true  },
]



function Factory() {
  return (
    <section className="section" id="factory">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Facility</span>
          <h2 className="section-title">The Factory</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            State-of-the-art European machinery combined with traditional craftsmanship. 
            Precision at every stage.
          </p>
        </div>
        <div className="factory-grid">
          {factoryImages.map((item, i) => (
            <div key={i} className="factory-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="factory-card-label">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Factory
