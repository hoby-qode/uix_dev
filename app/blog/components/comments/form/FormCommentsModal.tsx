'use client'
import React, { useState } from 'react'
import { useFormStatus } from 'react-dom'

import { replyComment } from '@/app/actions/actions'
import { toast } from 'react-toastify'
const FormCommentsModal = ({
  idComment,
  idPost,
  OnSetModal,
}: {
  idComment: number
  idPost: number
  OnSetModal: Function
}) => {
  async function clientAction(formData: FormData) {
    const replyCommentWithId = replyComment.bind(null, { idPost, idComment })
    const result = await replyCommentWithId(formData)
    if (result?.error) {
      toast.error('Une erreur a été produite')
    } else {
      toast.success('Votre commentaire est bien pris en compte')
      OnSetModal(false)
    }
  }
  return (
    <form action={clientAction}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Votre prénom"
          id="prenom"
          name="author"
        />
        <label htmlFor="prenom">Votre prénom</label>
      </div>
      <div className="input-group">
        <input type="email" placeholder="Votre mail" id="email" name="mail" />
        <label htmlFor="email">Votre email</label>
      </div>
      <div className="input-group">
        <textarea
          placeholder="Votre commentaire"
          id="commentaire"
          cols={10}
          rows={5}
          name="comment"
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
  const status = useFormStatus()
  return (
    <button type="submit" className="btn btn-primary" disabled={status.pending}>
      {status.pending ? 'Loading...' : 'Envoyer'}
    </button>
  )
}
export default FormCommentsModal
