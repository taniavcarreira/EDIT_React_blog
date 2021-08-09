import React from 'react'
import './logo.css'

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
        <img src={require('../Logo/logo.png')}/>
    </div>
   )

 }

export default Logo