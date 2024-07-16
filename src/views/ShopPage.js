import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Link, Navigate, useLocation } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { getUser } from "../auth/Auth";
import { loadCategories, loadProducts, loadBestSellerOptions, loadShopPageMainBanner } from "../common/Common";

import ShopBannerImage from '../assets/images/headphoneblue.png';

import Footer from '../components/Footer'
import FilterSection from '../components/FilterSection';
import '../assets/css/Shop.css'
import '../assets/css/fillterSection.css'
import RelatedProductsSlider from '../components/RelatedProductsSlider';
import { useNavigate } from 'react-router-dom';

function ShopPage() {

    const [products, setProducts] = useState([]),
        [productCategories, setProductCategories] = useState([]),
        [loadingContent, setLoadingContent] = useState(true),
        [isPopupVisible, setPopupVisible] = useState(true),
        [categoryStates, setCategoryStates] = useState({}),
        [selectedCategory, setSelectedCategory] = useState([]),
        [selectedBrands, setSelectedBrands] = useState([]),
        [selectedProductTags, setSelectedProductTags] = useState([]),
        [currentPage, setCurrentPage] = useState(1),
        [user, setUser] = useState(null),
        [categoryTagId, setCategoryId] = useState(0),
        [minPrice, setMinPrice] = useState(0),
        [maxPrice, setMaxPrice] = useState(null),
        [items, setItems] = useState([]),
        [bestSellerOptions, setBestSellerOptions] = useState(null),
        [SortProducts, setFilteredProducts] = useState([]),
        [ShopPageMainBanners, setShopPageMainBanner] = useState([]),
        navigate = useNavigate(),

        location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryId = parseInt(queryParams.get('category'));

    const itemsPerPage = 16;
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setPopupVisible(false);
            } else {
                setPopupVisible(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        getUser().then((data) => {
            setUser(data);
        }).catch(() => {
            setUser(null);
        });
        loadCategories().then(data => {
            setProductCategories(data);
        }).catch(() => null);
        loadProducts().then(data => {
            setProducts(data);
            setFilteredProducts(data);
            setLoadingContent(false);
        }).catch(() => null);
        loadBestSellerOptions().then(data => {
            setBestSellerOptions(data);
        }).catch(() => null);
        loadShopPageMainBanner().then(data => {
            setShopPageMainBanner(data);
        }).catch(() => null);
    }, []);


    const shopBanner = ShopPageMainBanners.reduce((highestBanner, currentBanner) => {
        return currentBanner.id > highestBanner.id ? currentBanner : highestBanner;
    }, ShopPageMainBanners[0]);


    const bestSellerSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const toggleLinks = (categoryId) => {
        setCategoryId(categoryId);
        setCategoryStates((prevStates) => ({
            ...prevStates,
            [categoryId]: !prevStates[categoryId],
        }));

    };

    const handleCheckboxChange = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands((prevSelectedBrands) =>
                prevSelectedBrands.filter((selectedBrand) => selectedBrand !== brand)
            );
        } else {
            setSelectedBrands((prevSelectedBrands) => [...prevSelectedBrands, brand]);
        }
    };

    const handleProductTagClick = (tag) => {
        setSelectedProductTags([tag]);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePriceChange = (event, isMin) => {
        const value = parseInt(event.target.value, 10);

        if (isMin) {
            if (maxPrice === null || value <= maxPrice) {
                setMinPrice(value);
            } else {
                setMinPrice(maxPrice);
            }
        } else {
            if (minPrice === null || value >= minPrice) {
                setMaxPrice(value);
            } else {
                setMaxPrice(minPrice);
            }
        }
    };

    const arrPrices = [];
    for (const product of products) {
        arrPrices.push(product.unit_price);
    }
    const overallMinPrice = Math.min(...arrPrices);
    const overallMaxPrice = Math.max(...arrPrices);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'LKR',
            minimumFractionDigits: 0,
        }).format(price).replace('LKR', 'LKR ');
    };
    const urlSearchParams = new URLSearchParams(window.location.search);
    const [tagFromUrl, setTagFromUrl] = useState(urlSearchParams.get('tag'));

    const handleSortChange = (event) => {
        if (event.target.value === 'category1') {
            const sortedProducts = products;
            setFilteredProducts(sortedProducts);
        }
        if (event.target.value === 'category2') {
            const sortedProducts = [...products].sort((a, b) => a.unit_price - b.unit_price);
            setFilteredProducts(sortedProducts);

        } else {

        }
    };

    const filteredProducts = SortProducts.filter((product) => {
        const brandFilter =
            selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const tagFilter =
            selectedProductTags.length === 0 || selectedProductTags.includes(product.tag);
        const filteredTagCatagory = (!categoryId || product.category_id === categoryId);
        const breadTagFilter = !tagFromUrl || product.tag === tagFromUrl;
        const priceFilter = (!minPrice || product.unit_price >= minPrice) && (!maxPrice || product.unit_price <= maxPrice);
        return brandFilter && tagFilter && breadTagFilter && priceFilter && filteredTagCatagory;
    });

    const resetFilters = () => {
        setSelectedBrands([]);
        setSelectedProductTags([]);
        setTagFromUrl(null);
        setCategoryId(null);
        setMinPrice(null);
        setMaxPrice(null);
        navigate('/shop');
    };

    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, filteredProducts.length);

    const productBody = () => {
        let body = [];
        if (filteredProducts) {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
            productsToDisplay.forEach((product, index) => {

                body.push(

                    <Link to={"/product/" + convertToSlug(product.product_name) + "-" + product.id} className="single-item" key={index}>
                        <span className='absLable-main' >
                            {product.productSectionTag.map((tag, index) => (
                                <React.Fragment key={index}>
                                    <span className="absLable">{tag}</span>

                                </React.Fragment>
                            ))}
                        </span>
                        <img src={product.image_url} />
                        <span className="main-name">{product.product_name}</span>
                        <span className="tag">{product.tag}</span>

                        <div className="price-list">
                            {/* <s className="crossLable">LKR 12,000</s> */}
                            <span className="right-name"> {formatPrice(product.unit_price)}</span>
                        </div>
                        <a to="/">
                            <button>Add to Cart</button>
                        </a>

                    </Link>

                );
            })
        }
        return body;
    };

    function convertToSlug(text) {
        return text
            .toLowerCase() // Convert to lowercase
            .replace(/[^\w\s-]/g, '') // Remove non-word characters
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/--+/g, '-') // Replace multiple - with single -
            .trim(); // Trim leading/trailing whitespace
    }


    const categoryBody = () => {
        let body = [];
        if (productCategories) {
            productCategories.forEach((category, index) => {
                const categoryId = category.id;
                const isLinksVisible = categoryStates[categoryId];
                body.push(
                    <div key={index} className="single-item">
                        <button
                            id={categoryId}
                            value={categoryId}
                            onClick={() => toggleLinks(categoryId)}
                            data-bs-target="#filterModal"
                            data-bs-dismiss="modal"
                        >
                            {category.name} {isLinksVisible ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8.00047 8.78101L4.70062 5.4812L3.75781 6.42401L8.00047 10.6667L12.2431 6.42401L11.3003 5.4812L8.00047 8.78101Z" fill="" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8.78028 8.00047L5.48047 4.70062L6.42328 3.75781L10.6659 8.00047L6.42328 12.2431L5.48047 11.3003L8.78028 8.00047Z" fill="" />
                                </svg>
                            )}
                        </button>

                        {isLinksVisible && (
                            <div>
                                {products.filter((product) => product.category_id === categoryId)
                                    .map((product) => (
                                        <div key={product.id}>
                                            <a className='tag-active' onClick={() => handleProductTagClick(product.tag)}
                                                style={{ color: selectedProductTags.includes(product.tag) ? "#207879" : "inherit" }}>
                                                {product.tag}
                                            </a>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                )
            })
        }
        return body;
    }

    const brandBody = () => {
        let body = [];
        if (products) {
            const uniqueBrands = [...new Set(products.map((product) => product.brand))];

            uniqueBrands.forEach((brand, index) => {
                body.push(
                    <label key={index}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(brand)}
                            checked={selectedBrands.includes(brand)}
                        />
                        {brand}
                    </label>
                );
            });
        }
        return body;
    };

    const bestSellerOptionbody = () => {
        let body= [];
        if (bestSellerOptions) {
            bestSellerOptions.forEach((bestSellerOption, index) => {
                body.push(
                    <div className="img-banner-simple" style={{ background: `var(--Linear-brown, radial-gradient(${bestSellerOption.primary_color} 1%, ${bestSellerOption.secondary_color} 100%))` }}>
                        <img className="logo" src={bestSellerOption.logo_url} />
                        <img className="bigimg" src={bestSellerOption.image_url} />
                        <span className="big-txt">{bestSellerOption.product_name}</span>
                        <span className="sml-txt">{bestSellerOption.product_description}</span>
                        <span className="vry-sml-txt">{bestSellerOption.product_tags}</span>
                    </div>
                )
            })
        }
        return body;
    }

    const allItems = Array.from({ length: filteredProducts.length }, (_, index) => `Item ${index + 1}`);

    //breadcrumb
    const breadcrumbPaths = [
        { label: 'Home', link: '/' },
        { label: 'Shop' },
    ];

    if (!loadingContent) {
        return (
            <div>
                <div className="page-wrapper container">
                    <Breadcrumb paths={breadcrumbPaths} />
                    <span className="PageName-Shop">Shop</span>

                    <div className="Single-slider-banner">
                        <div className="singleBanner" style={{ backgroundColor: shopBanner?.background_color || '#f5f5f5' }}>
                            <div className="flxImgAndTxt">
                                <div className="txt-cont">
                                    <span className="small-txt">{shopBanner?.sub_heading || 'Headphones '}</span>
                                    <span className="big-txt">{shopBanner?.main_heading || 'Headphones & Audio Equipments'}</span>
                                </div>
                                <div className="img-cont">
                                    <img src={shopBanner?.image_url || ShopBannerImage} alt='Shop Banner' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="complex-shop-all">
                        <div className="filtering-contents">
                            <div className="icon-toggle-mob">
                                {/* <FilterSection  /> */}

                                <div id="filterModal" tabIndex="-1" aria-labelledby="filterModalLabel">
                                    {isPopupVisible && (
                                        <div className="wrapper-filter popup">
                                            <button onClick={closePopup} className="absBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M8.00047 7.05767L11.3003 3.75781L12.2431 4.70062L8.94327 8.00047L12.2431 11.3003L11.3003 12.2431L8.00047 8.94327L4.70062 12.2431L3.75781 11.3003L7.05767 8.00047L3.75781 4.70062L4.70062 3.75781L8.00047 7.05767Z" fill="#1A1A1A" />
                                            </svg></button>
                                            <div className="hide-show-mobile-ico"></div>

                                            <div className="category-lable">
                                                <div className="main-lable">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M6.66667 3.33341H17.5V5.00008H6.66667V3.33341ZM2.5 2.91675H5V5.41675H2.5V2.91675ZM2.5 8.75008H5V11.2501H2.5V8.75008ZM2.5 14.5834H5V17.0834H2.5V14.5834ZM6.66667 9.16675H17.5V10.8334H6.66667V9.16675ZM6.66667 15.0001H17.5V16.6667H6.66667V15.0001Z"
                                                            fill="#050505"
                                                        />
                                                    </svg>
                                                    <span className="lable">Category</span>
                                                </div>
                                                <div className="category-contents">
                                                    {categoryBody()}
                                                </div>
                                            </div>

                                            <div className="brands">
                                                <span className="brand-lbl">Brands</span>
                                                <div className="cont">
                                                    {brandBody()}
                                                </div>
                                            </div>



                                            <div className="brands brdSpc">
                                                <fieldset className="filter-price">
                                                    <div className="price-field">
                                                        <input
                                                            type="range"
                                                            id="lower"
                                                            value={minPrice}
                                                            onChange={(e) => handlePriceChange(e, true)}
                                                            max={maxPrice}
                                                        />
                                                        <input
                                                            type="range"
                                                            id="upper"
                                                            value={maxPrice}
                                                            onChange={(e) => handlePriceChange(e, false)}
                                                            min='1'
                                                            max={overallMaxPrice}
                                                        />

                                                    </div>
                                                    <div className="price-wrap">
                                                        <div className="price-wrap-1">
                                                            <input
                                                                id="one"
                                                                value={minPrice}
                                                                onChange={(e) => handlePriceChange(e, true)}
                                                                placeholder="Min"
                                                                style={{ textAlign: 'center' }}
                                                            />
                                                            <label htmlFor="one">LKR</label>
                                                        </div>
                                                        <div className="price-wrap_line">-</div>
                                                        <div className="price-wrap-2">
                                                            <input
                                                                id="two"
                                                                value={maxPrice}
                                                                onChange={(e) => handlePriceChange(e, false)}
                                                                placeholder="Max"
                                                                style={{ textAlign: 'center' }}
                                                            />
                                                            <label htmlFor="two">LKR</label>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>

                                            {/* <div className="brands brdSpc">
                                            <span className="brand-lbl">Colors</span>
                                            <div className="cont">
                                            <button className="colo-round"  style={{background: '#0D0D0D'}}></button>
                                            <button className="colo-round" style={{background: '#7A755F'}}></button>
                                            <button className="colo-round" style={{background: '#272D51'}}></button>
                                            <button className="colo-round" style={{background: '#E9121F'}}></button>
                                            <button className="colo-round" style={{background: '#1FADA8'}}></button>
                                            </div>
                                        </div> */}

                                            {/* <div className="brands">
                                                <div className="cont">
                                                    <label>
                                                        <input type="checkbox" onChange={handleCheckboxChange} />
                                                        Enable Feature
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" onChange={handleCheckboxChange} />
                                                        Enable Feature
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" onChange={handleCheckboxChange} />
                                                        Enable Feature
                                                    </label>
                                                </div>
                                            </div> */}

                                            {/* <Slider {...bestSellerSlider}>
                                                {bestSellerOptionbody()}
                                            </Slider> */}

                                            <OwlCarousel className="owl-theme best-seller-slider"
                                                Loop
                                                Auto
                                                items={1}
                                                slideBy={1}
                                                autoplay
                                                autoplayTimeout={3000}
                                                autoplayHoverPause
                                                responsive={{
                                                    0: {
                                                      items: 1
                                                    },
                                                    678: {
                                                      items: 1
                                                    }
                                                }}

                                                >
                                                {bestSellerOptionbody()}
                                            </OwlCarousel>
                                            {/* <>
                                                {bestSellerOptionbody()}
                                            </> */}

                                        </div>
                                    )}

                                    <button onClick={togglePopup} className="main-toggle-filters">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M5.62492 2.08203C7.58093 2.08203 9.16658 3.66769 9.16658 5.6237V9.16536H5.62492C3.66891 9.16536 2.08325 7.57971 2.08325 5.6237C2.08325 3.66769 3.66891 2.08203 5.62492 2.08203ZM7.49992 7.4987V5.6237C7.49992 4.58816 6.66045 3.7487 5.62492 3.7487C4.58939 3.7487 3.74992 4.58816 3.74992 5.6237C3.74992 6.65923 4.58939 7.4987 5.62492 7.4987H7.49992ZM5.62492 10.832H9.16658V14.3737C9.16658 16.3297 7.58093 17.9154 5.62492 17.9154C3.66891 17.9154 2.08325 16.3297 2.08325 14.3737C2.08325 12.4177 3.66891 10.832 5.62492 10.832ZM5.62492 12.4987C4.58939 12.4987 3.74992 13.3382 3.74992 14.3737C3.74992 15.4092 4.58939 16.2487 5.62492 16.2487C6.66045 16.2487 7.49992 15.4092 7.49992 14.3737V12.4987H5.62492ZM14.3749 2.08203C16.3309 2.08203 17.9166 3.66769 17.9166 5.6237C17.9166 7.57971 16.3309 9.16536 14.3749 9.16536H10.8333V5.6237C10.8333 3.66769 12.4189 2.08203 14.3749 2.08203ZM14.3749 7.4987C15.4104 7.4987 16.2499 6.65923 16.2499 5.6237C16.2499 4.58816 15.4104 3.7487 14.3749 3.7487C13.3394 3.7487 12.4999 4.58816 12.4999 5.6237V7.4987H14.3749ZM10.8333 10.832H14.3749C16.3309 10.832 17.9166 12.4177 17.9166 14.3737C17.9166 16.3297 16.3309 17.9154 14.3749 17.9154C12.4189 17.9154 10.8333 16.3297 10.8333 14.3737V10.832ZM12.4999 12.4987V14.3737C12.4999 15.4092 13.3394 16.2487 14.3749 16.2487C15.4104 16.2487 16.2499 15.4092 16.2499 14.3737C16.2499 13.3382 15.4104 12.4987 14.3749 12.4987H12.4999Z" fill="black" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="sec-flx">
                            <div className="main-content-itm">
                                <div className="drop-dwn-flx">
                                    <div className="drp-dwn">
                                        <select id="categoryDropdown" onChange={handleSortChange}>
                                            <option value="category1">Default Sorting</option>
                                            <option value="category2" >Price  low to high</option>
                                            <option value="category3">Most Popular</option>
                                        </select>
                                    </div>
                                    <div className="show-results">
                                        <h3 className="all-txt">Showing
                                            <span className="showingItemCount">{startIndex} - {endIndex}</span> 0f
                                            <span className='tot-items'>{filteredProducts.length}</span>Results
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="filteredRes">
                                <div className="selected-tag-in-box">
                                    Category Tag : <span>{selectedProductTags.length > 0 ? selectedProductTags.join(', ') : 'No tag selected'}</span>
                                </div>
                                <div className="option-selected">

                                    <button onClick={resetFilters}>Reset</button>
                                </div>
                            </div>

                            {/* Item grid ------------------------------------------------------ */}
                            <div className="item-grid">
                                <div className="grid-wrapper">
                                    {productBody()}
                                </div>
                            </div>

                            {/* Pagination controls with navigation arrows */}
                            <div className="pagination">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    {'<'}
                                </button>
                                {Array.from({ length: Math.ceil(allItems.length / itemsPerPage) }, (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={currentPage === index + 1 ? 'active' : ''}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === Math.ceil(allItems.length / itemsPerPage)}
                                >
                                    {'>'}
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* <RelatedProductsSlider /> */}
                </div>
                <Footer />
            </div>
        );
    }
};

export default ShopPage;