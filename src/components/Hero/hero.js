import React from 'react'
import Logo from '../Logo/logo'
import Card from '../UI/Card'
import './hero.css'
/**
* @author
* @function Hero
**/

const Hero  = (props) => {
  return(
    <div className="hero">
        <div className="container">
            <Card>
                <Logo/>
                <h1>m<span class="y">Y</span> first project width REACT</h1>
                <h2>All you need to know about me <span class="y_me">@TaniaVCarreira</span></h2>
            </Card>
        </div>
    </div>
   )
 }

export default Hero