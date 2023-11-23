import NotificationNewsletter from '@/components/Notifications/NotificationNewsletter'
import InnerHTML from '@/components/ui/InnerHTML'
import React from 'react'
import ListsComments from '../components/comments/lists/ListsComments'
import { embeddable } from '@/src/types/types'
import Image from 'next/image'
import FormComments from '../components/comments/form/FormComments'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const renderCodeBlocks = (html:any) => {
  const codeBlocks = html.match(/<pre[\s\S]*?<\/pre>/g) || [];
  return codeBlocks.map((codeBlock:any, index:number) => (
    <SyntaxHighlighter key={index} language="javascript" style={vs2015}>
      {codeBlock.replace(/<\/?(code|pre)[^>]*>/g, '')}
    </SyntaxHighlighter>
  ));
};

const extractCodeFromHtml = (html) => {
  const codeBlocks = html.match(/<pre[\s\S]*?<\/pre>/g) || [];
  return codeBlocks.map((codeBlock:any) => codeBlock.replace(/<\/?pre.*?>/g, ''));
};
const Single = ({post}:{post:any}) => {
  const codeBlocks = extractCodeFromHtml(post.content.rendered);
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
      <div className="post-content">
        <InnerHTML html={{ __html: post.content.rendered.replace(/<pre[\s\S]*?<\/pre>/g, '') }} />
        {renderCodeBlocks(post.content.rendered)}
      </div>

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