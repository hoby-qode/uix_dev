import Styles from '@/src/pages/home/styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import batimat from '@/public/images/portfolio/batimat.png'
import lebarit from '@/public/images/portfolio/lebarit.jpg'
const Portfolio = () => {
  return (
    <div className={`${Styles.portfolio} row`}>
      <div className="col-md-6">
        <div className={`${Styles.portfolio_left}`}>
          <h2 className={`${Styles.portfolio_title}`}>Le bar IT</h2>
          <div className={`${Styles.portfolio_subtitle}`}>
            UI Design -- Développement Web
          </div>
          <p className={`${Styles.portfolio_description}`}>
            {/* En tant que développeur qui a 3ans d'experience dans le  domaine, je suis capable de transformer les maquettes et prototypes en code fonctionnel. Je maîtrise les langages de programmation et les technologies nécessaires pour créer des interfaces interactives et réactives. */}
          </p>
          <Link
            href="https://www.le-bar.it.com"
            target="_blank"
            className={Styles.portfolio_link}
          >
            Voir le site
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <Image src={lebarit} alt="Batimat" width={966} quality={40} />
      </div>

      <div className="col-md-6">
        <Image src={batimat} alt="Batimat" width={966} quality={40} />
      </div>
      <div className="col-md-6">
        <div className={`${Styles.portfolio_left}`}>
          <h2 className={`${Styles.portfolio_title}`}>Le bar IT</h2>
          <div className={`${Styles.portfolio_subtitle}`}>
            UI Design -- Développement Web
          </div>
          <p className={`${Styles.portfolio_description}`}>
            {/* En tant que développeur qui a 3ans d'experience dans le  domaine, je suis capable de transformer les maquettes et prototypes en code fonctionnel. Je maîtrise les langages de programmation et les technologies nécessaires pour créer des interfaces interactives et réactives. */}
          </p>
          <Link
            href="https://www.le-bar.it.com"
            target="_blank"
            className={Styles.portfolio_link}
          >
            Voir le site
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Portfolio
