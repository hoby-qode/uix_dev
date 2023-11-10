export async function getAllPosts(page:number, postsPerPage:number, skip:number) {
    const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/posts?_embed&page=${page}&per_page=${postsPerPage}&offset=${skip}`, { cache: 'force-cache' })
    
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function getPost(slug:string) {
    const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/posts?_embed&slug=${slug}`, { cache: 'force-cache' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function getCategories() {
    const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/posts?_embed`, { cache: 'force-cache' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function getTags() {
    const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/tags`, { cache: 'force-cache' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function GetPostsBytag(tag:string) {
  const getTag = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/tags?slug=${tag}`, { cache: 'force-cache' })
  if (!getTag.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }

  const tagJson = await getTag.json();
  if (!tagJson) {
    throw new Error('Erreur lors de la récupération des données')
  }
  
  const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/posts?tags=${tagJson[0].id}`, { cache: 'force-cache' })
  
  return res.json()
}