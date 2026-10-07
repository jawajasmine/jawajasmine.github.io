import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Skills.scss'

// "Core Expertise" from the 2026 resume
const EXPERTISE = [
  {
    icon: '🧭',
    title: 'UX Leadership',
    items: ['UX strategy', 'Design vision for multi-product engagements', 'Design systems & guidelines', 'Standardized design workflows', 'Design-thinking facilitation', 'Mentoring designers', 'Stakeholder & client alignment'],
  },
  {
    icon: '🎨',
    title: 'Design Craft',
    items: ['Information architecture', 'Interaction design', 'User flows', 'Wireframes', 'High-fidelity & interactive prototypes', 'Visual design', 'Responsive design', 'Data-heavy & enterprise UX', 'Design QA'],
  },
  {
    icon: '🔍',
    title: 'Research & Validation',
    items: ['User research', 'Usability testing', 'Heatmap analysis', 'A/B testing', 'Current-state workflow analysis', 'Design validation with stakeholders'],
  },
  {
    icon: '🤝',
    title: 'Product Partnership',
    items: ['Requirement discovery', 'User stories', 'Feature definition', 'Engineering feasibility', 'Agile / Scrum', 'Jira'],
  },
]

const TOOLS = [
  { group: 'Design', items: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Photoshop', 'Illustrator'] },
  { group: 'Engineering', items: ['React', 'Vue.js', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Java', 'Spring Boot', 'REST APIs', 'SQL'] },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useReveal(sectionRef)

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & <span>Tools</span></h2>
        </div>

        <div className="skills__grid">
          {EXPERTISE.map(group => (
            <div key={group.title} className="glass-card skills__panel reveal">
              <div className="skills__panel-header">
                <span className="skills__panel-icon" aria-hidden="true">{group.icon}</span>
                <h3 className="skills__panel-title">{group.title}</h3>
              </div>
              <ul className="skills__chips">
                {group.items.map(item => (
                  <li key={item} className="skills__chip">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="skills__tools reveal">
          <h3 className="skills__tools-title">Tools I Work With</h3>
          <p className="skills__tools-sub">A designer who builds: comfortable in Figma and in the codebase.</p>
          {TOOLS.map(t => (
            <div key={t.group} className="skills__tools-row">
              <span className="skills__tools-group">{t.group}</span>
              <div className="skills__tools-grid">
                {t.items.map(name => (
                  <span key={name} className="skills__tool glass-card">{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
