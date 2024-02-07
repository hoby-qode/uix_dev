import styles from './style.module.css'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { TbBrandNextjs, TbBrandPrisma } from 'react-icons/tb'
import { BiLogoReact } from 'react-icons/bi'
import { SiStrapi, SiAdobexd, SiRecoil } from 'react-icons/si'
import { DiPhotoshop } from 'react-icons/di'
const ItemProject = ({ index, setModal, ...props }) => {
  const projectItem = useRef(null)

  return (
    <div
      ref={projectItem}
      className={styles.projectsItem}
      data-scroll
      data-scroll-section
    >
      <div className={`${styles.projectPicture} d-block d-md-none`}>
        <Image
          src={props.picture}
          alt={props.title}
          priority
          width={300}
          height={300}
        />
      </div>
      <div
        className={styles.projectCategory}
        data-scroll
        data-scroll-speed={0.05}
      >
        {props.services.map((service: string, key: number) => {
          return (
            <Button
              href="#test"
              type={
                key == 0 ? 'primary' : key == 1 ? 'secondary' : 'theme-color'
              }
              key={key}
            >
              {service}
            </Button>
          )
        })}
      </div>
      <div
        className={styles.projectDescription}
        data-scroll
        data-scroll-speed={0.08}
      >
        <h2>{props.title}</h2>
        <div className={styles.projectIntro}>{props.desc}</div>
        <Link
          href={`/projets/${props.slug}`}
          className={styles.link}
          onMouseEnter={() => {
            setModal({ active: true, index: index })
          }}
          onMouseLeave={() => {
            setModal({ active: false, index: index })
          }}
        ></Link>
      </div>
      <div
        className={`${styles.projectTechno}`}
        data-scroll
        data-scroll-speed={0.09}
      >
        {props.technos.map((techno: string, key: number) => {
          return (
            <Link
              href="#"
              className="tag tag-theme-color btn-rounded d-inline-flex align-items-center"
              key={key}
            >
              <span style={{ marginRight: '5px' }}>{techno}</span>
              {techno === 'React Js' ? (
                <BiLogoReact />
              ) : techno == 'NextJS' ? (
                <TbBrandNextjs />
              ) : techno == 'Prisma' ? (
                <TbBrandPrisma />
              ) : techno == 'Recoil' ? (
                <SiRecoil />
              ) : techno == 'Abode XD' ? (
                <SiAdobexd />
              ) : techno == 'Photoshop' ? (
                <DiPhotoshop />
              ) : techno == 'Strapi' ? (
                <SiStrapi />
              ) : (
                ''
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ItemProject
