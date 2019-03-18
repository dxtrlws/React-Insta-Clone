import React from "react";
// import CommentSection from "./CommentSection"

const CommentForm = props => {
  return (
    <form className="comment-form" onSubmit={props.addNewComment}>
      <input
        name="comment"
        className="comment"
        type="text"
        placeholder="Add a comment"
        value={props.comment}
        onChange={props.commentHandler}
      />
    </form>
  );
};

export default CommentForm;
