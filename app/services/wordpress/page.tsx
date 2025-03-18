"use client"

import Magnetic from '@/components/ui/Magnetic'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const page = () => {

  const handleOpenChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle(); // Ouvre ou ferme la bulle de chat
    }
  };

  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-md-8">
          <Image src="/images/services/wordpress.jpg" alt="creation-site" style={{width: "100%", height: "auto", borderRadius: "15px", marginBottom: "30px"}} width={720} height={500} />

          <h2 className='mb-2' style={{fontSize: "2.5rem", fontWeight: '"wght" 500 , "wdth" 150'}}>
            Création & Personnalisation de Sites WordPress
          </h2>

          <div className="">
            <h3 style={{fontSize: "1.4rem"}}>
              Sites modernes, performants et sur-mesure
            </h3>
          </div>

          <p>&#128187; Vous souhaitez créer un site WordPress professionnel, moderne et adapté à vos besoins ?</p>
          <p>&#128736; Vous avez besoin de personnaliser un thème ou d&apos;ajouter des fonctionnalités spécifiques ?</p>
          <p>&#128640; Vous voulez un site optimisé pour le SEO et les performances ?</p>
          <p>Ce service est conçu pour <strong>créer</strong> et <strong>personnaliser</strong> votre site WordPress afin qu&apos;il reflète parfaitement votre identité et vos objectifs.</p>

          <h3 className={styles.subheading}>
            &#128295; Ce que je vous propose
          </h3>
          <p>1&#65039;&#8419; <strong>Création de sites :</strong> conception de sites WordPress modernes et responsives.</p>
          <p>2&#65039;&#8419; <strong>Personnalisation de thèmes :</strong> adaptation des thèmes pour répondre à vos besoins spécifiques.</p>
          <p>3&#65039;&#8419; <strong>Ajout de fonctionnalités :</strong> intégration de plugins et développement de fonctionnalités sur-mesure.</p>
          <p>4&#65039;&#8419; <strong>Optimisation SEO :</strong> mise en place des meilleures pratiques pour améliorer votre visibilité en ligne.</p>
          <p>5&#65039;&#8419; <strong>Support technique :</strong> assistance pour garantir le bon fonctionnement de votre site.</p>
        </div>
        <div className='col-md-4'>
          <div style={{position: "sticky", top: "20px"}}>
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
  )
}

export default page
