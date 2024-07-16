import React, { useState } from 'react';

import '../assets/css/Home.css'
import warrenty from '../assets/images/warranty.webp'
import bestPrice from '../assets/images/bestprice.webp'
import delevery from '../assets/images/fastdelivery.webp'
import customServ from '../assets/images/hourssupport.webp'


const sapmleCarsd = () => {

  return (
    <div className="services container">
    <div className="singleCard">
        <img src={warrenty}/>
        <span className="mainTxt">Warranty</span>
        <span className="smallTxt">Up to 6 Months</span>
    </div>
    <div className="singleCard">
        <img src={bestPrice}/>
        <span className="mainTxt">Best Price</span>
        <span className="smallTxt">Deals & Discounts</span>
    </div>
    <div className="singleCard">
        <img src={delevery}/>
        <span className="mainTxt">Delivery</span>
        <span className="smallTxt">Island wide</span>
    </div>
    <div className="singleCard">
        <img src={customServ}/>
        <span className="mainTxt">Customer Service</span>
        <span className="smallTxt">Help & Support 24/7</span>
    </div>
</div>
  );
};

export default sapmleCarsd;
