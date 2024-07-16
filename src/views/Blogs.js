import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import BlogCompo from '../components/Blog'
import Breadcrumb from '../components/Breadcrumb'
import '../assets/css/Blogs.css'
import ContactUsBanner from '../assets/images/ContactUsBanner.webp'


function BlogAll() {
    const breadcrumbPaths = [
        { label: 'Home', link: '/' },
        { label: 'Blogs' },
    ];
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleOtherButtonClick = () => {
    setDropdownVisible(!isDropdownVisible);
    };
    // const Slide = ({ image, sectionTag, MainTtl, postedDate, author }) => (
    // <div>
    //     <img src={image} alt="Slide" className="relativeImg-blog"/>
    //     <div className="abs-blg-txt">
    //         <span className="section-blg">{sectionTag}</span>
    //         <span className="title-blg">{MainTtl}</span>
    //         <div className="flx-dt-name">
    //             <span className="date">{postedDate}</span>
    //             <span className="name">{author}</span>
    //         </div>
    //     </div>
    // </div>
    // );

    // const SlickSlider = () => {
    //     const settings = {
    //       dots: true,
    //       infinite: true,
    //       speed: 500,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    // }; 
    // const slides = [
    //     {
    //       image: {ContactUsBanner},
    //       sectionTag: 'Sample Text 1',
    //       MainTtl: 'Sample Text 1',
    //       postedDate: 'Sample Text 1',
    //       author: 'Sample Text 1',
    //     },
    //     {
    //         image: {ContactUsBanner},
    //         sectionTag: 'Sample Text 1',
    //         MainTtl: 'Sample Text 1',
    //         postedDate: 'Sample Text 1',
    //         author: 'Sample Text 1',
    //       },
    //     // Add more slides as needed
    //   ];
    // }
    
    return(
        <>
        <div className="blog-breadcrumb container">
            <div className="brd-tag">
                <Breadcrumb paths={breadcrumbPaths} />
                <h4>Blog Center</h4>                
            </div>
            <div className="filter-blog">
                <button href="">Technology</button>
                <button href="">Entertainment</button>
                <button href="">Gaming</button>
                <button href="" onClick={handleOtherButtonClick}>Other 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10.0006 10.9761L5.87577 6.85132L4.69727 8.02983L10.0006 13.3332L15.3038 8.02983L14.1253 6.85132L10.0006 10.9761Z" fill="#050505"/>
                    </svg>                                  
                </button>
            </div>
            {isDropdownVisible && (
                <div className="dropdown-content">
                    <button href="">Technology</button>
                    <button href="">Entertainment</button>
                    <button href="">Gaming</button>
                </div>
            )}
        </div>
        <div className="slider-blog container">
            <div className="blog-wrapper">
                <img src={ContactUsBanner} alt="Slide" className="relativeImg-blog"/>
                <div className="abs-blg-txt">
                    <span className="section-blg">Technologies </span>
                    <span className="title-blg">JBL Pulse 5 Speaker with lED Lights: popular reviews</span>
                    <div className="flx-dt-name">
                        <span className="date">06/09/2023</span>
                        <span className="name">James Thompson</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="container blog-posts">
                {/* <BlogCompo/> */}
            {/* blog component here */}
            <div className="single-blog">
                <img src="https://dummyimage.com/600x400/c4c4c4/000000" />
                <div className="background">
                    <span className="tag">Technology</span>
                    <span className="main-Heading">JBL Pulse 5 Speaker with lED Lights: popular reviews</span>
                    <span className="blog-content">JBL has always had a good track record for great sounding portable bluetooth speakers, and the new Pulse 4 is no exception....s</span>
                    <Link to="/blog/name" className="readmore-Blog">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z" fill="#207879"/>
                        </svg>                    
                    </Link>
                </div>
            </div>

            <div className="single-blog">
                <img src="https://dummyimage.com/600x400/c4c4c4/000000" />
                <div className="background">
                    <span className="tag">Technology</span>
                    <span className="main-Heading">JBL Pulse 5 Speaker with lED Lights: popular reviews</span>
                    <span className="blog-content">JBL has always had a good track record for great sounding portable bluetooth speakers, and the new Pulse 4 is no exception....s</span>
                    <Link to="/blog/name" className="readmore-Blog">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z" fill="#207879"/>
                        </svg>                    
                    </Link>
                </div>
            </div>

            <div className="single-blog">
                <img src="https://dummyimage.com/600x400/c4c4c4/000000" />
                <div className="background">
                    <span className="tag">Technology</span>
                    <span className="main-Heading">JBL Pulse 5 Speaker with lED Lights: popular reviews</span>
                    <span className="blog-content">JBL has always had a good track record for great sounding portable bluetooth speakers, and the new Pulse 4 is no exception....s</span>
                    <Link to="/blog/name" className="readmore-Blog">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z" fill="#207879"/>
                        </svg>                    
                    </Link>
                </div>
            </div>

            <div className="single-blog">
                <img src="https://dummyimage.com/600x400/c4c4c4/000000" />
                <div className="background">
                    <span className="tag">Technology</span>
                    <span className="main-Heading">JBL Pulse 5 Speaker with lED Lights: popular reviews</span>
                    <span className="blog-content">JBL has always had a good track record for great sounding portable bluetooth speakers, and the new Pulse 4 is no exception....s</span>
                    <Link to="/blog/name" className="readmore-Blog">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z" fill="#207879"/>
                        </svg>                    
                    </Link>
                </div>
            </div>

            <div className="single-blog">
                <img src="https://dummyimage.com/600x400/c4c4c4/000000" />
                <div className="background">
                    <span className="tag">Technology</span>
                    <span className="main-Heading">JBL Pulse 5 Speaker with lED Lights: popular reviews</span>
                    <span className="blog-content">JBL has always had a good track record for great sounding portable bluetooth speakers, and the new Pulse 4 is no exception....s</span>
                    <Link to="/blog/name" className="readmore-Blog">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z" fill="#207879"/>
                        </svg>                    
                    </Link>
                </div>
            </div>

            <div className="single-blog">
                <img src="https://dummyimage.com/600x400/c4c4c4/000000" />
                <div className="background">
                    <span className="tag">Technology</span>
                    <span className="main-Heading">JBL Pulse 5 Speaker with lED Lights: popular reviews</span>
                    <span className="blog-content">JBL has always had a good track record for great sounding portable bluetooth speakers, and the new Pulse 4 is no exception....s</span>
                    <Link to="/blog/name" className="readmore-Blog">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z" fill="#207879"/>
                        </svg>                    
                    </Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default BlogAll;