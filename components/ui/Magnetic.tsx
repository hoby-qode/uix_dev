'use client'
import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import gsap from 'gsap'
const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      const firstChild = ref.current.children[0] as HTMLElement
      const el = firstChild ?? ref.current
      const xTo = gsap.quickTo(el, 'x', {
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      })
      const yTo = gsap.quickTo(el, 'y', {
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      })
      const handleMouseMove = (e: any) => {
        const { clientX, clientY } = e
        const { width, height, left, top } = el.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        xTo(x)
        yTo(y)
      }
      const handleMouseLeave = () => {
        xTo(0)
        yTo(0)
      }
      el.addEventListener('mousemove', handleMouseMove)
      el.addEventListener('mouseleave', handleMouseLeave)
    }
  })

  return (
    <>
      {React.cloneElement(
        <div ref={ref} className="position-relative">
          {children}
        </div>,
      )}
    </>
  )
}
export default Magnetic
