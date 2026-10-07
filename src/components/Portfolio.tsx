import { useState, useEffect, useRef, type CSSProperties } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Portfolio.scss'

interface Project {
  id: number
  title: string
  category: string
  desc: string
  image: string
  tags: string[]
  color: string
}

// Descriptions match what each screenshot shows — don't add metrics that aren't on the resume.
const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Design System',
    category: 'Design System',
    desc: 'A UI design system: reusable component library, design tokens, typography, colour schemes and interaction patterns, documented to keep products consistent.',
    image: '/assets/port1-B7SeF-KR.png',
    tags: ['Figma', 'Components', 'Tokens'],
    color: '#7c3aed',
  },
  {
    id: 2,
    title: 'Style Guide & Colour System',
    category: 'Design System',
    desc: 'Brand style guide covering the colour palette, type scale, paragraph pairings and input states for a consistent product UI.',
    image: '/assets/port2-BlB0tpzw.jpg',
    tags: ['Style Guide', 'Typography', 'Colour'],
    color: '#a78bfa',
  },
  {
    id: 3,
    title: 'Garttmeyer Automotive',
    category: 'Web Design',
    desc: 'Website for a European auto repair specialist: service highlights, online booking and a clear call-to-action layout.',
    image: '/assets/port3-bGZJJ3Ll.jpg',
    tags: ['Small Business', 'Booking', 'Responsive'],
    color: '#0ea5e9',
  },
  {
    id: 4,
    title: "F&O's Pizza",
    category: 'Web Design',
    desc: 'Restaurant website with online ordering, takeout and delivery entry points, gift cards and an events grid.',
    image: '/assets/port4-CQxp3J14.jpg',
    tags: ['Restaurant', 'Ordering', 'Visual Design'],
    color: '#f87171',
  },
  {
    id: 5,
    title: 'The Analyst Agency',
    category: 'Web Design',
    desc: 'Marketing site for a market research and business analysis consultancy, built around data-driven visuals.',
    image: '/assets/port5-DQZSMrLB.jpg',
    tags: ['Consulting', 'B2B', 'Landing Page'],
    color: '#fbbf24',
  },
  {
    id: 6,
    title: 'Michelle Esthetics Medspa',
    category: 'Web Design',
    desc: 'Medspa website with service booking, pricing, memberships and multi-location navigation.',
    image: '/assets/port6-CyvNn-cF.jpg',
    tags: ['Healthcare', 'Booking', 'Branding'],
    color: '#f472b6',
  },
]

const FILTER_CATS = ['All', ...new Set(PROJECTS.map(p => p.category))]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState<Project | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  // Re-run on filter change: cards remounted by the filter need observing again.
  useReveal(sectionRef, [activeFilter])

  // Lightbox: close on ESC, lock page scroll, move focus into the dialog
  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  return (
    <section id="portfolio" className="section portfolio" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Selected <span>Projects</span></h2>
        </div>

        {/* Filters */}
        <div className="portfolio__filters reveal">
          {FILTER_CATS.map(cat => (
            <button
              key={cat}
              className={`portfolio__filter ${activeFilter === cat ? 'is-active' : ''}`}
              aria-pressed={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio__grid">
          {filtered.map(project => (
            <article
              key={project.id}
              className="portfolio__card glass-card reveal"
              style={{ '--accent': project.color } as CSSProperties}
            >
              <button
                type="button"
                className="portfolio__img-wrap"
                onClick={() => setLightbox(project)}
                aria-label={`View larger image of ${project.title}`}
              >
                <img
                  src={project.image}
                  alt=""
                  className="portfolio__img"
                  loading="lazy"
                />
                <div className="portfolio__img-overlay" aria-hidden="true">
                  <span className="portfolio__zoom-icon">⊕</span>
                </div>
              </button>

              <div className="portfolio__body">
                <span className="portfolio__category">{project.category}</span>
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__desc">{project.desc}</p>
                <div className="portfolio__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="portfolio__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div
            className="lightbox__inner"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
            onClick={e => e.stopPropagation()}
          >
            <button ref={closeRef} className="lightbox__close" aria-label="Close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.image} alt={lightbox.title} className="lightbox__img" />
            <div className="lightbox__info">
              <span className="portfolio__category">{lightbox.category}</span>
              <h3>{lightbox.title}</h3>
              <p>{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
