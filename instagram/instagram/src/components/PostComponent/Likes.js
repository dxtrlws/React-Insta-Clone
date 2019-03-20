import React from "react";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      isLiked: false
    };
  }

  likeHandler = () => {
    if (!this.state.isLiked) {
      this.setState(prevState => ({ likes: prevState.likes + 1, isLiked: true }));
      
    } else {
      this.setState(prevState => ({ likes: prevState.likes - 1, isLiked: false }));
    }
    
  };
  render() {
    const style = {
      color: 'red'
    }
    return (
      <>
        {/* <button onClick={likeHandler}><i  className="far fa-heart" /></button> */}
        <i onClick={this.likeHandler} style={this.state.isLiked ? style : null} className="far fa-heart" />
        <i className="far fa-comment" />
        <p>{this.state.likes} likes </p>
      </>
    );
  }
}

export default Likes;
