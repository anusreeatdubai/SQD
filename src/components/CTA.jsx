/* ═══════════════════════════════════════
   CTA COMPONENT — Quote Form
   ═══════════════════════════════════════ */
import { useState } from 'react'

function CTA() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const name     = (data.get('name') || '').toString().trim()
    const email    = (data.get('email') || '').toString().trim()
    const phone    = (data.get('phone') || '').toString().trim()
    const service  = (data.get('service') || '').toString().trim()
    const location = (data.get('location') || '').toString().trim()
    const budget   = (data.get('budget') || '').toString().trim()
    const message  = (data.get('message') || '').toString().trim()

    if (!name || !email || !phone) {
      return
    }

    setStatus('sending')

    const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    // If Web3Forms API key is configured and not default placeholder, submit via Web3Forms API
    if (apiKey && apiKey !== 'your_web3forms_access_key_here') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: apiKey,
            name,
            email,
            phone,
            service: service || 'N/A',
            location: location || 'N/A',
            budget: budget || 'N/A',
            message: message || 'N/A',
            subject: `New Quote Request: ${service || 'General Enquiry'} | ${name}`,
            from_name: 'SQD Website Quote Form'
          })
        })

        const result = await response.json()
        if (result.success) {
          setStatus('sent')
          form.reset()
          setTimeout(() => {
            setStatus('idle')
          }, 5000)
        } else {
          console.error('Web3Forms Error:', result)
          setStatus('error')
          setTimeout(() => {
            setStatus('idle')
          }, 5000)
        }
      } catch (err) {
        console.error('Submission Error:', err)
        setStatus('error')
        setTimeout(() => {
          setStatus('idle')
        }, 5000)
      }
    } else {
      // Fallback: mailto client
      const subject = encodeURIComponent(`Quote Request: ${service || 'General Enquiry'} | ${name}`)
      const body = encodeURIComponent(
`New Quote Request from SQD Website

Name:     ${name}
Email:    ${email}
Phone:    ${phone}
Service:  ${service || 'N/A'}
Location: ${location || 'N/A'}
Budget:   ${budget || 'N/A'}

Message:
${message || 'N/A'}`
      )
      window.location.href = `mailto:info@sqd.ae?subject=${subject}&body=${body}`
      setStatus('sent')
      form.reset()
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }
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
        <form className="cta-quote-form" onSubmit={handleSubmit}>
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
              <label htmlFor="cta-phone">Phone / WhatsApp *</label>
              <input id="cta-phone" name="phone" type="tel" placeholder="+971 00 000 0000" required />
            </div>
            <div className="cta-field">
              <label htmlFor="cta-service">Service Required</label>
              <select id="cta-service" name="service" defaultValue="">
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

          <button type="submit" className="cta-submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? (
              <>Sending Request...</>
            ) : status === 'sent' ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Request Sent
              </>
            ) : status === 'error' ? (
              <>Failed to Send. Try Again</>
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
