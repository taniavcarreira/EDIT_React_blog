import React from 'react';
import './header.css'

/**
* @author
* @function Header
**/

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="headerMenu row">
          <nav className="navbar col">
            <a href="#"><span className="y">Y</span>-CanIfly</a>
            {/* <a href="#">About me </a>
            <a href="#">Curriculum </a>
            <a href="#">Portfolio </a> */}
            <a href="/blog">Blog </a>
            <a href="/blogpost">Blogpost</a>
          </nav>
          <div className="social col-2">
            Social Media Links
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;