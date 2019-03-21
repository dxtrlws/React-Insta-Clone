import React from "react";
import { FormComment, Comment } from "./Styles";

const CommentForm = props => {
  return (
    <FormComment onSubmit={props.addNewComment}>
      <Comment
        name="comment"
        type="text"
        placeholder="Add a comment"
        value={props.comment}
        onChange={props.commentHandler}
      />
    </FormComment>
  );
};

export default CommentForm;
