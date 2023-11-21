'use server'
import { revalidatePath } from 'next/cache';
export async function createComment(formData: FormData) {

  const data = JSON.stringify({
    // status: 'approved',
    post: 31,
    author_name: formData.get('author'),
    author_email: formData.get('mail'),
    content: formData.get('comment'),
  })
  try {
    const reponse = await fetch(
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

export async function replyComment({idPost, idComment},formData: FormData) {

  const data = JSON.stringify({
    post: idPost,
    author_name: formData.get('author'),
    author_email: formData.get('mail'),
    content: formData.get('comment'),
    parent: idComment
  })
  
  try {
    const reponse = await fetch(
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

