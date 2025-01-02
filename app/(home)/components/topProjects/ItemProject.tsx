import styles from './style.module.css'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { TbBrandNextjs, TbBrandPrisma } from 'react-icons/tb'
import { BiLogoReact } from 'react-icons/bi'
import { SiStrapi, SiAdobexd, SiRecoil } from 'react-icons/si'
import { DiDocker, DiHtml5, DiJavascript, DiJira, DiPhotoshop, DiPhp, DiSymfony, DiWordpress } from 'react-icons/di'
import { FaFigma, FaGitlab, FaSlack } from 'react-icons/fa'
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
        {props.services && props.services[0].map((service: string, key: number) => {
          return (
            <Button
              href="#"
              type={
                'outline-theme'
              }
              key={key}
            >
              {service.name}
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
        <div className={styles.projectIntro}><p dangerouslySetInnerHTML={{__html: props.desc}} /></div>
        <Link
          href={`${props.slug}`}
          className={styles.link}
          onMouseEnter={() => {
            setModal({ active: true, index: index })
          }}
          onMouseLeave={() => {
            setModal({ active: false, index: index })
          }}
          target='_blank'
        ></Link>
      </div>
      <div
        className={`${styles.projectTechno}`}
        data-scroll
        data-scroll-speed={0.09}
      >
        {props.services && props.services[1].map((techno: string, key: number) => {
          return (
            <Link
              href="#"
              className="tag tag-theme-color btn-rounded d-inline-flex align-items-center"
              key={key}
            >
              <span style={{ marginRight: '5px' }}><span dangerouslySetInnerHTML={{__html: techno.name}} /></span>
              {techno.slug === 'react-js' ? (
                <BiLogoReact />
              ) : techno.slug == 'next-js' ? (
                <TbBrandNextjs />
              ) : techno.slug == 'prisma' ? (
                <TbBrandPrisma />
              ) : techno.slug == 'recoil' ? (
                <SiRecoil />
              ) : techno.slug == 'adobe-xd' ? (
                <SiAdobexd />
              ) : techno.slug == 'photoshop' ? (
                <DiPhotoshop />
              ) : techno.slug == 'javascript' ? (
                <DiJavascript />
              ) : techno.slug == 'php' ? (
                <DiPhp />
              ) : techno.slug == 'wordpress' ? (
                <DiWordpress />
              ) : techno.slug == 'htmlcss' ? (
                <DiHtml5 />
              ) : techno.slug == 'gitlab' ? (
                <FaGitlab />
              ) : techno.slug == 'jira' ? (
                <DiJira />
              ) : techno.slug == 'docker' ? (
                <DiDocker />
              ) : techno.slug == 'slack' ? (
                <FaSlack />
              ) : techno.slug == 'figma' ? (
                <FaFigma />
              ) : techno.slug == 'symfony' ? (
                <DiSymfony />
              ) : techno.slug == 'strapi' ? (
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
