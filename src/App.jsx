import { useState, useEffect, useRef } from 'react'
import './index.css'

/* ═══════════════════════════════════════
   SVG Icons
   ═══════════════════════════════════════ */
const StarIcon = () => (
  <svg viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
)

const DiamondIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z" /><path d="M12 6l-6 6 6 6 6-6-6-6z" /></svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
)

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
)

/* Timeline Icons */
const ChatIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
)

const PenIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /></svg>
)

const SwatchIcon = () => (
  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
)

const CogIcon = () => (
  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
)

const SearchIcon = () => (
  <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
)

const TruckIcon = () => (
  <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
)

/* Social Icons */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
)

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.86 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .49 1.81 1.47 1.81 1.77 0 3.13-1.87 3.13-4.56 0-2.38-1.71-4.05-4.16-4.05-2.83 0-4.49 2.13-4.49 4.32 0 .86.33 1.78.74 2.28a.3.3 0 0 1 .07.29c-.08.31-.25 1-.28 1.14-.05.18-.15.22-.35.13-1.32-.61-2.14-2.54-2.14-4.09 0-3.33 2.42-6.39 6.98-6.39 3.67 0 6.52 2.61 6.52 6.1 0 3.64-2.3 6.58-5.49 6.58-1.07 0-2.08-.56-2.43-1.22l-.66 2.52c-.24.92-.89 2.07-1.32 2.77.99.31 2.04.47 3.13.47 5.52 0 10-4.48 10-10S17.52 2 12 2z" /></svg>
)

/* Why SQD icons */
const CraftIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
)

const TailorIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
)

const EyeIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
)

const MachineIcon = () => (
  <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>
)

const BoxIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
)

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
)

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>
)

/* ═══════════════════════════════════════
   useIntersectionObserver Hook
   ═══════════════════════════════════════ */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

/* ═══════════════════════════════════════
   NAVBAR COMPONENT
   ═══════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMobileOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`} id="navbar">
      <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
        <img src="/images/assets/sqd-logo.png" alt="SQD" />
      </a>

      <div className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
        <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
        <a href="#factory" onClick={(e) => handleNavClick(e, 'factory')}>Factory</a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        <a href="#contact" className="navbar-cta-mobile" onClick={(e) => handleNavClick(e, 'contact')}>Request Quote</a>
      </div>

      <button
        className="navbar-cta"
        onClick={(e) => handleNavClick(e, 'contact')}
      >
        Request Quote
      </button>

      <button
        className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

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
        <h1>Crafting Bespoke Interiors for Modern Living</h1>
        <p className="hero-tagline">
          Luxury Kitchens &nbsp;•&nbsp; Custom Joinery &nbsp;•&nbsp; Wardrobes &nbsp;•&nbsp; Interior Fit-Out
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Explore Projects
          </a>
          <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Request Consultation
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

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
              With over 60 years of experience, SQD has established itself as a leader in 
              delivering premium custom interiors. Our expertise spans bespoke joinery, 
              luxury kitchens, custom wardrobes, and comprehensive interior solutions — 
              each project reflecting our unwavering commitment to quality and craftsmanship.
            </p>
            <p>
              Every piece we create is a testament to the art of fine woodworking, 
              where traditional techniques meet contemporary design. We work closely 
              with architects, designers, and homeowners to bring visions to life with 
              precision, passion, and an obsessive attention to detail.
            </p>
          </div>
          <div className="about-image reveal-right">
            <img
              src="/images/services/joinery.png"
              alt="Premium craftsmanship by SQD"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   SERVICES COMPONENT
   ═══════════════════════════════════════ */
