export default function TimelineItem({ when, title, org, bullets, tag }) {
  return (
    <div className="t-item">
      <div className="t-when">{when}</div>
      <h3>{title}</h3>
      <div className="t-org">{org}</div>
      {bullets && bullets.length > 0 && (
        <ul>
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      {tag && <span className="t-tag">{tag}</span>}
    </div>
  )
}
