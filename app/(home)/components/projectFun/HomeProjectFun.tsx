import styles from './styles.module.css'
import Link from 'next/link'
import { projects } from '@/src/datas/projets'
import Item from './Item'
import { TbArrowUpRight } from 'react-icons/tb'
import { projectType } from '@/src/types/types'
const HomeProjectFun = () => {
  return (
    <>
      <div className={`${styles.projectFunTitle} container `}>
        <h2 className="my-0">
          Projects <strong>FUN</strong> <br /> et <strong>Éducatifs</strong>
        </h2>
        <div className={styles.nbProjectFun}>
          <p>10+ Projets</p>
        </div>
      </div>
      <div className={`${styles.projectFun} container`}>
        <div className={styles.projectFunSticky}>
          <Link
            href="/projets"
            passHref
            className="btn btn-primary d-inline-flex align-items-center"
          >
            <span className="medium text-uppercase">Tous les projets</span>{' '}
            <TbArrowUpRight fontSize={30} />
          </Link>
        </div>
        <div className={styles.projectFun__loop}>
          {projects.map((project: projectType, key: number) => {
            return (
              <Item
                key={key}
                title={project.title}
                slug={project.slug}
                desc={project.desc}
                picture={project.picture}
                technos={project.technos}
                source={project.source}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
export default HomeProjectFun
