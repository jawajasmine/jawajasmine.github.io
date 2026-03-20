import { useEffect, useRef } from 'react'
import './Skills.scss'

interface Skill {
  name: string
  level: number
}

interface SkillBarProps {
  skill: Skill
  index: number
}

const UX_SKILLS: Skill[] = [
  { name: 'Figma', level: 95 },
  { name: 'Adobe XD', level: 90 },
  { name: 'User Research', level: 92 },
  { name: 'Design Systems', level: 88 },
  { name: 'Prototyping', level: 90 },
  { name: 'Usability Testing', level: 87 },
  { name: 'Information Architecture', level: 85 },
  { name: 'Interaction Design', level: 90 },
]

const PM_SKILLS: Skill[] = [
  { name: 'Product Strategy', level: 88 },
  { name: 'Agile / SAFe', level: 85 },
  { name: 'Jira / Confluence', level: 90 },
  { name: 'Roadmapping', level: 87 },
  { name: 'Stakeholder Management', level: 92 },
  { name: 'Data Analytics', level: 78 },
  { name: 'OKR Framework', level: 82 },
  { name: 'Go-to-Market', level: 80 },
]

const TOOLS = [
  { name: 'Figma', icon: '🎨' },
  { name: 'Adobe XD', icon: '✏️' },
  { name: 'Miro', icon: '🗺️' },
  { name: 'Jira', icon: '📋' },
  { name: 'Confluence', icon: '📝' },
  { name: 'Notion', icon: '📓' },
  { name: 'Slack', icon: '💬' },
  { name: 'Hotjar', icon: '🔥' },
  { name: 'Mixpanel', icon: '📊' },
  { name: 'Zeplin', icon: '🔷' },
  { name: 'InVision', icon: '🎯' },
  { name: 'Mural', icon: '🖼️' },
]

function SkillBar({ skill, index }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${skill.level}%`
              }
            }, index * 80)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (barRef.current?.parentElement) observer.observe(barRef.current.parentElement)
    return () => observer.disconnect()
  }, [skill.level, index])

  return (
    <div className="skill-item">
      <div className="skill-item__header">
        <span className="skill-item__name">{skill.name}</span>
        <span className="skill-item__level">{skill.level}%</span>
      </div>
      <div className="skill-item__track">
        <div className="skill-item__bar" ref={barRef} />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

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
    elements?.forEach((el: Element) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & <span>Tools</span></h2>
        </div>

        <div className="skills__grid">
          {/* UX Skills */}
          <div className="glass-card skills__panel reveal">
            <div className="skills__panel-header">
              <span className="skills__panel-icon">🎨</span>
              <h3 className="skills__panel-title">UX & Design</h3>
            </div>
            <div className="skills__bars">
              {UX_SKILLS.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* PM Skills */}
          <div className="glass-card skills__panel reveal">
            <div className="skills__panel-header">
              <span className="skills__panel-icon">🚀</span>
              <h3 className="skills__panel-title">Product Management</h3>
            </div>
            <div className="skills__bars">
              {PM_SKILLS.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="skills__tools reveal">
          <h3 className="skills__tools-title">Tools I Work With</h3>
          <div className="skills__tools-grid">
            {TOOLS.map(tool => (
              <div key={tool.name} className="skills__tool glass-card">
                <span className="skills__tool-icon">{tool.icon}</span>
                <span className="skills__tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
