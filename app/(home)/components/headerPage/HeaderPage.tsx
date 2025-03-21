import React from 'react'
import styles from './HeaderPage.module.css'
import Link from 'next/link'
import { TbDownload } from 'react-icons/tb'
import Image from 'next/image'
import picture from '@/public/images/headerpage.png'
import Magnetic from '@/components/ui/Magnetic'
import LinkContactMe from './LinkContactMe'

const HeaderPage = () => {
  
  return (
    <div className={styles.headerpage}>
      <div className={` container`}>
        <div className={`row align-items-center`}>
          <div className={`${styles.headerPage_left} col-lg-5`}>
            <h1 className={styles.headerPage_title}>
              <span className={styles.headerPage__titleTop}>
                Salut, moi c&apos;est
              </span>
              <span className={styles.headerPage__title}>H. Marcel</span>
              <span className={styles.headerPage__titleBottom}>
                UI/UX & Dev
              </span>
            </h1>
            <h2 className={styles.headerPage_text}>
            Avec 4 ans d&apos;expérience en développement web, j&apos;ai acquis une solide expertise en <strong>WordPress, React.js et Next.js</strong>, me permettant de créer des interfaces intuitives et performantes.
            </h2>
            <div className={styles.headerPage_buttons}>
              <LinkContactMe />
              
              <Link
                href="/RAKOTONIALY-H.Marcel-CV.pdf"
                target="_blank"
                download={true}
                className={styles.headerPage__download}
              >
                Mon CV
                <TbDownload />
              </Link>
            </div>
            <div className='flex gap-4 ' style={{marginTop: "35px", justifyContent: "space-between", flexWrap: "wrap"}}>
              <div>
                <Image src="/images/header/Typography Design 3D Model (HD).png" alt="Typography Design" width={130} height={100} style={{objectFit: "contain"}} />
              </div>
              <div>
                <Image src="/images/header/Web Ads (HD).png" alt="Web Ads" width={130} height={100} style={{objectFit: "contain"}} />
              </div>
              <div>
                <Image src="/images/header/Web Design (HD).png" alt="Web Design" width={130} height={100} style={{objectFit: "contain"}} />
              </div>
            </div>
          </div>
          <div className={`${styles.headerPage_right} col-lg-7`}>
            <div className={styles.headerPage__picture}>
              <Magnetic>
                <Image src={picture} alt="H. Marcel" width={360} priority />
              </Magnetic>
              <div className={styles.headerPage__pictureBg}></div>
            </div>
            <div className={styles.headerPage__infos}>
              <div className={styles.headerPage__infos_item}>
                <div className={styles.headerPage__value}>4ans</div>
                <div className={styles.headerPage__label}>
                  D&apos;expériences
                </div>
              </div>
              <div className={styles.headerPage__infos_item}>
                <div className={styles.headerPage__value}>+ 30</div>
                <div className={styles.headerPage__label}>Projets livrés</div>
              </div>
              <div className={styles.headerPage__infos_item}>
                <div className={styles.headerPage__value}>
                  99%
                </div>
                <div className={styles.headerPage__label}>
                  Clients satisfaits
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderPage
