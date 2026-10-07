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
            <div className="contact__card-icon" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg></div>
            <h4 className="contact__card-label">Email</h4>
            <a className="contact__card-value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <button className="btn btn-outline contact__card-btn" onClick={handleCopyEmail}>
              <span aria-live="polite">{copied ? '✓ Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* LinkedIn */}
          <div className="glass-card contact__card contact__card--featured reveal">
            <div className="contact__card-icon" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></div>
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
            <div className="contact__card-icon" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg></div>
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
