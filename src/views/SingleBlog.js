import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import Footer from '../components/Footer'
import '../assets/css/singleBlog.css'

// class SingleBlog extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {blog: null, latestBlogs: null};
//     // }

//     // componentDidMount() {
//     //     this.loadBlog(this.props.match.params.name);
//     // }

//     // loadBlog = (name) => {
//     //     getRequest('/api/blogs/name/' + name).then(response => {
//     //         if (response.status === 200) {
//     //             if (response.data.error) {
//     //                 this.props.alert.error(response.data.message);
//     //             } else {
//     //                 this.setState({blog: response.data.blog, latestBlogs: response.data.blogs});
//     //                 document.getElementById("root").scrollTo(0, 0);
//     //             }
//     //         } else {
//     //             this.props.alert.error("An error occurred!");
//     //         }
//     //     });
//     // }

//     render() {
//         // let {blog} = this.state;
//         // if (blog) {
//         //     if (!editor) {
//         //         editor = new EditorJS({
//         //             holder: 'editor',
//         //             tools: getEditorJSTools(null),
//         //             readOnly: true,
//         //             data: JSON.parse(blog.content),
//         //         });
//         //     }
//             return (
//                 <div>
//                     <div className="header-container contact-us-header blog-header sp-bg-h"
//                          style={{"backgroundImage": "url('https://dummyimage.com/600x400/c4c4c4/000000')"}}>
//                         <h1 className="sin-bg-hd">{"blog.name"}</h1>
//                     </div>
//                     <div className="d-flex bd-highlight w-100 blog-detail-container container">
//                         <div className="p-2 flex-fill bd-highlight">
//                             <div id="editor"/>
//                         </div>
//                         <div className="p-2 flex-fill bd-highlight animate">
//                             {/* {this.latestBlogsBody()} */}
//                         </div>
//                     </div>
//                 </div>
//             );
//         // } else {
//         //     return null;
//         // }
//     }

//     // latestBlogsBody = () => {
//     //     const truncateText = (text, maxWords) => {
//     //         const words = text.split(' ');
//     //         if (words.length > maxWords) {
//     //             return words.slice(0, maxWords).join(' ') + '...';
//     //         }
//     //         return text;
//     //     };
    
//     //     let { latestBlogs } = this.state,
//     //         body = [];
//     //     latestBlogs.forEach((blog, index) => {
//     //         let textContent = "No content available";
//     //         let textCreatedDate = "No content available";
    
//     //         const parsedContent = JSON.parse(blog.content);
    
//     //         if (parsedContent && parsedContent.blocks && parsedContent.blocks.length > 0) {
//     //             const firstBlock = parsedContent.blocks[0];
//     //             textContent = firstBlock.data ? firstBlock.data.text : firstBlock.text;
//     //         }
    
//     //         const createdAtDate = new Date(blog.created_at);
//     //         textCreatedDate = createdAtDate.toDateString();
    
//     //         body.push(
//     //             <div className="latest-blog-container col animate" key={index}>
//     //                 <img
//     //                     src={blog.header_image_url}
//     //                     className="blog-page-img"
//     //                     style={{ overflow: "hidden", width: "100%", height: "300px", objectFit: "cover" }}
//     //                     alt={blog.name}
//     //                 />
//     //                 <div className="text-capitalize heading blog-card-gray">
//     //                     <h1 className="card-heading text-star">{blog.name}</h1>
//     //                     <p className='blog-para'>{truncateText(textContent, 27)}</p>
//     //                     <div className='d-flex'>
//     //                         <button className="btn gold-border-button" style={{ width: '150px' }}>
//     //                             {blog.is_link ? (
//     //                                 <a href={blog.link} target="_blank" className="nav-link">
//     //                                     Read More
//     //                                 </a>
//     //                             ) : (
//     //                                 <NavLink className="nav-link" to={"/blog/" + blog.name} target="_top">
//     //                                     Read More
//     //                                 </NavLink>
//     //                             )}
//     //                         </button>
//     //                         <p className="card-date align-items-end text-end col">{textCreatedDate}</p>
//     //                     </div>
//     //                 </div>
//     //             </div>
//     //         );
//     //     });
//     //     return body;
//     // };    
// }

