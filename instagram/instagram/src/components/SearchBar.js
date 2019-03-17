import React from 'react'
import './SearchBar.css'

function SearchBar() {
    return (
        <div>
        <div className="search-bar">
            <div className="logo-content">
                 <i className="fab fa-instagram"></i> 
                <img className="logo" src="/images/instagram.png" alt="logo" />

            </div>
            <form className="search">
                <input type="text" placeholder="Search" />
            </form>
            <div className="menu">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
        </div>
        <hr/>
        </div>
    )
}

export default SearchBar