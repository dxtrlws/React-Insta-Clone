import React, { Component } from "react";
import dummyData from "../../dummy-data";


import PostContainer from "./PostContainer";
import SearchBar from "../SearchComponent/SearchBar";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount = () => {
    this.setState({ posts: dummyData });
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
      <div className="container">
        <SearchBar filterPosts={this.filterPosts} />
        <div>
          {/* if there are no filtered posts in state, then render from posts */}
          <PostContainer
            posts={
              this.state.filteredPosts.length > 0
                ? this.state.filteredPosts
                : this.state.posts
            }
          />
        </div>
      </div>
    );
  }
}

export default PostsPage;