export interface projectType {
  id:         number | undefined
  title:      string
  slug:       string
  desc:       string
  technos:    string[] | undefined | null
  picture:    string
  services:   string[] | undefined | null
  source:     string | undefined | null
  category:   string | undefined |null
}

// export interface post {
//   id:     number
//   date:   Date
// }
export interface Post {
  id: number
  date: Date
  date_gmt: Date
  guide: {
    rendered : string
  },
  modified: Date
  modified_gmt: Date
  slug: string
  status: string
  type: string
  link: string
  title: {
      rendered: string
  },
  content: {
      rendered: string
      protected: boolean
  },
  excerpt: {
      rendered: string
      protected: boolean
  },
  author: number,
  featured_media: number,
  comment_status: "open" | "close"
  ping_status: "open" | "close"
  sticky: boolean,
  template: string
  format: string
  meta: object,
  categories: number[]
  tags: number[]
  _links: {
      self: [
          {
            href: string
          }
      ],
      collection: [
          {
            href: string
          }
      ],
      about: [
          {
            href: string
          }
      ],
      author: [
          {
            embeddable: boolean
            href: string
          }
      ],
      replies: [
          {
            embeddable: boolean
            href: string
          }
      ],
      "version-history": [
          {
            count: number
            href: string
          }
      ],
      "predecessor-version": [
          {
            id: number
            href: string
          }
      ],
      "wp:featuredmedia": [
          {
            embeddable: boolean
            href: string
          }
      ],
      "wp:attachment": [
          {
            href: string
          }
      ],
      "wp:term": [
          {
            taxonomy: string
            embeddable: boolean
            href: string
          }
      ],
      curies: [
          {
              name:string
              href: string
              templated: boolean
          }
      ]
  }
}
export interface embeddable extends Post {
  _embedded: {
    author: author[]
    replies: [
      replie
    ]
    "wp:featuredmedia": wp_featuredmedia[]
  }
} 
export interface author {
  id: number
  name: string
  url : string
  description: string
  link: string
  slug: string
  "avatar_urls": {},
  _links: {
      self: [
          {
            href: string
          }
      ],
      collection: [
          {
            href: string
          }
      ]
  }
}
export interface replie {
  id: number
  parent: number
  author: number
  author_name: string
  author_url: string
  date: Date
  content: {
    rendered: string
  }
  link: string
  type: "comment"
  author_avatar_urls: {}
  _links: {
    self: [
      {
        href: string
      }
    ]
    collection: [
      {
        href: string
      }
    ]
    author: [
      {
        embeddable: boolean
        href: string
      }
    ]
    up: [
      {
        embeddable: boolean
        post_type: string
        href: string
      }
    ]
  }
}
export interface wp_featuredmedia {
  id: number
  date: Date
  slug: string
  type: string
  link: string
  title: {
    rendered: string
  }
  author:number
  caption: {
    rendered: string
  }
  alt_text: string
  media_type: string
  media_details: {
    width: number
    height: number
    file: string
    sizes: {
      medium: sizeImage
      large: sizeImage
      thumbnail: sizeImage
      medium_large: sizeImage
      "post-thumnail": sizeImage
      full: sizeImage
    }
    image_meta: image_meta
  }
  source_url: string
  _links: {
    self: [
        {
          href: string
        }
    ],
    collection: [
        {
          href: string
        }
    ],
    about: [
        {
          href: string
        }
    ],
    author: [
        {
          embeddable: boolean
          href: string
        }
    ],
    replies: [
        {
          embeddable: boolean
          href: string
        }
    ],
  }
}
export interface sizeImage {
  file: string
  width: number
  height: number
  mime_type: string
  source_url: string
}
export interface image_meta {
  aperture: string
  credit: string
  camera: string
  caption: string
  created_timestamp: string
  copyright: string
  focal_length: string
  iso: string
  shutter_speed: string
  title: string
  orientation: string
  keywords: []
}
