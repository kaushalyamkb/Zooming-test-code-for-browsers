// YourPage.js
import React,{useEffect , useState}from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'

import '../assets/css/notfound.css'
import notFoundImg from '../assets/images/notfound.png'

const notFound = () => {
    //breadcrumb
  const breadcrumbPaths = [
    { label: 'Home', link: '/' },
    { label: 'Shop', link: '/shop' },
    { label: 'checkout' },
  ];

  return (
    <>
    <div className='notFundMain'>
        <div className='not-foundAbs'>
            <img src={notFoundImg}/>
            <span className='big-txtNotF'>Page Not found</span>
            <span className='sml-txtNotF'>This page is missing or you assembled the link incorrectly.</span>
            <Link to="/">
              <button className='backNotF'>Back to home</button>
            </Link>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default notFound;
