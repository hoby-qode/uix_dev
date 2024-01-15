import React from 'react'
import styles from './Competence.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Competence = () => {
  const technos = [
    {
      picture: '/images/imageAbout.jpg',
      title: 'Photoshop',
    },
    {
      picture: '/images/imageAbout.jpg',
      title: 'Adobe XD',
    },
    {
      picture: '/images/imageAbout.jpg',
      title: 'Figma',
    },
    {
      picture: '/images/imageAbout.jpg',
      title: 'Wordpress',
    },
    {
      picture: '/images/imageAbout.jpg',
      title: 'React.js',
    },
    {
      picture: '/images/imageAbout.jpg',
      title: 'Next.js',
    },
  ]
  return (
    <div className={styles.competences}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <p>Mes compétences</p>
            <h2>
              Lorem ipsum dolor sit <br />
              amet, <strong>consectetur</strong>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit consectetur molestias repellendus earum cupiditate
              nulla aspernatur iure officiis dicta tempore, iusto officia
              dolores minima accusantium a sapiente. Dignissimos amet voluptates
              dolore quos.
            </p>
            <Link href="/apropos" className="btn btn-primary">
              A propos
            </Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              {technos.map((techno, key) => (
                <div className="col-md-4 mb-5 col-6" key={key}>
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
