import { projects } from '@/src/datas/projets'
import React from 'react'
import { projectType } from '@/src/types/types'
import Link from 'next/link'
import { Metadata } from 'next'
import Anchor from '@/components/ui/Anchor'
import styles from './galerie.module.css'
// import { findAllPorfolios } from '@/src/query/porfolio.query'

export const metadata: Metadata = {
  title: 'UIX DEV : Portfolio',
  description: 'Description de la page portfolio',
}
export default async function Portfolio() {
  // const allProjects = await findAllPorfolios()

  return (
    <>
      <div className={`${styles.galleryProject_filter} container`}>
        <Anchor />
        <div className="row">
          <div className="col-md-8">
            <h2 className="my-0">
              Mes <strong>réalisations</strong> de l&apos;année{' '}
              <strong>2023</strong>
            </h2>
          </div>
          <div className="col-md-4">
            <div className="d-flex gap-10 flex-wrap">
              {projects.map((project: projectType, key: number) => {
                return (
                  <Link href="#" className="btn btn-outline-theme" key={key}>
                    {project.services}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
