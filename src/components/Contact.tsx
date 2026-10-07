import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { EMAIL, LINKEDIN_URL, RESUME_URL } from '../site'
import './Contact.scss'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useReveal(sectionRef)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="contact__orb" />

      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Let's Connect</span>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="contact__subtitle">
            Whether you have an exciting project, a role in mind, or just want to say hello —
            my inbox is always open.
          </p>
        </div>

        <div className="contact__cards">
          {/* Email */}
          <div className="glass-card contact__card reveal">
            <div className="contact__card-icon">📧</div>
            <h4 className="contact__card-label">Email</h4>
            <a className="contact__card-value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <button className="btn btn-outline contact__card-btn" onClick={handleCopyEmail}>
              <span aria-live="polite">{copied ? '✓ Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* LinkedIn */}
          <div className="glass-card contact__card contact__card--featured reveal">
            <div className="contact__card-icon">💼</div>
            <h4 className="contact__card-label">LinkedIn</h4>
            <p className="contact__card-value">Connect with me</p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary contact__card-btn"
            >
              View Profile
            </a>
          </div>

          {/* Resume */}
          <div className="glass-card contact__card reveal">
            <div className="contact__card-icon">📄</div>
            <h4 className="contact__card-label">Resume</h4>
            <p className="contact__card-value">Download my CV</p>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline contact__card-btn"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Availability banner */}
        <div className="contact__availability reveal">
          <span className="contact__avail-dot" />
          <p>
            <strong>Open to new opportunities</strong>: UX leadership, product design and
            design systems roles. Based in Bengaluru, India.
          </p>
        </div>
      </div>
    </section>
  )
}
