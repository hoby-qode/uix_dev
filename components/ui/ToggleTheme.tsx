'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { TbMoonFilled, TbMoonStars } from 'react-icons/tb'

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.matchMedia('screen and (max-width:768px)').matches)
    }
  }, [isMobile])
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateX(50px)' }}
      animate={{ opacity: 1, transform: 'translateX(0)' }}
      transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
      className="toggleTheme d-flex align-items-center gap-10"
    >
      {isMobile ? <span>Mode sombre</span> : ''}
      <input
        type="checkbox"
        id="toggle-theme"
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="toggleTheme_input"
      />
      <label htmlFor="toggle-theme" className="toggleTheme_label">
        <TbMoonStars />
        <TbMoonFilled />
      </label>
    </motion.div>
  )
}

export default ThemeToggle
