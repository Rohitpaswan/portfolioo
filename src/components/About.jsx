import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-label', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )
      
      gsap.fromTo('.about-heading',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )

      gsap.fromTo('.about-text p',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.about-text', start: 'top 80%' }
        }
      )

      gsap.fromTo('.about-stat',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.about-stats', start: 'top 85%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '3+', label: 'Projects Delivered' },
    { number: '80%+', label: 'Code Coverage' },
    { number: '10+', label: 'Issues Resolved' },
  ]

  return (
    <section ref={sectionRef} className="about" id="about">
      <div className="container">
        <div className="about-header">
          <span className="section-label about-label">About Me</span>
          <h2 className="section-title about-heading">
            Crafting robust backend <br />
            systems that <span className="text-accent">scale</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Java Full Stack Engineer based in Pune, India, with 2+ years of hands-on experience 
              building enterprise-grade applications in the Banking & Financial Services domain at 
              <strong> LTIMindtree</strong>, working directly with <strong>HSBC</strong>.
            </p>
            <p>
              My expertise lies in designing and maintaining Spring Boot microservices, REST APIs, and 
              distributed systems. I'm proficient with Spring Cloud, Eureka, API Gateway, and have 
              implemented secure authentication systems using Keycloak, OAuth2, and JWT.
            </p>
            <p>
              Beyond backend engineering, I bring hands-on exposure to <strong>Generative AI</strong> — 
              including RAG pipelines, vector embeddings, and LLM integration using Python and LangChain. 
              I believe in writing clean, testable code and following SOLID principles.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, i) => (
              <div key={i} className="about-stat">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
