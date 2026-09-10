import TimelineItem from './TimelineItem.jsx'

const EXPERIENCE = [
  {
    when: 'Ongoing',
    title: 'Full Stack Development Trainee',
    org: 'Red & White Multimedia Education',
    bullets: [
      'Completing a professional Full Stack Development course covering frontend and core programming fundamentals.',
      'Applied HTML5, CSS3, JavaScript, React and Next.js across guided project work.',
    ],
    tag: 'Training Program',
  },
  {
    when: 'Self-directed',
    title: 'Independent Web Projects',
    org: 'Personal Practice',
    bullets: [
      'Designed and built multiple responsive websites end-to-end, from layout to styling.',
      'Strengthened component-based development and responsive design habits through repetition.',
    ],
    tag: 'Frontend Development',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">experience</div>
          <h2>Where I've been building.</h2>
          <p>Practical training and self-directed projects that shaped my frontend skills.</p>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((item, i) => <TimelineItem key={i} {...item} />)}
        </div>
      </div>
    </section>
  )
}
