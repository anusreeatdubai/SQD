/* ═══════════════════════════════════════
   CTA COMPONENT — Quote Form
   ═══════════════════════════════════════ */
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function CTA() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const name = (data.get('name') || '').toString().trim()
    const email = (data.get('email') || '').toString().trim()
    const phone = (data.get('phone') || '').toString().trim()
    const service = (data.get('service') || '').toString().trim()
    const location = (data.get('location') || '').toString().trim()
    const budget = (data.get('budget') || '').toString().trim()
    const message = (data.get('message') || '').toString().trim()

    if (!name || !email || !phone) {
      return
    }

    setStatus('sending')

const WEB3FORMS_ACCESS_KEY = 'c6dc97b3-94eb-468c-b3d9-be98a4721b22'

    const apiKey = WEB3FORMS_ACCESS_KEY

    // Prepare payload object
    const payload = {
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
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const result = await response.json()

      if (result.success) {
        setStatus('sent')
        form.reset()
        setTimeout(() => {
          setStatus('idle')
        }, 5000)
      } else {
        console.error('[Web3Forms Error] API returned failure:', result)
        setStatus('error')
        setTimeout(() => {
          setStatus('idle')
        }, 5000)
      }
    } catch (err) {
      console.error('[Web3Forms Error] Network or Fetch Exception:', err)
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }
  }

  const serviceOptions = t('cta.serviceOptions', { returnObjects: true })
  const budgetOptions = t('cta.budgetOptions', { returnObjects: true })

  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg">
        <img src="/images/projects/bg.jpg" alt="Luxury interior" loading="lazy" />
      </div>
      <div className="cta-overlay" />

      <div className="cta-form-wrap reveal">
        {/* Left — headline */}
        <div className="cta-headline">
          <span className="section-label" style={{ color: 'var(--color-accent)' }}>{t('cta.label')}</span>
          <h2>{t('cta.heading1')}<br />{t('cta.heading2')}</h2>
          <div className="section-divider" style={{ margin: '1.5rem 0' }} />
          <p>
            {t('cta.description')}
          </p>

        </div>

        {/* Right — form */}
        <form className="cta-quote-form" onSubmit={handleSubmit}>
          <div className="cta-form-row">
            <div className="cta-field">
              <label htmlFor="cta-name">{t('cta.form.fullName')}</label>
              <input id="cta-name" name="name" type="text" placeholder={t('cta.form.fullNamePlaceholder')} required />
            </div>
            <div className="cta-field">
              <label htmlFor="cta-email">{t('cta.form.email')}</label>
              <input id="cta-email" name="email" type="email" placeholder={t('cta.form.emailPlaceholder')} required />
            </div>
          </div>

          <div className="cta-form-row">
            <div className="cta-field">
              <label htmlFor="cta-phone">{t('cta.form.phone')}</label>
              <input id="cta-phone" name="phone" type="tel" placeholder={t('cta.form.phonePlaceholder')} required dir="ltr" />
            </div>
            <div className="cta-field">
              <label htmlFor="cta-service">{t('cta.form.service')}</label>
              <select id="cta-service" name="service" defaultValue="">
                <option value="" disabled>{t('cta.form.servicePlaceholder')}</option>
                {serviceOptions.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="cta-form-row">
            <div className="cta-field">
              <label htmlFor="cta-location">{t('cta.form.location')}</label>
              <input id="cta-location" name="location" type="text" placeholder={t('cta.form.locationPlaceholder')} />
            </div>
            <div className="cta-field">
              <label htmlFor="cta-budget">{t('cta.form.budget')}</label>
              <select id="cta-budget" name="budget" defaultValue="">
                <option value="" disabled>{t('cta.form.budgetPlaceholder')}</option>
                {budgetOptions.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="cta-field">
            <label htmlFor="cta-message">{t('cta.form.message')}</label>
            <textarea id="cta-message" name="message" rows="4" placeholder={t('cta.form.messagePlaceholder')} />
          </div>

          <button type="submit" className="cta-submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? (
              <>{t('cta.button.sending')}</>
            ) : status === 'sent' ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t('cta.button.sent')}
              </>
            ) : status === 'error' ? (
              <>{t('cta.button.error')}</>
            ) : (
              <>
                {t('cta.button.send')}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>

          <p className="cta-form-note">
            {t('cta.formNote')}
          </p>
        </form>
      </div>
    </section>
  )
}

export default CTA
