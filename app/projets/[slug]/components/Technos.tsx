import Image from 'next/image'
import React from 'react'
import styles from '../Project.module.css'

const Technos = () => {
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
    <div className={styles.technos}>
        <h2 className='text-center mb-5'>Les technologies utilisés</h2>
        <div className="col-md-8 mx-auto">
          <div className="row justify-content-center">
            {technos.map((techno, key:number) => (
              <div className="col-md-3 text-center mb-5" key={key}>
                <Image src={techno.picture} alt={techno.title} width={150} height={50}/>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Technos