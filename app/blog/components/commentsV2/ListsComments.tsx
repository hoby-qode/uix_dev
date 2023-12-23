import ShowMoreComments from './ShowMoreComments'
import TeaseComment from './TeaseComment'

const ListsComments = ({
  comments,
  postTitle,
  idPost,
}: {
  comments: any
  postTitle: string
  idPost: number
}) => {
  const count = comments.length
  const renderComments = (comment: any) => (
    <div key={comment.id}>
      <TeaseComment comment={comment} idPost={idPost} />
      {comment._links.children ? (
        <ShowMoreComments idCommentParent={comment.id} idPost={idPost} />
      ) : (
        ''
      )}
    </div>
  )
  return (
    <section className="listsComments mt-5">
      <h2 style={{ fontSize: '2.5rem' }}>
        {`${count > 1 ? count : 'Une'} réponse${
          count > 1 ? 's' : ''
        } pour ${postTitle}`}
      </h2>
      {comments
        ? comments.map((comment: any) => renderComments(comment))
        : 'loading...'}
    </section>
  )
}

export default ListsComments
