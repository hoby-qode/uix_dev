'use client'
import React, { useEffect, useRef } from 'react'
import styles from './bandeau.module.css'
import { gsap } from 'gsap/dist/gsap'
import { useTheme } from 'next-themes'

const HomeBandeau = () => {
  const bandeau1 = useRef(null)
  const bandeau1_1 = useRef(null)
  const bandeau2 = useRef(null)
  const bandeau2_1 = useRef(null)
  const bandeau3 = useRef(null)
  const bandeau3_1 = useRef(null)
  let xPercent = 0
  let direction = -1

  const theme = useTheme()

  useEffect(() => {
    requestAnimationFrame(animation)
  }, [])
  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0
    }
    if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(bandeau1.current, { xPercent: xPercent })
    gsap.set(bandeau1_1.current, { xPercent: xPercent })
    gsap.set(bandeau2.current, { xPercent: xPercent })
    gsap.set(bandeau2_1.current, { xPercent: xPercent })
    gsap.set(bandeau3.current, { xPercent: xPercent })
    gsap.set(bandeau3_1.current, { xPercent: xPercent })
    xPercent += 0.02 * direction
    requestAnimationFrame(animation)
  }
  return (
    <div style={{ marginTop: '-72vh' }} className={styles.bandeauContainer}>
      <div className={`${styles.bandeau1} ${styles.bandeau}`}>
        <span ref={bandeau1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          architecto hic aut maiores
        </span>
        <span ref={bandeau1_1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          architecto hic aut maiores
        </span>
      </div>
      <div className={`${styles.bandeau2} ${styles.bandeau}`}>
        <span ref={bandeau2}>
          Top 3 des mes projets préféres. Top 3 des mes projets préféres, Top 3
          des mes projets préféres. Top 3 des mes projets préféres
        </span>
        <span ref={bandeau2_1}>
          Top 3 des mes projets préféres. Top 3 des mes projets préféres, Top 3
          des mes projets préféres. Top 3 des mes projets préféres
        </span>
      </div>
      <div className={`${styles.bandeau3} ${styles.bandeau}`}>
        <span ref={bandeau3}>
          CMS, WordPress, Emajine, React.js, Next.js, Adobe XD, Figma,
          Photoshop, CMS, WordPress, Emajine, React.js, Next.js, Adobe XD,
          Figma, Photoshop
        </span>
        <span ref={bandeau3_1}>
          CMS, WordPress, Emajine, React.js, Next.js, Adobe XD, Figma,
          Photoshop, CMS, WordPress, Emajine, React.js, Next.js, Adobe XD,
          Figma, Photoshop
        </span>
      </div>
    </div>
  )
}

export default HomeBandeau
