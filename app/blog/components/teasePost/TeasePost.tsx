'use client'
import React from 'react'
import styles from './TeasePost.module.css'
import Link from 'next/link'
import Image from 'next/image'
import InnerHTML from '@/components/ui/InnerHTML'
import { embeddable } from '@/src/types/types'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const TeasePost = ({ article }: { article: embeddable }) => {
  const date = new Date(article.date)
  const createdAt = date.toLocaleDateString()

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
    >
      {article._embedded['wp:featuredmedia'] ? (
        <div className="picture">
          <Link
            href={`/blog/${article.slug}`}
            className={`position-relative cover zoom aspect-16-9 radius d-flex ${styles.linkImage}`}
          >
            {article._embedded['wp:featuredmedia']['0'].source_url ? (
              <Image
                src={article._embedded['wp:featuredmedia']['0'].source_url}
                alt="Lorem ipsum"
                style={{ objectFit: 'cover' }}
                fill={true}
                sizes="(max-width: 768px) 100%, 33%"
              />
            ) : (
              <Skeleton height={136} />
            )}
          </Link>
        </div>
      ) : (
        ''
      )}
      <h3 className="like-h4 color-primary">
        {article.title.rendered ? (
          <Link href={`/blog/${article.slug}`}>
            <p dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
          </Link>
        ) : (
          <Skeleton />
        )}
      </h3>
      <div className={styles.date}>Publié le : {article.date}</div>
      {article.excerpt ? (
        <div className={styles.resum}>
          <InnerHTML html={{ __html: article.excerpt.rendered.slice(0, 175) }} />
        </div>
      ) : (
        ''
      )}
      <Link
        href={`/blog/${article.slug}`}
        title="Lorem ipsum"
        className="tag tag-theme-color d-inline-flex mt-5"
      >
        Voir l&apos;article
      </Link>
    </motion.article>
  )
}

export default TeasePost
