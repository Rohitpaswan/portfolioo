import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './Preloader.css'

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null)
  const counterRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 1
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        
        // Animate out
        const tl = gsap.timeline({
          onComplete: () => onComplete()
        })
        
        tl.to('.preloader-text', {
          y: -50,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        })
        .to(preloaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          delay: 0.2
        })
      }
      setCount(current)
    }, 60)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader-content">
        <div className="preloader-name preloader-text">RP</div>
        <div ref={counterRef} className="preloader-counter preloader-text">
          {String(count).padStart(3, '0')}
        </div>
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" style={{ width: `${count}%` }} />
      </div>
    </div>
  )
}

export default Preloader
