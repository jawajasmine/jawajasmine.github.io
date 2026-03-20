import { useEffect, useRef } from 'react'
import './Experience.scss'

const EXPERIENCES = [
  {
    role: 'Project Manager Lead / Product Manager',
    company: 'Wipro',
    period: '2021 – Present',
    location: 'India',
    type: 'Full-time',
    color: '#a78bfa',
    highlights: [
      'Leading cross-functional product teams of 20+ members across design, engineering, and QA',
      'Defining product strategy, OKRs, and roadmaps aligned with business objectives',
      'Driving Agile/SAFe delivery with consistent on-time, within-budget launches',
      'Stakeholder management across CXO levels and client accounts globally',
    ],
  },
  {
    role: 'Senior UX Design Lead',
    company: 'Previous Organization',
    period: '2016 – 2021',
    location: 'India',
    type: 'Full-time',
    color: '#38bdf8',
    highlights: [
      'Led UX/UI for flagship enterprise SaaS products used by 500K+ users',
      'Built and scaled a design system adopted organization-wide across 12 product teams',
      'Conducted extensive user research, usability testing, and A/B experimentation',
      'Mentored and grew a team of 8 UX designers',
    ],
  },
  {
    role: 'UX Designer',
    company: 'Design Studio',
    period: '2012 – 2016',
    location: 'India',
    type: 'Full-time',
    color: '#f472b6',
    highlights: [
      'Designed end-to-end digital experiences for clients in FinTech, HealthTech, and E-Commerce',
      'Ran user research sprints and translated insights into intuitive interaction patterns',
      'Collaborated with engineering teams using Figma, Adobe XD, and InVision',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'Freelance & Early Career',
    period: '2009 – 2012',
    location: 'India',
    type: 'Freelance',
    color: '#fbbf24',
    highlights: [
      'Delivered website and app design projects for startups and SMEs',
      'Hands-on experience across the full design lifecycle from briefs to final handoff',
    ],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)

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

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Work <span>Experience</span></h2>
        </div>

        <div className="exp__timeline">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="exp__item reveal" style={{ '--accent': exp.color }}>
              {/* Timeline dot */}
              <div className="exp__connector">
                <div className="exp__dot" />
                {i < EXPERIENCES.length - 1 && <div className="exp__line" />}
              </div>

              {/* Card */}
              <div className="glass-card exp__card">
                <div className="exp__card-top">
                  <div>
                    <h3 className="exp__role">{exp.role}</h3>
                    <div className="exp__meta">
                      <span className="exp__company">{exp.company}</span>
                      <span className="exp__meta-dot">·</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="exp__right">
                    <span className="exp__period">{exp.period}</span>
                    <span className={`exp__badge exp__badge--${exp.type === 'Full-time' ? 'full' : 'freelance'}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="exp__highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="exp__highlight-item">
                      <span className="exp__bullet" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
