import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./App.css";

import PostsPage from "./components/PostComponent/PostsPage";
import withAuthenticate from './components/authentication/withAuthenticate'
import Login from './components/Login/Login'

// set variable equal to high order component
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage,Login)

class App extends Component {
  constructor(){
    super()
    this.state ={
      isLoggedIn: false
    }
  }


 
  render() {
    return (
      <div className="container">
        <div>
          <ComponentFromWithAuthenticate  />
        </div>
      </div>
    );
  }
}

export default App;
