import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Link, useLocation, useHistory  } from 'react-router-dom';

import '../assets/css/relatedItems.css';
import { loadCategories, loadProducts } from "../common/Common";

import OwlCarousel from "react-owl-carousel";
import { useParams } from 'react-router-dom';


const RelatedProductsSlider = ({ product }) => {

  const [products, setProducts] = useState([]),
    [productCategories, setProductCategories] = useState([]),
    [loadingContent, setLoadingContent] = useState(true),
    owlRef = useRef(null);

  useEffect(() => {
    loadCategories(product).then(data => {
      setProductCategories(data);
    }).catch(() => null);
    loadProducts().then(data => {
      setProducts(data);
      setLoadingContent(false);
    }).catch(() => null);
  }, [product]);

  // const handleClick = () => {
  //   window.location.reload();
  // }
  // setTimeout(handleClick,1000);

  const handlePrev = () => {
    if (owlRef.current) {
      owlRef.current.prev();
    }
  };

  const handleNext = () => {
    if (owlRef.current) {
      owlRef.current.next();
    }
  };

  const filteredProducts = products.filter((relatedproduct) => {
    const filteredCatagory = (relatedproduct.category_id === product.category_id && relatedproduct.id !== product.id);
    return filteredCatagory;
  });

  function convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  }
  const handleNavigationAndReload = () => {
    const newPath = "/product/" + convertToSlug(product.product_name) + "-" + product.id;
    window.location.href = newPath; // This will navigate to the new path and refresh the page
  };
  const relatedProductBody = () => {
    let body = [];
    if (filteredProducts) {
      filteredProducts.forEach((product, index) => {
        body.push(
          <div className='single-slide-sp' >
            <div className='single-slide-sub' >
              <Link to={"/product/" + convertToSlug(product.product_name) + "-" + product.id} className="single-item" key={index}>
                <div className='single-slide'>
                  <div>
                 <img className='slider-img-related' src={product.image_url}  />

                  <div className='product-details'>
                  <span className='pName'>{product.product_name}</span>
                  <span className='pTag'>{product.tag}</span>

                  <div className="price-list">
                  <span className='pPrc'>LKR {product.unit_price}</span>
                  </div>
                  </div>
                  </div>
                  <a onClick={handleNavigationAndReload}>
                  <button className='btn'>Add to Cart</button>
                  </a>
                  
                </div>
              </Link>
            </div>
          </div>
        );
      });
    }
    return body;
  };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className='RelatedItemSlider'>
      <div className='topicSection'>
        <h2>Related Products</h2>
        <div className='navArrow'>
          <button className='navButton' onClick={handlePrev} >&lt;</button>
          <button className='navButton' onClick={handleNext}>&gt;</button>
        </div>
      </div>
      <OwlCarousel
        ref={owlRef}
        className="owl-theme"
        loop
        auto
        items={1}
        slideBy={1}
        // autoplay
        // autoplayTimeout={3000}
        dots={true}
        cellPadding={10}
        autoplayHoverPause
        responsive={{
          0: {
            items:1
          },
          678: {
            items:1
          },
          1024: {
            items:4
          }
        }}
      >
        {/* <Slider {...settings}>
        {relatedProducts.map((product) => ( */}
        {/* <div C>
        <div key={""} className='single-slide-sp'>
          <img src={'https://dummyimage.com/650x500/c4c4c4/000000'} alt={"description"} />
          <span className='pName'>{"jbl Headphone1111"}</span>
          <span className='pTag'>{"tagline of jbl"}</span>
          <span className='pPrc'>{"LKR20,000"}</span>
          <Link to="/">
            <button className='btn'>Add to Cart</button>
          </Link>
        </div>
        <div key={""} className='single-slide-sp'>
          <img src={'https://dummyimage.com/650x500/c4c4c4/000000'} alt={"description"} />
          <span className='pName'>{"jbl Headphone"}</span>
          <span className='pTag'>{"tagline of jbl"}</span>
          <span className='pPrc'>{"LKR20,000"}</span>
          <Link to="/">
            <button className='btn'>Add to Cart</button>
          </Link>
        </div>
        <div key={""} className='single-slide-sp'>
          <img src={'https://dummyimage.com/650x500/c4c4c4/000000'} alt={"description"} />
          <span className='pName'>{"jbl Headphone"}</span>
          <span className='pTag'>{"tagline of jbl"}</span>
          <span className='pPrc'>{"LKR20,000"}</span>
          <Link to="/">
            <button className='btn'>Add to Cart</button>
          </Link>
        </div>
        <div key={""} className='single-slide-sp'>
          <img src={'https://dummyimage.com/650x500/c4c4c4/000000'} alt={"description"} />
          <span className='pName'>{"jbl Headphone"}</span>
          <span className='pTag'>{"tagline of jbl"}</span>
          <span className='pPrc'>{"LKR20,000"}</span>
          <Link to="/">
            <button className='btn'>Add to Cart</button>
          </Link>
        </div>
      </div> */}

        {relatedProductBody()}
        {/* ))}
      </Slider> */}
      </OwlCarousel>
    </div>
  );
};

export default RelatedProductsSlider;
