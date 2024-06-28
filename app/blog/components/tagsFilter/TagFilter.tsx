import Link from 'next/link'
import React from 'react'

const TagFilter = ({ tags, tagCurrent }: { tags: any; tagCurrent?: any }) => {
  return (
    <div>
      <h3>Tag:</h3>
      <div className="tags">
        {tags.map((tag: any, key: number) => (
          <Link
            href={`/blog/tags/${tag.slug}`}
            className={`tag tag-outline-theme d-inline-flex mr-2 mb-2 ${
              tagCurrent ? (tagCurrent.includes(tag.slug) ? 'active' : '') : ''
            }`}
            key={key}
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TagFilter
