import { useTranslation } from 'react-i18next'
import { MapPinIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from './Icons'

/* ═══════════════════════════════════════
   FOOTER COMPONENT
   ═══════════════════════════════════════ */
function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/images/assets/sqd-logo.png" alt="SQD" />
            <p>{t('footer.description')}</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/sqd.dubai/" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://www.linkedin.com/company/sqd-dubai" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="https://wa.me/971502006171" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><WhatsAppIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h5>{t('footer.company')}</h5>
            <ul>
              <li><a href="#about">{t('footer.companyLinks.about')}</a></li>
              <li><a href="#projects">{t('footer.companyLinks.projects')}</a></li>
              <li><a href="#services">{t('footer.companyLinks.services')}</a></li>
              <li><a href="#factory">{t('footer.companyLinks.factory')}</a></li>
              <li><a href="#contact">{t('footer.companyLinks.contact')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t('footer.servicesTitle')}</h5>
            <ul>
              <li><a href="#services">{t('footer.serviceLinks.kitchens')}</a></li>
              <li><a href="#services">{t('footer.serviceLinks.wardrobes')}</a></li>
              <li><a href="#services">{t('footer.serviceLinks.closets')}</a></li>
              <li><a href="#services">{t('footer.serviceLinks.office')}</a></li>
              <li><a href="#services">{t('footer.serviceLinks.joinery')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t('footer.contactTitle')}</h5>
            <ul>
              <li><a href="mailto:info@sqd.ae">info@sqd.ae</a></li>
              <li><a href="tel:+971543939908" dir="ltr">+971 54 393 9908</a></li>
              <li><a href="tel:+971502006171" dir="ltr">+971 50 200 6171</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t('footer.locationTitle')}</h5>
            <a 
              href="https://maps.app.goo.gl/kw1QqfuLvvx8Rqg1A" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-map"
              aria-label="View SQD location on Google Maps"
            >
              <MapPinIcon />
              <span>{t('footer.locationText')}</span>
              <span className="footer-map-btn">{t('footer.openMaps')}</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <p>{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
