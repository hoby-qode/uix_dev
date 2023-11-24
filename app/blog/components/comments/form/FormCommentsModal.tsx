import React, { useState } from 'react'
import {useFormStatus} from 'react-dom'

import {replyComment} from '@/app/actions/actions'
const FormCommentsModal = ({ idComment, idPost }: { idComment: number,idPost:number }) => {
  const replyCommentWithId = replyComment.bind(null,{idPost, idComment})
  return (
    <form action={replyCommentWithId}>
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
          name='comment'></textarea>
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
  console.log(status);
  
   return <button type="submit" className="btn btn-primary" disabled={status.pending}>{status.pending ? 'Loading...' : 'Envoyer'}</button>
}
export default FormCommentsModal
