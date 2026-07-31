/* ═══════════════════════════════════════
   HISTORY COMPONENT
   ═══════════════════════════════════════ */

const timelineData = [
  {
    era: 'The Beginning',
    period: '1960s',
    heading: 'Roots on Qeshm Island',
    body: 'Three generations ago, the founding family began building large wooden cargo dhows on Qeshm Island in southern Iran. These traditional vessels were vital to regional maritime trade. Constructing them demanded engineering knowledge, precision craftsmanship, and an uncompromising commitment to quality.',
  },
  {
    era: 'Expansion',
    period: '1970s – 1980s',
    heading: 'Doors, Windows & Woodworking',
    body: 'Alongside dhow building, the family specialised in manufacturing wooden doors and windows. As the industry evolved, the next generation expanded the business while preserving the same values of quality, reliability, and craftsmanship that had defined the family for decades.',
  },
  {
    era: 'Transformation',
    period: '1990s – 2000s',
    heading: 'From Workshop to Modern Manufacturer',
    body: 'What began as a traditional woodworking workshop gradually evolved into a modern manufacturing business, specialising in custom joinery, kitchens, wardrobes, interior fit-out solutions, UPVC and aluminium doors and windows, and a wide range of architectural wood products.',
  },
  {
    era: 'UAE Chapter',
    period: '2010s – Present',
    heading: 'SQD Established in Dubai',
    body: 'Today this legacy continues in the United Arab Emirates under the SQD brand. Headquartered in Dubai with our manufacturing facility in Sharjah Airport International Free Zone (SAIF Zone), we are equipped to deliver large-scale joinery solutions across the UAE and the wider region.',
  },
  {
    era: 'The Future',
    period: 'Now & Beyond',
    heading: 'SQD App: The Next Generation',
    body: 'We believe the future of the joinery industry will be driven by technology, automation, and artificial intelligence. That is why we are developing SQD App, an intelligent platform designed to unify sales, design, estimating, manufacturing, project management, and AI into one integrated ecosystem.',
  },
]

const stats = [
  { value: '60+', label: 'Years of Experience' },
  { value: '3', label: 'Generations of Craftsmanship' },
  { value: 'DUBAI', label: 'Headquartered in Dubai' },
  { value: 'SAIF ZONE', label: 'Manufacturing in Sharjah' },
]

function History() {
  return (
    <section className="history section" id="history">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="section-header reveal-up">
          <span className="section-label">Our Story</span>
          <h2 className="section-title history-title">
            More Than 60 Years in the Making
          </h2>
          <div className="section-divider history-divider"></div>
          <p className="section-subtitle history-subtitle">
            Every enduring company has a story. Ours began more than six decades ago, built on
            the craftsmanship, experience, and dedication of three generations of one family.
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
            More than 60 years of experience. Three generations of craftsmanship.
            The capability to deliver large-scale projects. A clear vision for the future.
            <cite>That is SQD.</cite>
          </blockquote>
          <div className="history-closing-line"></div>
        </div>

      </div>
    </section>
  )
}

export default History
