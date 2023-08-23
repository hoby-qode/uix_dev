import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import styles from './styles.module.css'
const Navbar = () => {
  const router = useRouter()
  const activeLink = useRef<HTMLAnchorElement>(null)
  const disableLink = useRef<HTMLAnchorElement>(null)
  const [borderWidth, setBorderWidth] = useState<number>(0)
  const [borderPos, setBorderPos] = useState<number>(0)
  const [loadPage, setLoadPage] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      if (!loadPage) {
        if (activeLink.current) {
          setBorderWidth(activeLink.current!.offsetWidth)
          setBorderPos(activeLink.current!.offsetLeft)
        }
      }
      setLoadPage(true)
    }, 200)
  })

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // setSizeCursor({ w: 100, h: 100 })
    setBorderWidth(e.currentTarget.offsetWidth)
    setBorderPos(e.currentTarget.offsetLeft)
  }

  const handleMouseOut = () => {
    // setSizeCursor({ w: 350, h: 350 })
    setBorderWidth(activeLink.current!.offsetWidth)
    setBorderPos(activeLink.current!.offsetLeft)
  }

  return (
    <nav className={styles.links}>
      <Link
        href="/"
        className="link "
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        ref={router.pathname === '/' ? activeLink : disableLink}
      >
        Accueil
      </Link>
      <Link
        href="/portfolio"
        className="link active"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        ref={router.pathname === '/portfolio' ? activeLink : disableLink}
      >
        Portfolio
      </Link>
      <Link
        href="/contact"
        className="link"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        ref={router.pathname === '/contact' ? activeLink : disableLink}
      >
        Contact
      </Link>
      <div
        className={styles.borderAnimate}
        style={{ width: borderWidth, left: borderPos }}
      ></div>
    </nav>
  )
}

export default Navbar
