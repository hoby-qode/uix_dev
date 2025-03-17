import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Formulaire from '../form/Formulaire'
// import HeaderImage from '@/public/images/18.jpg'
import HeaderImage from '@/public/images/imageAbout.jpg'
import SocialNetwork from '../socialNetwork/SocialNetwork'

const Index = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <FooterLink />
      </div>
    </footer>
  )
}

const FooterLink = () => {
  return (
    <div className={styles.connect}>
      <div className={styles.connectTitle}>
        <p style={{}}>ON SE CONNECTE SUR</p>
      </div>
      <SocialNetwork />
      <div className={`${styles.connectLinks} row`}>
        <div className="col-md-4">
          <Link
            href="https://dribbble.com/uix-dev"
            target="_blank"
            passHref
            className={styles.linkFooter}
          >
            <span className={styles.icoTriangle}></span>
            Dribbble
          </Link>

          <Link
            href="https://www.behance.net/houbbyrakoton"
            target="_blank"
            passHref
            className={styles.linkFooter}
          >
            <span className={styles.icoTriangle}></span>
            Behance
          </Link>
        </div>
        <div className="col-md-4 mb-5 mb-md-0">
          <Link
            href="https://www.facebook.com/uixdev"
            target="_blank"
            passHref
            className={styles.linkFooter}
          >
            <span className={styles.icoTriangle}></span>
            Facebook
          </Link>

          <Link
            href="https://www.linkedin.com/in/h-marcel-rakotonialy-2845282b2/"
            target="_blank"
            passHref
            className={styles.linkFooter}
          >
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

export default Index
