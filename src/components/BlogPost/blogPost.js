import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Card from '../UI/Card'
import './blogPost.css'
import blogPost from '../../data/blog.json'
import CommentBox from '../CommentBox/commentBox'

const pathImage = '/imgs/'
export const BlogPost = (props) => {
  
  const [post, setPost] = useState({
    id:'' ,
    blogCategory:'', 
    blogTitle:'',
    slug: '',
    postedOn:'', 
    author:'',
    blogImage:'',
    blogText:''
  }) 
  const [postId, setPostId] = useState('')

let { postIdUrl } = useParams();
console.log(postIdUrl)

  useEffect(() => {
      const post = blogPost.data.find(post => post.id == postIdUrl)
      setPost(post);
      setPostId(postIdUrl)
  },[post]) //[post, ]

  if(post.blogImage == "") return null;

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
            <img className="figure-img" src={`${pathImage}${post.blogImage}`} alt="Post Image"/> 
        </figure>
        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
    <CommentBox/>
    </Card>
    </div>
    </>
   )
}

export default BlogPost;