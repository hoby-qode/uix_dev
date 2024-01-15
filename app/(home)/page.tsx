import { Metadata } from 'next'
import React from 'react'
import HomeTopProjects from './components/topProjects/HomeTopProjects'
import HeaderPage from './components/headerPage'
import About from './components/about'
import Offer from './components/offer'
import Competence from './components/competence'

export const metadata: Metadata = {
  title: "Page d'Accueil ",
  description: "Description de la page d'accueil",
}
export default function Home() {
  return (
    <main>
      <HeaderPage />

      <About />

      <HomeTopProjects />

      <Offer />

      <Competence />
    </main>
  )
}
