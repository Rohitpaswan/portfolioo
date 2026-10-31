import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Mandate Management & Service Monitoring',
    subtitle: 'HSBC — Enterprise Platform',
    description: 'Contributed to a microservices-based mandate platform supporting create, update, pause, and delete operations. Onboarded Java microservices to AppDynamics (APM) for real-time monitoring. Improved API performance and resolved 10+ production issues.',
    tech: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'AppDynamics', 'JUnit'],
    type: 'Enterprise',
    link: null,
    github: null,
    color: '#c8ff00',
    number: '01',
  },
  {
    id: 2,
    title: 'Slique — Salon Booking Platform',
    subtitle: 'Personal Microservices Project',
    description: 'Built a distributed system with 7 microservices using Eureka discovery, Spring Cloud API Gateway, and OpenFeign. Integrated Keycloak (OAuth2) with JWT, RBAC, and Razorpay payments with webhook verification and event deduplication.',
    tech: ['Spring Cloud', 'Eureka', 'API Gateway', 'Keycloak', 'Razorpay', 'Resilience4j', 'Docker'],
    type: 'Full Stack',
    link: null,
    github: '#',
    color: '#00d4ff',
    number: '02',
  },
  {
    id: 3,
    title: 'BankGuard — Fraud Detection System',
    subtitle: 'Machine Learning + Backend',
    description: 'Developed an intelligent fraud detection system for banking transactions. Leverages machine learning algorithms to identify suspicious patterns in real-time, providing a secure layer for financial operations.',
    tech: ['Python', 'Machine Learning', 'Java', 'Spring Boot', 'REST APIs'],
    type: 'ML / Backend',
    link: null,
    github: 'https://github.com/Rohitpaswan/bankguard-fraud-detection',
    color: '#ff6b6b',
    number: '03',
  },
  {
    id: 4,
    title: 'RAG-Based AI Chatbot',
    subtitle: 'Generative AI Project',
    description: 'Built a document Q&A chatbot using RAG architecture with vector embeddings for semantic retrieval. Integrated Gemini API with prompt engineering for domain-specific accuracy and contextual responses.',
    tech: ['Python', 'LangChain', 'Gemini API', 'Vector Embeddings', 'RAG'],
    type: 'GenAI',
    link: null,
    github: '#',
    color: '#a78bfa',
    number: '04',
  },
]

const Projects = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.proj-label',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )

      gsap.fromTo('.proj-heading',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )

      document.querySelectorAll('.project-card').forEach((card, i) => {
        gsap.fromTo(card,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="projects" id="projects">
      <div className="container">
        <span className="section-label proj-label">Projects</span>
        <h2 className="section-title proj-heading">
          Selected <span className="text-accent">work</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card hover-target" style={{ '--project-color': project.color }}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-bottom">
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View source code">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View live">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
