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