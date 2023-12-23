import { projects } from '@/src/datas/projets'
import React from 'react'
import { projectType } from '@/src/types/types'
import Link from 'next/link'
import { Metadata } from 'next'
import Anchor from '@/components/ui/Anchor'
import styles from './galerie.module.css'
import Image from 'next/image'
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
        <Anchor height={30} />
        <div className="row align-items-start">
          <div className="col-md-8">
            <h2 className="my-0">
              Mes <strong>réalisations</strong> de <br /> l&apos;année{' '}
              <strong>2023</strong>
            </h2>
          </div>
          <div className="col-md-4">
            <div className="d-flex gap-10 flex-column align-items-start">
              <Link href="#" className="btn btn-outline-theme">
                UI/UX Design
              </Link>
              <Link href="#" className="btn btn-outline-theme">
                Développement
              </Link>
              <Link href="#" className="btn btn-outline-theme">
                Intégration
              </Link>
            </div>
          </div>
        </div>
        <div className="list-projects">
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item_picture cover">
              <Image
                src="/images/portfolio/le-bar-it-1.jpg"
                alt="test"
                width={300}
                height={150}
              />
            </div>
            <div className="project-item_content">
              <h2 className="project-item_title">Le bar IT</h2>
              <div className="project-item_excerpt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                saepe nisi quasi pariatur laudantium corporis quidem in minima
                temporibus sit assumenda, voluptates ullam possimus beatae!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
