import React from "react";

function withAuthenticate(PostsPage, Login) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
      };
    }
    componentDidMount = () => {
      // Store user name if available
      const user = localStorage.getItem("username");
      // Check if there is a user name and update state
      user
        ? this.setState({ isLoggedIn: true })
        : this.setState({ isLoggedIn: false });
    };
    render() {
        // Checks to see if the user is logged in or not and renders the correct component
      return <div>{this.state.isLoggedIn ? <PostsPage /> : <Login />}</div>;
    }
  };
}

export default withAuthenticate;
