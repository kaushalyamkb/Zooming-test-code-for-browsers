import React, { useEffect, useState } from "react";
import {getUser} from "../auth/Auth";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "../assets/css/Home.css";

import { loadTestimonials } from "../common/Common";

function Testimonials() {
    
    const [testimonials, setTestimonials] = useState([]),
    [loadingContent, setLoadingContent] = useState(true),
    [windowWidth, setWindowWidth] = useState(0),
    [user, setUser] = useState(null),
    testimonialSliderSettings = {
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      pauseOnHover: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    useEffect(() => {
      getUser().then((data) => {
        setUser(data);
      }).catch(() => {
        setUser(null);
      });
      loadTestimonials().then(data => {
        setTestimonials(data);
      }).catch(() => null);
    }, []);
    const testimnialBody = () => {
      let body = [];
      if (testimonials) {
        testimonials.forEach((testimonial, index) => {
          body.push(
            <div className="item" key={index}> {/* Add 'item' class here */}
              <div className="comment">
                <span className="commentTxt">
                  {testimonial.message}
                </span>
                <div className="flx">
                  <img src={testimonial.image_url} alt={`Image of ${testimonial.person_name}`} />
                  <div className="namePosition">
                    <span className="name">{testimonial.person_name}</span>
                    <span className="position">{testimonial.designation}</span>
                  </div>
                </div>
                <span className="absDiv">“</span>
              </div>
            </div>
          );
        });
      }
      return body;
    };

  return (
  <>
      <div className="testImonials container">
        <div className="header-sec">
          <span className="small-txt">Testimonials</span>
          <div className="flx">
            <span className="main">See what our client have to say</span>
          </div>
        </div>
        <div className="flex-testimo">
        <OwlCarousel
					className="owl-theme"
					loop
					auto
					items={1}
					slideBy={1}
					autoplay
					autoplayTimeout={3000}
					dots={false}
					autoplayHoverPause
					responsive={{
						0: {
              items: 1,
              dots: true 
						},
						678: {
						  items: 3 // Show 6 items on screens 678px and above
						}
					}}
				>
          {testimnialBody()}
        </OwlCarousel>
        </div>
      </div>
  </>
  );
};

export default Testimonials;