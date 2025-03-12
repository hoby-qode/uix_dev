'use client'
import React, { useEffect, useState } from 'react'
import styles from './Offer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { TbArrowUpRight } from 'react-icons/tb'
import { useTheme } from 'next-themes'
import Badge from '@/components/ui/Badge'

const Offers = ({titleIsH1}:{titleIsH1?:number}) => {
  const offers = [
    {
      picture: '/images/services/conception.jpg',
      title: '🎨 Conception de Maquettes & Design UI/UX (Figma → Web)',
      subtitle: 'Je crée des maquettes modernes et ergonomiques pour une expérience utilisateur optimale',
      desc: <>✅ Design sur-mesure adapté à votre identité visuelle <br />
      ✅ Prototypage interactif avec Figma <br />
      ✅ Optimisation UX/UI pour une navigation fluide <br />
      ✅ Conversion Figma → WordPress, ReactJS, NextJS </>,
      ideal: 'Sites vitrine, e-commerce, app web, SaaS',
      tag: 'Design sur-mesure'
    },
    {
      picture: '/images/services/wordpress.jpg',
      title: '🚀 Création et Personnalisation de Sites WordPress',
      subtitle: 'Je développe des sites WordPress performants et faciles à gérer',
      desc: <>✅ Thèmes sur mesure (PHP, Elementor, Divi) <br />
      ✅ Intégration avancée avec ACF et WooCommerce <br />
      ✅ Optimisation SEO et temps de chargement <br />
      ✅ Site 100% responsive et évolutif </>,
      ideal: 'Entrepreneurs, PME, freelances, blogueurs',
      tag: 'WordPress'
    },
    {
      picture: '/images/services/fix.jpg',
      title: '🛠️ Maintenance, Sécurité & Débogage WordPress',
      subtitle: "J'optimise, sécurise et résous les problèmes de votre site WordPress",
      desc: <>✅ Résolution des bugs et erreurs PHP/JS <br />
      ✅ Sécurisation contre les attaques et malware <br />
      ✅ Optimisation des performances et du référencement technique <br />
      ✅ Mises à jour régulières et support technique </>,
      ideal: 'Sites WordPress en panne, maintenance préventive, refonte technique',
      tag: 'Maintenance & Sécurité'
    },
  ]
  return (
    <div className="container">
      <div className={styles.offer}>
        { titleIsH1 ? <h1 className='mb-2'>
          Mes <strong>offres spécials</strong> <br /> pour vous
        </h1> : <h2 className='mb-2'>
          Mes <strong>offres spécials</strong> <br /> pour vous
        </h2>}
        <div id="offers" className='mt-5 row'>
          {offers.map((offer) => (
            <div className="col-md-4 px-[10px] flex flex-column mb-5">
              <div className={`${styles.offer_picture} mb-4`}>
                <Image
                  src={offer.picture}
                  alt="titre"
                  width={412}
                  height={231}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="flex flex-column align-items-start">
                <div className={`${styles.etiquette}`}>
                  {offer.tag}
                </div>
                <h3 className={styles.offer_title}>
                  {offer.title}
                </h3>
                <strong className={styles.offer_sous_titre}>
                  {offer.subtitle}
                </strong>
                <p className={styles.offer_desc}>
                  {offer.desc}
                </p>
                <p className={styles.offer_ideal}>
                  <strong>💡 Idéal pour :</strong>  {offer.ideal}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-content-center mt-5">
          <Link href="/projets" className="btn btn-primary">
            Voir toutes mes offres
          </Link>
        </div>
      </div>
    </div>
  )
}
const Offer = ({picture, pictureDark, title, desc, link}) => {
  const [posBg, setPosBg] = useState({
    x: 50,
    y: 50
  })
  const handleMouseMove = (e:any) => {
    let card3dRect = e.currentTarget.getBoundingClientRect()
    let x = e.clientX - card3dRect.x
    let y = e.clientY - card3dRect.y

    let midCardWidth = card3dRect.width / 2
    let midCardHeight = card3dRect.height / 2

    let angleY = (y - midCardWidth) 
    let angleX = (x - midCardHeight) 
    
    setPosBg({
      x: angleX,
      y: angleY,
    })
  }

  const { theme, setTheme } = useTheme()
  const image = theme == 'dark' ? picture : pictureDark
  return (
    <div className={`col-md-5 px-3`} >
      <div className={styles.offer_container} onMouseMove={(e) => handleMouseMove(e)}>
        <div className={styles.offer_cart}>
          <div className={styles.offer_cart__picture}>
            <Image src={image} alt={title} fill={true} />
          </div>
          <div className={styles.offer_cart__infos}>
            <h3><Link href={link}>{title}</Link></h3>
            <p>{desc}</p>
          </div>
          <div className={styles.offer_cart__link}>
            <Link href={link}>
              <TbArrowUpRight />
            </Link>
          </div>
        </div>
        {/* <div className={styles.offer_bg} style={{backgroundImage: `radial-gradient(circle at ${posBg.x}% ${posBg.y}%, hsl(var(--primary)),transparent)`}}></div> */}
      </div>
    </div>
  )
}
export default Offers
