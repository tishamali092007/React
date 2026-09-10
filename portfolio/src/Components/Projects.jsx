const PROJECTS = [
  {
    tag: 'PROJECT — PET',
    title: 'Pet Website',
    desc: 'A responsive pet-themed website with structured sections and reusable components, focused on clean UI and visual presentation.',
    stack: ['HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    tag: 'PROJECT — SHOP',
    title: 'E-Commerce Website',
    desc: 'A product-focused e-commerce frontend with responsive layouts and structured content, built using core web development techniques.',
    stack: ['HTML5', 'CSS3', 'Layout Systems'],
  },
  {
    tag: 'PROJECT — CAFE',
    title: 'Coffee Shop Website',
    desc: 'A responsive coffee shop website with organized content sections, designed around clean layouts and user-friendly presentation.',
    stack: ['HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    tag: 'PROJECT — PRACTICE',
    title: 'Additional Web Projects',
    desc: 'Multiple practice websites built to strengthen frontend, component-based and responsive development skills.',
    stack: ['JavaScript', 'Media Queries', 'Components'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">projects</div>
          <h2>Things I've built.</h2>
          <p>Frontend projects focused on responsive layouts and clean, structured UI.</p>
        </div>
        <div className="proj-grid">
          {PROJECTS.map(p => (
            <div className="proj-card" key={p.title}>
              <div className="proj-num">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="proj-stack">
                {p.stack.map(s => <span className="chip" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
