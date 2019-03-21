import React from "react";
import CommentSection from "../CommentComponent/CommentSection";
import "./PostContainer.css";
import styled from "styled-components";
import Likes from "./Likes";

const Card = styled.div`
  margin-top: 40px;
  width: 640px;
  height: auto;
  border: 1px solid lightgray;
`;
const CardProfile = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 15px;
  font-weight: bold;
`;
const UserThumbnail = styled.img`
  border-radius: 50%;
  width: 35px;
  margin-right: 10px;
`;

const PostImage = styled.img`
  margin-bottom: 20px;
`;

const CardLikes = styled.div`
  margin-left: 15px;
  p {
    font-weight: bold;
  }
  .far {
    font-size: 24px;
    padding-right: 20px;
  }
`;

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
            <div className="comments">
              <CommentSection
                comments={post.comments}
                username={this.props.username}
              />
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default PostContainer;
