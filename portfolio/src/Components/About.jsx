const FACTS = [
  { label: 'Location', value: 'Surat, Gujarat, India' },
  { label: 'Currently studying', value: 'BCA, 2025 – 2028' },
  { label: 'Focus areas', value: 'Frontend & Full Stack' },
  { label: 'Looking for', value: 'Internship / Entry-level role' },
  { label: 'Email', value: 'tishamali2007@gmail.com' },
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div>
          <div className="kicker">about-me</div>
          <h2 style={{ fontSize: 'clamp(26px,3.2vw,38px)', marginBottom: '20px' }}>
            A developer who likes clean layouts and clear code.
          </h2>
          <p>
            I'm a BCA student and aspiring full stack developer with hands-on experience
            building responsive websites and frontend projects. I work comfortably with
            HTML5, CSS3, Bootstrap, JavaScript, React and Next.js, and I'm building a
            foundation in C, C++ and Data Structures & Algorithms.
          </p>
          <p>
            So far I've completed several web projects — including pet, e-commerce and
            coffee shop websites — while going through a professional Full Stack
            Development training program.
          </p>
        </div>
        <ul className="fact-list">
          {FACTS.map(f => (
            <li key={f.label}><span>{f.label}</span><span>{f.value}</span></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
