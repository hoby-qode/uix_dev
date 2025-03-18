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
          <Image src="/images/services/conception.jpg" alt="pack-base" style={{width: "100%", height: "auto", borderRadius: "15px", marginBottom: "30px"}} width={720} height={500}/>

          <h2 className='mb-2' style={{fontSize: "2.5rem", fontWeight: '"wght" 500 , "wdth" 150'}}>
          Service de design UI/UX
          </h2>

          <div className="">
              <h3 style={{fontSize: "1.4rem"}}>
              🎨 Créez la maquette UX/UI design de votre site web avec Figma : des designs modernes et intuitifs pour une expérience utilisateur exceptionnelle !
              </h3>
          </div>
          <p>😁 Vous avez un projet de site web et souhaitez offrir à vos utilisateurs <strong>une expérience fluide, intuitive et visuellement attrayante</strong> ?</p>
          <p>😪 Vous avez un site existant qui ne convertit pas ? Vous avez du mal à attirer des clients ou à offrir une expérience utilisateur satisfaisante ?</p>
          <p>😏 Vous avez de la chance, mon métier de designer UX/UI  consiste justement à améliorer le design et l'experience utilisateur pour une meilleure conversion.</p>
          <p>Ce service va vous permettre de <strong>TRANSFORMER</strong> vos utilisateurs en clients grâce à un <strong>design moderne, unique et des expériences utilisateur fluides et engageantes.</strong></p>

          <h3 style={{fontSize: "1.4rem"}}>
            🤔 Ce que je vous propose
          </h3>
          <p>1️⃣ <strong>Interface utilisateur minimaliste et contemporaine:</strong> des interfaces épurées, alignées et tendance qui trouvent un écho auprès de votre public.</p>
          <p>2️⃣ <strong>Expérience utilisateur exceptionnelle :</strong> des conceptions qui sont non seulement esthétiques, mais également intuitives et conviviales.</p>
          <p>3️⃣ <strong>Prototypage interactif :</strong> Testez votre site avant le développement grâce à des maquettes cliquables.</p>
          <p>4️⃣ <strong>Fichiers sources modifiables :</strong> fichiers entièrement superposés et organisés, facilitant les modifications futures.</p>
          <p>5️⃣ <strong>Collaboration en temps réel :</strong> Partagez vos feedbacks directement sur Figma.</p>

          <h3 style={{fontSize: "1.4rem", marginTop: "30px"}}>
          🤭 Mes offres
          </h3>

          <Image src="/images/pack/pack-base.jpg" alt="pack-base" style={{width: "100%", height: "auto"}} width={720} height={500}/>

          <h4 style={{fontSize: "1.2rem", margin: "30px 0 20px 0"}}>
            🔥 Les packs VIP pour aller encore plus loin !
          </h4>

          <Image src="/images/pack/pack-standard.jpg" alt="pack-base" style={{width: "100%", height: "auto", marginTop: "15px"}} width={720} height={500}/>
          <Image src="/images/pack/pack-premium.jpg" alt="pack-base" style={{width: "100%", height: "auto", marginTop: "15px"}} width={720} height={500}/>
          <Image src="/images/pack/pack-silver.jpg" alt="pack-base" style={{width: "100%", height: "auto", marginTop: "15px"}} width={720} height={500}/>
          <Image src="/images/pack/pack-gold.jpeg" alt="pack-base" style={{width: "100%", height: "auto", marginTop: "15px"}} width={720} height={500}/>
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