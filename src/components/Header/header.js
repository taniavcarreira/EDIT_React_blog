import React from 'react';
import './header.css'

/**
* @author
* @function Header
**/

const Header = (props) => {
  return (
    <header className="header container">
      <div className="headerMenu row">
        <nav className="navbar col">
          <a href="#">Y-CanIfly </a>
          <a href="#">About me </a>
          <a href="#">Curriculum </a>
          <a href="#">Portfolio </a>
          <a href="#">Contact</a>
        </nav>
        <div className="social col-2">
          Social Media Links
        </div>
      </div>
    </header>
  )
}

export default Header;