'use client'

import Link from 'next/link'
import { useEffect, useRef, useMemo, MouseEventHandler, useState } from 'react'
import styles from './styles.module.css'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ui/ToggleTheme'
import SocialNetwork from '../socialNetwork/SocialNetwork'
import { motion } from 'framer-motion'
const Navbar = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const pathname = usePathname()
  const borderAnimate = useRef(null)

  const routes = useMemo(
    () => [
      {
        label: 'Accueil',
        active: pathname === '/',
        href: '/',
      },
      // {
      //   label: 'Blog',
      //   href: '/blog',
      //   active: pathname === '/blog' || pathname.startsWith('/blog'),
      // },
      {
        label: 'Portfolio',
        href: '/projets',
        active: pathname === '/projets' || pathname.startsWith('/projets'),
      },
      {
        label: 'Me contacter',
        href: '/contact',
        active: pathname === '/contact',
      },
    ],
    [pathname],
  )
  const handleMouseEnter = (e: any) => {
    if (borderAnimate.current) {
      borderAnimate.current.style.left = `${e.currentTarget.offsetLeft}px`
      borderAnimate.current.style.width = `${e.currentTarget.offsetWidth}px`
    }
  }
  const handleMouseOut = () => onDidMount()

  const onDidMount = () => {
    const activeLink = document.querySelector('.navbar_link.active')
    if (borderAnimate.current) {
      borderAnimate.current.style.left = `${
        activeLink != null ? activeLink.offsetLeft : '0'
      }px`
      borderAnimate.current.style.width = `${
        activeLink != null ? activeLink.offsetWidth : '0'
      }px`
    }
  }
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.matchMedia('screen and (max-width:768px)').matches)
    }
  }, [isMobile])
  useEffect(() => onDidMount())
  return (
    <nav className={`${styles.links} ${isMenuOpen ? styles.links_active : ''}`}>
      {routes.map((item, key) => (
        <LinkNavbar
          id={key}
          key={key}
          {...item}
          onMouseEnter={handleMouseEnter}
          onMouseOut={handleMouseOut}
          isMobile={isMobile}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, transform: 'translateY(50px)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
        className={`${styles.borderAnimate}`}
        ref={borderAnimate}
      ></motion.div>

      <ThemeToggle />
    </nav>
  )
}

interface LinkNavbarProps {
  label: string
  active?: boolean
  href: string
  onMouseEnter: MouseEventHandler<HTMLAnchorElement>
  onMouseOut: MouseEventHandler<HTMLAnchorElement>
  isMobile: boolean
  id: number
}
const LinkNavbar: React.FC<LinkNavbarProps> = ({
  label,
  active,
  href,
  onMouseEnter,
  onMouseOut,
  isMobile,
  id,
}) => {
  const animation = id * 0.1

  return (
    <>
      {isMobile ? (
        <Link
          href={href}
          className={`navbar_link ishover ${active ? 'active' : ''}`}
          onMouseEnter={(e) => onMouseEnter(e)}
          onMouseOut={onMouseOut}
          target="_top"
        >
          {active ? <strong>{label}</strong> : label}
        </Link>
      ) : (
        <Link
          href={href}
          passHref
          className={`navbar_link ishover ${active ? 'active' : ''}`}
          onMouseEnter={(e) => onMouseEnter(e)}
          onMouseOut={onMouseOut}
        >
          <motion.span
            initial={{ transform: 'translateY(-50px)' }}
            animate={{ transform: 'translateY(0)' }}
            transition={{ delay: animation, duration: 0.5, ease: 'easeOut' }}
            className="d-block"
          >
            {active ? <strong>{label}</strong> : label}
          </motion.span>
        </Link>
      )}
    </>
  )
}
export default Navbar
