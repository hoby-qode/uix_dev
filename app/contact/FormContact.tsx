import Formulaire from "@/src/features/form/Formulaire"
import HeaderImage from '@/public/images/18.jpg'
import Image from 'next/image'
import styles from './contact.module.css'
import Anchor from "@/components/ui/Anchor"

const FormContact = () => {
    return (
        <div className={`${styles.contact} container`} title="En maintenance">
            <Anchor />
            <div className={`${styles.footerHead} mx-0`}>
                <div className={styles.picture}>
                <Image
                    src={HeaderImage}
                    alt="UIX_DEV"
                    width={134}
                    height={134}
                    style={{ objectFit: 'cover' }}
                    priority
                />
                </div>
                <h2 className="like-h1 my-0">
                    Alors, on va travailler <br /> ensemble ?
                </h2>
            </div>
            <Formulaire />
        </div>
    )
}
export default FormContact