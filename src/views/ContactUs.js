import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import '../assets/css/Home.css'
import '../assets/css/AboutUs.css'
import '../assets/css/ContactUs.css'
import ContactUsBanner from '../assets/images/ContactUsBanner.webp'
import contactUsSmallBanner from '../assets/images/contactUsSmallBanner.webp'

import OurPartner from "../components/ourPartner"; 
import Testimonials from "../components/Testimonials"; 


function ContactUs() {
    const breadcrumbPaths = [
        { label: 'Home', link: '/' },
        { label: 'Contact Us' },
      ];
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here (e.g., send data to a server)
    console.log('Form data submitted:', formData);
    // Clear the form after submission
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });
    };
    return(
        <>
        <div className="about-header-banner">
            <img src={ContactUsBanner} />
            <div className="abs-txt-sp-abt">
            <Breadcrumb paths={breadcrumbPaths} />
            <h4>Contact Us</h4>
            </div>
        </div>
        <div className="ContactUs-main container">
            <div className="flx-cUs">
                <div className="questionsTab">
                    <h3>Frequently Asked Questions</h3>
                    <div className="faq-item">
                        <div
                            className={`faq-question ${activeIndex === 0 ? 'open' : ''}`}
                            onClick={() => toggleFAQ(0)}
                            >
                            Are my online transactions safe?
                            <span className="arrow">{activeIndex === 0 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                                </svg>}
                            </span>
                            </div>
                            {activeIndex === 0 && (
                            <div className="faq-answer">
                                Yes, absolutely. We use the latest in digital encryption and web technology to ensure that your transactions are secure and your personal details are protected when you shop at MYCO. For more information on how we safeguard your personal details, please read our Privacy Policy.
                            </div>
                            )}
                    </div>
                    <div className="faq-item">
                        <div
                        className={`faq-question ${activeIndex === 1 ? 'open' : ''}`}
                        onClick={() => toggleFAQ(1)}
                        >
                        What payment methods can I use?
                        <span className="arrow">{activeIndex === 1 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg>}
                        </span>
                        </div>
                        {activeIndex === 1 && (
                        <div className="faq-answer">
                            We accept Visa, MasterCard, AMEX credit and debit cards, bank transfers, and cash on delivery payments.
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <div
                        className={`faq-question ${activeIndex === 2 ? 'open' : ''}`}
                        onClick={() => toggleFAQ(2)}
                        >
                        How long will it take to deliver my order?
                        <span className="arrow">{activeIndex === 2 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg>}
                        </span>
                        </div>
                        {activeIndex === 2 && (
                        <div className="faq-answer">
                            We deliver orders within 4 to 5 working days anywhere in Sri Lanka.
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <div
                        className={`faq-question ${activeIndex === 3 ? 'open' : ''}`}
                        onClick={() => toggleFAQ(3)}
                        >
                        I have made a misttake with my order. What should I do?
                        <span className="arrow">{activeIndex === 3 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg>}
                        </span>
                        </div>
                        {activeIndex === 3 && (
                        <div className="faq-answer">
                            If there is an issue with your order, please contact our customer care hotline at<a href="tel:+94771400140">+94 77 140 0140</a> or email us at <a href="mailto:management@myco.global">management@myco.global</a>. 
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <div
                        className={`faq-question ${activeIndex === 4 ? 'open' : ''}`}
                        onClick={() => toggleFAQ(4)}
                        >
                        I received my order, but there is something missing/the product is damaged/wrong product. What should I do?
                        <span className="arrow">{activeIndex === 4 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg>}
                        </span>
                        </div>
                        {activeIndex === 4 && (
                        <div className="faq-answer">
                            If you received your order and there is a problem, please contact our customer care hotline at <a href="+94771400140">+94 77 140 0140</a> or email us at <a href="mailto:management@myco.global">management@myco.global</a>.
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <div
                        className={`faq-question ${activeIndex === 5 ? 'open' : ''}`}
                        onClick={() => toggleFAQ(5)}
                        >
                        What is the warranty period for electronics?
                        <span className="arrow">{activeIndex === 5 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg>}
                        </span>
                        </div>
                        {activeIndex === 5 && (
                        <div className="faq-answer">
                            All electronics come with a warranty period of 6 months.
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <div
                        className={`faq-question ${activeIndex === 6 ? 'open' : ''}`}
                        onClick={() => toggleFAQ(6)}
                        >
                        Can I track my order?
                        <span className="arrow">{activeIndex === 6 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg>}
                        </span>
                        </div>
                        {activeIndex === 6 && (
                        <div className="faq-answer">
                            Yes, once your order is placed, you will receive emails with the status of your order until it’s delivered to you.
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <div
                        className={`faq-question ${activeIndex === 7 ? 'open' : ''}`}
                        onClick={() => toggleFAQ(7)}
                        >
                        How do I cancel my order?
                        <span className="arrow">{activeIndex === 6 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg>}
                        </span>
                        </div>
                        {activeIndex === 7 && (
                        <div className="faq-answer">
                            To cancel an order, please contact our customer care hotline at <a href="tel:+94771400140">+94 77 140 0140</a> or email us at <a href="mailto:management@myco.global">management@myco.global</a> as soon as possible. If the order has not been dispatched, we will process your cancellation.
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <div
                        className={`faq-question ${activeIndex === 8 ? 'open' : ''}`}
                        onClick={() => toggleFAQ(8)}
                        >
                        Do you offer international shipping?
                        <span className="arrow">{activeIndex === 8 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg>}
                        </span>
                        </div>
                        {activeIndex === 8 && (
                        <div className="faq-answer">
                            Currently, we only offer shipping within Sri Lanka. We are working on expanding our services to international destinations soon.
                        </div>
                        )}
                    </div>
                    <div className="faq-item">
                        <div
                        className={`faq-question ${activeIndex === 9 ? 'open' : ''}`}
                        onClick={() => toggleFAQ(9)}
                        >
                        How do I return a product?
                        <span className="arrow">{activeIndex === 9 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.3333L5 8.33325H15L10 13.3333Z" fill="#4F4F4F"/>
                            </svg>}
                        </span>
                        </div>
                        {activeIndex === 9 && (
                        <div className="faq-answer">
                            To return a product, please refer to our Return & Refund Policy for detailed instructions. You can also contact our customer care team for assistance.
                        </div>
                        )}
                    </div>
                </div>
                <div className="FormTab">
                    <span className="tg-cont-name">Have any questions?</span>
                    <h3>For inquiries</h3>
                    <form onSubmit={handleSubmit} className="formMain">
                        <div className="con-flx-ln">
                            <label className="lb-col">
                                First Name * 
                                <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                placeholder="First Name"
                                />
                            </label>
                            <label className="lb-col">
                                Last Name *
                                <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                placeholder="Last Name"
                                
                                />
                            </label>
                        </div>
                        <div className="con-flx-ln">
                            <label className="lb-col">
                                Email Address *
                                <input
                                type="email"
                                name="email"
                                value={formData.email}
                                required
                                onChange={handleChange}
                                placeholder="hello@email.com"
                                />
                            </label>
                            <label className="lb-col">
                                Phone Number *
                                <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                required
                                onChange={handleChange}
                                placeholder="+94 76123456"
                                />
                            </label>
                        </div>
                        <div className="non-flx-ln">
                            <label className="lb-col">
                                Message *
                                <textarea
                                name="message"
                                value={formData.message}
                                required
                                onChange={handleChange}
                                placeholder="Type here..."
                                />
                            </label>
                        </div>
                        <button type="submit" id="submitForm">Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="cont-details-main c2SP">
            <div className="left-side-all">
                <span className="sml-green">We’d love to hear from you!</span>
                <span className="cont-hd">Contact Us</span>

                <div className="cont-wrapper">
                    <a href="tel:+94771400140" className="sin-itm">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M7.02417 8.01158C7.7265 9.2466 8.7534 10.2735 9.98842 10.9758L10.6518 10.0471C10.8724 9.73838 11.2887 9.64297 11.6217 9.82485C12.6768 10.4012 13.8428 10.7515 15.0592 10.8478C15.4492 10.8787 15.75 11.2042 15.75 11.5954V14.9426C15.75 15.3271 15.4591 15.6493 15.0766 15.6886C14.6792 15.7295 14.2783 15.75 13.875 15.75C7.45469 15.75 2.25 10.5453 2.25 4.125C2.25 3.7217 2.27057 3.32078 2.31142 2.92332C2.35073 2.54081 2.67296 2.25 3.05749 2.25H6.40456C6.79583 2.25 7.12135 2.55078 7.15222 2.94082C7.2485 4.15716 7.59877 5.32323 8.17515 6.37833C8.35703 6.7113 8.26162 7.12766 7.95292 7.34818L7.02417 8.01158ZM5.13319 7.5189L6.55815 6.50107C6.1541 5.62885 5.87721 4.70387 5.73545 3.75H3.7568C3.75227 3.87474 3.75 3.99975 3.75 4.125C3.75 9.71685 8.28315 14.25 13.875 14.25C14.0002 14.25 14.1253 14.2478 14.25 14.2432V12.2645C13.2962 12.1228 12.3712 11.8459 11.4989 11.4419L10.4811 12.8668C10.0694 12.7069 9.6717 12.5186 9.29055 12.3046L9.24697 12.2797C7.77728 11.444 6.55601 10.2227 5.72025 8.75303L5.69545 8.70945C5.48137 8.3283 5.29316 7.93065 5.13319 7.5189Z" />
                            </svg>                           
                        </div>
                        <div className="smal-flx">
                            <span className="method-nm">Phone Number</span>
                            <span className="method-d">SL : +94 77 140 0140</span>
                        </div>
                    </a>

                    <a href="mailto:mycointernational@gmail.com" className="sin-itm">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M2.25 2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25ZM15 5.42844L9.05385 10.7535L3 5.41195V14.25H15V5.42844ZM3.38359 3.75L9.04642 8.7465L14.6257 3.75H3.38359Z" />
                            </svg>                         
                        </div>
                        <div className="smal-flx">
                            <span className="method-nm">Email Address</span>
                            <span className="method-d">mycointernational@gmail.com</span>
                        </div>
                    </a>

                    <div className="sin-itm">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9 15.6746L12.7123 11.9623C14.7625 9.91208 14.7625 6.58794 12.7123 4.53769C10.6621 2.48744 7.33794 2.48744 5.28769 4.53769C3.23744 6.58794 3.23744 9.91208 5.28769 11.9623L9 15.6746ZM9 17.7959L4.22703 13.023C1.59099 10.3869 1.59099 6.11307 4.22703 3.47703C6.86307 0.84099 11.1369 0.84099 13.773 3.47703C16.409 6.11307 16.409 10.3869 13.773 13.023L9 17.7959ZM9 9.75C9.82845 9.75 10.5 9.07845 10.5 8.25C10.5 7.42157 9.82845 6.75 9 6.75C8.17155 6.75 7.5 7.42157 7.5 8.25C7.5 9.07845 8.17155 9.75 9 9.75ZM9 11.25C7.34314 11.25 6 9.90683 6 8.25C6 6.59314 7.34314 5.25 9 5.25C10.6568 5.25 12 6.59314 12 8.25C12 9.90683 10.6568 11.25 9 11.25Z" />
                            </svg>                       
                        </div>
                        <div className="smal-flx">
                            <span className="method-nm">Location</span>
                            <span className="method-d">No 89 Bankshall Street, 4th Floor Unit 12, Colombo 11</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rgt-side-all">
                <img src={contactUsSmallBanner} />
            </div>
        </div>

        <OurPartner/>

        <Testimonials/>
        <Footer/>
        </>
    );
};

export default ContactUs;