import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div>
      <div className="search-bar">
        <div className="logo-content">
          <i className="fab fa-instagram" />
          <img className="logo" src="/images/instagram.png" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search"   onChange={props.filterPosts} />
        </div>
        <div className="menu">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default SearchBar;
