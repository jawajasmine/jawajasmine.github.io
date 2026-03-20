import { useState, useEffect, useRef } from 'react'
import './Hero.scss'

const ROLES = [
  'UX Designer',
  'Product Manager',
  'Design Strategist',
  'Project Lead',
  'Experience Architect',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const timeoutRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex]

    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 80)
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayed, deleting, roleIndex])

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 530)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Background grid */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for exciting opportunities
        </div>

        {/* Main heading */}
        <h1 className="hero__title">
          <span className="hero__title-hi">Hi, I'm</span>
          <span className="hero__title-name gradient-text">Jasmeen Jawa</span>
        </h1>

        {/* Role ticker */}
        <div className="hero__role">
          <span className="hero__role-text">{displayed}</span>
          <span className={`hero__cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
        </div>

        {/* Tag line */}
        <p className="hero__tagline">
          15+ years shaping human-centered digital experiences.&nbsp;
          <br className="hero__br" />
          Now leading product strategy at&nbsp;
          <span className="hero__company">Wipro</span>.
        </p>

        {/* Stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">15<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">50<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">3</span>
            <span className="hero__stat-label">Domains Mastered</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero__ctas">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('portfolio')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            View Portfolio
          </button>
          <a
            href="/assets/Jasmeen-Resume-CeZcJ6EY.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>

        {/* Scroll hint */}
        <div className="hero__scroll" onClick={() => scrollToSection('about')}>
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </div>

      {/* Floating decoration */}
      <div className="hero__floating-card">
        <span className="hero__floating-icon">✦</span>
        <span>Design&nbsp;<span style={{color:'var(--color-primary)'}}>×</span>&nbsp;Strategy</span>
      </div>
    </section>
  )
}
