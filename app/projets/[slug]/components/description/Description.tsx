import React from 'react'
import styles from './Description.module.css'
import Image from 'next/image'

const Description = ({sous_titre,probleme,solution,services,categorie,client,localisation,duree }) => {
  return (
    <div className={styles.description}>
        <div className="row">
            <div className="col-md-7">
                {sous_titre && <h2 className={styles.title}>{sous_titre}</h2>}
                {probleme &&
                    <div className={styles.intro}>
                        <div className={styles.introPicto}>
                            <Image src="/images/probleme.png" alt="c'est quoi le problème ?" width={150} height={150} quality={100}/>
                        </div>
                        <p dangerouslySetInnerHTML={{__html: probleme}} />
                    </div>
                }
                {solution && 
                    <div className={styles.texte}>
                        <p dangerouslySetInnerHTML={{__html: solution}} />
                    </div>
                }
                {services && <div className={styles.services} dangerouslySetInnerHTML={{__html: services}} />}
            </div>
            <div className="col-md-4 offset-md-1">
                <div className={styles.card}>
                    <ul>
                        {categorie &&
                            <li>
                                <label>
                                    Catégorie
                                </label>
                                <strong>
                                    {categorie}
                                </strong>
                            </li>
                        }
                        {client && 
                            <li>
                                <label>
                                    Client
                                </label>
                                <strong>
                                    {client}
                                </strong>
                            </li>
                        }
                        {localisation && 
                            <li>
                                <label>
                                    Localisation
                                </label>
                                <strong>
                                    {localisation}
                                </strong>
                            </li>
                        }
                        { duree && 
                            <li>
                                <label>
                                    Durée
                                </label>
                                <strong>
                                    {duree}
                                </strong>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description