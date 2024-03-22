"use client"
import React, { useRef, useState } from 'react'
import styles from './Featured3D.module.css'
import Image from 'next/image'
import { inView, motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Featured3D = ({image, video}:{image: string | null;video: string | null}) => {
    const ref = useRef(null)
    const [isInView, setIsInView] = useState(false)
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (latest) => {
        if(ref?.current) {
            let el = ref?.current?.getBoundingClientRect()
            if (el.top < 150) {
                setIsInView(true)
            }     
        }  
    })
    
    return (
        <div className={styles.featured} ref={ref}>
            <motion.div className={`${styles.featured3D} ${isInView ? styles.visible : ''}`}>
                { video 
                    ? <iframe style={{objectFit: 'cover', opacity: isInView ? 1 : 0}} width="1270" height="714" src={`${video}${isInView ? '?autoplay=1' : ''}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    : image && <Image src={image} alt='featured' fill style={{objectFit: 'cover', opacity: isInView ? 1 : 0}} />
                }
            </motion.div>
            <div className={`${styles.featuredbg}`} style={{opacity: isInView ? 1 : 0}}></div>
        </div>
    )
}

export default Featured3D