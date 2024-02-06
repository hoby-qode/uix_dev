'use client'
import React, { useState } from 'react'
import styles from './Competence.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Competence = () => {
  const technos = [
    {
      picture: '/images/technos/photoshop.png',
      title: 'Photoshop',
    },
    {
      picture: '/images/technos/adobe-xd.png',
      title: 'Adobe XD',
    },
    {
      picture: '/images/technos/figma.png',
      title: 'Figma',
    },
    {
      picture: '/images/technos/wordpress.png',
      title: 'Wordpress',
    },
    {
      picture: '/images/technos/react-js.png',
      title: 'React.js',
    },
    {
      picture: '/images/technos/nextjs.png',
      title: 'Next.js',
    },
  ]
  
  const handleMouseMove = (e) => {
    // const width = e.currentTarget.offsetWidth
    // const height = e.currentTarget.offsetHeight
    // const posCursorInDiv = e;

    let card3dRect = e.currentTarget.getBoundingClientRect()
    let x = e.clientX - card3dRect.x
    let y = e.clientY - card3dRect.y

    let midCardWidth = card3dRect.width / 2
    let midCardHeight = card3dRect.height / 2

    let angleY = -(x - midCardWidth) / 8
    let angleX = (y - midCardHeight) / 8
    
    setPosBg({
      x: angleX,
      y: angleY,
    })
  }
  return (
    <div className={styles.competences}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <p>Mes compétences</p>
            <h2>Expérience dans le <strong>design</strong> et le <strong>développement web</strong></h2>
            <p>En tant que professionnel du web, je possède une solide expérience dans l&apos;utilisation d&apos;outils de conception pour créer des interfaces intuitives et esthétiques.</p>
            <p>Mon expertise s&apos;étend également au développement de sites web, avec une maîtrise des technologies nécessaires pour concevoir et mettre en œuvre des solutions web modernes et performantes.</p>
            <Link href="/apropos" className="btn btn-primary">
              A propos
            </Link>
          </div>
          <div className="col-md-6">
            <div className={`${styles.listTechno} row`}>
              {technos.map((techno, key) => (
                <Techno picture={techno.picture} title={techno.title} key={key}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.competencesBg}></div>
    </div>
  )
}

const Techno = ({picture, title}:{picture:string; title:string}) => {
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

    let angleY = (y - midCardWidth) + 55
    let angleX = (x - midCardHeight) + 35
    
    setPosBg({
      x: angleX,
      y: angleY,
    })
  }
  return (
    <div className={`col-lg-4 col-md-6 col-6 ${styles.technoItem}`}>
      <div className={styles.technoContainer} onMouseMove={(e) => handleMouseMove(e)}>
        <div className={styles.techno}>
          <div className={styles.techno_picture}>
            <Image
              src={picture}
              alt={title}
              height={80}
              width={150}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p>{title}</p>
        </div>
        <div className={styles.technoBg} style={{backgroundImage: `radial-gradient(circle at ${posBg.x}% ${posBg.y}%, hsl(var(--foreground)),transparent)`}}></div>
      </div>
    </div>
  )
}
export default Competence
