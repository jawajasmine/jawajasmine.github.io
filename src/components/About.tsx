import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import Skills from './Skills'
import './About.scss'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useReveal(sectionRef)

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">About</span>
          <h2 className="section-title">Research to <span>release</span></h2>
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
              An engineering background means I design with feasibility in mind and work closely
              with developers through handoff and design QA. Today I'm a <strong>Team Lead at
              Wipro</strong>, where I mentor designers and work directly with clients and stakeholders.
            </p>
          </div>
        </div>

        <Skills />
      </div>
    </section>
  )
}
