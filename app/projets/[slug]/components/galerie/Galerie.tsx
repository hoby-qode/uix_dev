import React from 'react'
import styles from './Galerie.module.css'
import Image from 'next/image'

const Galerie = () => {
  return (
    <div className={`row ${styles.galerie}`}>
        <div className="col-md-3">
          <div className="aspect-16-9 position-relative cover">
            <Image src="/images/portfolio/le-bar-it-1.jpg" alt='projet' fill/>
          </div>
        </div>
        <div className="col-md-3">
          <div className="aspect-16-9 position-relative cover">
            <Image src="/images/portfolio/le-bar-it-1.jpg" alt='projet' fill/>
          </div>
        </div>
        <div className="col-md-3">
          <div className="aspect-16-9 position-relative cover">
            <Image src="/images/portfolio/le-bar-it-1.jpg" alt='projet' fill/>
          </div>
        </div>
        <div className="col-md-3">
          <div className="aspect-16-9 position-relative cover">
            <Image src="/images/portfolio/le-bar-it-1.jpg" alt='projet' fill/>
          </div>
        </div>
    </div>
  )
}

export default Galerie