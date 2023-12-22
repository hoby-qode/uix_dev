'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'
import Navbar from '@/src/features/navbar/Navbar'
import { useTheme } from 'next-themes'
import MenuBurger from '@/components/ui/MenuBurger'

const Header: React.FC = () => {
  // Récupérer l'ancre de l'URL actuelle
  var ancre = window.location.hash;

  // Afficher l'ancre dans la console
  console.log("Ancre de l'URL : " + ancre);
  const [showLogo, setShowLogo] = useState<boolean>(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const theme = useTheme()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia('screen and (min-width:768px)').matches) {
        const handleScroll = () => {
          if (10 <= window.scrollY) {
            setShowLogo(true)
          } else {
            setShowLogo(false)
          }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      } else {
        setShowLogo(true)
      }
    }
  }, [])

  return (
    <header className={`${styles.header} `}>
      <div className="container">
        <div
          className={`${styles.showLogo} ${styles.headerLogo}`}
        >
          <Link href="/" passHref>
            <Image
              src="/images/uix_dev2.svg"
              alt="UIX DEV"
              width={120}
              height={50}
              priority
            />
          </Link>
        </div>
        <Navbar isMenuOpen={isMenuOpen} />
        <MenuBurger isMenuOpen={isMenuOpen} onMenuOpen={setMenuOpen} />
      </div>
    </header>
  )
}
export default Header
