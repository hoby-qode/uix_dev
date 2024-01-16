'use client'
import styles from './styles.module.css'
import Item from './item'
import { useState, useEffect } from 'react'
import {
  AiFillBehanceCircle,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from 'react-icons/ai'
const SocialNetwork = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.matchMedia('screen and (max-width:768px)').matches)
    }
  },[isMobile])
  return (
    <div
      className={isMobile ? styles.socialNetwork_mobile : styles.socialNetwork}
    >
      {isMobile ? 'Suivez moi sur :' : ''}
      <ul>
        <Item link="https://dribbble.com/uix-dev">
          {isMobile ? <AiFillDribbbleCircle /> : 'Dribbble'}
        </Item>
        <Item link="https://www.behance.net/houbbyrakoton">
          {isMobile ? <AiFillBehanceCircle /> : 'Behance'}
        </Item>
        <Item link="https://www.linkedin.com/in/rakotoanialy-hobitiana-marcel/">
          {isMobile ? <AiFillLinkedin /> : 'Linkedin'}
        </Item>
      </ul>
    </div>
  )
}
export default SocialNetwork
