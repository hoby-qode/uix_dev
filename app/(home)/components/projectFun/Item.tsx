import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { projectType } from '@/src/types/types'
import { BiLogoReact } from 'react-icons/bi'
import { DiPhotoshop } from 'react-icons/di'
import {  SiAdobexd, SiStrapi } from 'react-icons/si'
import { TbBrandNextjs, TbBrandPrisma } from 'react-icons/tb'

const Item = ({ title, slug, desc, picture, technos, source }: projectType) => {
  return (
    <div className={styles.projectFunItem}>
      <div className={styles.projectFunItem__image}>
        <div className="cover aspect-4-3">
          <Image src={picture} alt={title} width={500} height={500} />
        </div>
      </div>
      <div className={`${styles.projectFunItem__content} w-100`}>
        <div className="d-flex flex-wrap">
          {technos.map((techno: string, key: number) => {
            return (
              <Link
                href={source}
                className="tag tag-theme-color btn-rounded"
                key={key}
              >
                <span style={{ marginRight: '5px' }}>{techno}</span>
                {techno === 'React Js' ? (
                  <TbBrandNextjs />
                ) : techno == 'NextJS' ? (
                  <BiLogoReact />
                ) : techno == 'Prisma' ? (
                  <TbBrandPrisma />
                ) : techno == 'Recoil' ? (
                  // <SiRecoil />
                  <div>recoil</div>
                ) : techno == 'Abode XD' ? (
                  <SiAdobexd />
                ) : techno == 'Photoshop' ? (
                  <DiPhotoshop />
                ) : techno == 'Strapi' ? (
                  <SiStrapi />
                ) : (
                  <div></div>
                )}
              </Link>
            )
          })}
        </div>
        <h3>
          <Link href={`/projets/${slug}`}>{title}</Link>
        </h3>
        <div className={styles.projectFunItem__resum}>{desc}</div>
        <div className={styles.projectFunItem__links}>
          <Link
            href={source}
            className="btn btn-secondary btn-rounded"
            target="_blank"
          >
            <span className="medium">Live demo</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Item
