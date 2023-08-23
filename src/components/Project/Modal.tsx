import styles from './style.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap/dist/gsap'
import { useEffect, useRef, useState } from 'react'
const scaleAnimation = {
  initial: {
    scale: 0,
    x: '-50%',
    y: '-50%',
  },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.4,
      ease: [0.32, 0, 0.67, 0],
    },
  },
}
const Modal = ({ projects, modal }) => {
  const { active, index } = modal
  const modalContainer = useRef(null)
  const cursor = useRef(null)
  const cursorLabel = useRef(null)
  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
    })
    let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
    })

    let xMoveCursor = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
    })
    let yMoveCursor = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
    })

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
    })
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
    })
    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      xMoveContainer(clientX)
      yMoveContainer(clientY)

      xMoveCursor(clientX)
      yMoveCursor(clientY)

      xMoveCursorLabel(clientX)
      yMoveCursorLabel(clientY)
    })
  }, [])
  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        className={styles.modalContainer}
        ref={modalContainer}
      >
        <div style={{ top: index * -100 + '%' }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            return (
              <div className={`${styles.modal} cover `} key={`modal_${index}`}>
                <Image
                  src={project.picture}
                  alt={project.title}
                  width={300}
                  height={0}
                />
              </div>
            )
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      >
        Voir
      </motion.div>
    </>
  )
}

export default Modal
