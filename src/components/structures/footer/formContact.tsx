import styles from './styles.module.css'
import Image from 'next/image';
import HeaderImage from "@/public/images/18.jpg";
import Formulaire from '@/src/components/form/formulaire';

const FormContact = () => {

  return (
    <div className={styles.contact}>
      <div className={styles.footerHead}>
        <div className={styles.picture}>
          <Image src={HeaderImage} alt="UIX_DEV" width={134} height={134} style={{objectFit: 'cover'}}/>
        </div>
        <h2 className="like-h1 my-0">Alors, on va travailler <br /> ensemble ?</h2>
      </div>
      <Formulaire/>
    </div>
  )
}
export default FormContact
