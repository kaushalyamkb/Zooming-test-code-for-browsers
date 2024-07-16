import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"; // If using react-router
import "../assets/css/Header.css";

import Logo from "../assets/images/logo.svg";
import Phone from "../assets/images/Phone.svg";
import Truck from "../assets/images/Truck.svg";
import Search from "../assets/images/Search.svg";
import Cart from "../assets/images/Cart.svg";

import { updateList } from "../common/Common";
import ListProductDetails from "../components/ListProductDetails";
import { toast } from "react-toastify";
import { loadCategories, loadProducts } from "../common/Common";

function Header() {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false),
    [isSticky, setIsSticky] = useState(false),
    [list, setList] = useState([]),
    [showPopup, setShowPopup] = useState(false),
    [showOffers, setShowOffers] = useState(false),
    [showOffers2, setShowOffers2] = useState(false),
    [isOpen, setIsOpen] = useState(false),
    [isActive, setIsActive] = useState(false),
    [inputValue, setInputValue] = useState(''),
    [products, setProducts] = useState([]),
    [loadingContent, setLoadingContent] = useState(true),
    [inputSearch, setInputSearch] = useState(),
    [searchValue, setSearchValue] = useState(''),
    [suggestions, setSuggestions] = useState([]);



  useEffect(() => {
    loadProducts().then(data => {
      setProducts(data);
      setLoadingContent(false);
    }).catch(() => null);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setSuggestions([]);
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.getElementById('headerandbody').classList.add('popup-open');
      setSearchValue('');
    } else {
      document.getElementById('headerandbody').classList.remove('popup-open');
    }
  };

  const closeSearch = () => {
    setIsOpen(false);
    document.getElementById('headerandbody').classList.remove('popup-open');

    setTimeout(() => {
      window.location.reload();
    }, 500);

  };

  const handleSearchClick = () => {

    setSearchValue('');
  };


  const handleChangeSearchBar = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchValue(inputValue);

    const newSuggestions = products.filter(product =>
      product.product_name.toLowerCase().startsWith(inputValue)
    );
    setSuggestions(newSuggestions);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolled = scrollTop > 0;
      setIsSticky(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (!event.target.closest('.nav-item.me-3.desktop-flx-spc.a-1')) {
      setShowOffers(false);
    }
    if (!event.target.closest('.brands-and-search.desktop-flx-spc.a-2')) {
      setShowOffers2(false);
    }
    if (!event.target.closest('.search-container')) {
      setIsOpen(false);
    }
    if (!event.target.closest('.popup-container')) {
      setShowPopup(false);
    }
  };

  const toggleOffers = () => {
    setShowOffers(!showOffers);
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleOffers2 = () => {
    setShowOffers2(!showOffers2);
  };

  const handleSearchToggle = (evt) => {
    setIsActive(!isActive);
    if (!isActive) evt.preventDefault();
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleChangeSearch = (product) => {
    setInputSearch(product.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const togglePopup = () => {
    setShowPopup(!showPopup);

    if (showOffers2) {
      setShowOffers2(false);
    }
  };




  const removeFromList = (index) => {
    let tempList = JSON.parse(JSON.stringify(list));
    tempList.splice(index, 1);
    setList(tempList);
    updateList(tempList);
  }

  // Calculate subtotal and format it with minimum fraction digits
  const formattedSubtotal = list?.reduce((total, product) => {
    return total + product.selectedQuantity * product.numericPrice;
  }, 0)?.toLocaleString('en-US', { minimumFractionDigits: 2 }) ?? '0.00';

  const productBody = (products) => {
    let body = [];
    if (products) {
      products.forEach((product, index) => {
        body.push(
          <ListProductDetails product={product} index={index} removeFromList={removeFromList} key={index} />
        );
      });
    }
    return body;
  };
  const [itemCount, setItemCount] = useState(0);

  const storedList = sessionStorage.getItem('list');

  useEffect(() => {

    if (storedList) {
      const parsedList = JSON.parse(storedList);
      setList(parsedList);
    }
  }, [storedList]);

  useEffect(() => {
    setItemCount(list.length);
    setShowPopup(true)
  }, [list]);

  return (
    <>
      <div className="desktop-header">
        <header className="fixed-top navbar-header">
          <div className="headertobar">
            <div className="container  d-flex">
              <div className="w-50 mhide">
                <p className="text-white">
                  MYCO{" "}
                  <span className="header-txt ml-3" style={{ color: "#FFFF" }}>
                    |
                  </span>{" "}
                  Power to perform
                </p>
              </div>
              <div className="d-flex del-container">
                <div className="truck">
                  <img src={Phone} width={"18px"} alt="" />
                  <a href="tel:+94 77 140 0140" className="header-txt">
                    +94 77 140 0140
                  </a>
                </div>
                <div className="truck delivery">
                  <img src={Truck} width={"25px"} alt="" />
                  <a href="/" className="header-txt">
                    Island wide delivery
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg">
            <div className="container ">
              <NavLink className="navbar-brand" to="/">
                <img src={Logo} alt="Logo" />
              </NavLink>
              <div className="nav-mid" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto" />
                <ul className="navbar-nav me-auto">
                  <li className="nav-item me-3">
                    <NavLink
                      className="nav-link header-link"
                      to="/"
                      activeClassName="is-active"
                      data-target="#navbarSupportedContent"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item me-3">
                    <NavLink
                      className="nav-link header-link"
                      to="/shop"
                      activeClassName="is-active"
                      data-target="#navbarSupportedContent"
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li className="nav-item me-3">
                    <NavLink
                      className="nav-link header-link"
                      to="/about-us"
                      activeClassName="is-active"
                      data-target="#navbarSupportedContent"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item me-3">
                    <NavLink
                      className="nav-link header-link"
                      to="/blogs"
                      activeClassName="is-active"
                      data-target="#navbarSupportedContent"
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li className="nav-item me-3">
                    <NavLink
                      className="nav-link header-link"
                      to="/contact-us"
                      activeClassName="is-active"
                      data-target="#navbarSupportedContent"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  
                </ul>
              </div>
              <div className="brands-and-search desktop-flx-spc a-2">
                
                <div className="ico" style={{ marginLeft: "0px" }}>
                  <div className="search-container">
                    <div  >
                      <img
                        src={Search}
                        style={{ marginLeft: "0px", width: "18px", cursor: "pointer" }}
                        alt="Search"
                        onClick={toggleSearch}

                      />
                    </div>
                    {isOpen && (
                      <div>

                        <div className="search-popup">

                          <input
                            type="text"
                            placeholder="Search in MYCO store"
                            value={searchValue}
                            onChange={handleChangeSearchBar}

                          />
                          <button className="search-button">
                            <img src={Search} width="24px" alt="Search in MYCO store" />
                          </button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="close-button" onClick={closeSearch}>
                            <path d="M10.0006 8.82208L14.1253 4.69727L15.3038 5.87577L11.1791 10.0006L15.3038 14.1253L14.1253 15.3038L10.0006 11.1791L5.87577 15.3038L4.69727 14.1253L8.82208 10.0006L4.69727 5.87577L5.87577 4.69727L10.0006 8.82208Z" fill="#494949" />
                          </svg>
                          <div className="additional-search-results" >
                            <span className="additional-name">Top Picks for you</span>
                            <ul>
                              <li>
                                <div className="flx-reslts">

                                  {suggestions.map((product) => (
                                    <Link to={`/product/${product.id}`} className="single-item" key={product.id} onClick={closeSearch}>
                                      <div className="image-cont-result">
                                        <img src={product.image_url} alt={product.brand} />
                                      </div>
                                      <div className="image-cont-result-text">
                                        <span >{product.product_name}</span>
                                      </div>
                                      <div className="image-cont-result-text">
                                        <span >{product.brand}</span>
                                      </div>
                                      <div className="image-cont-result-text">
                                        <span >{product.model}</span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="popup-container">
                    <img
                      src={Cart}
                      style={{ marginLeft: "30px", width: "24px", cursor: "pointer" }}
                      alt=""
                      onClick={togglePopup}
                    />
                    <span className="item-count-number" style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '3px 8px' }}>
                      {itemCount}
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
          </nav>

        </header>
        {showPopup && (
                      <div className="popup-cart">
                        <div className="popup-cart-wrapper">
                          <span className="txt-top-cart">Cart Summary</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="main-close-cart" onClick={togglePopup} width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.0006 8.82208L14.1253 4.69727L15.3038 5.87577L11.1791 10.0006L15.3038 14.1253L14.1253 15.3038L10.0006 11.1791L5.87577 15.3038L4.69727 14.1253L8.82208 10.0006L4.69727 5.87577L5.87577 4.69727L10.0006 8.82208Z" fill="#494949" />
                          </svg>
                          <div className="cart-not-empty">
                            <ul>
                              <li>
                                {list && list.length > 0 ? (
                                  <div>{productBody(list)}</div>
                                ) : (
                                  <p style={{ marginTop: 0 }} className="empty-cart">No products in the cart.</p>
                                )}
                              </li>
                            </ul>
                            <hr className="hr-cart" />
                            <div className="sub-tot-cart">Subtotal :  <span>LKR {formattedSubtotal}</span></div>
                            <div className="button-row-ct">
                              <NavLink to={'/cart'}>
                                <button className="check-or-pay">View Cart</button>
                              </NavLink>
                              <NavLink to={'/checkout'}>
                                <button className="check-or-pay" disabled={(list ?? []).length === 0}>Checkout</button>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
      </div>
      
      <div className="mobile-header">
        <div className={`green-label ${isSticky ? 'sticky' : ''} `}>
          <a href="tel:0771400140" className="phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.68278 5.34105C5.151 6.1644 5.8356 6.849 6.65895 7.3172L7.1012 6.69805C7.24825 6.49225 7.5258 6.42865 7.7478 6.5499C8.4512 6.93415 9.22855 7.16765 10.0394 7.23185C10.2995 7.25245 10.5 7.46945 10.5 7.7303V9.9617C10.5 10.2181 10.3061 10.4328 10.0511 10.4591C9.78615 10.4863 9.51885 10.5 9.25 10.5C4.9698 10.5 1.5 7.0302 1.5 2.75C1.5 2.48114 1.51371 2.21385 1.54095 1.94888C1.56715 1.69387 1.78197 1.5 2.03833 1.5H4.26971C4.53055 1.5 4.74756 1.70052 4.76815 1.96054C4.83233 2.77144 5.06585 3.54882 5.4501 4.25222C5.57135 4.4742 5.50775 4.75177 5.30195 4.89879L4.68278 5.34105ZM3.42213 5.0126L4.3721 4.33404C4.10273 3.75257 3.91814 3.13592 3.82364 2.5H2.50453C2.50151 2.58316 2.5 2.6665 2.5 2.75C2.5 6.4779 5.5221 9.5 9.25 9.5C9.3335 9.5 9.41685 9.4985 9.5 9.49545V8.17635C8.8641 8.08185 8.24745 7.89725 7.66595 7.6279L6.9874 8.5779C6.7129 8.47125 6.4478 8.34575 6.1937 8.20305L6.16465 8.1865C5.18485 7.62935 4.37067 6.81515 3.8135 5.83535L3.79697 5.8063C3.65424 5.5522 3.52877 5.2871 3.42213 5.0126Z" fill="white" />
            </svg>
            +94 77 140 0140
          </a>
          <div className="del">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.48228 9C4.36097 9.84805 3.63162 10.5 2.75 10.5C1.86838 10.5 1.13903 9.84805 1.01772 9H0.5V3C0.5 2.72386 0.72386 2.5 1 2.5H8C8.27615 2.5 8.5 2.72386 8.5 3V4H10L11.5 6.02785V9H10.4823C10.361 9.84805 9.6316 10.5 8.75 10.5C7.8684 10.5 7.13905 9.84805 7.0177 9H4.48228ZM7.5 3.5H1.5V7.52525C1.81763 7.2011 2.26033 7 2.75 7C3.4481 7 4.05073 7.40875 4.33159 8H7.1684C7.25225 7.8235 7.3648 7.6632 7.5 7.52525V3.5ZM8.5 6.5H10.5V6.3575L9.49585 5H8.5V6.5ZM8.75 9.5C9.07655 9.5 9.35435 9.2913 9.4573 9C9.48495 8.9218 9.5 8.83765 9.5 8.75C9.5 8.3358 9.1642 8 8.75 8C8.3358 8 8 8.3358 8 8.75C8 8.83765 8.01505 8.9218 8.0427 9C8.14565 9.2913 8.42345 9.5 8.75 9.5ZM3.5 8.75C3.5 8.3358 3.16422 8 2.75 8C2.33579 8 2 8.3358 2 8.75C2 8.83765 2.01504 8.9218 2.04268 9C2.14564 9.2913 2.42345 9.5 2.75 9.5C3.07656 9.5 3.35437 9.2913 3.45733 9C3.48496 8.9218 3.5 8.83765 3.5 8.75Z" fill="white" />
            </svg>
            Island wide delivery
          </div>
        </div>
        <nav className={`navbar ${isMobileNavOpen ? "open" : ""} ${isSticky ? 'sticky' : ''} `}>
          <div className="brand">
            <NavLink className="" to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="menu-icon" onClick={toggleMobileNav}>
            <div className={`bar1 ${isMobileNavOpen ? "change" : ""}`}></div>
            <div className={`bar2 ${isMobileNavOpen ? "change" : ""}`}></div>
            <div className={`bar3 ${isMobileNavOpen ? "change" : ""}`}></div>
          </div>
          <div className="wrapper-bg-col">
            <ul className={`nav-links ${isMobileNavOpen ? "open" : ""}`}>

              <div className="top-flx-mon-nav">
                <span className="col-3">Menu</span>
                <button className="col-3">
                  <Link to="/" onClick={closeMobileNav}>
                    Offers & Deals
                  </Link>
                </button>

              </div>
              <li>
                <Link to="/" onClick={closeMobileNav}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" onClick={closeMobileNav}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={closeMobileNav}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" onClick={closeMobileNav}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact-us" onClick={closeMobileNav}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/cart" onClick={closeMobileNav}>
                  View Cart
                </Link>
              </li>
            </ul>
            <div className="col-remove"></div>

          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;