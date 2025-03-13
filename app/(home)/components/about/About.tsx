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
  const handleOpenChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();  // Ouvre ou ferme la bulle de chat
    }
  };
  return (
    <div className={styles.about}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <p className={styles.title}>
              En tant que <strong>concepteur web</strong>, je me spécialise dans
              la création d&apos;expériences numériques exceptionnelles et
              percutantes.
            </p>
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
                <SocialLink href="https://www.linkedin.com/in/rakotoanialy-hobitiana-marcel/" icon={<BiLogoLinkedin />} />
                <SocialLink href="https://www.behance.net/houbbyrakoton" icon={<TbBrandBehance />} />
                <SocialLink href="https://dribbble.com/uix-dev" icon={<TbBrandDribbble />} />
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
                <Link href="#contact" onClick={handleOpenChat} className={styles.linkAbout}>
                  <Magnetic>
                    <span style={{ display: 'block' }}>Contact</span>
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
