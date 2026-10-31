import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Experience.css'

const Experience = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-label',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )

      gsap.fromTo('.exp-heading',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )

      gsap.fromTo('.exp-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2,
          scrollTrigger: { trigger: '.exp-timeline', start: 'top 80%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="experience" id="experience">
      <div className="container">
        <span className="section-label exp-label">Experience</span>
        <h2 className="section-title exp-heading">
          Where I've <span className="text-accent">worked</span>
        </h2>

        <div className="exp-timeline">
          <div className="exp-card">
            <div className="exp-card-header">
              <div className="exp-company-info">
                <h3 className="exp-company">LTIMindtree</h3>
                <span className="exp-client">Client: HSBC</span>
              </div>
              <div className="exp-meta">
                <span className="exp-role">Software Engineer</span>
                <span className="exp-date">Jun 2024 — Present</span>
                <span className="exp-location">Pune, India</span>
              </div>
            </div>
            
            <div className="exp-card-body">
              <ul className="exp-details">
                <li>
                  <span className="exp-bullet" />
                  Designed and maintained Java Spring Boot microservices and REST APIs for enterprise BFS applications — mandate management and service observability platforms.
                </li>
                <li>
                  <span className="exp-bullet" />
                  Implemented business logic for mandate lifecycle operations (create, update, pause, delete) with a YAML-configured workflow engine orchestrating flows across multiple microservices.
                </li>
                <li>
                  <span className="exp-bullet" />
                  Worked with Spring Data JPA/Hibernate for the persistence layer, including centralized exception handling to return consistent, structured API error responses.
                </li>
                <li>
                  <span className="exp-bullet" />
                  Wrote unit and integration tests with JUnit & Mockito, maintaining 80%+ code coverage.
                </li>
                <li>
                  <span className="exp-bullet" />
                  Configured AppDynamics dashboards, health rules, and alerts; collaborated in Agile/Scrum ceremonies and peer code reviews on GitHub.
                </li>
              </ul>

              <div className="exp-tech-tags">
                {['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'JPA/Hibernate', 'AppDynamics', 'JUnit', 'Mockito', 'Git'].map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
