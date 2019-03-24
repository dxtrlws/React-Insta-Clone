import React from "react";
import PropTypes from 'prop-types'
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

CommentForm.propTypes = {
  comment: PropTypes.string,
  commentHandler: PropTypes.func,
  addNewComment: PropTypes.func
}

export default CommentForm;
