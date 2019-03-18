import React from "react";
import CommentSection from "../CommentComponent/CommentSection";
import "./PostContainer.css";

class PostContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post, index) => (
          <div className="card" key={index}>
            <div className="card-profile">
              <img src={post.thumbnailUrl} alt={post.username} />
              {post.username}
            </div>
            <div className="post-img">
              <img src={post.imageUrl} alt={post.username} />
            </div>
            <div className="card-likes">
              <i className="far fa-heart" />
              <i className="far fa-comment" />
              <p>{post.likes} likes </p>
            </div>
            <div className="comments">
              <CommentSection comments={post.comments} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostContainer;