// export default Blog;





function SingleBlog() {
   
    return(
        <>
        
        <img src="https://dummyimage.com/600x400/c4c4c4/000000" className='banner'/>
        <div className='container'>
            <div className="blg-sin">
                    
                    <h1 className="sin-bg-hd">{"JBL Pulse 5 Speaker with lED Lights: popular reviews"}</h1>
                    
                    <div className='publishData'>
                        <div className='flx-sin'>
                            <span>Published</span><span className='dt'>{"13 / 07/ 2023"}</span>
                        </div>
                        <div className='flx-sin'>
                            <span>Written by </span><span className='dt'>{"James Thompson"}</span>
                        </div>
                    </div>

                    <h2>{"JBL has always had a good track record for great sounding portable bluetooth speakers, and the new Pulse 4 is no exception."}</h2>
                    <div className='body-all'>
                        <p className='body'>
                            But we’ll say this right now, if you’re looking for a rugged, lightweight, portable bluetooth speaker that can take on the elements, look elsewhere, this isn’t it. So then I hear you asking, then what’s the best use for the Pulse 4? For people who like to move between rooms yet have their music with them, or those who are on a staycation or having a barbecue at a chalet, and heck, maybe if you want to blast some music in the shower, and more. All those scenarios that we described? The Pulse 4 performs admirably. The first thing you’ll notice about the Pulse 4 is most definitely the 360-degree LED light that covers pretty much the entirety of the speaker. It’s basically a light show that you can customize, and the colours are really vibrant.
                        </p>
                        <img src="https://dummyimage.com/600x400/c4c4c4/000000"/>
                        <ul>
                            <li>test 1</li>
                            <li>test 1</li>
                            <li>test 1</li>
                            <li>test 1</li>
                        </ul>
                    </div>
                    <div className='conclution'>
                        <p className='body'>
                            But we’ll say this right now, if you’re looking for a rugged, lightweight, portable bluetooth speaker that can take on the elements, look elsewhere, this isn’t it. So then I hear you asking, then what’s the best use for the Pulse 4? For people who like to move between rooms yet have their music with them, or those who are on a staycation or having a barbecue at a chalet, and heck, maybe if you want to blast some music in the shower, and more. All those scenarios that we described? The Pulse 4 performs admirably. The first thing you’ll notice about the Pulse 4 is most definitely the 360-degree LED light that covers pretty much the entirety of the speaker. It’s basically a light show that you can customize, and the colours are really vibrant.
                        </p>
                    </div>

                    <hr className='bodyHr'></hr>
                    <div className='flx-ico'>
                        <div className='tags'>
                            <button href="">Technology</button>
                            <button href="">Technology</button>
                            <button href="">Technology</button>
                        </div>
                        <div className='share'>
                            <a href="" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M11.6673 11.25H13.7507L14.584 7.91665H11.6673V6.24999C11.6673 5.39217 11.6673 4.58332 13.334 4.58332H14.584V1.78341C14.3126 1.74736 13.2865 1.66666 12.2031 1.66666C9.94098 1.66666 8.33398 3.04737 8.33398 5.58308V7.91665H5.83398V11.25H8.33398V18.3333H11.6673V11.25Z" fill="black"/>
                                </svg>
                            </a>
                            <a href="" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.8572 1.66748C11.7951 1.66903 12.2703 1.67399 12.681 1.68621L12.8427 1.69151C13.0296 1.69815 13.2139 1.70648 13.4361 1.7169C14.3229 1.75786 14.9278 1.89815 15.4591 2.1044C16.0083 2.3162 16.4722 2.60231 16.9354 3.06551C17.3979 3.5287 17.6841 3.99398 17.8966 4.5419C18.1021 5.07245 18.2424 5.678 18.2841 6.56481C18.294 6.78703 18.302 6.97136 18.3086 7.15824L18.3138 7.31997C18.326 7.7306 18.3316 8.20591 18.3333 9.14374L18.334 9.76516C18.3341 9.84108 18.3341 9.91941 18.3341 10.0002L18.334 10.2353L18.3335 10.8567C18.3319 11.7946 18.327 12.2698 18.3147 12.6805L18.3094 12.8422C18.3028 13.0291 18.2945 13.2134 18.2841 13.4357C18.2431 14.3224 18.1021 14.9273 17.8966 15.4586C17.6847 16.0078 17.3979 16.4717 16.9354 16.9349C16.4722 17.3974 16.0062 17.6836 15.4591 17.8961C14.9278 18.1016 14.3229 18.2419 13.4361 18.2836C13.2139 18.2935 13.0296 18.3015 12.8427 18.3081L12.681 18.3133C12.2703 18.3255 11.7951 18.3311 10.8572 18.3328L10.2358 18.3335C10.1599 18.3336 10.0816 18.3336 10.0007 18.3336L9.76565 18.3335L9.14423 18.333C8.2064 18.3314 7.73108 18.3265 7.32046 18.3142L7.15873 18.3089C6.97185 18.3023 6.78752 18.294 6.5653 18.2836C5.67849 18.2426 5.07433 18.1016 4.54238 17.8961C3.99377 17.6842 3.52918 17.3974 3.06599 16.9349C2.6028 16.4717 2.31739 16.0057 2.10489 15.4586C1.89864 14.9273 1.75905 14.3224 1.71739 13.4357C1.70749 13.2134 1.69941 13.0291 1.69287 12.8422L1.68763 12.6805C1.67544 12.2698 1.66988 11.7946 1.66808 10.8567L1.66797 9.14374C1.66952 8.20591 1.67448 7.7306 1.6867 7.31997L1.69199 7.15824C1.69864 6.97136 1.70697 6.78703 1.71739 6.56481C1.75835 5.67731 1.89864 5.07315 2.10489 4.5419C2.31669 3.99328 2.6028 3.5287 3.06599 3.06551C3.52918 2.60231 3.99447 2.3169 4.54238 2.1044C5.07363 1.89815 5.6778 1.75856 6.5653 1.7169C6.78752 1.707 6.97185 1.69892 7.15873 1.69238L7.32046 1.68714C7.73108 1.67495 8.2064 1.66939 9.14423 1.66759L10.8572 1.66748ZM10.0007 5.83356C7.6983 5.83356 5.83405 7.69984 5.83405 10.0002C5.83405 12.3027 7.70033 14.1669 10.0007 14.1669C12.3032 14.1669 14.1674 12.3006 14.1674 10.0002C14.1674 7.69781 12.3011 5.83356 10.0007 5.83356ZM10.0007 7.50023C11.3815 7.50023 12.5007 8.61908 12.5007 10.0002C12.5007 11.381 11.3818 12.5002 10.0007 12.5002C8.61998 12.5002 7.50072 11.3813 7.50072 10.0002C7.50072 8.6195 8.61957 7.50023 10.0007 7.50023ZM14.3757 4.58356C13.8013 4.58356 13.3341 5.05015 13.3341 5.62452C13.3341 6.19889 13.8006 6.6662 14.3757 6.6662C14.9501 6.6662 15.4174 6.19961 15.4174 5.62452C15.4174 5.05015 14.9493 4.58284 14.3757 4.58356Z" fill="#0D0D0D"/>
                                </svg>
                            </a>
                            <a href="" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.3333 6.87113V12.9167C13.3333 15.9082 10.9082 18.3333 7.91667 18.3333C4.92512 18.3333 2.5 15.9082 2.5 12.9167C2.5 9.92507 4.92512 7.49999 7.91667 7.49999C8.34692 7.49999 8.76542 7.55015 9.16667 7.64493V10.2807C8.78783 10.1007 8.364 9.99999 7.91667 9.99999C6.30583 9.99999 5 11.3058 5 12.9167C5 14.5275 6.30583 15.8333 7.91667 15.8333C9.5275 15.8333 10.8333 14.5275 10.8333 12.9167V1.66666H13.3333C13.3333 3.96784 15.1988 5.83332 17.5 5.83332V8.33332C15.9234 8.33332 14.4747 7.78605 13.3333 6.87113Z" fill="#0D0D0D"/>
                                </svg>
                            </a>
                            <a href="" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M5.78455 4.1666C5.78424 4.84519 5.37255 5.45584 4.7436 5.7106C4.11465 5.96536 3.39404 5.81336 2.92156 5.32628C2.44909 4.83919 2.31911 4.11428 2.5929 3.49338C2.8667 2.87248 3.4896 2.47957 4.16788 2.49993C5.06877 2.52697 5.78495 3.2653 5.78455 4.1666ZM5.83455 7.0666H2.50121V17.4999H5.83455V7.0666ZM11.1012 7.0666H7.78455V17.4999H11.0679V12.0249C11.0679 8.97491 15.0429 8.69157 15.0429 12.0249V17.4999H18.3346V10.8916C18.3346 5.74993 12.4512 5.9416 11.0679 8.46657L11.1012 7.0666Z" fill="#0D0D0D"/>
                                </svg>
                            </a>
                        </div>

                        
                    </div>
                    <div className='authorComment'>
                            <img src="https://dummyimage.com/600x400/c4c4c4/000000"/>
                            <div>
                                <span className='nameAuthor'>James Thomson</span>
                                <span className='commentAuthor'>
                                    Hi there! I am a web developer and I own a WordPress theme development company. We've been creating premium WordPress themes for more than five years. Our team goal is to reunite the elegance of a unique design with professional programming to create unique and easy-to-use flexible WordPress themes with advanced functionality.
                                </span>
                            </div>
                        </div>
                   
            </div>
            <div className='relatedBlogs'>
                <h3>Related articles</h3>

                <div className='row-relatedBlogs'>
                <div className="container blog-posts">
                {/* <BlogCompo/> */}
            {/* blog component here */}
            <div className="single-blog">
                <img src="https://dummyimage.com/600x400/c4c4c4/000000" />
                <div className="background">
                    <span className="tag">Technology</span>
                    <span className="main-Heading">JBL Pulse 5 Speaker with lED Lights: popular reviews</span>
                    <span className="blog-content">JBL has always had a good track record for great sounding portable bluetooth speakers, and the new Pulse 4 is no exception....s</span>
                    <a href="" className="readmore-Blog">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z" fill="#207879"/>
                        </svg>                    
                    </a>
                </div>
            </div>

            <div className="single-blog">
                <img src="https://dummyimage.com/600x400/c4c4c4/000000" />
                <div className="background">
                    <span className="tag">Technology</span>
                    <span className="main-Heading">JBL Pulse 5 Speaker with lED Lights: popular reviews</span>
                    <span className="blog-content">JBL has always had a good track record for great sounding portable bluetooth speakers, and the new Pulse 4 is no exception....s</span>
                    <a href="" className="readmore-Blog">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z" fill="#207879"/>
                        </svg>                    
                    </a>
                </div>
            </div>

            <div className="single-blog">
                <img src="https://dummyimage.com/600x400/c4c4c4/000000" />
                <div className="background">
                    <span className="tag">Technology</span>
                    <span className="main-Heading">JBL Pulse 5 Speaker with lED Lights: popular reviews</span>
                    <span className="blog-content">JBL has always had a good track record for great sounding portable bluetooth speakers, and the new Pulse 4 is no exception....s</span>
                    <a href="" className="readmore-Blog">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z" fill="#207879"/>
                        </svg>                    
                    </a>
                </div>
            </div>
            </div>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    );
};

export default SingleBlog;