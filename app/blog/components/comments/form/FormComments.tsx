import React, { useState } from 'react'
import { createComment } from '@/app/actions/actions';
import { revalidatePath } from 'next/cache';
const FormComments = ({ idPost }: { idPost: number }) => {
  const CommentWithId = createComment.bind(null,idPost)
  return (
    <form style={{marginTop: "8rem"}} autoComplete='off' action={CommentWithId} >
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
