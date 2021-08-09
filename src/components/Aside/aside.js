import React from 'react'
import Card from '../UI/Card'
import './aside.css'

/**
 * @author
 * @function Aside
 **/

const Aside = (props) => {
    return ( 
    <div className = "asideContainer col-offset-1 col-3" >
        <Card>
            <div className = "cardHeader aboutMe">
            <span className = "title" > About Me </span> 
            </div>
            <figure className = "profileImageContainer">
            <img src = "https://images.unsplash.com/photo-1560199887-55dcf2cc769f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            className = "imgfit"
            alt = "Tania V.Carreira"/>
            </figure> 
            <p className = "profileContent"></p> 
        </Card>
        <Card>
            <div className = "cardHeader socialNetwork" >
            <span className = "title" > Social Network </span> 
            </div>
            <figure className = "icones" >
            <img/>
            </figure>
        </Card>
        </div>
    )

}

export default Aside