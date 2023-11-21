import React from 'react'
import SearchFilter from '../../components/searchFilter/SearchFilter'
import TagFilter from '../../components/tagsFilter/TagFilter'
import { findPostBySlug, getTags } from '@/src/query/posts.query'
import NextBreadcrumb from '@/components/breadcrumb/NextBreadcrumb'
import Anchor from '@/components/ui/Anchor'
import TeasePost from '../../components/teasePost/TeasePost'

export const revalidate = 3600

export default async function Tags({ params }: { params: { slug: string } }) {
  const posts = await findPostBySlug(params.slug)
  const tags = await getTags()
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
            {posts.map((article: any, key: number) => (
              <div className="col-xl-4 col-lg-6" key={key}>
                <TeasePost article={article} key={key} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
