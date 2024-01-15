'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Navigation = ({ links }) => {
  const [activeSection, setActiveSection] = useState('')
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <div className="tab-navigation d-flex flex-column">
        {Object.keys(links).map((e, key) =>
          links[e].titre != '' ? (
            <Link
              key={key}
              href={`# ${links[e].ancre}`}
              onClick={() => scrollToSection(links[e].ancre)}
              className={
                activeSection === links[e].ancre
                  ? 'active'
                  : `item ${links[e].ancre}`
              }
            >
              {links[e].titre}
            </Link>
          ) : (
            ''
          ),
        )}
      </div>
    </nav>
  )
}

export default Navigation
