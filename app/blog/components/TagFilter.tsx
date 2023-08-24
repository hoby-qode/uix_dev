import { Tag } from '@prisma/client';
import Link from 'next/link'
import React from 'react'

const TagFilter = ({tags}:{tags:Tag[]}) => {
  return (
    <div>
      <h3>Tag:</h3>
      <div className="tags">
        {tags.map((tag: any, key:number) => (
          <Link
            href={`/blog/tags/${tag.slug}`}
            className="tag tag-outline-theme d-inline-flex mr-2 mb-2"
            key={key}
          >
            {tag.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TagFilter
