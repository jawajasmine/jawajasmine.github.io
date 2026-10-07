import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import './About.scss'

// "Selected Impact" from the 2026 resume
const IMPACT = [
  { value: '50%', label: 'Increase in MES system adoption', context: 'Samsung SDS' },
  { value: '40%', label: 'Design-system efficiency gain', context: 'Relevance Lab' },
  { value: '35%', label: 'Fewer manual tasks', context: 'Samsung SDS' },
  { value: '25%', label: 'Less development rework', context: 'Wipro' },
  { value: '30%', label: 'Operational efficiency boost', context: 'Wipro' },
  { value: '15–20%', label: 'Faster delivery timelines', context: 'Across roles' },
]

const TAGS = [
  'UX Strategy', 'Design Systems', 'User Research', 'Information Architecture',
  'Interaction Design', 'Usability Testing', 'Figma', 'React', 'Vue.js', 'Mentoring',
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useReveal(sectionRef)

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
                <span className="about__years-num">17</span>
                <span className="about__years-label">Years of<br/>Expertise</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="about__text">
            <p className="about__lead reveal">
              I'm a&nbsp;<strong>UX design leader</strong> with 17+ years of designing and shipping
              enterprise, data-heavy and healthcare products for clients including Samsung SDS and
              Aditya Birla Group.
            </p>
            <p className="about__body reveal">
              I lead UX strategy and execution end to end: research, information architecture,
              interaction design, high-fidelity Figma prototyping, usability validation and design QA.
              I've built design systems and standardized design workflows at two organizations, and I
              measure UX by outcomes, like a 50% lift in system adoption on Samsung SDS's MES platform.
            </p>
            <p className="about__body reveal">
              I'm also a <strong>designer who builds</strong>. Nearly five years as a software engineer,
              plus hands-on work in React, Vue.js and Java/Spring Boot, means my designs are shaped by
              what engineering can actually ship. Today I'm a <strong>Team Lead at Wipro</strong>, where
              I mentor designers and work directly with clients and stakeholders.
            </p>

            <div className="divider reveal" />

            <div className="about__tags reveal">
              {TAGS.map(tag => (
                <span key={tag} className="about__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Selected impact */}
        <h3 className="about__impact-title reveal">Selected Impact</h3>
        <div className="about__highlights">
          {IMPACT.map(item => (
            <div key={item.label} className="glass-card about__highlight reveal">
              <span className="about__highlight-value gradient-text">{item.value}</span>
              <h4 className="about__highlight-label">{item.label}</h4>
              <p className="about__highlight-desc">{item.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
