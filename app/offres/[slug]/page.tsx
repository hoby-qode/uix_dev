import { findPostBySlug } from '@/src/query/posts.query'
import { ResolvingMetadata, Metadata } from 'next'
import React from 'react'

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

const Offer = () => {
  return (
    <div>Offer</div>
  )
}

export default Offer