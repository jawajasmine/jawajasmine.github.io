import { useState, useEffect, useRef } from 'react'
import './Portfolio.scss'

const PROJECTS = [
  {
    id: 1,
    title: 'Enterprise UX Redesign',
    category: 'UX Design',
    desc: 'End-to-end redesign of a complex enterprise dashboard, reducing task completion time by 40%.',
    image: '/assets/port1-B7SeF-KR.png',
    tags: ['Figma', 'Design System', 'Enterprise'],
    color: '#7c3aed',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Product Design',
    desc: 'Intuitive mobile banking experience with accessibility-first design and 4.8★ App Store rating.',
    image: '/assets/port2-BlB0tpzw.jpg',
    tags: ['Mobile', 'FinTech', 'Accessibility'],
    color: '#0ea5e9',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'UX Strategy',
    desc: 'Complete UX overhaul of an e-commerce platform resulting in 28% conversion rate uplift.',
    image: '/assets/port3-bGZJJ3Ll.jpg',
    tags: ['E-Commerce', 'Conversion', 'Research'],
    color: '#f472b6',
  },
  {
    id: 4,
    title: 'SaaS Product Launch',
    category: 'Product Management',
    desc: 'Led cross-functional team to ship a B2B SaaS product from inception to market in 6 months.',
    image: '/assets/port4-CQxp3J14.jpg',
    tags: ['SaaS', 'B2B', 'Launch'],
    color: '#fbbf24',
  },
  {
    id: 5,
    title: 'Healthcare Dashboard',
    category: 'UX Design',
    desc: 'Patient-centric healthcare management platform with real-time data visualization.',
    image: '/assets/port5-DQZSMrLB.jpg',
    tags: ['HealthTech', 'Dashboard', 'Data Viz'],
    color: '#34d399',
  },
  {
    id: 6,
    title: 'Design System at Scale',
    category: 'Design System',
    desc: 'Built a unified design system adopted by 12 product teams across the organization.',
    image: '/assets/port6-CyvNn-cF.jpg',
    tags: ['Design System', 'Figma', 'Governance'],
    color: '#a78bfa',
  },
]

const FILTER_CATS = ['All', 'UX Design', 'Product Design', 'Product Management', 'UX Strategy', 'Design System']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxImg, setLightboxImg] = useState(null)
  const sectionRef = useRef(null)

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

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

  // Close lightbox on ESC
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightboxImg(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

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
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio__grid">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className="portfolio__card glass-card reveal"
              style={{ '--accent': project.color, animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="portfolio__img-wrap"
                onClick={() => setLightboxImg(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio__img"
                  loading="lazy"
                />
                <div className="portfolio__img-overlay">
                  <span className="portfolio__zoom-icon">⊕</span>
                </div>
              </div>

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
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightboxImg(null)}>✕</button>
            <img src={lightboxImg.image} alt={lightboxImg.title} className="lightbox__img" />
            <div className="lightbox__info">
              <span className="portfolio__category">{lightboxImg.category}</span>
              <h3>{lightboxImg.title}</h3>
              <p>{lightboxImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
