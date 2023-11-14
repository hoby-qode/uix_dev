import Anchor from '@/components/ui/Anchor'
import { getComments } from '@/src/query/comment.query'
import { revalidatePath } from 'next/cache'
import React from 'react'

export const revalidate = 10
export default async function Test() {
  const comments = await getComments()

  return (
    <div className="container">
      <Anchor />
      <form
        action={async (formData: FormData) => {
          'use server'
          const data = JSON.stringify({
            // status: 'approved',
            post: 9,
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
            ).then(() => {
            })
          } catch (erreur) {
            console.error('Erreur :', erreur)
          }

          revalidatePath('/blog/[slug]', 'page')
        }}
      >
        <div className="input-group">
          <input
            type="text"
            placeholder="Votre prénom"
            id="prenom"
            name="author"
            style={{ color: '#fff' }}
          />
          <label htmlFor="prenom">Votre prénom</label>
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Votre mail"
            id="email"
            name="mail"
            style={{ color: '#fff' }}
          />
          <label htmlFor="email">Votre email</label>
        </div>
        <div className="input-group">
          <textarea
            placeholder="Votre commentaire"
            id="commentaire"
            cols={10}
            rows={5}
            name="comment"
            style={{ color: '#fff' }}
          ></textarea>
          <label htmlFor="commentaire">Votre commentaire</label>
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </div>
      </form>
      <div className="listing row">
        {comments.map((cat, key) => (
          <div
            className="card col-md-6"
            style={{ border: '1px solid red' }}
            key={key}
          >
            <h5>{cat.author_name}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}
