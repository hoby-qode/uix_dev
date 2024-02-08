import React from 'react'
import styles from './Description.module.css'
import Image from 'next/image'

const Description = () => {
  return (
    <div className={styles.description}>
        <div className="row">
            <div className="col-md-7">
                <h2 className={styles.title}>We Create digital Product For Business</h2>
                <div className={styles.intro}>
                    <div className={styles.introPicto}>
                        <Image src="/images/probleme.png" alt="c'est quoi le problème ?" width={150} height={150} quality={100}/>
                    </div>
                    <p>
                        sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque seeney laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis
                    </p>
                </div>
                <div className={styles.texte}>
                    <p>
                        Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aufugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam estqui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid consequature
                    </p>
                </div>
                <div className={styles.services}>
                    <ul>
                        <li>Branding & Design</li>
                        <li>Web Development</li>
                        <li>Mobile Apps Design</li>
                        <li>Graphics Design</li>
                        <li>Digital Marketing</li>
                        <li>Product Design</li>
                        <li>System & Guide</li>
                        <li>Content Management</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4 offset-md-1">
                <div className={styles.card}>
                    <ul>
                        <li>
                            <label>
                                Catégorie
                            </label>
                            <strong>
                                Projet personnel
                            </strong>
                        </li>
                        <li>
                            <label>
                                Client
                            </label>
                            <strong>
                                Sw4u compagny
                            </strong>
                        </li>
                        <li>
                            <label>
                                Localisation
                            </label>
                            <strong>
                                Madagascar
                            </strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description