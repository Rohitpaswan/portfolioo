import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Skills.css'

const skillCategories = [
  {
    title: 'Languages & Web',
    icon: '⟨/⟩',
    skills: ['Java 8+', 'Python', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3', 'React'],
  },
  {
    title: 'Backend & Microservices',
    icon: '⚡',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Cloud', 'Spring Security', 'REST APIs', 'Microservices', 'Eureka', 'API Gateway', 'OpenFeign', 'Spring Data JPA', 'Hibernate'],
  },
  {
    title: 'Security & Databases',
    icon: '🔒',
    skills: ['Keycloak', 'OAuth2', 'JWT', 'Refresh Tokens', 'RBAC', 'MySQL'],
  },
  {
    title: 'DevOps & Testing',
    icon: '🚀',
    skills: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Maven', 'Postman', 'CI/CD', 'AWS', 'Kafka', 'AppDynamics', 'JUnit', 'Mockito'],
  },
  {
    title: 'AI / GenAI',
    icon: '🤖',
    skills: ['RAG Architecture', 'Vector Embeddings', 'Prompt Engineering', 'Gemini API', 'LangChain'],
  },
]

const Skills = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-label',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )

      gsap.fromTo('.skills-heading',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )

      document.querySelectorAll('.skill-category').forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="skills" id="skills">
      <div className="container">
        <span className="section-label skills-label">Skills</span>
        <h2 className="section-title skills-heading">
          My <span className="text-accent">toolkit</span>
        </h2>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-category">
              <div className="skill-category-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="skills-marquee">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="marquee-content">
                {['Spring Boot', '•', 'Microservices', '•', 'Java', '•', 'Docker', '•', 'REST APIs', '•', 'Keycloak', '•', 'React', '•', 'GenAI', '•', 'Python', '•'].map((item, j) => (
                  <span key={j} className={item === '•' ? 'marquee-dot' : 'marquee-item'}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
