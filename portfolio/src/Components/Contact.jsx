import { useState } from 'react'

const EMAIL = 'tishamali2007@gmail.com'

export default function Contact() {
  const [copyMsg, setCopyMsg] = useState('')

  const handleEmailClick = async (e) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopyMsg(`Email copied to clipboard — ${EMAIL}`)
    } catch {
      // clipboard API unavailable — mailto still works below
    }
    window.location.href = `mailto:${EMAIL}`
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-box">
          <div>
            <div className="kicker">contact</div>
            <h2>Let's build something together.</h2>
            <p>Open to internship and entry-level opportunities in frontend or full stack development. Reach out any time.</p>
          </div>
          <div>
            <div className="contact-links">
              <a className="contact-link" href={`mailto:${EMAIL}`} onClick={handleEmailClick}>
                <span>{EMAIL}</span><span className="lbl">Email</span>
              </a>
              <a className="contact-link" href="tel:+917984227880">
                <span>+91 79842 27880</span><span className="lbl">Phone</span>
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/tisha-mali-18b193387/" target="_blank" rel="noopener noreferrer">
                <span>tisha-mali-18b193387</span><span className="lbl">LinkedIn</span>
              </a>
              <a className="contact-link" href="https://github.com/tishamali092007" target="_blank" rel="noopener noreferrer">
                <span>tishamali092007</span><span className="lbl">GitHub</span>
              </a>
            </div>
            <div id="copy-msg">{copyMsg}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
