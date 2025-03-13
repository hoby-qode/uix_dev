import React from 'react'
import Image from 'next/image'
import styles from '../(home)/components/offer/Offer.module.css'

const Services = () => {
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
    <div>
      <h1 className='mb-2'>
        Mes services
      </h1>
      <div id="offers" className='mt-5 row'>
        {offers.map((offer, key) => (
          <div className="col-md-4 px-[10px] flex flex-column mb-5" key={key}>
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
    </div>
  )
}

export default Services