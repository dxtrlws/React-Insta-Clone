import React, { Component } from "react";
import "./App.css";

import PostsPage from "./components/PostComponent/PostsPage";
import withAuthenticate from "./components/authentication/withAuthenticate";
import Login from "./components/Login/Login";

// set variable equal to high order component
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage, Login);

class App extends Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
