import React from 'react'
import styles from './TeasePost.module.css'
import Link from 'next/link'
import Image from 'next/image'
const TeasePost = ({article}:{article:any}) => {
  console.log(article.createdAt);
  const date = new Date(article.createdAt);
  const createdAt = date.toLocaleDateString();
  
  return (
    <article className={styles.card}>
      <div className="picture">
        <Link href="#" className='position-relative cover zoom aspect-16-9 radius d-flex'>
          <Image
            src={article.picture}
            alt="Lorem ipsum"
            layout="fill"
            fill={true}
            objectFit="cover"
            sizes="(max-width: 768px) 100%, 33%"
          />
        </Link>
      </div>
      <h3 className="like-h4 color-primary">
        <Link href="#">{article.title}</Link>
      </h3>
      <div className={styles.date}>Publié le : {createdAt}</div>
      <div>
        {article.resum} 
      </div>
      <Link
        href={`/blog/${article.slug}`}
        title="Lorem ipsum"
        className="tag tag-theme-color d-inline-flex mt-5"
      >
        Voir l&apos;article
      </Link>
    </article>
  )
}

export default TeasePost
