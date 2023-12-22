'use client'

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
    <div className="toggleTheme d-flex align-items-center gap-10">
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
    </div>
  )
}

export default ThemeToggle
