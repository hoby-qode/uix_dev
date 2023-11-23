export async function findAllPosts() {
  console.log(`http://uixdev.s193304.mos2.atester.fr/wp-json/wp/v2/posts?status=publish`);
  
  const res = await fetch(`http://uixdev.s193304.mos2.atester.fr/wp-json/wp/v2/posts?status=publish`, { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}

export async function findPosts(page:number, postsPerPage:number, skip:number) {
    const res = await fetch(`http://uixdev.s193304.mos2.atester.fr/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${postsPerPage}&offset=${skip}&status=publish`, { cache: 'no-cache' })
    
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function findPostBySlug(slug:string) {
    const res = await fetch(`http://uixdev.s193304.mos2.atester.fr/wp-json/wp/v2/posts?_embed&slug=${slug}&status=publish`, { cache: 'force-cache' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function getCategories() {
    const res = await fetch(`http://uixdev.s193304.mos2.atester.fr/wp-json/wp/v2/category?hide_empty=true`, { cache: 'force-cache' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function getTags() {
    const res = await fetch(`http://uixdev.s193304.mos2.atester.fr/wp-json/wp/v2/tags?hide_empty=true`, { cache: 'force-cache' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function findPostsBytag(tag:string) {
  const getTag = await fetch(`http://uixdev.s193304.mos2.atester.fr/wp-json/wp/v2/tags?slug=${tag}&status=publish`, { cache: 'force-cache' })
  if (!getTag.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }

  const tagJson = await getTag.json();
  if (!tagJson) {
    throw new Error('Erreur lors de la récupération des données')
  }
  
  const res = await fetch(`http://uixdev.s193304.mos2.atester.fr/wp-json/wp/v2/posts?tags=${tagJson[0].id}&_embed&status=publish`, { cache: 'force-cache' })
  console.log(`http://uixdev.s193304.mos2.atester.fr/wp-json/wp/v2/posts?tags=${tagJson[0].id}&?_embed`);
  
  return res.json()
}