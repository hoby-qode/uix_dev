import React from 'react'
import ProgessBar from '@/components/ui/progessBar'
import { notFound } from 'next/navigation'
import Anchor from '@/components/ui/Anchor'
import { ResolvingMetadata, Metadata } from 'next'
import { Props } from 'next/script'
import {
  findPostBySlug,
  getAllPosts,
  getFeaturedMedia,
  getTags,
} from '@/src/query/posts.query'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'react-loading-skeleton/dist/skeleton.css'
import { Post } from '@/src/types/types'
import { getCommentsByIdPost } from '@/src/query/comment.query'
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

// export const revalidate = false
// export const dynamic = 'force-static'

// export async function generateStaticParams() {
//   const posts = await getAllPosts()
//   return posts.map((p) => ({
//     slug: p.slug,
//   }))
// }

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
      <Content
        post={post}
        featured_media={featured_media}
        comments={comments}
        tags={tags}
      />
    </main>
  )
}
