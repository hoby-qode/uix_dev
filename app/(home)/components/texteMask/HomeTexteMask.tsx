'use client'
import styles from './styles.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import useMousePosition from '@/src/hooks/useMousePosition'
import { FiArrowUpRight } from 'react-icons/fi'
const HomeTexteMask = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  const size = isHovered ? 400 : 40

  return (
    <>
      <div className={styles.main}>
        <div className={`${styles.content} position-relative`}>
          <motion.div
            className={styles.mask}
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
          >
            <div className="container">
              <div
                onMouseEnter={() => {
                  setIsHovered(true)
                }}
                onMouseLeave={() => {
                  setIsHovered(false)
                }}
              >
                <div className={styles.intro}>
                  <span>Avant tout,</span>
                  <h2 className="mt-0">Qui-suis je ?</h2>
                </div>
                {`Moi c'est Rakotonialy Hobitiana Marcel, qu'on surnom Marcel. Je suis un père marié et je fais de l'ui/ux design et aussi du développement web.`}
                <Link href="/apropos" className="btnWhite" passHref>
                  {`+ d'infos`} <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </motion.div>

          <div className={styles.body}>
            <div className="container">
              <div>
                <div className={styles.intro}>
                  <span>Avant tout,</span>
                  <h2 className="mt-0">Qui-suis je ?</h2>
                </div>
                {`Je suis un concepteur de produits aux`}
                <span>compétences sélectives</span>
                {`, axé sur la production d'une expérience numérique de haute qualité et percutante. `}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomeTexteMask
