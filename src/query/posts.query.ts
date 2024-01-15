export async function getCountOfAllPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?status=publish&_fields=id`, 
  { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return parseInt(res.headers.get('x-wp-total') || '' , 10)
}

export async function getCountOfAllPostsByTag(tag:string) {
  const getTag = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/tags?slug=${tag}&status=publish`, { cache: 'force-cache' })
  if (!getTag.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }

  const tagJson = await getTag.json();
  if (!tagJson) {
    throw new Error('Erreur lors de la récupération des données')
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?tags=${tagJson[0].id}&_fields=id`, 
  { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}

export async function getFeaturedMedia(idMedia:number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/media/${idMedia}?_fields=media_details,title`, 
  { cache: 'force-cache' })
  
  if (!res.ok) {
    return null
  }
  return res.json()
}

export async function findPosts(page:number, postsPerPage:number, skip:number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?_embed&page=${page}&per_page=${postsPerPage}&offset=${skip}&status=publish`, 
  { cache: 'force-cache' })
  
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}

export async function findPostBySlug(slug:string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?_embed&slug=${slug}&status=publish&_fields=id,title,slug,content,excerpt,featured_media,acf,tags`, 
  { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}

export async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/category?hide_empty=true`, { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}

export async function getTags() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/tags?hide_empty=true`, { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}

export async function findPostsBytag(tag:string, page:number, postsPerPage:number, skip:number) {
  const getTag = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/tags?slug=${tag}&status=publish`, { cache: 'force-cache' })
  if (!getTag.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }

  const tagJson = await getTag.json();
  if (!tagJson) {
    throw new Error('Erreur lors de la récupération des données')
  }
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?tags=${tagJson[0].id}&_embed&page=${page}&per_page=${postsPerPage}&offset=${skip}&status=publish`, { cache: 'force-cache' })
  return res.json()
}

export async function getAllPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?status=publish&_fields=slug`, 
  { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}