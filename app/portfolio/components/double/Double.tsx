'use client'
import styles from './styles.module.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Double({ projects, reversed }) {
  const firstImage = useRef(null)
  const secondImage = useRef(null)
  let requestAnimationFrameId = null
  let xPercent = reversed ? 100 : 0
  let currentXPercent = reversed ? 100 : 0
  const speed = 0.15

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.matchMedia('screen and (max-width:768px)').matches)
    }
  }, [isMobile])
  const manageMouseMove = (e: EventSourceInit) => {
    if (isMobile) {
      return false
    }
    const { clientX } = e
    xPercent = (clientX / window.innerWidth) * 100

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate)
    }
  }

  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent
    currentXPercent = currentXPercent + xPercentDelta * speed

    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33
    const secondImagePercent = 33.33 + currentXPercent * 0.33
    firstImage.current.style.width = `${firstImagePercent}%`
    secondImage.current.style.width = `${secondImagePercent}%`

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null
    } else {
      window.requestAnimationFrame(animate)
    }
  }

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e)
      }}
      className={styles.double}
    >
      <div ref={firstImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Image src={`${projects[0].picture}`} fill={true} alt={'image'} />
        </div>
        <div className={styles.body}>
          <h3>{projects[0].title}</h3>
          <p>{projects[0].desc}</p>
        </div>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Image src={`${projects[1].picture}`} fill={true} alt={'image'} />
        </div>
      </div>
    </div>
  )
}
