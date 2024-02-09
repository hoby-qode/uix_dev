'use client'
import React, { useEffect, useState } from 'react'
import styles from './Offer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { TbArrowUpRight } from 'react-icons/tb'
import { useTheme } from 'next-themes'

const Offers = ({titleIsH1}:{titleIsH1?:number}) => {
  const offers = [
    {
      picture: '/images/services/conception-ux.svg',
      pictureDark: '/images/services/conception-ux-dark.svg',
      title: 'Web design',
      desc: 'Créativité visuelle, navigation intuitive, expérience immersive pour une présence en ligne moderne.',
      link: '/offres/web-design',
    },
    {
      picture: '/images/services/logo-design.svg',
      pictureDark: '/images/services/logo-design-dark.svg',
      title: 'Logo design',
      desc: 'Identité distinctive, logos mémorables reflétant l\'essence unique de votre entreprise.',
      link: '/offres/dev-front',
    },
    {
      picture: '/images/services/web-developer.svg',
      pictureDark: '/images/services/web-developer-dark.svg',
      title: 'Dev wordpress',
      desc: 'Sites personnalisés, gestion simplifiée, puissance sans tracas pour une présence en ligne efficace.',
      link: '/offres/dev-wordpress',
    },
    {
      picture: '/images/services/web-integrator.svg',
      pictureDark: '/images/services/web-integrator-dark.svg',
      title: 'Dev Front-end',
      desc: 'Sites dynamiques alliant esthétique et convivialité pour une expérience optimale.',
      link: '/offres/dev-front',
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
        <div className="col-md-10 mx-auto">
          <p className='text-center mb-5 col-lg-8 mx-auto'>Explorez ces offres spéciales et découvrez comment je peux donner vie à vos projets numériques de manière unique et professionnelle. </p>
          <div className={`${styles.offer_cards} row justify-content-center pt-5cla`}>
            {offers.map((offer, key) => (
              <Offer picture={offer.picture} pictureDark={offer.pictureDark} title={offer.title} desc={offer.desc} link={offer.link} key={key} />
            ))}
          </div>
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
