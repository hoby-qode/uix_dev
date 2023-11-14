import NotificationNewsletter from '@/components/Notifications/NotificationNewsletter'
import InnerHTML from '@/components/ui/InnerHTML'
import React from 'react'
import ListsComments from '../components/comments/lists/ListsComments'
import { embeddable } from '@/src/types/types'
import Image from 'next/image'
import FormComments from '../components/comments/form/FormComments'
const Single = ({post}) => {
  console.log(post.id);
  return (
    <article >
      {post._embedded['wp:featuredmedia'] ? (
        <div className="radius aspect-16-9 cover mb-5">
          <Image
            src={post._embedded['wp:featuredmedia']['0'].source_url}
            alt={post.title.rendered}
            fill={true}
            sizes="(max-width: 768px) 100%, 33%"
          />
        </div>
      ) : (
        ''
      )}
      <h1>{post.title.rendered}</h1>
      <div className="post-excerpt">
        <InnerHTML html={{ __html: post.excerpt.rendered }} />
      </div>
      {}
      <NotificationNewsletter />
      <InnerHTML html={{ __html: post.content.rendered }} />

      {post._embedded.replies ? (
        <ListsComments
          comments={post._embedded.replies}
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