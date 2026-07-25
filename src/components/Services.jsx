/* ═══════════════════════════════════════
   SERVICES COMPONENT
   ═══════════════════════════════════════ */
const servicesData = [
  { title: 'Residential Interiors', image: '/images/services/residential.png' },
  { title: 'Commercial Interiors', image: '/images/services/commercial.png' },
  { title: 'Luxury Kitchens', image: '/images/services/kitchens.png' },
  { title: 'Custom Wardrobes & Closets', image: '/images/services/wardrobe.png' },
  { title: 'Custom Joinery Manufacturing', image: '/images/services/joinery.png' },
  { title: 'CNC Cutting & Machining', image: '/images/services/machine.jpeg' },
  { title: 'Wood & Panel Fabrication', image: '/images/services/wood.png' },
  { title: 'B2B Manufacturing Partnership', image: '/images/services/b2b.png' },
]

function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            We provide complete interior solutions along with precision joinery manufacturing, CNC machining, and custom fabrication services. Whether you're a homeowner, contractor, interior design firm, or material supplier, we deliver high-quality craftsmanship and reliable production support from concept to completion.
          </p>
        </div>
      </div>
      <div className="services-grid">
        {servicesData.map((service, i) => (
          <div key={i} className="service-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <img src={service.image} alt={service.title} loading="lazy" />
            <div className="service-card-overlay">
              <h4>{service.title}</h4>
              <div className="service-card-line"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
