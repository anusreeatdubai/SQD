/* ═══════════════════════════════════════
   PROJECTS COMPONENT
   ═══════════════════════════════════════ */
import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

/* --- Static project data (non-translatable fields) --- */
const projectsStaticData = [
  {
    image: '/images/projects/QTwinTower.png',
    year: '2016',
    gallery: [
      '/images/projects/QTwinTower/tt1.png',
      '/images/projects/QTwinTower/tt2.png',
      '/images/projects/QTwinTower/tt3.png',
      '/images/projects/QTwinTower/tt4.png',
      '/images/projects/QTwinTower/tt5.png',
      '/images/projects/QTwinTower/tt6.png',
      '/images/projects/QTwinTower/tt7.png',
      '/images/projects/QTwinTower/tt8.png',
    ],
  },
  {
    image: '/images/projects/Daryoush.png',
    objectPosition: 'center 100%',
    year: '2018',
    gallery: [
      '/images/projects/Daryoush/d1.png',
      '/images/projects/Daryoush/d2.png',
      '/images/projects/Daryoush/d3.png',
      '/images/projects/Daryoush/d4.png',
      '/images/projects/Daryoush/d5.png',
      '/images/projects/Daryoush/d6.png',
      '/images/projects/Daryoush/d7.png',
      '/images/projects/Daryoush/d8.png',
    ],
  },
  {
    image: '/images/projects/TopIsland.png',
    year: '2026',
    gallery: [
      '/images/projects/TopIsland/qt1.png',
      '/images/projects/TopIsland/qt2.png',
      '/images/projects/TopIsland/qt3.png',
      '/images/projects/TopIsland/qt4.png',
      '/images/projects/TopIsland/qt5.png',
      '/images/projects/TopIsland/qt6.png',
      '/images/projects/TopIsland/qt7.png',
      '/images/projects/TopIsland/qt8.png',
    ],
  },
]

