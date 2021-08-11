import React from 'react'
import './style.css'
import BlogList from '../../components/BlogPost/blogPost';
import Aside from '../../components/Aside/aside';

const Blog = (props) => {
  return (
      <section className="container">
          <div className="row main">
              <BlogList {...props}/>
              <Aside/>
          </div>
      </section>
  )
}

export default Blog;