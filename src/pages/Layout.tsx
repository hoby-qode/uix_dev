import React, { ReactNode } from 'react'
import Header from '@/src/components/structures/header/index'
import Footer from '../components/structures/footer'
import CustomCursor from '@/src/components/cursor'
import { CursorContext } from '@/src/context/CursorContext'
import { useState, useEffect } from 'react'
interface Props {
  children: ReactNode
}
interface posCursorType {
  x: number
  y: number
}
interface sizeCursorType {
  w: number
  h: number
}
const Layout: React.FC<Props> = ({ children }) => {
  // const [posCursor, setPosCursor] = useState<posCursorType>({ x: 0, y: 0 })
  // const [sizeCursor, setSizeCursor] = useState<sizeCursorType>({ w: 50, h: 50 })
  // useEffect(() => {
  //   const handleMouseMouve = (e: any) => {
  //     setPosCursor({
  //       x: e.clientX - sizeCursor.w / 2,
  //       y: e.clientY - sizeCursor.h / 2,
  //     })
  //   }
  //   document.addEventListener('mousemove', handleMouseMouve)
  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMouve)
  //   }
  // })
  return (
    <>
      {/* <CursorContext.Provider value={{ sizeCursor, setSizeCursor }}> */}
      <Header />

      {children}

      <Footer />

      {/* <CustomCursor posCursor={posCursor} /> */}
      {/* </CursorContext.Provider> */}
    </>
  )
}

export default Layout
