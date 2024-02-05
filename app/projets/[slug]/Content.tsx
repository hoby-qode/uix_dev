import Link from 'next/link'
import React from 'react'
import { TbArrowUpRight } from 'react-icons/tb'
import styles from './Project.module.css'

const Content = ({project}:{project:any}) => {
  return (
    <>
        <div className={styles.intro}>
            <Link href="/projets" title='Projets' className='btn btn-primary d-inline-flex align-items-center mb-5'>
                Mes projets <TbArrowUpRight />
            </Link>
            <h1 dangerouslySetInnerHTML={{__html: project.title.rendered}}/>
            <div className={styles.desc}>
                <div dangerouslySetInnerHTML={{__html: project.content.rendered}} />
            </div>
        </div>
    </>
  )
}

export default Content