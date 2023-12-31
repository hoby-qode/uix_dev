import React from 'react'
import SearchFilter from '../components/searchFilter/SearchFilter'
import TagFilter from '../components/tagsFilter/TagFilter'
import Link from 'next/link'
import ProgessBar from '@/components/ui/progessBar'
import { notFound } from 'next/navigation'
import Anchor from '@/components/ui/Anchor'
import NextBreadcrumb from '@/components/breadcrumb/NextBreadcrumb'
import { ResolvingMetadata, Metadata } from 'next'
import { Props } from 'next/script'
import { findPostBySlug, getTags } from '@/src/query/posts.query'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'react-loading-skeleton/dist/skeleton.css'
import { Post, embeddable } from '@/src/types/types'
import Single from './Single'

export const revalidate = 10

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params.slug
  const post = await findPostBySlug(String(slug))

  return {
    title: post?.title,
    description: post?.resum,
    authors: {
      url: 'https://uix-dev.vercel.app/',
      name: 'Rakotonialy H.M',
    },
    publisher: 'https://uix-dev.vercel.app/blog/',
  }
}
export async function findMyEmail() {
  const res = await fetch(`${process.env.ENDPOINT_API_BREVO}/contacts/`, { cache: 'no-cache',headers: {
    'Content-Type': 'application/json',
    'api-key': `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`
  }, })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}
export default async function Blog({ params }: { params: { slug: string } }) {
  // Ajout du langage javascript dans le module highlightjs.org
  hljs.registerLanguage('javascript', javascript)

  //Récupération du post avec son slug
  const posts = await findPostBySlug(String(params.slug))
  const post = posts.find((post:Post) => post.slug === params.slug)
  //Récupération des tags
  
  const tags = await getTags()
  if (!posts) {
    return notFound()
  }
  return (
    <main className="container content">
      <Anchor />
      <ProgessBar />

      <div className="row justify-content-between">
        <section className="col-md-6 order-2">
          <NextBreadcrumb
            homeElement={'Uix dev'}
            separator={<span> &gt; </span>}
            activeClasses="active"
            containerClasses="d-flex gap-10 ml-0 pl-0"
            listClasses="list-style-none"
            capitalizeLinks
          />
          <div className="row mx-0 mt-5">
            <Single post={post} />
          </div>
        </section>
        <section className="col-md-2 order-1">
          <div className="sticky-top">
            <SearchFilter />
            <TagFilter tags={tags} />
          </div>
        </section>

        <section className="col-lg-3 order-3  d-none d-md-block">
          <div className="sticky-top">
            <div className="tab-navigation d-flex flex-column">
              <Link href="#" className="active">
                Qu&apos;est-ce que le Dark Mode ?
              </Link>
              <Link href="#" className="active">
                Pourquoi devriez-vous l&apos;adopter ?
              </Link>
              <Link href="#" className="active">
                Comment activer le Dark Mode ?
              </Link>
              <Link href="#" className="active">
                Dark Mode et développement
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
