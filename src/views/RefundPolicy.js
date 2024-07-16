import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import SapmleCarsd from '../components/smpleCards'
import Breadcrumb from '../components/Breadcrumb'
import '../assets/css/Home.css'
import '../assets/css/PrivacyPolicy.css'




function RefundPolicy() {

    const breadcrumbPaths = [
        { label: 'Home', link: '/' },
        { label: 'Return & Refund Policy' },
    ];

    return(
        <>

        <div className="container main-flx-privacy">
            <div className="privacy-left-div">
            <div className="click-box-deactive">
                    <a href="/privacy-policy" className="green-btn">Privacy Policy</a>
                </div>
                <div className="click-box activating">
                    <a href="#" className="green-btn">Return & Refund Policy</a>
                    {/* <ul className="dotted-ul">
                        <li className="dotted-items">information we Collect</li>
                        <li className="dotted-items">How we use information</li>
                    </ul> */}
                </div>
               
            </div>

            <div className="privacy-right-div">
                <div className="">
                    <Breadcrumb paths={breadcrumbPaths} />
                    <h4 className="privacy-topic">Return & Refund Policy</h4>

                    <span className="last-change-text">Last Updated: June 2024</span>
                    <hr className="privacy-hr"></hr>

                    <p className="gen-para-privacy">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet amet porttitor vestibulum odio adipiscing phasellus adipiscing aliquet morbi. Nascetur ultricies lectus accumsan in eget dignissim. Faucibus quam amet blandit nulla bibendum lobortis egestas. Donec donec lorem amet velit nunc at. Malesuada congue consectetur a velit elementum nunc eget volutpat. Enim laoreet nam senectus lacus turpis aenean leo etiam. Mauris imperdiet sed dapibus in mattis vel vitae. Magna pulvinar nunc arcu nulla amet mollis molestie diam.
                    </p>
                    <br></br>
                    <p className="gen-para-privacy">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet amet porttitor vestibulum odio adipiscing phasellus adipiscing aliquet morbi. Nascetur ultricies lectus accumsan in eget dignissim. Faucibus quam amet blandit nulla bibendum lobortis egestas. Donec donec lorem amet velit nunc at. Malesuada congue consectetur a velit elementum nunc eget volutpat. Enim laoreet nam senectus lacus turpis aenean leo etiam. Mauris imperdiet sed dapibus in mattis vel vitae. Magna pulvinar nunc arcu nulla amet mollis molestie diam.
                    </p>
                    <br></br>
                    <p className="gen-para-privacy">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet amet porttitor vestibulum odio adipiscing phasellus adipiscing aliquet morbi. Nascetur ultricies lectus accumsan in eget dignissim. Faucibus quam amet blandit nulla bibendum lobortis egestas. Donec donec lorem amet velit nunc at. Malesuada congue consectetur a velit elementum nunc eget volutpat. Enim laoreet nam senectus lacus turpis aenean leo etiam. Mauris imperdiet sed dapibus in mattis vel vitae. Magna pulvinar nunc arcu nulla amet mollis molestie diam.
                    </p>
                </div>
            </div>
        </div>
       

        
        
        <Footer/>
        </>
    );
};

export default RefundPolicy;