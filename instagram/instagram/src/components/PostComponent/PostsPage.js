import React, { Component } from "react";
import dummyData from "../../dummy-data";


import PostContainer from "./PostContainer";
import SearchBar from "../SearchComponent/SearchBar";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filteredPosts: [],
      username: ""
    };
  }

  componentDidMount = () => {
    const user = localStorage.getItem('username')
    this.setState({ posts: dummyData, username: user });
  };

  filterPosts = e => {
    // Filters through posts
    const posts = this.state.posts.filter(post =>
      // Returns posts whos user name matches the search value
      post.username.includes(e.target.value)
    );
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div>

      <SearchBar filterPosts={this.filterPosts} />
      <div className="container">
        
        <div>
          {/* if there are no filtered posts in state, then render from posts */}
          <PostContainer
            posts={
              this.state.filteredPosts.length > 0
                ? this.state.filteredPosts
                : this.state.posts
            }
            username={this.state.username}
          />
        </div>
      </div>
      </div>
    );
  }
}

export default PostsPage;