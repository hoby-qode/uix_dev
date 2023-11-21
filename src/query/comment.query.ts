export async function getComments() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/comments&_embed`, { cache: 'no-store' })
    
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
}