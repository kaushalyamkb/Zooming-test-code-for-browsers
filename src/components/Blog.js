import React, {Component, useState} from 'react';
import {NavLink} from 'react-router-dom';


import '../assets/css/Blogs.css';

class Blogs extends Component {
    render() {
        let {blogs} = this.props;
        if (blogs.length > 0) {
            return (
                <div className="blogs-container container d-flex justify-content-center">
                    <div className="d-flex bd-highlight row container add-sp-top">
                        {this.createBlogRows(blogs)}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    createBlogRows = (blogs) => {
        let rows = [];
        for (let i = 0; i < blogs.length; i += 3) {
            let blogsInRow = blogs.slice(i, i + 3);
            rows.push(
                <div className="row gap-5" key={`blogRow-${i / 3}`}>
                    {this.blogsBody(blogsInRow)}
                </div>
            );
        }
        return rows;
    };    

    blogsBody = (blogs, first) => {
        let body = [];
        blogs.forEach((blog, index) => {
            let textContent = "No content available";
            let textCreatedDate = "No content available";
      
            const parsedContent = JSON.parse(blog.content);
      
            if (parsedContent && parsedContent.blocks && parsedContent.blocks.length > 0) {
                const firstBlock = parsedContent.blocks[0];
                textContent = firstBlock.data ? firstBlock.data.text : firstBlock.text;
            }
      
            textContent = textContent.length > 40 ? textContent.substring(0, 300) + '...' : textContent;
      
            const createdAtDate = new Date(blog.created_at);
            textCreatedDate = createdAtDate.toDateString();
      
            body.push(
                <div className="single-blog col animate" key={index}>
                <img
                    src={blog.header_image_url}
                    style={{ overflow: "hidden", width: "100%", height: "50%", objectFit: "cover" }}
                    alt={blog.name}
                />
                <div className="background">
                        <span className="tag">{blog.name}</span>
                        <span className="main-Heading">{blog.title}</span>
                        <span className="blog-content">{textContent}</span>

                        {blog.is_link ? (
                        <a href={blog.link} target="_blank" className="readmore-Blog">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z" fill="#207879"/>
                            </svg>
                        </a>
                        ) : (
                        <NavLink className="readmore-Blog" to={"/blog/" + blog.name} target="_top">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z" fill="#207879"/>
                            </svg>
                        </NavLink>
                        )}
                    </div>
            </div>
            );
        });
        return body;
    };      
}

export default Blogs;