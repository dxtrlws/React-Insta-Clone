import React from "react";
import CommentSection from "../CommentComponent/CommentSection";
import {
  Card,
  CardLikes,
  CardProfile,
  UserThumbnail,
  PostImage,
  Comments
} from "./Styles";
import Likes from "./Likes";

class PostContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post, index) => (
          <Card key={index}>
            <CardProfile>
              <UserThumbnail src={post.thumbnailUrl} alt={post.username} />
              {post.username}
            </CardProfile>
            <PostImage src={post.imageUrl} alt={post.username} />
            <CardLikes>
              <Likes likes={post.likes} />
            </CardLikes>
            <Comments>
              <CommentSection
                comments={post.comments}
                username={this.props.username}
              />
            </Comments>
          </Card>
        ))}
      </div>
    );
  }
}

export default PostContainer;
