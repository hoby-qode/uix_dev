export async function findAllPorfolios() {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/hq_portfolio?_embed&status=publish`, { cache: 'force-cache' })
    
    // if (!res.ok) {
    //   throw new Error('Erreur lors de la récupération des données')
    // }
    // return res.json()
}

export async function findProjectBySlug(slug:string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/portfolio`, 
    { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}

export async function getAllProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/portfolio?status=publish&_fields=slug`, 
  { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}