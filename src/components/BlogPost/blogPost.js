// import CommentBox from '../CommentBox/commentBox'
import React, {useState, useEffect} from 'react'
import Card from '../UI/Card'
import './blogPost.css'
import blogPost from '../../data/blog.json'
import {postData} from '../../data/postData'
import CommentBox from '../CommentBox/commentBox'

export const BlogPost = (props) => {
  
  const [post, setPost] = useState({}) 

  useEffect(() => {
      const postId = 1 // Nao sei como ir buscar a informação do ID da Página
      const post = postData.data.find(post => post.id == postId)
      setPost(post);
  },post)

  return(
    <>
    <div className="blogPostContainer col-12 col-md-8">
    <Card>
        <div className="blogPostHeader">
            <span className="blogCategory">{post.blogCategory}</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span className="postedBy">Posted on {post.postedOn} by {post.author}</span>
        </div>
        <figure className="figure postImageContainer">
            <img className="figure-img" src={post.blogImage}/>
        </figure>
        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
    </Card>
    </div>
    {/* <CommentBox/> */}
    </>
   )
}

export default BlogPost;