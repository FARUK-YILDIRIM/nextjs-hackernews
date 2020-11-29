const Comment = ({ comment }) =>
  console.log(comment) || (
    <div className="comment">
      <div className="comment-user">{comment.user}</div>
      <div
        className="comment-content"
        dangerouslySetInnerHTML={{ __html: comment.content }}
      />
      {comment.comments && (
        <div className="nested-comments">
          {comment.comments.map((nestedComment) => (
            <Comment key={nestedComment.id} comment={nestedComment} />
          ))}
        </div>
      )}

      <style jsx>{`
        .comment {
            margin-bottom: 1.5em;

        }
        .comment-user{
            font-size: 0.9rem;
            font-wight: bold;
            margin-bottom:0.5em;
        }
        .comment-content {
            font-size: 0.9rem;
        }
        .comment-content p{
            margin:0;
            margin-bottom;0.5em;
            word-wrap: break-word;
        }
        .comment-content a {
            color: #f60;
            text-decoration: underline;
        }
        .comment-content pre {
            max-wight: 100%;
            overflow: scroll;
        }
        .nested-comments {
            margin-top:1em;
            border-left:1px solid rgb(0,0,0,0.1);
            padding-left: 1em;
        }
      `}</style>
    </div>
  );

export default Comment;
