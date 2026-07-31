import { useTranslation } from 'react-i18next'

/* ═══════════════════════════════════════
   HISTORY COMPONENT
   ═══════════════════════════════════════ */
function History() {
  const { t } = useTranslation()

  const timelineData = t('history.timeline', { returnObjects: true })
  const stats = t('history.stats', { returnObjects: true })

  return (
    <section className="history section" id="history">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="section-header reveal-up">
          <span className="section-label">{t('history.label')}</span>
          <h2 className="section-title history-title">
            {t('history.title')}
          </h2>
          <div className="section-divider history-divider"></div>
          <p className="section-subtitle history-subtitle">
            {t('history.subtitle')}
          </p>
        </div>

        {/* ── Stats Row ── */}
        <div className="history-stats reveal-up">
          {stats.map((s, i) => (
            <div key={i} className="history-stat" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="history-stat-value">{s.value}</span>
              <span className="history-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Timeline ── */}
        <div className="history-timeline">
          <div className="history-timeline-line"></div>

          {timelineData.map((item, i) => (
            <div
              key={i}
              className={`history-timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal-up`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Dot */}
              <div className="history-dot">
                <div className="history-dot-inner"></div>
              </div>

              {/* Card */}
              <div className="history-card">
                <div className="history-card-period">{item.period}</div>
                <div className="history-card-era">{item.era}</div>
                <h4 className="history-card-heading">{item.heading}</h4>
                <p className="history-card-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Closing Quote ── */}
        <div className="history-closing reveal-up">
          <div className="history-closing-line"></div>
          <blockquote className="history-quote">
            {t('history.quote')}
            <cite>{t('history.quoteCite')}</cite>
          </blockquote>
          <div className="history-closing-line"></div>
        </div>

      </div>
    </section>
  )
}

export default History
