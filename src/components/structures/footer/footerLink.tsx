import styles from './styles.module.css'
import Link from 'next/link'
const FooterLink = () => {
    return (
        <div className={styles.connect}>
            <div className={styles.connectTitle}>
                <p style={{fontSize:'1.4rem', fontVariationSettings: '"wght" 600', color: 'white', marginBottom: '45px'}}>CONNECTER</p>
            </div>
            <div className={`${styles.connectLinks} row`}>
                <div className="col-md-4">
                    <Link href="https://dribbble.com/" target='_blank' passHref className={styles.linkFooter}>
                        <span className={styles.icoTriangle}></span>
                        Dribbble
                    </Link>

                    <Link href="https://www.behance.net/" target='_blank' passHref className={styles.linkFooter}>
                        <span className={styles.icoTriangle}></span>
                        Behance
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link href="https://www.facebook.com/" target='_blank' passHref className={styles.linkFooter}>
                        <span className={styles.icoTriangle}></span>
                        Facebook
                    </Link>

                    <Link href="https://www.linkedin.com/" target='_blank' passHref className={styles.linkFooter}>
                        <span className={styles.icoTriangle}></span>
                        Linkedin
                    </Link>
                </div>
                <div className="col-md-4">
                    <aside className={styles.blocContact}>
                        <p>Adresse mail</p>
                        <Link href="mailto:houbby22@gmail.com">houbby22@gmail.com</Link>
                    </aside>

                    <aside className={styles.blocContact}>
                        <p>Téléphone</p>
                        <Link href="tel:+261343059815">+261 34 30 598 15</Link>
                    </aside>
                </div>
            </div>
        </div>
    )
}
export default FooterLink