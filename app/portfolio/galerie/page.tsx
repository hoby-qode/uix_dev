import { projects } from '@/src/datas/projets'
import React from 'react'
import { projectType } from '@/src/types/types'
import Link from 'next/link'
import styles from './galerie.module.css'
import Double from '../components/double/Double'
const Galerie = () => {
  return (
    <>
      <div className={`${styles.galleryProject_filter} container`}>
        <div className="row">
          <div className="col-md-8">
            <h2 className="my-0">
              Mes <strong>réalisations</strong> de l&apos;année <strong>2023</strong>
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
      <div className={`${styles.galleryProject} container`}>
        <Double projects={[projects[0], projects[1]]} reversed={false} />
        <Double projects={[projects[2], projects[3]]} reversed={true} />
        <Double projects={[projects[0], projects[1]]} reversed={false} />
        <Double projects={[projects[2], projects[3]]} reversed={true} />
      </div>
    </>
  )
}

export default Galerie
