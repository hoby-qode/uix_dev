import React from 'react'
import { Metadata } from 'next'

import {
  findAllPosts,
  findPosts,
  getTags,
} from '@/src/query/posts.query'

import SearchFilter from './components/searchFilter/SearchFilter'
import TagFilter from './components/tagsFilter/TagFilter'
import TeasePost from './components/teasePost/TeasePost'
import Anchor from '@/components/ui/Anchor'
import NextBreadcrumb from '@/components/breadcrumb/NextBreadcrumb'
import Pagination from '@/components/ui/Pagination'
import { embeddable } from '@/src/types/types'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'UIX DEV : Blog',
  description: 'Description de la page blog',
}

export default async function Blog({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const page = parseInt(searchParams?.page as string) || 1
  const postsPerPage = 2
  const skip = (page - 1) * postsPerPage

  const allPosts = await findAllPosts()
  const countAllPosts = allPosts.length

  const tags = await getTags()
  const posts = await findPosts(page, postsPerPage, skip)
  return (
    <main className="container">
      <Anchor />
      <div className="row justify-content-between">
        <section className="col-xl-2 col-lg-3">
          <div className="sticky-top">
            <SearchFilter />
            <TagFilter tags={tags} />
          </div>
        </section>
        <section className="col-md-9">
          <NextBreadcrumb
            homeElement={'Uix dev'}
            separator={<span> &gt; </span>}
            activeClasses="active"
            containerClasses="d-flex gap-10 ml-0 pl-0"
            listClasses="list-style-none"
            capitalizeLinks
          />
          <div className="row">
            {posts.map((article: embeddable, key: number) => (
              <div className="col-xl-4 col-lg-6" key={key}>
                <TeasePost article={article} key={key} />
              </div>
            ))}
          </div>
          <Pagination postsPerPage={postsPerPage} totalPosts={countAllPosts} />
        </section>
      </div>
    </main>
  )
}
