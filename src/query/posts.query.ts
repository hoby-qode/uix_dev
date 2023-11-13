export async function findAllPosts() {
  const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/posts?status=publish`, { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}

export async function findPosts(page:number, postsPerPage:number, skip:number) {
    const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/posts?_embed&page=${page}&per_page=${postsPerPage}&offset=${skip}&status=publish`, { cache: 'force-cache' })
    
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function findPostBySlug(slug:string) {
    const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/posts?_embed&slug=${slug}&status=publish`, { cache: 'force-cache' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function getCategories() {
    const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/category?hide_empty=true`, { cache: 'force-cache' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function getTags() {
    const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/tags?hide_empty=true`, { cache: 'force-cache' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function findPostsBytag(tag:string) {
  const getTag = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/tags?slug=${tag}&status=publish`, { cache: 'force-cache' })
  if (!getTag.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }

  const tagJson = await getTag.json();
  if (!tagJson) {
    throw new Error('Erreur lors de la récupération des données')
  }
  
  const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/posts?tags=${tagJson[0].id}&_embed&status=publish`, { cache: 'force-cache' })
  console.log(`${process.env.WORDPRESS_API_ENDPOINT}/posts?tags=${tagJson[0].id}&?_embed`);
  
  return res.json()
}