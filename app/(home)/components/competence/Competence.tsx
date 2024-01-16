import React from 'react'
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
  return (
    <div className={styles.competences}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <p>Mes compétences</p>
            <h2>Expérience dans le design et le développement web</h2>
            <p>En tant que professionnel du web, je possède une solide expérience dans l&apos;utilisation d&apos;outils de conception pour créer des interfaces intuitives et esthétiques.</p>
            <p>Mon expertise s&apos;étend également au développement de sites web, avec une maîtrise des technologies nécessaires pour concevoir et mettre en œuvre des solutions web modernes et performantes.</p>
            <Link href="/apropos" className="btn btn-primary">
              A propos
            </Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              {technos.map((techno, key) => (
                <div className="col-lg-4 col-md-6 mb-5 col-6" key={key}>
                  <div className={styles.techno}>
                    <div className={styles.techno_picture}>
                      <Image
                        src={techno.picture}
                        alt={techno.title}
                        height={80}
                        width={150}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <p>{techno.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competence
