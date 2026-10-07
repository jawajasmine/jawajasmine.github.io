import './Skills.scss'

// "Core Expertise" from the 2026 resume
const EXPERTISE = [
  {
    title: 'UX Leadership',
    items: ['UX strategy', 'Design vision for multi-product engagements', 'Design systems & guidelines', 'Standardized design workflows', 'Design-thinking facilitation', 'Mentoring designers', 'Stakeholder & client alignment'],
  },
  {
    title: 'Design Craft',
    items: ['Information architecture', 'Interaction design', 'User flows', 'Wireframes', 'High-fidelity & interactive prototypes', 'Visual design', 'Responsive design', 'Data-heavy & enterprise UX', 'Design QA'],
  },
  {
    title: 'Research & Validation',
    items: ['User research', 'Usability testing', 'Heatmap analysis', 'A/B testing', 'Current-state workflow analysis', 'Design validation with stakeholders'],
  },
  {
    title: 'Product Partnership',
    items: ['Requirement discovery', 'User stories', 'Feature definition', 'Engineering feasibility', 'Agile / Scrum', 'Jira'],
  },
]

const TOOLS = [
  { group: 'Design', items: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Photoshop', 'Illustrator'] },
  { group: 'Engineering', items: ['React', 'Vue.js', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Java', 'Spring Boot', 'REST APIs', 'SQL'] },
]

// Rendered inside the About section as a compact reference block
export default function Skills() {
  return (
    <div className="glass-card skills reveal">
      <h3 className="skills__title">Expertise & tools</h3>
      <dl className="skills__list">
        {EXPERTISE.map(group => (
          <div key={group.title} className="skills__row">
            <dt className="skills__group">{group.title}</dt>
            <dd className="skills__items">{group.items.join(' · ')}</dd>
          </div>
        ))}
        {TOOLS.map(t => (
          <div key={t.group} className="skills__row">
            <dt className="skills__group">{t.group} tools</dt>
            <dd className="skills__items skills__items--tools">{t.items.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
