export async function getTotalPostCount() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?status=publish&_fields=id`, 
  { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }
  return parseInt(res.headers.get('x-wp-total') || '', 10);
}

export async function getPostCountByTag(tag:string) {
  const tagRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/tags?slug=${tag}`, { cache: 'no-store' });
  if (!tagRes.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }

  const tagJson = await tagRes.json();
  if (!tagJson.length) {
    throw new Error('Tag non trouvé');
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?tags=${tagJson[0].id}&_fields=id`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }
  return parseInt(res.headers.get('x-wp-total') || '', 10);
}

export async function getMediaDetails(idMedia:number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/media/${idMedia}?_fields=media_details,title`, 
  { cache: 'no-store' });
  
  if (!res.ok) {
    return null;
  }

  const mediaJson = await res.json();
  if (!mediaJson) {
    return null;
  }

  return mediaJson;
}

export async function getPosts(page:number, postsPerPage:number, skip:number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?_embed&page=${page}&per_page=${postsPerPage}&offset=${skip}&status=publish`, 
  { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }
  return res.json();
}

export async function getPostBySlug(slug:string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?_embed&slug=${slug}&status=publish&_fields=id,title,slug,content,excerpt,featured_media,acf,tags`, 
  { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/category?hide_empty=true`, { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}

export async function getTags() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/tags?hide_empty=true`, { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  console.log(res)
  return res.json()
}

export async function getPostsByTag(tag:string, page:number, postsPerPage:number, skip:number) {
  const tagRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/tags?slug=${tag}`, { cache: 'no-store' });
  if (!tagRes.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }

  const tagJson = await tagRes.json();
  if (!tagJson.length) {
    throw new Error('Tag non trouvé');
  }
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?tags=${tagJson[0].id}&_embed&page=${page}&per_page=${postsPerPage}&offset=${skip}&status=publish`, { cache: 'force-cache' });
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }
  return res.json();
}

export async function getAllPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/posts?status=publish&_fields=slug`, 
  { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}