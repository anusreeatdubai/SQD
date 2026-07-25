/* ═══════════════════════════════════════
   HERO COMPONENT
   ═══════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          src="/images/assets/hero-kitchen.jpg"
          alt="Luxury bespoke kitchen by SQD"
          loading="eager"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">

        <img 
          src="/images/assets/sqd-text.png" 
          alt="SQD" 
          className="hero-brand-img"
        />
        <h1>
          Crafting Bespoke Interiors for Modern Living
        </h1>
        <p className="hero-tagline">
          Luxury Kitchens &nbsp;•&nbsp; Custom Joinery &nbsp;•&nbsp; Wardrobes &nbsp;•&nbsp; Interior Fit-Out
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Explore Projects
          </a>
          <a href="#cta" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Request Consultation
          </a>
        </div>
      </div>
      {/* <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
        <span>Scroll</span>
      </div> */}
    </section>
  )
}

export default Hero
