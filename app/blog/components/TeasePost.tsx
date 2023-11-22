import React from 'react'
import styles from './TeasePost.module.css'
import Link from 'next/link'
import Image from 'next/image'
import InnerHTML from '@/components/ui/InnerHTML';

const TeasePost = ({article}:{article:any}) => {
  console.log(article.title.rendered);
  const date = new Date(article.date);
  const createdAt = date.toLocaleDateString();
  
  return (
    <article className={styles.card}>
      <div className="picture">
        <Link href={`/blog/${article.slug}`} className='position-relative cover zoom aspect-16-9 radius d-flex'>
          {/* <Image
            src={article._embedded['wp:featuredmedia']['0'].source_url}
            alt="Lorem ipsum"
            layout="fill"
            fill={true}
            objectFit="cover"
            sizes="(max-width: 768px) 100%, 33%"
          /> */}
          Image
        </Link>
      </div> 
      <h3 className="like-h4 color-primary">
        <Link href={`/blog/${article.slug}`}>{article.title.rendered}</Link>
      </h3>
      {/* <div className={styles.date}>Publié le : {createdAt}</div>
       <div>
        <InnerHTML html={{__html: article.excerpt.rendered }} />
      </div>
      <Link
        href={`/blog/${article.slug}`}
        title="Lorem ipsum"
        className="tag tag-theme-color d-inline-flex mt-5"
      >
        Voir l&apos;article
      </Link>  */}
    </article>
  )
}

export default TeasePost
