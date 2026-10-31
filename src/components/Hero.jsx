import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.2 })

    tl.fromTo('.hero-greeting', 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.hero-name .char',
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.03 },
      '-=0.4'
    )
    .fromTo('.hero-title',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo('.hero-description',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo('.hero-cta',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo('.hero-image-wrapper',
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo('.hero-scroll-indicator',
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )

    // Parallax on scroll
    gsap.to('.hero-image-wrapper', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

  }, [])

  const nameChars = 'Rohit Paswan'.split('').map((char, i) => (
    <span key={i} className="char" style={char === ' ' ? { width: '0.3em' } : {}}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div className="hero-bg-grid" />
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">{nameChars}</h1>
          <p className="hero-title">
            Software Engineer <span className="accent-dot">•</span> Java Full Stack Developer
          </p>
          <p className="hero-description">
            Building enterprise-grade microservices and scalable systems in the Banking & Financial Services domain. 
            Currently crafting solutions at LTIMindtree for HSBC.
          </p>
          <div className="hero-cta">
            <button className="magnetic-btn primary-btn" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="magnetic-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-border" />
            <img src="/rohit.png" alt="Rohit Paswan" className="hero-image" />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-status">
            <span className="status-dot" />
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>
      
      <button className="hero-scroll-indicator" onClick={scrollToAbout}>
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line">
          <div className="scroll-line-fill" />
        </div>
      </button>
    </section>
  )
}

export default Hero
