"use client"
import React, { useRef, useState } from 'react'
import styles from '../Project.module.css'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Featured3D = () => {
    const ref = useRef(null)
    const [isInView, setIsInView] = useState(false)
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
        let el = ref?.current?.getBoundingClientRect()
        if (el.top < 150) {
            setIsInView(true)
        }       
    })
    return (
        <div className={styles.featured} ref={ref}>
            <motion.div className={`${styles.featured3D} ${isInView ? styles.visible : ''}`}>
                {/* <Image src="/images/uix_design_header.jpg" alt='featured' fill style={{objectFit: 'cover', opacity: isInView ? 1 : 0}}/> */}
                <video controls controlsList="nodownload">
                    <source src="/videos/Showreel 2022 — Repin Agency.mp4" type="video/mp4" />
                </video>
            </motion.div>
        </div>
    )
}

export default Featured3D