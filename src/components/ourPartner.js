import React, { useEffect, useState } from "react";
import { getUser } from "../auth/Auth";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { loadPartners } from "../common/Common";

function OurPartner() {
  const [partners, setPartners] = useState([]),
    [loadingContent, setLoadingContent] = useState(true),
    [windowWidth, setWindowWidth] = useState(0),
    [user, setUser] = useState(null)


  useEffect(() => {
    loadPartners().then(data => {
      setPartners(data);
      setLoadingContent(false);
    }).catch(() => null);
  }, []);

  const partnerBody = () => {
    let body = [];
    if (partners) {
      partners.forEach((partner, index) => {
        body.push(
          <img key={index} src={partner.image_url} alt={partner.name} />
        );
      });
    }
    return body;
  };


  return (
    <>
      <div className="logoLine container">
        <OwlCarousel
          className="owl-theme custom-owl-carousel"
          loop
          auto
          items={1}
          slideBy={1}
          autoplay
          autoplayTimeout={3000}
          dots={false}
          cellPadding={10}
          autoplayHoverPause
          responsive={{
            0: {
              items:3
            },
            678: {
              items:5
            }
          }}
        >
          {partnerBody()}
        </OwlCarousel>
      </div>
    </>
  );
};

export default OurPartner;