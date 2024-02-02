import { Metadata } from 'next'
import React from 'react'
import HomeTopProjects from './components/topProjects/HomeTopProjects'
import HeaderPage from './components/headerPage'
import About from './components/about'
import Offers from './components/offer'
import Competence from './components/competence'

export const metadata: Metadata = {
  title: "UIX-DEV ",
  description: "Salut, moi c'est H. Marcel UI/UX & Dev, Je suis un Développeur web avec 4ans d'expérience, dont les 2 dernières années ont été consacrées à perfectionner mes compétences dans Wordpress, react.js et Next.js",
  keywords: "Ui/Ux designer, devéloppeur front-end, react.js, next.js, wordpress, php"
}
export default function Home() {
  return (
    <main>
      <HeaderPage />

      <About />

      <HomeTopProjects />

      <Offers />

      <Competence />
    </main>
  )
}
