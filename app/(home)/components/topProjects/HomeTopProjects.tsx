'use client'
import style from './style.module.css'
import Modal from './Modal'
import { useEffect, useState } from 'react'
import ItemProject from './ItemProject'
import { projects } from '@/src/datas/projets'

const HomeTopProjects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.matchMedia('screen and (max-width:768px)').matches)
  },[isMobile])
  return (
    <>
      <div className={`${style.projects} container`} data-scroll-container>
        {projects.map((project, index) => {
          return (
            <ItemProject
              index={index}
              setModal={setModal}
              title={project.title}
              slug={project.slug}
              desc={project.desc}
              picture={project.picture}
              services={project.services}
              technos={project.technos}
              key={index}
            />
          )
        })}
      </div>
      {isMobile ? '' : <Modal projects={projects} modal={modal} />}
    </>
  )
}

export default HomeTopProjects
