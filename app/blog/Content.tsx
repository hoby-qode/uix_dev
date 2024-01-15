'use client'
import React, { useState } from 'react'
import NextBreadcrumb from '@/components/breadcrumb/NextBreadcrumb'
import Pagination from '@/components/ui/Pagination'
import { embeddable } from '@/src/types/types'
import TeasePost from './components/teasePost/TeasePost'
import SearchFilter from './components/searchFilter/SearchFilter'
import TagFilter from './components/tagsFilter/TagFilter'
import { useSearchParams } from 'next/navigation'

//TODO: @type tags, posts, postsPerPage, countAllPosts
const Content = ({ tags, posts, postsPerPage, countAllPosts }) => {
  const searchParams = useSearchParams()
  const search = searchParams.get('s')
  const [searchText, setSearchText] = useState<string>('')
  const postsFiltered = posts.filter((post) =>
    search
      ? post.title.rendered.toLowerCase().includes(search.toLocaleLowerCase())
      : post.title.rendered
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase()),
  )

  return (
    <div className="row justify-content-between">
      <section className="col-xl-2 col-lg-3">
        <div className="sticky-top">
          <SearchFilter setSearchText={setSearchText} />
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
          {postsFiltered || posts
            ? postsFiltered
              ? postsFiltered.map((article: embeddable, key: number) => (
                  <div className="col-xl-4 col-lg-6" key={key}>
                    <TeasePost article={article} />
                  </div>
                ))
              : posts.map((article: embeddable, key: number) => (
                  <div className="col-xl-4 col-lg-6" key={key}>
                    <TeasePost article={article} />
                  </div>
                ))
            : `Il n'y a pas d'élément`}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={countAllPosts} />
      </section>
    </div>
  )
}

export default Content
