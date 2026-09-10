import TimelineItem from './TimelineItem.jsx'

const EDUCATION = [
  {
    when: '2025 – 2028',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'S.D. Jain International College, Surat',
  },
  {
    when: 'GSEB',
    title: 'Higher Secondary — 68%',
    org: 'Jeevan Bharti Kumar Bhavan',
  },
  {
    when: 'GSEB',
    title: 'Secondary — 86%',
    org: 'Jeevan Bharti Kumar Bhavan',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">education</div>
          <h2>Academic background.</h2>
        </div>
        <div className="timeline">
          {EDUCATION.map((item, i) => <TimelineItem key={i} {...item} />)}
        </div>
      </div>
    </section>
  )
}
