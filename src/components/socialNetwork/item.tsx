import Link from 'next/link'
import styles from './styles.module.css'
import { ReactNode } from 'react'
import Magnetic from '@/src/components/magnetic'

interface Props {
    link: HTMLLinkElement | string
    children: ReactNode
  }
const Item: React.FC<Props> = ({link, children}) => {
    return (
        <Magnetic>
            <li className={styles.list}>
                <Link href={link} target='_blank' className={styles.link}>
                    {children}
                </Link>
            </li>
        </Magnetic>
    )
}
export default Item