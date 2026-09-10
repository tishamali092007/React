import { useState } from 'react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ activeId }) {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav>
        <div className="logo"><span>TM</span>Tisha Mali</div>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  )
}
