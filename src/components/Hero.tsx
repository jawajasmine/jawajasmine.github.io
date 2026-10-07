import { useState, useEffect, useRef } from 'react'
import { RESUME_URL } from '../site'
import './Hero.scss'

const ROLES = [
  'UX Design Leader',
  'Product Designer',
  'Design Systems Builder',
  'User Researcher',
  'Designer Who Builds',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

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
        <p className="hero__role">
          <span className="sr-only">{ROLES.join(', ')}</span>
          <span className="hero__role-text" aria-hidden="true">{displayed}</span>
          <span className="hero__cursor" aria-hidden="true">|</span>
        </p>

        {/* Tag line */}
        <p className="hero__tagline">
          17+ years designing and shipping enterprise, data-heavy and healthcare products.&nbsp;
          <br className="hero__br" />
          Currently leading UX as Team Lead at&nbsp;
          <span className="hero__company">Wipro</span>.
        </p>

        {/* Stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">17<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-num">50<span className="hero__stat-plus">%</span></span>
            <span className="hero__stat-label">MES Adoption Lift</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-num">2</span>
            <span className="hero__stat-label">Design Systems Built</span>
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
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>

        {/* Scroll hint */}
        <button type="button" className="hero__scroll" onClick={() => scrollToSection('about')}>
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </button>
      </div>

      {/* Floating decoration */}
      <div className="hero__floating-card" aria-hidden="true">
        <span className="hero__floating-icon">✦</span>
        <span>Design&nbsp;<span style={{color:'var(--color-primary)'}}>×</span>&nbsp;Code</span>
      </div>
    </section>
  )
}
