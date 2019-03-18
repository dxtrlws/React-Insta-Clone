import React, { Component } from 'react';
import dummyData from "./dummy-data"
import './App.css'

import PostContainer from './components/PostComponent/PostContainer'
import SearchBar from './components/SearchComponent/SearchBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount = () => {
    this.setState({ posts: dummyData})
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <div>
          <PostContainer posts = {this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
