import React from 'react'
import styles from './Offer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { TbArrowUpRight } from 'react-icons/tb'

const Offer = () => {
  const offers = [
    {
      picture: '/images/services/conception-ux.svg',
      title: 'Web design',
      desc: 'Créativité visuelle, navigation intuitive, expérience immersive pour une présence en ligne moderne.',
      link: '/offer?type=web-design',
    },
    {
      picture: '/images/services/logo-design.svg',
      title: 'Logo design',
      desc: 'Identité distinctive, logos mémorables reflétant l\'essence unique de votre entreprise.',
      link: '/offer?type=dev-front',
    },
    {
      picture: '/images/services/web-developer.svg',
      title: 'Dev wordpress',
      desc: 'Sites personnalisés, gestion simplifiée, puissance sans tracas pour une présence en ligne efficace.',
      link: '/offer?type=dev-wordpress',
    },
    {
      picture: '/images/services/web-integrator.svg',
      title: 'Dev Front-end',
      desc: 'Sites dynamiques alliant esthétique et convivialité pour une expérience optimale.',
      link: '/offer?type=dev-front',
    },
  ]
  return (
    <div className="container">
      <div className={styles.offer}>
        <h2>
          Mes <strong>offres spécials</strong> <br /> pour vous
        </h2>
        <p className='text-center'>Explorez ces offres spéciales et découvrez comment je peux donner vie à vos projets numériques de manière unique et professionnelle. </p>
        <div className="col-md-10 mx-auto">
          <div className={`${styles.offer_cards} row justify-content-center`}>
            {offers.map((offer, key) => (
              <div className={`col-md-5 px-3`} key={key}>
                <div className={styles.offer_cart}>
                  <div className={styles.offer_cart__picture}>
                    <Image src={offer.picture} alt={offer.title} fill={true} />
                  </div>
                  <div className={styles.offer_cart__infos}>
                    <h3>{offer.title}</h3>
                    <p>{offer.desc}</p>
                  </div>
                  <div className={styles.offer_cart__link}>
                    <Link href={offer.link}>
                      <TbArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
