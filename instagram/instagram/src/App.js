import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./App.css";

import PostsPage from "./components/PostComponent/PostsPage";
import withAuthenticate from './components/authentication/withAuthenticate'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

class App extends Component {
 
  render() {
    return (
      <div className="container">
        <div>
          <ComponentFromWithAuthenticate />
          />
        </div>
      </div>
    );
  }
}

export default App;
