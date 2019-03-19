import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./App.css";

import PostsPage from "./components/PostComponent/PostsPage";
import SearchBar from "./components/SearchComponent/SearchBar";

class App extends Component {
 
  render() {
    return (
      <div className="container">
        <div>
          <PostsPage />
          />
        </div>
      </div>
    );
  }
}

export default App;
