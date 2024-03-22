export async function findAllPorfolios() {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/hq_portfolio?_embed&status=publish`, { cache: 'force-cache' })
    
    // if (!res.ok) {
    //   throw new Error('Erreur lors de la récupération des données')
    // }
    // return res.json()
}

export async function findProjectBySlug(slug:string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/portfolio?_embed`, 
    { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function getAllProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/portfolio?status=publish&_embed`, 
  { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}


export async function getFeaturedMedia(idMedia:number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/media/${idMedia}?_fields=media_details,title`, 
  { cache: 'no-store' })
  
  if (!res.ok) {
    return null
  }
  return res.json()
}