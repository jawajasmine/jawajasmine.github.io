import { useState, useEffect } from 'react'
import { EMAIL } from '../site'
import './Navbar.scss'

interface NavbarProps {
  activeSection: string
  scrolled: boolean
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection, scrolled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  // Close menu on resize / ESC
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  return (
    <header className={`navbar ${scrolled || menuOpen ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <button className="navbar__logo" onClick={() => scrollTo('home')} aria-label="Jasmeen Jawa — back to top">
          JJ<span className="navbar__logo-dot">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              className={`navbar__link ${activeSection === link.id ? 'is-active' : ''}`}
              aria-current={activeSection === link.id ? 'true' : undefined}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Hire me CTA */}
        <a
          href={`mailto:${EMAIL}`}
          className="btn btn-primary navbar__cta"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(link => (
          <button
            key={link.id}
            className={`navbar__mobile-link ${activeSection === link.id ? 'is-active' : ''}`}
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}
        <a href={`mailto:${EMAIL}`} className="btn btn-primary navbar__mobile-cta">Hire Me</a>
      </nav>
    </header>
  )
}
