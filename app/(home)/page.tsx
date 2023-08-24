import { Metadata } from 'next'
import React from 'react'
import HomeHeaderPage from './components/headerpage/HomeHeaderPage'
import HomeTopProjects from './components/topProjects/HomeTopProjects'
import HomeProjectFun from './components/projectFun/HomeProjectFun'
import HomeTexteMask from './components/texteMask/HomeTexteMask'
import Example from './components/scrollHorizontal/HorizontalScrollCarousel'

export const metadata: Metadata = {
  title: "Page d'Accueil ",
  description: "Description de la page d'accueil",
}
export default function Home() {
  return (
    <main>
       <HomeHeaderPage />

      <Example />

      <HomeTopProjects />

      <HomeTexteMask />

      <HomeProjectFun /> 
    </main>
  )
}
