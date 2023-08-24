import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './styles.module.css'

interface Props {
  href: HTMLLinkElement | string
  children: ReactNode
  type?: string
}
const Button: React.FC<Props> = (props) => {
  return (
    <Link href={props.href} className={`btn btn-${props.type}`}>
      {props.children}
    </Link>
  )
}
export default Button
