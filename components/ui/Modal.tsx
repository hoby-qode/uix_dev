'use client'
import FormCommentsModal from '@/app/blog/components/comments/form/FormCommentsModal'
import React, { useState } from 'react'
import { TbCross } from 'react-icons/tb'

const Modal = ({
  isOpen,
  OnSetModal,
  idComment,
  idPost,
  title,
}: {
  isOpen: boolean
  OnSetModal: Function
  idComment: number
  idPost:number
  title: string
}) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-head">
          <div className="modal-head-title">Réponse à {title}</div>
          <div className="modal-head-close">
            <button
              onClick={() => OnSetModal(false)}
              className="tag tag-danger"
            >
              x
            </button>
          </div>
        </div>
        <div className="modal-content">
          <FormCommentsModal idComment={idComment} idPost={idPost} />
        </div>
      </div>
      <div className="modal-outer" onClick={() => OnSetModal(false)}></div>
    </div>
  )
}

export default Modal
