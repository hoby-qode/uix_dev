import styles from './styles.module.css'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '@/src/hook/useMousePosition';
import Link from 'next/link'
import { FiArrowUpRight } from "react-icons/fi";
const TexteMask = () => {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
      <>
        <div className={styles.main}>
            <div className={styles.intro}>
                <p>Avant tout,</p>
                <h2>Qui-suis je ?</h2>
            </div>
            <div className={`${styles.content} position-relative`}>
                <motion.div 
                    className={styles.mask}
                    animate={{
                    WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
                    WebkitMaskSize: `${size}px`,
                    }}
                    transition={{ type: "tween", ease: "backOut", duration:0.5}}
                >
                <div className="container">
                    <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
                        {`Moi c'est Rakotonialy Hobitiana Marcel, qu'on surnom Marcel. Je suis un père marié et je fais de l'ui/ux design et aussi du développement web.`} <Link href="/apropos" className="btnWhite" passHref>{`+ d'infos`}  <FiArrowUpRight /> </Link>
                    </p>
                </div>
                </motion.div>

                <div className={styles.body}>
                    <div className="container">
                          <p>{`Je suis un concepteur de produits aux`} <span>compétences sélectives</span>{`, axé sur la production d'une expérience numérique de haute qualité et percutante. `}</p>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}
export default TexteMask