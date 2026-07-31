import { StarIcon } from './Icons'

/* ═══════════════════════════════════════
   TESTIMONIALS COMPONENT
   ═══════════════════════════════════════ */
const testimonialsData = [
  {
    text: '"SQD transformed our vision into reality. The attention to detail in our kitchen is beyond anything we imagined. Every cabinet, every finish, absolute perfection."',
    author: 'Sarah M.',
    role: 'Homeowner, Dubai'
  },
  {
    text: '"Working with SQD was a seamless experience from start to finish. Their craftsmanship is unmatched, and their team truly understands luxury. Our walk-in closet is a masterpiece."',
    author: 'Ahmed K.',
    role: 'Interior Designer'
  },
  {
    text: '"The quality of materials and precision in manufacturing is extraordinary. SQD delivered our entire villa interior on time and exceeded every expectation."',
    author: 'Victoria L.',
    role: 'Architect'
  },
]

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">What They Say</h2>
          <div className="section-divider"></div>
        </div>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, i) => (
            <div key={i} className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
