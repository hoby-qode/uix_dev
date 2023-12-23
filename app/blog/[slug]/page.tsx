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
import {
  findPostBySlug,
  getFeaturedMedia,
  getTags,
} from '@/src/query/posts.query'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'react-loading-skeleton/dist/skeleton.css'
import { Post, embeddable } from '@/src/types/types'
import Single from './Single'
import { getCommentsByIdPost } from '@/src/query/comment.query'
import Navigation from '../components/navigation/Navigation'

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

export default async function Blog({ params }: { params: { slug: string } }) {
  // Ajout du langage javascript dans le module highlightjs.org
  hljs.registerLanguage('javascript', javascript)

  //Récupération du post avec son slug
  const posts = await findPostBySlug(String(params.slug))
  const post = posts.find((post: Post) => post.slug === params.slug)
  const featured_media = await getFeaturedMedia(post.featured_media)

  const comments = await getCommentsByIdPost(parseInt(post.id || '', 10))

  //Récupération des tags
  const tags = await getTags()
  if (!posts) {
    return notFound()
  }


  return (
    <main className="container content">
      <Anchor height={50} />
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
            <Single
              post={post}
              featured_media={featured_media}
              comments={comments}
              tags={tags}
            />
          </div>
        </section>
        <section className="col-md-2 order-1">
          <div className="sticky-top">
            <SearchFilter />
            <TagFilter tags={tags} />
          </div>
        </section>

        <section className="col-md-3 order-3  d-none d-md-block">
          <div className="sticky-top">
            <Navigation links={post.acf} />
          </div>
        </section>
      </div>
    </main>
  )
}
