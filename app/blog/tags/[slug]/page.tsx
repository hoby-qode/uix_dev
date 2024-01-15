import React from 'react'
import {
  getCountOfAllPosts,
  findPostBySlug,
  findPostsBytag,
  getTags,
  getCountOfAllPostsByTag,
} from '@/src/query/posts.query'
import Anchor from '@/components/ui/Anchor'
import Content from './Content'

export const revalidate = 3600

export default async function Tags({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const tags = await getTags()
  const page = parseInt(searchParams?.page as string) || 1
  const postsPerPage = 6
  const skip = (page - 1) * postsPerPage

  const countAllPosts = await getCountOfAllPostsByTag(params.slug)
  const posts = await findPostsBytag(params.slug, page, postsPerPage, skip)

  return (
    <main className="container">
      <Anchor height={50} />
      <Content
        tags={tags}
        posts={posts}
        postsPerPage={postsPerPage}
        countAllPosts={countAllPosts.length}
        tagCurrent={[params.slug]}
      />
    </main>
  )
}
