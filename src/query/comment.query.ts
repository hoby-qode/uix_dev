export async function getComments() {
    const res = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/comments&_embed`, { cache: 'no-store' })
    
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}