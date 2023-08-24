import styles from './styles.module.css'
import { useEffect } from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'

interface Props {
  cible: Object | null
  size: { w: number | null; h: number | null }
  active: boolean
  color: string | null
}
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
const Cursor: React.FC<Props> = ({ cible, size, active, color }) => {
  const cursor = useRef(null)
  useEffect(() => {
    let xMoveCursor = gsap.quickTo(cursor.current, 'left', {
      duration: 0.8,
    })
    let yMoveCursor = gsap.quickTo(cursor.current, 'top', {
      duration: 0.8,
    })
    if (size.w || size.h) {
      gsap.set(cursor!.current, { width: size.w, height: size.h })
    }
    if (color) {
      gsap.set(cursor!.current, { backgroundColor: color })
    }
    const handleMouseMouve = (e: any) => {
      const { pageX, pageY } = e
      xMoveCursor(pageX)
      yMoveCursor(pageY)
    }
    cible!.current.addEventListener('mousemove', handleMouseMouve)
    return () => {
      if (cible) {
        cible!.current.removeEventListener('mousemove', handleMouseMouve)
      }
    }
  })

  return (
    <motion.div
      className={styles.cursor}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? 'enter' : 'closed'}
      ref={cursor}
    ></motion.div>
  )
}

export default Cursor
