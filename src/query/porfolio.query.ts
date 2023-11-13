export async function findAllPorfolios() {
    const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/hq_portfolio?_embed&status=publish`, { cache: 'force-cache' })
    
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}