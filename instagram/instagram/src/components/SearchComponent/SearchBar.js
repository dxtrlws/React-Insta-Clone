import React from "react";
import { Header, LogoContent, LogoImage, Search, HeaderContent } from "./styles";

import "./SearchBar.css";

function SearchBar(props) {
  return (
    <Header>
      <HeaderContent>
        <LogoContent>
          <i className="fab fa-instagram headerLogo" />
          <LogoImage src="/images/instagram.png" alt="logo" />
        </LogoContent>
        <Search type="text" placeholder="Search" onChange={props.filterPosts} />
        <div>
          <i className="far fa-compass headerMenu" />
          <i className="far fa-heart headerMenu" />
          <i className="far fa-user headerMenu" />
        </div>
      </HeaderContent>
      <hr />
    </Header>
  );
}

export default SearchBar;
