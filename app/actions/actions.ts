'use server'
import { revalidatePath } from 'next/cache';
export async function createComment(idPost:number,formData: FormData) {
  const data = JSON.stringify({
    post: idPost,
    author_name: formData.get('author'),
    author_email: formData.get('mail'),
    content: formData.get('comment'),
  })
  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/comments/`,
      {
        method: 'POST', // ou 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      },
    )
  } catch (erreur) {
    console.error('Erreur :', erreur)
  }

  revalidatePath('/blog/[slug]', 'page')
}

export async function replyComment({idPost, idComment}:{idPost:number;idComment:number},formData: FormData) {

  const data = JSON.stringify({
    post: idPost,
    author_name: formData.get('author'),
    author_email: formData.get('mail'),
    content: formData.get('comment'),
    parent: idComment
  })
  
  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT}/comments/`,
      {
        method: 'POST', // ou 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      },
    )
  } catch (erreur) {
    console.error('Erreur :', erreur)
  }

  revalidatePath('/blog/[slug]', 'page')
}

export async function sendMailBrevoApi(prevState:any, formData: FormData) {
  console.log(formData);
  
  const response = await fetch(
    `${process.env.ENDPOINT_API_BREVO}/contacts/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': `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`
      },
      body: JSON.stringify({email: formData.get('email')}),
    },
  );

  if (!response.ok) {
    // La requête a retourné un code d'erreur (par exemple, 404, 500)
    console.error('Erreur de requête:', response.status, response.statusText);
  } else {
    // La requête a réussi
    console.log('Requête réussie !');
    return 'Abonné à mon newsletter est bien réussie'
  }

  revalidatePath('/blog/[slug]', 'page')
}

