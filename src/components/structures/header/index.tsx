import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/src/components/navbar/index'
import styles from './styles.module.css'

const Header: React.FC = () => {
  const [showLogo, setShowLogo] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (650 <= window.scrollY) {
        setShowLogo(true)
      } else {
        setShowLogo(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className="container">
        <div
          className={`${showLogo ? styles.showLogo : styles.hideLogo} ${
            styles.headerLogo
          }`}
        >
          <Link href="/" passHref>
            <Image
              src="./images/uix_dev2.svg"
              alt="UIX DEV"
              width={120}
              height={50}
              priority
            />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  )
}
export default Header
