'use client'
import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove, scroll', updateMousePosition)

    return () =>
      window.removeEventListener('mousemove,scroll', updateMousePosition)
  }, [])

  return mousePosition
}

export default useMousePosition
