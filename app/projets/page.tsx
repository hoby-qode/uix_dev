import React from 'react'
import { projectType } from '@/src/types/types'
import Link from 'next/link'
import { Metadata } from 'next'
import Anchor from '@/components/ui/Anchor'
import styles from './galerie.module.css'
import Image from 'next/image'
import HomeTopProjects from '../(home)/components/topProjects/HomeTopProjects'
import { getAllProjects } from '@/src/query/project.query'

export const metadata: Metadata = {
  title: 'UIX DEV : Portfolio',
  description: 'Description de la page portfolio',
}
export default async function Portfolio() {
  const projects = await getAllProjects();
  console.log(projects)
  return (
    <>
      <div className={`${styles.galleryProject_filter} container`}>
        <Anchor height={30} />
        <h1 className='text-center'>Mes projets <br /> 2023</h1>
        <HomeTopProjects projects={projects} />
      </div>
    </>
  )
}
