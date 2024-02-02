export async function getCommentsByIdPost(idPost:number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/comments/?post=${idPost}&parent=0`, { cache: 'no-cache' })
  
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}

export async function getCommentsChild(idCommentParent:number) {
  console.log(idCommentParent);
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/comments/?parent=${idCommentParent}`, { cache: 'no-cache' })
  
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}