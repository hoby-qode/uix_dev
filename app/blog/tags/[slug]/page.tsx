import React from 'react'
import {
  getTotalPostCount,
  getPostBySlug,
  getPostsByTag,
  getTags,
  getPostCountByTag,
} from '@/src/query/posts.query'
import Anchor from '@/components/ui/Anchor'
import Content from './Content'

// export const revalidate = 3600

// export async function generateStaticParams() {
//   const tags = await getTags()
//   return tags.map((t:any) => ({
//     slug: `/blog/tags/${t.slug}`,
//   }))
// }

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

  const countAllPosts = await getPostCountByTag(params.slug)
  const posts = await getPostsByTag(params.slug, page, postsPerPage, skip)

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
