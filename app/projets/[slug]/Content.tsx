import Link from 'next/link'
import React from 'react'
import { TbArrowUpRight } from 'react-icons/tb'
import styles from './Project.module.css'
import Image from 'next/image'
import Featured3D from './components/featured3d/Featured3D'
import Technos from './components/Technos'
import Description from './components/description/Description'
import Galerie from './components/galerie/Galerie'
import Magnetic from '@/components/ui/Magnetic'

const Content = ({project}:{project:any}) => {
  return (
    <>
      <div className={styles.intro}>
        <Link href="/projets" title='Projets' className='btn btn-primary d-inline-flex align-items-center mb-5'>
            Mes projets <TbArrowUpRight />
        </Link>
        <h1 className={styles.title} dangerouslySetInnerHTML={{__html: project.title.rendered}}/>
        <div  className={styles.desc} dangerouslySetInnerHTML={{__html: project.content.rendered}} />
        
        <Image src="/images/souris.svg" alt='Scroll bottom' width={35} height={50}/>

      </div>
      {/* <Featured3D image={} video={} /> */}
      
      <Description />

      <Galerie/>
      
      <Technos />
    </>
  )
}

export default Content