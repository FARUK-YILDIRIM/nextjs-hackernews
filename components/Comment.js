const Comment = ({ comment }) =>
  console.log(comment) || (
    <div className="comment">
      <div className="comment-user">{comment.user}</div>
      <div
        className="comment-content"
        dangerouslySetInnerHTML={{ __html: comment.content }}
      ></div>
    </div>
  );

export default Comment;
