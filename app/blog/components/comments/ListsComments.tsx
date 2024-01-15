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
  console.log(comments)

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
      {comments.length > 0 ? (
        <h2 style={{ fontSize: '2.5rem' }}>
          {`${count > 1 ? count : 'Une'}dzadza réponse${
            count > 1 ? 's' : ''
          } pour ${postTitle}`}
        </h2>
      ) : (
        ''
      )}
      {comments.length > 0
        ? comments.map((comment: any) => renderComments(comment))
        : ''}
    </section>
  )
}

export default ListsComments
