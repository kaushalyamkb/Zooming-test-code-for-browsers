import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/relatedItems.css';
import '../assets/css/Home.css'
import '../assets/css/logoCardsline.css'
import warrenty from '../assets/images/warranty.webp'
import bestPrice from '../assets/images/bestprice.webp'
import delevery from '../assets/images/fastdelivery.webp'
import customServ from '../assets/images/hourssupport.webp'





function singleItemLogos () {

    const settingsLg = {
        dots: true,
        speed: 500,
        slidesToShow:5,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
    };

     // Function coding for Main Banner ---------------------------------------------------
  // const [partnerData, setPartnerData] = useState(null);
  // useEffect(() => {

  //     // Fetch data from the Laravel API endpoint
  //     fetch('/api/homepage-data/partner')
  //       .then(response => response.json())
  //       .then(data => setPartnerData(data))
  //       .catch(error => console.error('Error fetching data:', error));
  // }, []);

  // if (!partnerData) {
  //     return <div>Loading...</div>;
  // }

  // const {
  //     partnerImageURL,
  // } = partnerData;
  return (


    // hard coded partner data-----------------------------------
    <div className='logo-line'>
        <Slider {...settingsLg}>
                <img src="https://dummyimage.com/800x600/0000/000000"/>
        </Slider> 
    </div>

    //dynamic partner data -----------------------------------------
  //   <div className='logo-line'>
  //   <Slider {...settingsLg}>
  //           <img src={partnerData}/>
  //   </Slider> 
  // </div>


  );
};

export default singleItemLogos;
