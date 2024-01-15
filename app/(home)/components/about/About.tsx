'use client'
import React, { useEffect, useRef } from 'react'
import styles from './About.module.css'
import Magnetic from '@/components/ui/Magnetic'
import Link from 'next/link'
import SocialLink from '@/components/socialLink'
import { TbBrandBehance, TbBrandDribbble } from 'react-icons/tb'
import { BiLogoLinkedin } from 'react-icons/bi'

const About = () => {
  const paragraphRight = useRef(null)
  const linkButton = useRef(null)
  const textContainer = useRef(null)
  useEffect(() => {
    if (window.innerWidth < 768) {
      // if (paragraphRight.current) {
      //   paragraphRight.current.innerHTML(textContainer.current)
      // }
    }
  }, [])
  return (
    <div className={styles.about}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2 className={styles.title}>
              En tant que <strong>concepteur web</strong>, je me spécialise dans
              la création d&apos;expériences numériques exceptionnelles et
              percutantes.
            </h2>
            <div className={styles.withMarginLeft} ref={textContainer}>
              <p className={styles.subtitle}>
                Je m&apos;appelle Rakotonialy Hobitiana Marcel, mais vous pouvez
                m&apos;appeler <strong>Marcel</strong>. <br />
                Explorez avec moi l&apos;univers où la précision rencontre la
                créativité, et découvrez comment je peux donner vie à vos idées
                avec finesse et expertise.
              </p>
              <hr />
              <div className="d-flex gap-10">
                <SocialLink href="/linkedin" icon={<BiLogoLinkedin />} />
                <SocialLink href="/behance" icon={<TbBrandBehance />} />
                <SocialLink href="/linkedin" icon={<TbBrandDribbble />} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 offset-md-1">
            <p className={styles.paragraphRight} ref={paragraphRight}>
              Je comprends l&apos;importance d&apos;un site web au pixel près,
              je suis fier de produire des sites Web de haute qualité et je suis
              à l&apos;aise de travailler seul ou en équipe.
            </p>
            <div ref={linkButton}>
              <Magnetic>
                <Link href="/apropos" className={styles.linkAbout}>
                  <Magnetic>
                    <span style={{ display: 'block' }}>A propos</span>
                  </Magnetic>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
