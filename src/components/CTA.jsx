/* ═══════════════════════════════════════
   CTA COMPONENT — Quote Form
   ═══════════════════════════════════════ */
import { useState } from 'react'

function CTA() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const name     = data.get('name')
    const email    = data.get('email')
    const phone    = data.get('phone')
    const service  = data.get('service')
    const location = data.get('location')
    const budget   = data.get('budget')
    const message  = data.get('message')

    const subject = encodeURIComponent(`Quote Request — ${service} | ${name}`)
    const body = encodeURIComponent(
`New Quote Request from SQD Website

Name:     ${name}
Email:    ${email}
Phone:    ${phone}
Service:  ${service}
Location: ${location}
Budget:   ${budget}

Message:
${message}`
    )

    // Open default mail client pre-filled with form data
    window.location.href = `mailto:info@sqd.ae?subject=${subject}&body=${body}`
    setStatus('sent')
    form.reset()
  }

  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg">
        <img src="/images/projects/bg.jpg" alt="Luxury interior" loading="lazy" />
      </div>
      <div className="cta-overlay" />

      <div className="cta-form-wrap reveal">
        {/* Left — headline */}
        <div className="cta-headline">
          <span className="section-label" style={{ color: 'var(--color-accent)' }}>Get Started</span>
          <h2>Let's Create Something<br />Extraordinary</h2>
          <div className="section-divider" style={{ margin: '1.5rem 0' }} />
          <p>
            Tell us about your project and we'll get back to you within 24 hours with a personalised consultation.
          </p>
          
        </div>

        {/* Right — form */}
        <form className="cta-quote-form" onSubmit={handleSubmit} noValidate>
          <div className="cta-form-row">
            <div className="cta-field">
              <label htmlFor="cta-name">Full Name *</label>
              <input id="cta-name" name="name" type="text" placeholder="Your full name" required />
            </div>
            <div className="cta-field">
              <label htmlFor="cta-email">Email Address *</label>
              <input id="cta-email" name="email" type="email" placeholder="your@email.com" required />
            </div>
          </div>

          <div className="cta-form-row">
            <div className="cta-field">
              <label htmlFor="cta-phone">Phone / WhatsApp</label>
              <input id="cta-phone" name="phone" type="tel" placeholder="+971 00 000 0000" />
            </div>
            <div className="cta-field">
              <label htmlFor="cta-service">Service Required *</label>
              <select id="cta-service" name="service" required defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Luxury Kitchen</option>
                <option>Custom Wardrobe</option>
                <option>Walk-in Closet</option>
                <option>Office Interior</option>
                <option>Living Room Design</option>
                <option>Commercial Fit-Out</option>
                <option>Custom Joinery</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="cta-form-row">
            <div className="cta-field">
              <label htmlFor="cta-location">Project Location</label>
              <input id="cta-location" name="location" type="text" placeholder="City, Country" />
            </div>
            <div className="cta-field">
              <label htmlFor="cta-budget">Approximate Budget</label>
              <select id="cta-budget" name="budget" defaultValue="">
                <option value="" disabled>Select range</option>
                <option>Under AED 50,000</option>
                <option>AED 50,000 – 100,000</option>
                <option>AED 100,000 – 250,000</option>
                <option>AED 250,000 – 500,000</option>
                <option>Above AED 500,000</option>
              </select>
            </div>
          </div>

          <div className="cta-field">
            <label htmlFor="cta-message">Project Details</label>
            <textarea id="cta-message" name="message" rows="4" placeholder="Tell us about your vision, timeline, and any specific requirements…" />
          </div>

          <button type="submit" className="cta-submit-btn">
            {status === 'sent' ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Request Sent
              </>
            ) : (
              <>
                Send Quote Request
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>

          <p className="cta-form-note">
            We'll respond within 24 hours · All enquiries are confidential
          </p>
        </form>
      </div>
    </section>
  )
}

export default CTA
