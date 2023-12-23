'use client'
import React, { useEffect, useRef, useState } from 'react'
import { replie } from '@/src/types/types'
import TeaseComment from './TeaseComment'
import styles from './comment.module.css'
import { inView } from 'framer-motion'
import { getCommentsChild } from '@/src/query/comment.query'
const ListsComments = ({
  comments,
  postTitle,
  idPost,
}: {
  comments: any
  postTitle: string
  idPost: number
}) => {
  const count = comments[0].length
  const [commentsReplies, setCommentReplies] = useState([])

  async function onShowMoreComments(idCommentParent: number) {
    const commentsChild = await getCommentsChild(idCommentParent)
    setCommentReplies([...commentsReplies, commentsChild[0]])
  }

  const renderComments = (comment: replie) => (
    <div key={comment.id} className="test">
      {/* Afficher le commentaire parent */}
      <TeaseComment comment={comment} idPost={idPost} />
      {comment.parent !== 0 ? (
        <ShowMoreComments
          idCommentParent={comment.id}
          onShowMoreComments={onShowMoreComments}
        />
      ) : (
        'pas de reponse'
      )}
      {/* Afficher les réponses associées */}
      {/* {commentsReplies
        ? commentsReplies
            .filter((c: replie) => c.parent === comment.id)
            .map((reply: replie) => (
              <div key={reply.id} className={`ml-5 ${styles.reply_comment}`}>
                <TeaseComment comment={comment} idPost={idPost} />
              </div>
            ))
        : 'loading...'} */}
    </div>
  )

  return (
    <div>
      <h2 style={{ fontSize: '2.5rem' }}>
        {`${count > 1 ? count : 'Une'} réponse${
          count > 1 ? 's' : ''
        } pour ${postTitle}`}
      </h2>
      {comments
        ? comments.map((comment: replie) => renderComments(comment))
        : 'loading...'}
    </div>
  )
}
export const ShowMoreComments = ({
  idCommentParent,
  onShowMoreComments,
}: {
  idCommentParent: number
  onShowMoreComments: Function
}) => {
  return (
    <button
      className="tag tag-primary ml-5 mb-5"
      onClick={() => onShowMoreComments(idCommentParent)}
    >
      Affiche les réponses {idCommentParent}
    </button>
  )
}
export default ListsComments
