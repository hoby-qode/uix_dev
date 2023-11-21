import React, { useState } from 'react'
import { createComment } from '@/app/actions/actions';
import { revalidatePath } from 'next/cache';
const FormComments = ({ idPost }: { idPost: number }) => {
    
  return (
    <form style={{marginTop: "8rem"}} autoComplete='off' action={async (formData:FormData) => {
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
      }}>
      <h2 className='like-h3'>Laisser un commentaire</h2>
      <div className="row">
        <div className="col-md-6 input-group mb-5 flex-column-reverse">
          <input type="text" placeholder="Hobitiana Marcel" id="prenom" name='author' style={{color:"hsl(var(--foreground))"}}/>
          <label htmlFor="prenom">Votre prénom</label>
        </div>
        <div className="col-md-6 input-group mb-5 flex-column-reverse">
          <input type="email" placeholder="contact@gmail.com" id="email" name='mail' style={{color:"hsl(var(--foreground))"}}/>
          <label htmlFor="email">Votre email</label>
        </div>
      </div>
      <div className="input-group mb-5 flex-column-reverse">
        <textarea
          placeholder="Bonjour,"
          id="commentaire"
          cols={10}
          rows={5}
          name='comment'
          style={{color:"hsl(var(--foreground))"}}
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
