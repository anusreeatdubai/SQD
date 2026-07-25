/* ═══════════════════════════════════════
   ABOUT COMPONENT
   ═══════════════════════════════════════ */
function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-content reveal-left">
            <span className="about-label">Our Legacy</span>
            <h2>Designed for Living.<br />Built for Generations.</h2>
            <div className="about-line"></div>
            <p>
              With over 60 years of experience, SQD has earned a reputation for delivering
              premium interior solutions, custom joinery, and precision manufacturing. From
              luxury kitchens, wardrobes, and walk-in closets to bespoke commercial and
              residential interiors, we combine skilled craftsmanship with advanced
              machinery to create products that meet the highest standards of quality,
              durability, and design.
            </p>

            <p>
              Beyond complete interior solutions, SQD is a trusted manufacturing partner
              for interior design firms, contractors, architects, developers, and material
              suppliers. Our state-of-the-art production facility enables us to provide
              custom joinery, CNC machining, wood and panel fabrication, and contract
              manufacturing services. Every project is delivered with precision, reliability,
              and a commitment to excellence, ensuring exceptional results from concept to
              completion.
            </p>

          </div>
          <div className="about-image reveal-right">
            <img
              src="/images/services/about.jpg"
              alt="Premium craftsmanship by SQD"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
