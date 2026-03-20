import { useEffect, useRef, useState } from 'react'
import './Contact.scss'

export default function Contact() {
  const sectionRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jasmeen.jawa@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
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
            <p className="contact__card-value">jasmeen.jawa@gmail.com</p>
            <button className="btn btn-outline contact__card-btn" onClick={handleCopyEmail}>
              {copied ? '✓ Copied!' : 'Copy Email'}
            </button>
          </div>

          {/* LinkedIn */}
          <div className="glass-card contact__card contact__card--featured reveal">
            <div className="contact__card-icon">💼</div>
            <h4 className="contact__card-label">LinkedIn</h4>
            <p className="contact__card-value">Connect with me</p>
            <a
              href="https://linkedin.com/in/jasmeenjawa"
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
              href="/assets/Jasmeen-Resume-CeZcJ6EY.pdf"
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
            <strong>Open to new opportunities</strong> — Product Management, UX Leadership,
            and Design Strategy roles globally.
          </p>
        </div>
      </div>
    </section>
  )
}
