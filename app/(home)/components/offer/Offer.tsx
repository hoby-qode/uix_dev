import React from 'react'
import styles from './Offer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { TbArrowUpRight } from 'react-icons/tb'

const Offer = () => {
  const offers = [
    {
      picture: '/images/imageAbout.jpg',
      title: 'Web design',
      desc: 'Lorem ipsum set doler',
      link: '/offer?type=web-design',
    },
    {
      picture: '/images/imageAbout.jpg',
      title: 'Logo design',
      desc: 'Lorem ipsum set doler',
      link: '/offer?type=dev-front',
    },
    {
      picture: '/images/imageAbout.jpg',
      title: 'Dev wordpress',
      desc: 'Lorem ipsum set doler',
      link: '/offer?type=dev-wordpress',
    },
    {
      picture: '/images/imageAbout.jpg',
      title: 'Dev Front-end',
      desc: 'Lorem ipsum set doler',
      link: '/offer?type=dev-front',
    },
  ]
  return (
    <div className="container">
      <div className={styles.offer}>
        <h2>
          Mes <strong>offres spécials</strong> <br /> pour vous
        </h2>
        <div className="col-md-10 mx-auto">
          <div className={`${styles.offer_cards} row justify-content-center`}>
            {offers.map((offer, key) => (
              <div className={`col-md-5 mb-4 px-3`} key={key}>
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
