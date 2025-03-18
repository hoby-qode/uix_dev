"use client"

import Magnetic from '@/components/ui/Magnetic'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
const page = () => {

  const handleOpenChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();  // Ouvre ou ferme la bulle de chat
    }
  };

  return (
    <div className='container mt-5'>
      <div className="row">
      <div className="col-md-8">
          <Image src="/images/services/fix.jpg" alt="pack-base" style={{width: "100%", height: "auto", borderRadius: "15px", marginBottom: "30px"}} width={720} height={500}/>

          <h2 className='mb-2' style={{fontSize: "2.5rem", fontWeight: '"wght" 500 , "wdth" 150'}}>
            Maintenance, Sécurité & Débogage WordPress
          </h2>

          <div className="">
              <h3 style={{fontSize: "1.4rem"}}>
                Résolution des bugs et erreurs PHP/JS
              </h3>
          </div>

          <p>&#128295; Vous rencontrez des problèmes techniques sur votre site WordPress ? Des erreurs PHP/JS ou des bugs qui affectent son bon fonctionnement ?</p>
          <p>&#128679; Vous souhaitez sécuriser votre site contre les attaques et les vulnérabilités ?</p>
          <p>&#128736; Vous avez besoin d'une maintenance régulière pour garantir la stabilité et la performance de votre site ?</p>
          <p>Ce service est conçu pour <strong>résoudre vos problèmes techniques</strong>, <strong>assurer la sécurité</strong> et <strong>maintenir votre site WordPress</strong> en parfait état de fonctionnement.</p>

          <h3 className={styles.subheading}>
          &#128187; Ce que je vous propose
          </h3>
          <p>1&#65039;&#8419; <strong>Résolution des bugs et erreurs :</strong> correction des erreurs PHP/JS et autres dysfonctionnements.</p>
          <p>2&#65039;&#8419; <strong>Optimisation de la sécurité :</strong> mise en place de mesures pour protéger votre site contre les attaques.</p>
          <p>3&#65039;&#8419; <strong>Mises à jour régulières :</strong> mise à jour de WordPress, des thèmes et des plugins pour garantir la compatibilité et la sécurité.</p>
          <p>4&#65039;&#8419; <strong>Surveillance et sauvegardes :</strong> surveillance continue et sauvegardes régulières pour éviter toute perte de données.</p>
          <p>5&#65039;&#8419; <strong>Support technique :</strong> assistance rapide et efficace pour répondre à vos besoins.</p>

          {/* <h3 style={{fontSize: "1.4rem", marginTop: "30px"}}>
          🤭 Mes offres
          </h3> */}

          {/* <Image src="/images/pack/pack-base.jpg" alt="pack-base" style={{width: "100%", height: "auto"}} width={720} height={500}/> */}

          {/* <h4 style={{fontSize: "1.2rem", margin: "30px 0 20px 0"}}>
            🔥 Les packs VIP pour aller encore plus loin !
          </h4>

          <Image src="/images/pack/pack-standard.jpg" alt="pack-base" style={{width: "100%", height: "auto", marginTop: "15px"}} width={720} height={500}/>
          <Image src="/images/pack/pack-premium.jpg" alt="pack-base" style={{width: "100%", height: "auto", marginTop: "15px"}} width={720} height={500}/>
          <Image src="/images/pack/pack-silver.jpg" alt="pack-base" style={{width: "100%", height: "auto", marginTop: "15px"}} width={720} height={500}/>
          <Image src="/images/pack/pack-gold.jpeg" alt="pack-base" style={{width: "100%", height: "auto", marginTop: "15px"}} width={720} height={500}/> */}
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