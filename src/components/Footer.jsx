import { MapPinIcon, InstagramIcon, FacebookIcon, LinkedInIcon, PinterestIcon, WhatsAppIcon } from './Icons'

/* ═══════════════════════════════════════
   FOOTER COMPONENT
   ═══════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/images/assets/sqd-logo.png" alt="SQD" />
            <p>
              Crafting premium bespoke interiors since 1960. 
              Luxury kitchens, custom joinery, and interior solutions 
              designed for modern living.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/sqd.dubai/" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://www.linkedin.com/company/sqd-dubai" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="https://wa.me/971502006171" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><WhatsAppIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#factory">Factory</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Luxury Kitchens</a></li>
              <li><a href="#services">Custom Wardrobes</a></li>
              <li><a href="#services">Walk-in Closets</a></li>
              <li><a href="#services">Office Interiors</a></li>
              <li><a href="#services">Custom Joinery</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@sqd.ae">info@sqd.ae</a></li>
              <li><a href="tel:+971543939908">+971 54 393 9908</a></li>
              <li><a href="tel:+971502006171">+971 50 200 6171</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Location</h5>
            <a 
              href="https://maps.app.goo.gl/kw1QqfuLvvx8Rqg1A" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-map"
              aria-label="View SQD location on Google Maps"
            >
              <MapPinIcon />
              <span>SAIF Zone, Sharjah, UAE</span>
              <span className="footer-map-btn">Open Google Maps &rarr;</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SQD. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
