import { RESUME_URL } from '../site'
import './Hero.scss'

const STATS = [
  { num: '17', suffix: '+', label: 'Years in UX' },
  { num: '50', suffix: '%', label: 'Adoption lift, Samsung SDS' },
  { num: '2', suffix: '', label: 'Design systems built' },
]

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      {/* Background grid */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__content">
        <p className="hero__eyebrow">
          <span className="hero__badge-dot" aria-hidden="true" />
          Jasmeen Jawa · UX Design Leader
        </p>

        <h1 className="hero__title">
          I design enterprise products people <span className="gradient-text">actually adopt.</span>
        </h1>

        <p className="hero__tagline">
          17+ years designing data-heavy and healthcare products for clients like Samsung SDS and
          Aditya Birla Group. Team Lead at <span className="hero__company">Wipro</span>, leading UX
          from research to release.
        </p>

        <dl className="hero__stats">
          {STATS.map(s => (
            <div key={s.label} className="hero__stat">
              <dt className="hero__stat-label">{s.label}</dt>
              <dd className="hero__stat-num">
                {s.num}{s.suffix && <span className="hero__stat-plus">{s.suffix}</span>}
              </dd>
            </div>
          ))}
        </dl>

        <div className="hero__ctas">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('portfolio')}
          >
            View my work
          </button>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
