import React from 'react'
import { replie } from '@/src/types/types'
import TeaseComment from './TeaseComment'

const ListsComments = ({
  comments,
  postTitle,
}: {
  comments: any
  postTitle: string
}) => {
  const count = comments[0].length
  return (
    <div>
      <h2 style={{fontSize: "2.5rem"}}>
        {`${count > 1 ? count : 'Une'} réponse${
          count > 1 ? 's' : ''
        } pour ${postTitle}`}
      </h2>

      {comments[0].map((comment: replie, key: number) => (
        <TeaseComment comment={comment} key={key} />
      ))}
    </div>
  )
}

export default ListsComments
