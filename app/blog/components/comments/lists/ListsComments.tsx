import React from 'react';
import { replie } from '@/src/types/types';
import TeaseComment from './TeaseComment';
import styles from './comment.module.css'
const ListsComments = ({
  comments,
  postTitle,
  idPost
}: {
  comments: any;
  postTitle: string;
  idPost: number;
}) => {
  const count = comments[0].length;
  const sortedComments = comments[0].sort(
    (a: replie, b: replie) => a.parent - b.parent
  );

  const renderComments = (comment: replie) => (
    <div key={comment.id}>
      {/* Afficher le commentaire parent */}
      <TeaseComment comment={comment} idPost={idPost} />

      {/* Afficher les réponses associées */}
      {sortedComments
        .filter((c: replie) => c.parent === comment.id)
        .map((reply: replie) => (
          <div key={reply.id} className={`ml-5 ${styles.reply_comment}`}>
            {renderComments(reply)}
          </div>
        ))}
    </div>
  );

  return (
    <div>
      <h2 style={{ fontSize: '2.5rem' }}>
        {`${count > 1 ? count : 'Une'} réponse${
          count > 1 ? 's' : ''
        } pour ${postTitle}`}
      </h2>

      {sortedComments.map((comment: replie) =>
        comment.parent === 0 ? renderComments(comment) : null
      )}
    </div>
  );
};

export default ListsComments;
