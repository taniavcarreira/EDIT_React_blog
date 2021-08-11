import React from 'react';
import './style.css'
import BlogPost from '../../components/BlogPost/blogPost';
import Aside from '../../components/Aside/aside';

const Post = (props) => {
    console.log(props)
    return (
        <section className="container">
            <div className="row main">
                <BlogPost {...props}/>
                <Aside/>
            </div>
        </section>
    )
}

export default Post;