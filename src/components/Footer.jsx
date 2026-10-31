import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Rohit<span className="logo-accent">.</span></span>
            <p className="footer-tagline">Software Engineer & Java Full Stack Developer</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4 className="footer-col-title">Navigate</h4>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button>
              <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>Experience</button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Social</h4>
              <a href="https://github.com/Rohitpaswan" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rohit-p-7b34601ba/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:rohitpaswan2444@gmail.com">Email</a>
            </div>
          </div>
        </div>

        <div className="h-line" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Rohit Paswan. All rights reserved.
          </p>
          <p className="footer-built">
            Built with <span className="text-accent">React</span> + <span className="text-accent">GSAP</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
