import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import SapmleCarsd from '../components/smpleCards'
import Breadcrumb from '../components/Breadcrumb'
import '../assets/css/Home.css'
import '../assets/css/PrivacyPolicy.css'




function PrivacyPolicy() {

    const breadcrumbPaths = [
        { label: 'Home', link: '/' },
        { label: 'Privacy Policy' },
    ];

    return(
        <>

        <div className="container main-flx-privacy">
            <div className="privacy-left-div">
                <div className="click-box">
                    <a href="#" className="green-btn">Privacy Policy</a>
                    <ul className="dotted-ul">
                        <li className="dotted-items">information we Collect</li>
                        <li className="dotted-items">How we use information</li>
                    </ul>
                </div>
                <div className="click-box-deactive">
                    <a href="/refund-policy" className="green-btn">Return & Refund Policy</a>
                </div>
            </div>

            <div className="privacy-right-div">
                <div className="">
                    <Breadcrumb paths={breadcrumbPaths} />
                    <h4 className="privacy-topic">Privacy Policy</h4>

                    <span className="last-change-text">Last Updated: June 2024</span>
                    <hr className="privacy-hr"></hr>

                    <p className="gen-para-privacy">
                        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy was generated by TermsFeed Privacy Policy Generator.
                    </p>
                    <h4 className="sub-inner-topic-privacy">
                        information we Collect
                    </h4>
                    <p className="gen-para-privacy">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet amet porttitor vestibulum odio adipiscing phasellus adipiscing aliquet morbi. Nascetur ultricies lectus accumsan in eget dignissim. Faucibus quam amet blandit nulla bibendum lobortis egestas. Donec donec lorem amet velit nunc at. Malesuada congue consectetur a velit elementum nunc eget volutpat. Enim laoreet nam senectus lacus turpis aenean leo etiam. Mauris imperdiet sed dapibus in mattis vel vitae. Magna pulvinar nunc arcu nulla amet mollis molestie diam.
                    </p>
                    <ul className="li-privacy-para">
                        <li>
                            Est sed fringilla eget pretium ut purus facilisis amet. Sit nec diam in pellentesque at aliquam scelerisque felis penatibus. Dictum dictum pretium facilisi proin tincidunt ut turpis dignissim lorem.
                        </li>
                        <li>
                            Ut nunc erat pulvinar dui eu quam. Cursus risus quam arcu eget sed ut eget odio. Habitant viverra mauris massa nunc dolor vel urna ornare.
                        </li>
                    </ul>
                    <p className="gen-para-privacy">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet amet porttitor vestibulum odio adipiscing phasellus adipiscing aliquet morbi. Nascetur ultricies lectus accumsan in eget dignissim. Faucibus quam amet blandit nulla bibendum lobortis egestas. Donec donec lorem amet velit nunc at. Malesuada congue consectetur a velit elementum nunc eget volutpat. Enim laoreet nam senectus lacus turpis aenean leo etiam. Mauris imperdiet sed dapibus in mattis vel vitae. Magna pulvinar nunc arcu nulla amet mollis molestie diam.
                    </p>
                    <h4 className="sub-inner-topic-privacy">
                        information we Collect
                    </h4>
                    <p className="gen-para-privacy">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet amet porttitor vestibulum odio adipiscing phasellus adipiscing aliquet morbi. Nascetur ultricies lectus accumsan in eget dignissim. Faucibus quam amet blandit nulla bibendum lobortis egestas. Donec donec lorem amet velit nunc at. Malesuada congue consectetur a velit elementum nunc eget volutpat. Enim laoreet nam senectus lacus turpis aenean leo etiam. Mauris imperdiet sed dapibus in mattis vel vitae. Magna pulvinar nunc arcu nulla amet mollis molestie diam.
                    </p>
                    <ul className="li-privacy-para">
                        <li>
                            Est sed fringilla eget pretium ut purus facilisis amet. Sit nec diam in pellentesque at aliquam scelerisque felis penatibus. Dictum dictum pretium facilisi proin tincidunt ut turpis dignissim lorem.
                        </li>
                        <li>
                            Ut nunc erat pulvinar dui eu quam. Cursus risus quam arcu eget sed ut eget odio. Habitant viverra mauris massa nunc dolor vel urna ornare.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       

        
        
        <Footer/>
        </>
    );
};

export default PrivacyPolicy;