import React from 'react'
import Card from '../UI/Card'
import './blogPost.css'

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
    <div className="blogPostContainer col-8">
    <Card>
        <div className="blogPostHeader">
            <span className="blogCategory">Featured</span>
            <h1 className="postTitle">Post Title</h1>
            <span className="postedBy">Posted on July 21, 2016 by Tania Carreira</span>
        </div>
        <figure className="figure postImageContainer">
            {/* <img src={require('../../blogPostImages/Myself.jpg')}/> */}
            <img className="figure-img" src='https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'/>
        </figure>
    </Card>
    </div>
   )

 }

export default BlogPost