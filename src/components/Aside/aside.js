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
                <img src = "https://scontent.fopo2-1.fna.fbcdn.net/v/t1.6435-9/34469361_10156548796342722_6001111817038856192_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeHnErmBoNM0rHJhfOYyf8avqGBbSTN9w6yoYFtJM33DrFf2Vgzxzizvcb3Z4OOm5pk&_nc_ohc=ulzzzCkW2REAX_yKmlk&_nc_ht=scontent.fopo2-1.fna&oh=3f43b16e65196ea80b99c66b2530b6e3&oe=6134D5B2"
                className = "imgfit"
                alt = "Tania V.Carreira"/>
            </figure> 
            <p className = "profileContent">
            <span>"Hello World!" I'm Tania Carreira,</span> 
            <br/>A Digital Marketing Strategist and E-commerce Manager studying everyday to become a FrontEnd developper. 
            <b> Find out more</b> about me & mY side-passions
            </p> 
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