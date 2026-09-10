const SKILL_GROUPS = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Media Queries', 'JavaScript', 'React.js', 'Next.js'],
  },
  {
    title: 'Programming & CS',
    skills: ['C', 'C++', 'Data Structures & Algorithms'],
  },
  {
    title: 'Practices',
    skills: ['Responsive Web Design', 'Component-Based Development'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">skills</div>
          <h2>What I work with.</h2>
        </div>
        <div className="skill-groups">
          {SKILL_GROUPS.map(group => (
            <div className="skill-cat" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map(s => <span className="skill-tag" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
