import React from 'react';
import './style.css'
import BlogPost from '../../components/BlogPost/blogPost';
import Aside from '../../components/Aside/aside';

const Blogpost = (props) => {
    return (
        <section className="container">
            <div className="row main">
                <BlogPost/>
                <Aside/>
            </div>
        </section>
    )
}

export default Blogpost;