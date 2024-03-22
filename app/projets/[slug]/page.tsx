import React from 'react'
import { notFound } from 'next/navigation'
import Anchor from '@/components/ui/Anchor'
import { ResolvingMetadata, Metadata } from 'next'
import { Props } from 'next/script'
import styles from './Project.module.css'
import {
  getFeaturedMedia,
} from '@/src/query/posts.query'
import 'react-loading-skeleton/dist/skeleton.css'
import { Post } from '@/src/types/types'
import { findProjectBySlug, getAllProjects } from '@/src/query/project.query'
import Content from './Content'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug
  const project = await findProjectBySlug(String(slug))

  return {
    title: project?.title,
    description: project?.resum,
    authors: {
      url: 'https://uix-dev.vercel.app/',
      name: 'Rakotonialy H.M',
    },
    publisher: 'https://uix-dev.vercel.app/projets/',
  }
}

export const revalidate = false
export const dynamic = 'force-static'

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((p:any) => ({
    slug: p.slug,
  }))
}

export default async function Projet({ params }: { params: { slug: string } }) {
  //Récupération du post avec son slug
  const projects = await findProjectBySlug(String(params.slug))
  const project = projects.find((project: any) => project.slug === params.slug)
  
  if (!project) {
    return notFound()
  }

  return (
    <main className="container content">
      <Anchor height={50} />
      <Content project={project} />
    </main>
  )
}