/* --- Reusable scroll-lock utility --- */
function useScrollLock(active) {
  const scrollRef = useRef(0)

  useEffect(() => {
    if (!active) return

    scrollRef.current = window.scrollY

    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollRef.current}px`
    document.body.style.width = '100%'

    return () => {
      const y = scrollRef.current
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''

      /* Instant restore — bypass CSS smooth scrolling */
      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo(0, y)
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = ''
      })
    }
  }, [active])
}

/* ═══════════════════════════════════════
   GALLERY LIGHTBOX
   ═══════════════════════════════════════ */
function GalleryLightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  return createPortal(
    <motion.div
      className="gallery-lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous image">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next image">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 6 15 12 9 18" /></svg>
          </button>
        </>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          className="lightbox-image-wrap"
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={images[activeIndex]} alt={`Gallery image ${activeIndex + 1}`} />
        </motion.div>
      </AnimatePresence>

      <div className="lightbox-counter">
        {activeIndex + 1} / {images.length}
      </div>
    </motion.div>,
    document.body
  )
}

/* ═══════════════════════════════════════
   PROJECT OVERLAY
   ═══════════════════════════════════════ */

/* Animation variants */
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
}

const contentVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.98 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.98 }),
}

const heroSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
}

const bodyStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

const bodyItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const galleryItemVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

function ProjectOverlay({ projectIndex, onClose }) {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(projectIndex)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [direction, setDirection] = useState(0)
  const scrollContainerRef = useRef(null)

  const staticProject = projectsStaticData[currentIndex]
  const translatedData = t('projects.data', { returnObjects: true })
  const translated = translatedData[currentIndex]
  const total = projectsStaticData.length

  /* Lock body scroll */
  useScrollLock(true)

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex !== null) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  })

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + total) % total)
    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0
  }, [total])

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % total)
    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0
  }, [total])

  /* Lightbox handlers */
  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const lightboxPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + staticProject.gallery.length) % staticProject.gallery.length)
  }, [staticProject.gallery.length])
  const lightboxNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % staticProject.gallery.length)
  }, [staticProject.gallery.length])

  return createPortal(
    <>
      <motion.div
        className="project-overlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Close button */}
        <motion.button
          className="overlay-close"
          onClick={onClose}
          aria-label="Close project details"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.button>

        {/* Prev / Next project navigation */}
        <motion.button
          className="overlay-nav overlay-nav-prev"
          onClick={goToPrev}
          aria-label="Previous project"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ x: -4 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6" /></svg>
          <span>{t('projects.prev')}</span>
        </motion.button>
        <motion.button
          className="overlay-nav overlay-nav-next"
          onClick={goToNext}
          aria-label="Next project"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ x: 4 }}
        >
          <span>{t('projects.next')}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 6 15 12 9 18" /></svg>
        </motion.button>

        {/* Scrollable content */}
        <div className="overlay-scroll" ref={scrollContainerRef}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              className="overlay-content"
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Hero image */}
              <motion.div className="overlay-hero" variants={heroSlideUp} initial="hidden" animate="visible">
                <img src={staticProject.image} alt={translated.title} style={staticProject.objectPosition ? { objectPosition: staticProject.objectPosition } : undefined} />
                <div className="overlay-hero-gradient" />
                <div className="overlay-hero-text">
                  <h2 className="overlay-title">{translated.title}</h2>
                </div>
              </motion.div>

              {/* Body with staggered animations */}
              <motion.div className="overlay-body" variants={bodyStagger} initial="hidden" animate="visible">
                {/* Project info grid */}
                <motion.div className="overlay-meta" variants={bodyItem}>
                  <div className="overlay-meta-item">
                    <span className="overlay-meta-label">{t('projects.locationLabel')}</span>
                    <span className="overlay-meta-value">{translated.location}</span>
                  </div>
                  <div className="overlay-meta-item">
                    <span className="overlay-meta-label">{t('projects.yearLabel')}</span>
                    <span className="overlay-meta-value">{staticProject.year}</span>
                  </div>
    
                  <div className="overlay-meta-item">
                    <span className="overlay-meta-label">{t('projects.servicesLabel')}</span>
                    <span className="overlay-meta-value">{translated.services.join(' · ')}</span>
                  </div>
                </motion.div>

                {/* Gallery */}
                <motion.div className="overlay-gallery-section" variants={bodyItem}>
                  <div className="overlay-gallery-header">
                    <h3 className="overlay-gallery-title">
                      {t('projects.galleryTitle')}
                      {staticProject.gallery && staticProject.gallery.length > 0 && (
                        <span className="gallery-count">({staticProject.gallery.length} {t('projects.galleryPhotos')})</span>
                      )}
                    </h3>
                  </div>
                  <div className="overlay-gallery-divider" />
                  <div className="overlay-gallery-grid">
                    {staticProject.gallery && staticProject.gallery.map((img, idx) => (
                      <motion.div
                        key={idx}
                        className="overlay-gallery-thumb"
                        custom={idx}
                        variants={galleryItemVariant}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        onClick={() => openLightbox(idx)}
                      >
                        <img 
                          src={img} 
                          alt={`${translated.title} - gallery ${idx + 1}`} 
                          loading="lazy" 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = staticProject.image;
                          }}
                        />
                        <div className="gallery-thumb-overlay">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Project counter */}
                <motion.div className="overlay-project-counter" variants={bodyItem}>
                  <span>{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="counter-sep">/</span>
                  <span>{String(total).padStart(2, '0')}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <GalleryLightbox
            images={staticProject.gallery}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={lightboxPrev}
            onNext={lightboxNext}
          />
        )}
      </AnimatePresence>
    </>,
    document.body
  )
}

/* ═══════════════════════════════════════
   PROJECTS SECTION
   ═══════════════════════════════════════ */

/* Card hover animation */
const cardVariants = {
  rest: { y: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

function Projects() {
  const { t } = useTranslation()
  const [selectedProject, setSelectedProject] = useState(null)
  const translatedData = t('projects.data', { returnObjects: true })

  return (
    <>
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">{t('projects.label')}</span>
            <h2 className="section-title">{t('projects.title')}</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
        <div className="container">
          <div className="projects-uniform-grid">
            {projectsStaticData.map((project, i) => (
              <motion.div
                key={i}
                className="project-card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                onClick={() => setSelectedProject(i)}
              >
                <img src={project.image} alt={translatedData[i]?.title} loading="lazy" style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined} />
                <div className="project-card-overlay" />
                <div className="project-info">
                  <h4>{translatedData[i]?.title}</h4>
                  <div className="project-cta">
                    <span>{t('projects.viewProject')}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overlay */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectOverlay
            projectIndex={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects
