export async function findServicebySlug(slug:string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/service?_embed&slug=${slug}&status=publish&_fields=id,title,slug,content,excerpt,featured_media,acf,tags`, 
    { cache: 'force-cache' })
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    return res.json()
  }
  