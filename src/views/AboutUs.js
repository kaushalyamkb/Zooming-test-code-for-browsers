import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import SapmleCarsd from '../components/smpleCards'
import Breadcrumb from '../components/Breadcrumb'
import '../assets/css/Home.css'
import '../assets/css/AboutUs.css'
import ourVisionImg from '../assets/images/our-vision-pc.webp'
import mission from '../assets/images/mission.webp'
import AboutUsBanner from '../assets/images/AboutUsBanner.webp'

import OurPartner from "../components/ourPartner"; 
import Testimonials from "../components/Testimonials"; 



function AboutUs() {
    const breadcrumbPaths = [
        { label: 'Home', link: '/' },
        { label: 'About Us' },
      ];


      // code functioning for testimonials and partners -------------------------------------
        // const [testimonials, setTestimonials] = useState([]),
        // [loadingContent, setLoadingContent] = useState(true),
        // [windowWidth, setWindowWidth] = useState(0),
        // testimonialSliderSettings = {
        //     dots: false,
        //     arrows: false,
        //     autoplay: true,
        //     infinite: true,
        //     pauseOnHover: true,
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //     responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         },
        //     },
        //     ],
        // },
        // partnerSliderSettings = {
        //     dots: false,
        //     arrows: false,
        //     autoplay: true,
        //     infinite: true,
        //     pauseOnHover: true,
        //     slidesToShow: 4,
        //     slidesToScroll: 4,
        //     responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2,
        //         },
        //     },
        //     ],
        // };

        // useEffect(() => {
        // resizeWindow();
        // window.addEventListener("resize", resizeWindow);
        // loadTestimonials(4)
        //     .then((data) => {
        //     setTestimonials(data);
        //     })
        //     .catch(() => null);
        // }, []);
        // const resizeWindow = () => {
        // setWindowWidth(window.outerWidth);
        // };

        // const testimonialBody = (testimonials) => {
        // let body = [];
        // if (windowWidth <= 992) {
        //     for (let i = 0; i < testimonials.length; i++) {
        //     body.push(
        //         <div key={"Testimonial" + i}>
        //         <div className="comment">
        //             <span className="commentTxt">{testimonials[i].message}</span>
        //             <div className="flx">
        //             <img
        //                 src={testimonials[i].image_url}
        //                 alt={testimonials[i].name}
        //             />
        //             <div className="namePosition">
        //                 <span className="name">{testimonials[i].name}</span>
        //                 <span className="position">{testimonials[i].job}</span>
        //             </div>
        //             </div>
        //             <span className="absDiv">“</span>
        //         </div>
        //         {++i < testimonials.length && (
        //             <div className="comment">
        //             <span className="commentTxt">{testimonials[i].message}</span>
        //             <div className="flx">
        //                 <img
        //                 src={testimonials[i].image_url}
        //                 alt={testimonials[i].name}
        //                 />
        //                 <div className="namePosition">
        //                 <span className="name">{testimonials[i].name}</span>
        //                 <span className="position">{testimonials[i].job}</span>
        //                 </div>
        //             </div>
        //             <span className="absDiv">“</span>
        //             </div>
        //         )}
        //         </div>
        //     );
        //     }
        // } else {
        //     testimonials.forEach((testimonial, index) => {
        //     body.push(
        //         <div className="comment">
        //         <span className="commentTxt">{testimonial.message}</span>
        //         <div className="flx">
        //             <img src={testimonial.image_url} alt={testimonial.name} />
        //             <div className="namePosition">
        //             <span className="name">{testimonial.name}</span>
        //             <span className="position">{testimonial.job}</span>
        //             </div>
        //         </div>
        //         <span className="absDiv">“</span>
        //         </div>
        //     );
        //     });
        // }
        // return body;
        // };


    return(
        <>
        <div className="about-header-banner">
            <img src={AboutUsBanner} />
            <div className="abs-txt-sp-abt">
            <Breadcrumb paths={breadcrumbPaths} />
            <h4>About Us</h4>
            </div>
        </div>
        <div className="container abt-pg-txt">
            <div className="lft-abt">
                <span className="greenTxt">
                    one-stop-shop for all your smartphone, tablet, and accessory needs
                </span>
            </div>
            <div className="rgt-abt">
                <span className="p-para">
                At MYCO, we believe the right tech makes all the difference. It brings energy to your daily life, enhances your workflow, and elevates your accessory game. Our mission is to provide you with high-quality devices and accessories that make you stand out from the crowd.
                <br/><br/>
                Looking to stay ahead in the ever-changing tech landscape? MYCO offers a wide range of premium products, including bluetooth speakers, headphones, earphones, chargers, power banks, gaming accessories and more, ensuring you have the best tools to complement your lifestyle. Our carefully curated selection combines top-notch performance with stylish design.
                <br/><br/>
                Discover the MYCO difference today and elevate your tech game to the next level.

                </span>
            </div>
        </div>

        
        <div className=" abt-pg-txt2 c2SP">
            <div className="lft-abt">
               <img src={ourVisionImg} />
            </div>
            <div className="rgt-abt">
                <span className="hdn-abt">Our Vision</span>
                <span className="p-para">
                    Bring high-tech components and accessories forward and ensure our customers stay relevant in an ever-changing tech environment. 
                </span>
            </div>
        </div>

        <div className=" abt-pg-txt3 c2SP">
            <div className="lft-abt">
               <img src={mission} />
            </div>
            <div className="rgt-abt">
                <span className="hdn-abt">Our Mission</span>
                <span className="p-para">
                    Be Sri Lanka's tech powerhouse by offering multiple brands to cater to an ever-growing electronics and accessories marketplace. 
                </span>
            </div>
        </div>
        <SapmleCarsd/>
        <OurPartner/>
        <Testimonials/>
        <Footer/>
        </>
    );
};

export default AboutUs;