'use client'
import NextBreadcrumb from '@/components/breadcrumb/NextBreadcrumb'
import React from 'react'
import Navigation from '../components/navigation/Navigation'
import TagFilter from '../components/tagsFilter/TagFilter'
import SearchFilter from './SearchFilter'
import Single from './Single'

const Content = ({
  post,
  featured_media,
  comments,
  tags,
}: {
  post: any
  featured_media: any
  comments: any
  tags: any
}) => {
  const tagsCurrent = tags
    .filter((tag: any) => post.tags.includes(tag.id))
    .map((tag: any) => tag.slug)

  return (
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
          <TagFilter tags={tags} tagCurrent={tagsCurrent} />
        </div>
      </section>

      <section className="col-md-3 order-3  d-none d-md-block">
        <div className="sticky-top">
          <Navigation links={post.acf} />
        </div>
      </section>
    </div>
  )
}

export default Content
