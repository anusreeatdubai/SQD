/* ═══════════════════════════════════════
   MATERIALS COMPONENT
   ═══════════════════════════════════════ */
const materialsData = [
  { title: 'Natural Veneer', desc: 'Authentic grain patterns', cssClass: 'mat-veneer' },
  { title: 'Solid Wood', desc: 'Timeless durability', cssClass: 'mat-wood' },
  { title: 'Matte Finish', desc: 'Sophisticated elegance', cssClass: 'mat-matte' },
  { title: 'High Gloss', desc: 'Mirror-like perfection', cssClass: 'mat-gloss' },
  { title: 'Marble Countertops', desc: 'Natural luxury', cssClass: 'mat-marble' },
  { title: 'Quartz Surfaces', desc: 'Engineered precision', cssClass: 'mat-quartz' },
  { title: 'Fluted Panels', desc: 'Textured artistry', cssClass: 'mat-fluted' },
  { title: 'Glass Cabinets', desc: 'Refined transparency', cssClass: 'mat-glass' },
]

function Materials() {
  return (
    <section className="section section-dark" id="materials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label" style={{ color: 'var(--color-accent)' }}>Premium Finishes</span>
          <h2 className="section-title" style={{ color: 'var(--color-secondary)' }}>Material Collections</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Only the finest materials, sourced from trusted suppliers worldwide.
          </p>
        </div>
        <div className="materials-grid">
          {materialsData.map((material, i) => (
            <div key={i} className={`material-card ${material.cssClass} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="material-card-texture"></div>
              <div className="material-card-overlay">
                <h4>{material.title}</h4>
                <p>{material.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Materials
