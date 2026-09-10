const STATS = [
  { value: '10', label: 'Infosys Certifications' },
  { value: '86%', label: 'Secondary (GSEB)' },
  { value: '68%', label: 'Higher Secondary (GSEB)' },
  { value: '4+', label: 'Web Projects Completed' },
]

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">achievements</div>
          <h2>Milestones so far.</h2>
        </div>
        <div className="stat-grid">
          {STATS.map(s => (
            <div className="stat-card" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </div>
        <div className="cert-line">
          <div>
            <h3>Infosys Certifications</h3>
            <p>Completed 10 Infosys certifications covering programming and web development topics, including HTML5 and CSS3.</p>
          </div>
          <span className="chip">Verified Learning</span>
        </div>
      </div>
    </section>
  )
}
