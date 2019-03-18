import React from "react";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    };
  }

  likeHandler = () => {
    this.setState(prevState => {
      return { likes: prevState.likes + 1 };
    });
  };
  render() {
    return (
      <>
        {/* <button onClick={likeHandler}><i  className="far fa-heart" /></button> */}
        <i onClick={this.likeHandler} className="far fa-heart" />
        <i className="far fa-comment" />
        <p>{this.state.likes} likes </p>
      </>
    );
  }
}

export default Likes;
