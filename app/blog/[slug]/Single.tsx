'use client'
import NotificationNewsletter from '@/components/Notifications/NotificationNewsletter'
import InnerHTML from '@/components/ui/InnerHTML'
import React, { useEffect } from 'react'
import Image from 'next/image'
import FormComments from '../components/comments/form/FormComments'
import ListsComments from '../components/comments/ListsComments'
import Link from 'next/link'

const Single = ({
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
    <article>
      {/* {featured_media ? (
        <div className="radius aspect-16-9 cover mb-5">
          <Image
            src={featured_media.media_details.sizes.large.source_url}
            alt={featured_media.title.rendered}
            fill={true}
            sizes="(max-width: 768px) 100%, 33%"
          />
        </div>
      ) : (
        ''
      )} */}
      <h1>{post.title.rendered}</h1>
      <div className="post-excerpt">
        <InnerHTML html={{ __html: post.excerpt.rendered }} />
      </div>
      <NotificationNewsletter />
      <InnerHTML
        html={{
          __html: post.content.rendered.replace(/<pre[\s\S]*?<\/pre>/g, ''),
        }}
      />
      <ul className="tags-lists d-flex gap-5">
        {tagsCurrent.map((tag, key) => {
          return (
            <li key={key}>
              <Link
                href={`/blog/tags/${tag}`}
                className="tag tag-outline-theme d-inline-flex"
              >
                {tag}
              </Link>
            </li>
          )
        })}
      </ul>
      {comments ? (
        <ListsComments
          comments={comments}
          postTitle={post.title.rendered}
          idPost={post.id}
        />
      ) : (
        ''
      )}
      <FormComments idPost={post.id} />
    </article>
  )
}

export default Single
