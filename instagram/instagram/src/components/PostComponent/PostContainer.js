import React from "react";
import CommentSection from "../CommentComponent/CommentSection";
import "./PostContainer.css";
import Likes from './Likes'

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
            <Likes likes = {post.likes} />
            </div>
            <div className="comments">
              <CommentSection comments={post.comments} username={this.props.username} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostContainer;