const servicesData = [
  { title: 'Luxury Kitchens', image: '/images/services/kitchens.png' },
  { title: 'Custom Wardrobes', image: '/images/services/wardrobes.png' },
  { title: 'Walk-in Closets', image: '/images/services/walkin.png' },
  { title: 'Living Room Interiors', image: '/images/services/livingroom.png' },
  { title: 'TV Units', image: '/images/services/tvunits.png' },
  { title: 'Vanity Units', image: '/images/services/vanity.png' },
  { title: 'Office Interiors', image: '/images/services/office.png' },
  { title: 'Custom Joinery', image: '/images/services/joinery.png' },
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
            From concept to completion, we deliver bespoke interior solutions crafted to the highest standards.
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

/* ═══════════════════════════════════════
   PROJECTS COMPONENT
   ═══════════════════════════════════════ */
const projectsData = [
  { title: 'Modern Kitchen', category: 'Kitchen Design', image: '/images/projects/modern-kitchen.png', size: 'large' },
  { title: 'Luxury Villa Kitchen', category: 'Kitchen Design', image: '/images/projects/villa-kitchen.png', size: 'large' },
  { title: 'Walk-in Closet', category: 'Wardrobe Design', image: '/images/projects/walkin-closet.png', size: 'medium' },
  { title: 'Minimal Wardrobe', category: 'Wardrobe Design', image: '/images/projects/wardrobe.png', size: 'medium' },
  { title: 'Luxury Living Room', category: 'Interior Design', image: '/images/projects/living-room.png', size: 'medium' },
  { title: 'Executive Office Interior', category: 'Office Design', image: '/images/projects/office.png', size: 'wide' },
]

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A curated selection of our finest work — each project a unique expression of luxury and craftsmanship.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="projects-grid">
          <div className="projects-row-1">
            {projectsData.slice(0, 2).map((project, i) => (
              <div key={i} className={`project-card ${project.size} reveal`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-info">
                  <span>{project.category}</span>
                  <h4>{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-row-2">
            {projectsData.slice(2, 5).map((project, i) => (
              <div key={i} className={`project-card ${project.size} reveal`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-info">
                  <span>{project.category}</span>
                  <h4>{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-row-3">
            {projectsData.slice(5).map((project, i) => (
              <div key={i} className={`project-card ${project.size} reveal`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-info">
                  <span>{project.category}</span>
                  <h4>{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   WHY SQD COMPONENT
   ═══════════════════════════════════════ */
const whyData = [
  { icon: <CraftIcon />, text: 'Premium craftsmanship' },
  { icon: <TailorIcon />, text: 'Tailor-made solutions' },
  { icon: <EyeIcon />, text: 'Attention to detail' },
  { icon: <MachineIcon />, text: 'Advanced manufacturing' },
  { icon: <BoxIcon />, text: 'Premium materials' },
  { icon: <WrenchIcon />, text: 'Professional installation' },
  { icon: <SparkleIcon />, text: 'Luxury finishes' },
]

function WhySQD() {
  return (
    <section className="why-sqd section-alt" id="why-sqd">
      <div className="container">
        <div className="why-inner">
          <div className="why-image reveal-left">
            <img src="/images/factory/workshop.png" alt="SQD workshop" loading="lazy" />
          </div>
          <div className="why-content reveal-right">
            <span className="section-label">The SQD Difference</span>
            <h2>Why Choose SQD</h2>
            <div className="section-divider" style={{ margin: '1.5rem 0' }}></div>
            <div className="why-list">
              {whyData.map((item, i) => (
                <div key={i} className="why-item" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="why-item-icon">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   FACTORY COMPONENT
   ═══════════════════════════════════════ */
const factoryImages = [
  { title: 'CNC Nesting Machine', image: '/images/factory/cnc.png', hasImage: true },
  { title: 'Panel Saw', image: '/images/factory/panelsaw.png', hasImage: true },
  { title: 'Workshop', image: '/images/factory/workshop.png', hasImage: true },
]

const factoryPlaceholders = [
  { title: 'Edge Banding Machine', icon: <CogIcon /> },
  { title: 'Precision Cutting', icon: <CraftIcon /> },
  { title: 'Cabinet Assembly', icon: <BoxIcon /> },
]

function Factory() {
  return (
    <section className="section" id="factory">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Facility</span>
          <h2 className="section-title">The Factory</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            State-of-the-art European machinery combined with traditional craftsmanship. 
            Precision at every stage.
          </p>
        </div>
        <div className="factory-grid">
          {factoryImages.map((item, i) => (
            <div key={i} className="factory-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="factory-card-label">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
          {factoryPlaceholders.map((item, i) => (
            <div key={`p-${i}`} className="factory-card-placeholder reveal" style={{ transitionDelay: `${(i + 3) * 0.1}s` }}>
              <div className="factory-icon-wrap">
                {(() => {
                  const IconComp = () => item.icon
                  return <div style={{ width: 48, height: 48 }}>{item.icon}</div>
                })()}
              </div>
              <div className="factory-card-label">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   HOW WE WORK (Timeline)
   ═══════════════════════════════════════ */
const timelineData = [
  { step: '01', title: 'Consultation', icon: <ChatIcon /> },
  { step: '02', title: 'Concept Design', icon: <PenIcon /> },
  { step: '03', title: 'Material Selection', icon: <SwatchIcon /> },
  { step: '04', title: 'Precision Manufacturing', icon: <CogIcon /> },
  { step: '05', title: 'Quality Inspection', icon: <SearchIcon /> },
  { step: '06', title: 'Professional Installation', icon: <TruckIcon /> },
]

function HowWeWork() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Process</span>
          <h2 className="section-title">How We Work</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A refined process ensuring exceptional results — from initial consultation to final installation.
          </p>
        </div>
        <div className="timeline">
          {timelineData.map((item, i) => (
            <div key={i} className="timeline-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="timeline-content">
                <span className="timeline-number">{item.step}</span>
                <h4>{item.title}</h4>
              </div>
              <div className="timeline-dot">
                {item.icon}
              </div>
              <div className="timeline-content" style={{ visibility: 'hidden' }}>
                <span className="timeline-number">{item.step}</span>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   MATERIALS COMPONENT
   ═══════════════════════════════════════ */
const materialsData = [
  { title: 'Natural Veneer', desc: 'Authentic grain patterns', cssClass: 'mat-veneer' },
  { title: 'Solid Wood', desc: 'Timeless durability', cssClass: 'mat-wood' },
  { title: 'Matte Finish', desc: 'Sophisticated elegance', cssClass: 'mat-matte' },
  { title: 'High Gloss', desc: 'Mirror-like perfection', cssClass: 'mat-gloss' },
  { title: 'Marble Countertops', desc: 'Natural luxury', cssClass: 'mat-marble' },
  { title: 'Quartz Surfaces', desc: 'Engineered precision', cssClass: 'mat-quartz' },
  { title: 'Fluted Panels', desc: 'Textured artistry', cssClass: 'mat-fluted' },
  { title: 'Glass Cabinets', desc: 'Refined transparency', cssClass: 'mat-glass' },
]

function Materials() {
  return (
    <section className="section section-dark" id="materials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label" style={{ color: 'var(--color-accent)' }}>Premium Finishes</span>
          <h2 className="section-title" style={{ color: 'var(--color-secondary)' }}>Material Collections</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Only the finest materials, sourced from trusted suppliers worldwide.
          </p>
        </div>
        <div className="materials-grid">
          {materialsData.map((material, i) => (
            <div key={i} className={`material-card ${material.cssClass} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="material-card-texture"></div>
              <div className="material-card-overlay">
                <h4>{material.title}</h4>
                <p>{material.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



/* ═══════════════════════════════════════
   TESTIMONIALS COMPONENT
   ═══════════════════════════════════════ */
const testimonialsData = [
  {
    text: '"SQD transformed our vision into reality. The attention to detail in our kitchen is beyond anything we imagined. Every cabinet, every finish — absolute perfection."',
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
    <section className="section section-alt" id="testimonials">
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

/* ═══════════════════════════════════════
   CTA COMPONENT
   ═══════════════════════════════════════ */
function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg">
        <img src="/images/projects/living-room.png" alt="Luxury interior" loading="lazy" />
      </div>
      <div className="cta-overlay"></div>
      <div className="cta-content reveal">
        <span className="section-label" style={{ color: 'var(--color-accent)' }}>Get Started</span>
        <h2>Let's Create Something Extraordinary</h2>
        <p>
          Whether you're envisioning a bespoke kitchen, a custom wardrobe, or a complete interior transformation — 
          we're ready to bring your vision to life.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Request Consultation
          </a>
          <a href="#projects" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

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
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#" aria-label="Pinterest"><PinterestIcon /></a>
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
              <li><a href="mailto:info@sqd.com">info@sqd.com</a></li>
              <li><a href="tel:+971000000000">+971 00 000 0000</a></li>
              <li><a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Location</h5>
            <div className="footer-map">
              <MapPinIcon />
            </div>
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

/* ═══════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════ */
function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhySQD />
      <Factory />
      <HowWeWork />
      <Materials />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
