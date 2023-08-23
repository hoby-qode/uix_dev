import Link from 'next/link'
import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import styles from './styles.module.css'

interface Props {
  href: HTMLLinkElement | string
  children: ReactNode
  type?: string
}
const index: React.FC<Props> = (props) => {
  return (
    <Link
      href={props.href}
      className={
        props.type == 'primary'
          ? styles.btnPrimary
          : props.type == 'secondary'
          ? styles.btnSecondary
          : styles.btnWhite
      }
    >
      {props.children}
    </Link>
  )
}
export default index
