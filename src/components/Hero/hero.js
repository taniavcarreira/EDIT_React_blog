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
                <p className="h1">m<span class="y">Y</span> first project width REACT</p>
                <p className="h2">All you need to know about me <span class="y_me">@TaniaVCarreira</span></p>
            </Card>
        </div>
    </div>
   )
 }

export default Hero