'use client'
import style from './style.module.css'
import Modal from './Modal'
import { useEffect, useState } from 'react'
import ItemProject from './ItemProject'

//Todo : typé le projets
const HomeTopProjects = ({projects}:{projects:any}) => {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.matchMedia('screen and (max-width:768px)').matches)
    }
  },[isMobile])
  return (
    <>
      <div className={`${style.projects} container`} data-scroll-container>
        {projects.map((project, index) => {
          return (
            <ItemProject
              index={index}
              setModal={setModal}
              title={project.title.rendered}
              slug={project.slug}
              desc={project.content.rendered}
              picture={project._embedded['wp:featuredmedia']['0'].source_url}
              services={project._embedded['wp:term']}
              technos={project._embedded['wp:term']}
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
