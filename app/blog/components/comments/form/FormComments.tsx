import React, { useState } from 'react'
import { createComment } from '@/app/actions/actions';
import { revalidatePath } from 'next/cache';
const FormComments = ({ idPost }: { idPost: number }) => {
    
  return (
    <form action={async (formData:FormData) => {
        'use server'
        const data = JSON.stringify({
          // status: 'approved',
          post: idPost,
          author_name: formData.get('author'),
          author_email: formData.get('mail'),
          content: formData.get('comment'),
        })
        
        try {
          const reponse = await fetch(
            `${process.env.WORDPRESS_API_ENDPOINT}/comments/`,
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
      }}>
      <div className="input-group">
        <input type="text" placeholder="Votre prénom" id="prenom" name='author'/>
        <label htmlFor="prenom">Votre prénom</label>
      </div>
      <div className="input-group">
        <input type="email" placeholder="Votre mail" id="email" name='mail'/>
        <label htmlFor="email">Votre email</label>
      </div>
      <div className="input-group">
        <textarea
          placeholder="Votre commentaire"
          id="commentaire"
          cols={10}
          rows={5}
          name='comment'
          ></textarea>
        <label htmlFor="commentaire">Votre commentaire</label>
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </div>
    </form>
  )
}

export default FormComments
