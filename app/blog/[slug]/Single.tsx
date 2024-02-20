'use client'
import NotificationNewsletter from '@/components/Notifications/NotificationNewsletter'
import InnerHTML from '@/components/ui/InnerHTML'
import React, { useEffect , ReactDOM } from 'react'
import Image from 'next/image'
import FormComments from '../components/comments/form/FormComments'
import ListsComments from '../components/comments/ListsComments'
import Link from 'next/link'
import Prism from 'prismjs';
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import { createPortal } from 'react-dom';


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
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const imageUrl = featured_media.media_details.sizes.full ? 
  featured_media.media_details.sizes.full.source_url : 
  (featured_media.media_details.sizes.large ? 
    featured_media.media_details.sizes.large.source_url : 
      null);
  
  const tagsCurrent = tags
    .filter((tag: any) => post.tags.includes(tag.id))
    .map((tag: any) => tag.slug)
  console.log(post);
  
  return (
    <article className='blog w-100'>
      {featured_media ? (
        <div className="radius mb-5">
          <Image
            src={imageUrl}
            alt={featured_media.title.rendered}
            sizes="(max-width: 768px) 100%, 33%"
            width={500}
            height={500}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
      ) : (
        ''
      )}
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div className="post-excerpt">
        <InnerHTML html={{ __html: post.excerpt.rendered }} />
      </div>
      <NotificationNewsletter />
      <InnerHTML
        html={{
          __html: post.content.rendered,
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
      <hr style={{maxWidth: '100%',marginTop: '3rem'}}/>
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

const CopyButton = () => {
  return (
    <button className="copy-to-clipboard-button" type="button" data-copy-state="copy">
      <span>Copy</span>
    </button>
  )
}
export default Single
