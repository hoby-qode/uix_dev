'use server'

import { revalidatePath } from 'next/cache';
export async function createComment(formData: FormData, postId:number) {
  const data = JSON.stringify({
    post: postId,
    author_name: formData.get('author'),
    author_email: formData.get('mail'),
    content: formData.get('comment'),
  });
  console.log(data);
  try {
    const reponse = await fetch(`${process.env.WORDPRESS_API_ENDPOINT}/comments/`, {
      method: "POST", // ou 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
  
  revalidatePath('/blog/[slug]', 'page')  
}
