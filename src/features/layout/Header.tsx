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
  // var ancre = window.location.hash;

  // Afficher l'ancre dans la console
  // console.log("Ancre de l'URL : " + ancre);
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
        <div className={`${styles.showLogo} ${styles.headerLogo}`}>
          <Link href="/" passHref>
          <svg width="123" height="27" viewBox="0 0 123 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M108.771 20.7456L101.663 1.13965H106.878L112.533 16.9978H111.812L117.174 1.13965H122.055L114.96 20.7456H108.771Z" fill="hsl(var(--primary))"/>
<path d="M86.0117 20.7456V1.13965H100.336V5.11418H90.9065V8.90199H99.4558V12.8765H90.9065V16.771H100.416V20.7456H86.0117Z" fill="hsl(var(--primary))"/>
<path d="M64.9634 20.7456V1.13965H72.2989C73.3037 1.13965 74.2684 1.22412 75.1931 1.39306C76.1267 1.562 76.9892 1.81985 77.7806 2.16662C78.5808 2.5134 79.3055 2.95353 79.9546 3.48702C80.6036 4.02052 81.1549 4.65182 81.6084 5.38093C82.0708 6.10114 82.4264 6.92806 82.6754 7.86167C82.9243 8.7864 83.0488 9.81337 83.0488 10.9426V10.9693C83.0488 12.0807 82.9243 13.0944 82.6754 14.0102C82.4264 14.9171 82.0708 15.7352 81.6084 16.4643C81.1549 17.1934 80.6036 17.8247 79.9546 18.3582C79.3055 18.8917 78.5808 19.3362 77.7806 19.6919C76.9892 20.0476 76.1312 20.3143 75.2065 20.4921C74.2817 20.6611 73.3126 20.7456 72.2989 20.7456H64.9634ZM69.8582 16.8377H72.2056C72.8191 16.8377 73.3837 16.7888 73.8994 16.691C74.4151 16.5843 74.8864 16.4243 75.3132 16.2109C75.74 15.9975 76.1134 15.7352 76.4335 15.4239C76.7625 15.1039 77.0381 14.726 77.2604 14.2903C77.4827 13.8546 77.6516 13.3611 77.7672 12.8098C77.8828 12.2586 77.9406 11.645 77.9406 10.9693V10.9426C77.9406 10.2757 77.8828 9.66666 77.7672 9.11538C77.6516 8.55521 77.4827 8.05729 77.2604 7.6216C77.0381 7.18591 76.7625 6.80802 76.4335 6.48793C76.1134 6.16783 75.74 5.90108 75.3132 5.68768C74.8864 5.4654 74.4151 5.30535 73.8994 5.20754C73.3837 5.10084 72.8191 5.04749 72.2056 5.04749H69.8582V16.8377Z" fill="hsl(var(--primary))"/>
<path d="M47.9463 25.6679V21.6934H61.9772V25.6679H47.9463Z" fill="hsl(var(--primary))"/>
<path d="M27.3799 20.7456L34.4353 10.9159L27.6466 1.13965H33.5017L37.3429 6.88805L41.2641 1.13965H46.6123L39.877 10.6092L46.9858 20.7456H41.1174L36.9694 14.637L32.7148 20.7456H27.3799Z" fill="hsl(var(--primary))"/>
<path d="M20.6528 20.7456V1.13965H25.5476V20.7456H20.6528Z" fill="hsl(var(--primary))"/>
<path d="M8.62796 21.1857C7.24977 21.1857 6.03607 21.0345 4.98687 20.7322C3.93766 20.4299 3.06184 19.9542 2.35941 19.3051C1.65697 18.6471 1.12793 17.8069 0.772264 16.7844C0.416601 15.7618 0.23877 14.5259 0.23877 13.0766V4.64737V1.13965H5.12024V4.64737V13.0499C5.12024 13.7612 5.18693 14.3792 5.3203 14.9038C5.46257 15.4195 5.67596 15.8507 5.96049 16.1975C6.25391 16.5354 6.61847 16.7888 7.05416 16.9577C7.49873 17.1178 8.02334 17.1978 8.62796 17.1978C9.24148 17.1978 9.77053 17.1178 10.2151 16.9577C10.6597 16.7888 11.0242 16.5354 11.3088 16.1975C11.5933 15.8507 11.8067 15.4195 11.949 14.9038C12.0912 14.3792 12.1624 13.7612 12.1624 13.0499V4.64737V1.13965H17.0438V4.64737V13.0766C17.0438 14.5259 16.866 15.7618 16.5103 16.7844C16.1547 17.8069 15.6212 18.6471 14.9099 19.3051C14.2074 19.9542 13.3316 20.4299 12.2824 20.7322C11.2421 21.0345 10.0239 21.1857 8.62796 21.1857Z" fill="hsl(var(--primary))"/>
</svg>



          </Link>
        </div>
        <Navbar isMenuOpen={isMenuOpen} />
        <MenuBurger isMenuOpen={isMenuOpen} onMenuOpen={setMenuOpen} />
      </div>
    </header>
  )
}
export default Header
