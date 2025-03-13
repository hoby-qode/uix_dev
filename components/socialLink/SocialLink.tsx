import React, { FC } from 'react'
import styles from './SocialLink.module.css'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface SocialLinkProp {
  href: string
  icon: any
}
const SocialLink: FC<SocialLinkProp> = ({ href, icon }) => {
  return (
    <Link href={href} className={styles.socialLink} target='_blank'>
      {icon}
    </Link>
  )
}

export default SocialLink
