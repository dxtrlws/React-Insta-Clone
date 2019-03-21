import styled from 'styled-components'

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

const Comments = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`;

export {Card, CardLikes, CardProfile, UserThumbnail, PostImage, Comments}