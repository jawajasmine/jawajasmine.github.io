import { useRef, type CSSProperties } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Experience.scss'

interface Project {
  name: string
  period: string
  about?: string
  highlights: string[]
}

interface Role {
  role: string
  company: string
  period: string
  location: string
  color: string
  summary?: string
  highlights: string[]
  projects?: Project[]
}

// Source: Jasmeen_Jawa_Resume_UX_Leadership_2026
const EXPERIENCES: Role[] = [
  {
    role: 'Team Lead',
    company: 'Wipro',
    period: 'Mar 2019 – Present',
    location: 'Bengaluru (Hybrid)',
    color: '#a78bfa',
    summary: 'Lead UX strategy and execution for top-tier clients including Aditya Birla Group and Samsung SDS, from discovery and research through design, engineering handoff and release.',
    highlights: [
      'Built a scalable design system that significantly reduced UI inconsistencies and improved collaboration between design and engineering',
      'Cut development rework by 25% by validating Figma wireframes and prototypes with stakeholders before build',
      'Redesigned user workflows for a 30% boost in operational efficiency; UX enhancements contributed to a 20% increase in customer adoption',
    ],
    projects: [
      {
        name: 'Climate Data Utility — Global Climate Data Platform',
        period: '2025 – Present',
        about: 'Open, free global repository of company-level climate data: GHG emissions, reduction targets, assurance and verification.',
        highlights: [
          'Designing the Data Explorer (search, filtering, cross-company comparison) and Company Profile experiences, turning complex emissions datasets into a clear information hierarchy for a global public audience',
          'Translating stakeholder requirements into user flows, wireframes and high-fidelity Figma designs; auditing existing product behaviour to find UX gaps',
          'Partnering with engineering on feasibility and reviewing built screens against design before sign-off',
        ],
      },
      {
        name: 'Aditya Birla Group — Tinting Cloud Service',
        period: 'Jan 2024 – Dec 2024',
        highlights: [
          'Designed wireframes and high-fidelity Figma prototypes from client requirements and took features from concept to deployment',
        ],
      },
      {
        name: 'Samsung SDS — Nexplant MES Cloud',
        period: 'Mar 2022 – Dec 2023',
        about: 'Cloud Manufacturing Execution System controlling factory production from order to shipment.',
        highlights: [
          'Drove a full UX/UI transformation of the MES web platform, simplifying complex manufacturing workflows to reduce manual tasks by 35% and cut project timelines by 20%',
          'Used usability testing and heatmap analysis to iterate on the design, driving a 50% increase in system adoption',
          "Studied the client's existing system to ground the redesign in real workflows",
        ],
      },
      {
        name: 'Samsung — Security',
        period: 'Mar 2021 – Feb 2022',
        highlights: [
          'Led design and implementation using user research and usability testing; interactive Figma prototypes and Photoshop mockups sharpened stakeholder feedback before build',
        ],
      },
    ],
  },
  {
    role: 'Lead UI/UX Designer',
    company: 'Relevance Lab',
    period: 'Dec 2014 – Mar 2019',
    location: 'Bengaluru',
    color: '#38bdf8',
    highlights: [
      'Led UI/UX and end-to-end design strategy across multiple web and enterprise applications',
      'Established design systems, guidelines and standardized workflows, improving design-system efficiency by 40% and reducing delivery timelines by 15%',
      'Mentored junior designers, raising team productivity and cross-functional coordination',
      'Earned client appreciation and performance-based incentives for aligning user needs with business goals',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Baya Tree',
    period: 'Apr 2010 – Dec 2014',
    location: 'India',
    color: '#f472b6',
    highlights: [
      'Spearheaded UI/UX for healthcare and enterprise platforms, leading requirement gathering and analysis with stakeholders',
      'Introduced responsive design frameworks that improved usability across devices and increased user satisfaction',
      'Built interactive prototypes that shortened stakeholder feedback loops, and worked with developers to ensure high design fidelity',
    ],
  },
  {
    role: 'Web Designer',
    company: 'RedAlkemi',
    period: 'Dec 2008 – Feb 2010',
    location: 'Chandigarh',
    color: '#fbbf24',
    highlights: [
      'Created web designs, mockups and UI assets for client projects; built strong foundations in visual design, HTML/CSS, performance, SEO and cross-browser testing',
    ],
  },
]

const Highlights = ({ items }: { items: string[] }) => (
  <ul className="exp__highlights">
    {items.map(h => (
      <li key={h} className="exp__highlight-item">
        <span className="exp__bullet" />
        {h}
      </li>
    ))}
  </ul>
)

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useReveal(sectionRef)

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Work <span>Experience</span></h2>
        </div>

        <div className="exp__timeline">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.company} className="exp__item reveal" style={{ '--accent': exp.color } as CSSProperties}>
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
                  </div>
                </div>

                {exp.summary && <p className="exp__summary">{exp.summary}</p>}
                <Highlights items={exp.highlights} />

                {exp.projects && (
                  <div className="exp__projects">
                    <span className="exp__projects-label">Client engagements</span>
                    {exp.projects.map(proj => (
                      <div key={proj.name} className="exp__project">
                        <div className="exp__project-top">
                          <h4 className="exp__project-name">{proj.name}</h4>
                          <span className="exp__project-period">{proj.period}</span>
                        </div>
                        {proj.about && <p className="exp__project-about">{proj.about}</p>}
                        <Highlights items={proj.highlights} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
