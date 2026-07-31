import { useTranslation } from 'react-i18next'
import { StarIcon } from './Icons'

/* ═══════════════════════════════════════
   TESTIMONIALS COMPONENT
   ═══════════════════════════════════════ */
function Testimonials() {
  const { t } = useTranslation()
  const items = t('testimonials.items', { returnObjects: true })

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">{t('testimonials.label')}</span>
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="testimonials-grid">
          {items.map((testimonial, i) => (
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
