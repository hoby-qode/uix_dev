'use client'
import React, { useState } from 'react'
import TeaseComment from './TeaseComment'
import { getCommentsChild } from '@/src/query/comment.query'

const ShowMoreComments = ({ 
  idCommentParent,
  idPost ,
}: { 
  idCommentParent: any
  idPost: number
}) => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(0)
  const onLoadMoreComment = async () => {
    setLoading(1)
    const commentsChild = await getCommentsChild(
      parseInt(idCommentParent || '', 10),
    )
    setComments(commentsChild)
    setLoading(2)
  }
  return (
    <div>
      <div className="listsComments mb-5" style={{ marginLeft: '5rem' }}>
        {comments
          ? comments.map((comment, key) => (
              <TeaseComment key={key} comment={comment} idPost={idPost} />
            ))
          : ''}

        {loading === 0 ? (
          <button onClick={onLoadMoreComment}>Afficher les réponses</button>
        ) : loading === 1 ? (
          <button disabled>Loading...</button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ShowMoreComments
