import { useEffect, useRef } from 'react'
import './About.scss'

const HIGHLIGHTS = [
  { icon: '🎨', label: 'UX Design Lead', desc: '10+ yrs leading design systems & research' },
  { icon: '🗺️', label: 'Product Strategy', desc: 'Roadmapping, OKRs & stakeholder alignment' },
  { icon: '🚀', label: 'Agile Delivery', desc: 'Scrum/SAFe certified project delivery' },
  { icon: '💡', label: 'Design Thinking', desc: 'Human-centered problem solving at scale' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">Designing with <span>Purpose</span></h2>
        </div>

        <div className="about__layout">
          {/* Avatar / visual side */}
          <div className="about__visual reveal">
            <div className="about__avatar-wrap">
              <div className="about__avatar">
                <div className="about__avatar-initials">JJ</div>
                <div className="about__avatar-ring" />
                <div className="about__avatar-ring about__avatar-ring--2" />
              </div>
              {/* Years badge */}
              <div className="about__years-badge">
                <span className="about__years-num">15</span>
                <span className="about__years-label">Years of<br/>Expertise</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="about__text">
            <p className="about__lead reveal">
              I'm a&nbsp;<strong>UX Designer turned Product Manager</strong>, with over 15 years
              of experience crafting digital products that people love to use.
            </p>
            <p className="about__body reveal">
              My journey started in design — sketching wireframes, running user research, and
              building design systems that scaled across enterprise products. Over the years,
              I evolved into product leadership, taking end-to-end ownership of product
              strategy, cross-functional teams, and go-to-market execution.
            </p>
            <p className="about__body reveal">
              Today, as a <strong>Project Manager / Product Lead at Wipro</strong>, I bridge the
              gap between design intuition and business outcomes — ensuring every product
              decision is grounded in both user empathy and measurable impact.
            </p>

            <div className="divider reveal" />

            <div className="about__tags reveal">
              {['User Research', 'Design Systems', 'Figma', 'Agile / SAFe', 'Roadmapping',
                'Stakeholder Management', 'A/B Testing', 'Design Thinking'].map(tag => (
                <span key={tag} className="about__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="about__highlights">
          {HIGHLIGHTS.map((item, i) => (
            <div key={item.label} className={`glass-card about__highlight reveal`} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="about__highlight-icon">{item.icon}</span>
              <h4 className="about__highlight-label">{item.label}</h4>
              <p className="about__highlight-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
