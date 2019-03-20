import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";
import CommentForm from "./CommentForm";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  commentHandler = (event) => {
    // Set comment state with the input values from comment input form
    this.setState({[event.target.name]: event.target.value})
  };

  addNewComment = (event) => {
    // 1. prevent default action for form
    event.preventDefault();
    // 2. Create new comment with a default user
    const newComment = {text: this.state.comment, username: this.props.username}
    // 3. Create new comments array with the new comment
    const comments = [...this.state.comments, newComment]
    // 4. Set the state with the new comments array
    this.setState({comments, comment: ""})
    
  };

  render() {
    return (
      <>
        {this.state.comments.map((comment, index) => (
          <div key={index}>
            <p>
              <b>{comment.username}</b> {comment.text}
            </p>
          </div>
        ))}
        <hr />
        <CommentForm
          commentHandler={this.commentHandler}
          addNewComment={this.addNewComment}
          comment={this.state.comment}
        />
      </>
    );
  }
}

CommentSection.defaultProps = {
  username: "dxtrlws"
};

export default CommentSection;
