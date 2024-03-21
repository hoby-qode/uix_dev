"use client"
import React, { useState } from 'react'
import {useFormStatus} from 'react-dom'

import { createComment } from '@/app/actions/actions';

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
        <Submit />
      </div>
    </form>
  )
}
function Submit() {
  const status = useFormStatus();
   return <button type="submit" className="btn btn-primary" disabled={status.pending}>{status.pending ? 'Loading...' : 'Envoyer'}</button>
}
export default FormComments
