import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out'
      })
    }

    const addHover = () => cursor.classList.add('hovered')
    const removeHover = () => cursor.classList.remove('hovered')

    window.addEventListener('mousemove', moveCursor)

    const hoverElements = document.querySelectorAll('a, button, .hover-target')
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    // Re-attach on DOM changes
    const observer = new MutationObserver(() => {
      const newHoverElements = document.querySelectorAll('a, button, .hover-target')
      newHoverElements.forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      observer.disconnect()
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor" />
}

export default CustomCursor
