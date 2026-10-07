import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Impact.scss'

// "Selected Impact" from the 2026 resume
const IMPACT = [
  { value: '50%', label: 'Increase in MES system adoption', context: 'Samsung SDS' },
  { value: '40%', label: 'Design-system efficiency gain', context: 'Relevance Lab' },
  { value: '35%', label: 'Fewer manual tasks', context: 'Samsung SDS' },
  { value: '25%', label: 'Less development rework', context: 'Wipro' },
  { value: '30%', label: 'Operational efficiency boost', context: 'Wipro' },
  { value: '15–20%', label: 'Faster delivery timelines', context: 'Across roles' },
]

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null)

  useReveal(sectionRef)

  return (
    <section id="impact" className="section impact" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Outcomes</span>
          <h2 className="section-title">Selected <span>Impact</span></h2>
        </div>

        <div className="impact__grid">
          {IMPACT.map(item => (
            <div key={item.label} className="glass-card impact__card reveal">
              <span className="impact__value">{item.value}</span>
              <h3 className="impact__label">{item.label}</h3>
              <p className="impact__context">{item.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
