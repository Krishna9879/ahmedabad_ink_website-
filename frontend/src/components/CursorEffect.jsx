import { useEffect, useState } from 'react'

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setHidden(false)
      
      const addEventListeners = () => {
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseenter', onMouseEnter)
        document.addEventListener('mouseleave', onMouseLeave)
        document.addEventListener('mousedown', onMouseDown)
        document.addEventListener('mouseup', onMouseUp)
      }

      const removeEventListeners = () => {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseenter', onMouseEnter)
        document.removeEventListener('mouseleave', onMouseLeave)
        document.removeEventListener('mousedown', onMouseDown)
        document.removeEventListener('mouseup', onMouseUp)
      }

      const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }

      const onMouseEnter = () => {
        setHidden(false)
      }

      const onMouseLeave = () => {
        setHidden(true)
      }

      const onMouseDown = () => {
        setClicked(true)
      }

      const onMouseUp = () => {
        setClicked(false)
      }

      // Add hover effect to all links and buttons
      const handleLinkHoverEvents = () => {
        const links = document.querySelectorAll('a, button, input, textarea, .hover-effect')
        
        links.forEach(link => {
          link.addEventListener('mouseenter', () => setLinkHovered(true))
          link.addEventListener('mouseleave', () => setLinkHovered(false))
        })
      }

      addEventListeners()
      handleLinkHoverEvents()

      return () => {
        removeEventListeners()
      }
    }
  }, [])

  if (hidden) return null

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: clicked ? 'scale(0.5)' : 'scale(1)',
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: `${position.x - 20}px`,
          top: `${position.y - 20}px`,
          transform: linkHovered ? 'scale(1.5)' : 'scale(1)',
          opacity: linkHovered ? 0.5 : 1,
          borderColor: linkHovered ? '#FFFFFF' : '#C41E3A',
        }}
      />
    </>
  )
}

export default CursorEffect