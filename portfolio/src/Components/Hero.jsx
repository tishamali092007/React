import { useEffect, useState } from 'react'

const ROLES = [
  'responsive interfaces.',
  'with React & Next.js.',
  'clean, structured UI.',
  'component-based apps.',
]

function useTypedText(words) {
  const [text, setText] = useState('')

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timeoutId

    const tick = () => {
      const current = words[wordIndex]
      if (!deleting) {
        charIndex++
        setText(current.slice(0, charIndex))
        if (charIndex === current.length) {
          deleting = true
          timeoutId = setTimeout(tick, 1400)
          return
        }
      } else {
        charIndex--
        setText(current.slice(0, charIndex))
        if (charIndex === 0) {
          deleting = false
          wordIndex = (wordIndex + 1) % words.length
        }
      }
      timeoutId = setTimeout(tick, deleting ? 35 : 55)
    }

    timeoutId = setTimeout(tick, 55)
    return () => clearTimeout(timeoutId)
  }, [words])

  return text
}

export default function Hero() {
  const typed = useTypedText(ROLES)

  return (
    <section className="hero" id="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>Building interfaces for<br /><em>the next web.</em></h1>
          <div className="hero-role">I build <span>{typed}</span><span className="cursor">_</span></div>
          <p className="desc">
            BCA student and aspiring full stack developer from Surat, Gujarat, focused on
            clean, responsive interfaces built with React, Next.js and modern CSS.
          </p>
          <div className="btn-row">
            <a href="#projects" className="btn btn-solid">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-top">
            <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
          </div>
          <div className="panel-line">&gt; <b>whoami</b></div>
          <div className="panel-line">Tisha Mayurkumar Mali</div>
          <div className="panel-line">&gt; <b>role</b> <span className="str">"Aspiring Full Stack Developer"</span></div>
          <div className="panel-line">&gt; <b>stack</b> <span className="str">["React", "Next.js", "JS", "C++"]</span></div>
          <div className="panel-line">&gt; <b>status</b> <span className="str">"open to internships"</span></div>
          <div className="stat-row">
            <div className="stat"><b>4+</b><span>Web Projects</span></div>
            <div className="stat"><b>10</b><span>Certifications</span></div>
            <div className="stat"><b>2028</b><span>Grad Year</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
