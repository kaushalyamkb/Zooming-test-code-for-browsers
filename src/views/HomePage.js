import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "../assets/css/Home.css";
import CountdownTimer from "../components/countDown";
import Footer from "../components/Footer";
import OurPartner from "../components/ourPartner";
import Testimonials from "../components/Testimonials";
import moment from "moment";
import { getUser } from "../auth/Auth";
import { loadCategories, loadFeaturedBanners, loadProducts, loadCountDownbanners, loadMainBanners, loadProductBanners, loadInformativeBanners, loadInformativeBannerSpecs, loadProductSections, loadOrders, loadOrderUsingOrderNo } from "../common/Common";

import warrenty from "../assets/images/warranty.webp";
import bestPrice from "../assets/images/best-price.webp";
import delevery from "../assets/images/fastdelivery.webp";
import customServ from "../assets/images/hourssupport.webp";
import logo from "../assets/images/Asset 1 1.png";
import headphoneBanner from "../assets/images/headphoneBanner.png";
import portableSpeker from "../assets/images/portableSpeker.png";
import headphone from "../assets/images/headphone.png";
import gamingpad from "../assets/images/gamingpad.png";
import powerBank from "../assets/images/image 170.png";
import audiSys from "../assets/images/audiSys.png";
import mic from "../assets/images/mic.png";
import sales from "../assets/images/sales.png";
import A1 from "../assets/images/A1.png";
import speker from "../assets/images/speker.png";
import bluetoothSpkr from "../assets/images/bluetoothSpkr.png";
import headphoneSml from "../assets/images/headphoneSml.png";
import imgPop from "../assets/images/imgPop.png";

import {  getRequest } from "../routes/Routes";

function HomePage() {


	const [categoriesTag, setCategoriesTag] = useState([]),
		[testimonials, setTestimonials] = useState([]),
		[windowWidth, setWindowWidth] = useState(0),
		[featuredBanners, setFeaturedBanners] = useState([]),
		[countdownBanners, setcountdownBanners] = useState([]),
		[mainBanners, setMainBanners] = useState([]),
		[productBanners, setProductBanners] = useState([]),
		[productSections, setProductSections] = useState([]),
		[products, setProducts] = useState([]),
		[informativeBanners, setInformativeBanners] = useState([]),
		[loadingContent, setLoadingContent] = useState(true),
		[user, setUser] = useState(null),


		[searchValue, setSearchValue] = useState(''),
		[suggestions, setSuggestions] = useState(['0']),
		[orders, setOrders] = useState([]),
		[orderTrackingProductId, setOrderTrackingProductId] = useState([]),
		[TrackingProduct, setTrackingProduct] = useState([]),
		owlRef = useRef(null),


		GamingPeripheralsSlider = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
		},
		CategoryTagSlider = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
		},

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
		},
		sliderSettingsForBanner = {
			dots: true,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 550,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		},
		partnerSliderSettings = {
			dots: false,
			arrows: false,
			autoplay: true,
			infinite: true,
			pauseOnHover: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
			],
		};


	useEffect(() => {
		getUser().then((data) => {
			setUser(data);
		}).catch(() => {
			setUser(null);
		});
		loadCategories().then(data => {
			setCategoriesTag(data);
		}).catch(() => null);
		loadFeaturedBanners().then(data => {
			setFeaturedBanners(data);
			setLoadingContent(false);
		}).catch(() => null);
		loadCountDownbanners().then(data => {
			setcountdownBanners(data);
			setLoadingContent(false);
		}).catch(() => null);
		loadMainBanners().then(data => {
			setMainBanners(data);
			setLoadingContent(false);
		}).catch(() => null);
		loadProductSections().then(data => {
			setProductSections(data);
		}).catch(() => null);
		loadProducts().then(data => {
			setProducts(data);
		}).catch(() => null);
		loadProductBanners().then(data => {
			setProductBanners(data);
			setLoadingContent(false);
		}).catch(() => null);


		loadInformativeBanners().then((banners) => {
			const promises = banners.map((banner) => {
				return loadInformativeBannerSpecs(banner.id).then((specs) => {
					banner.specs = specs;
					return banner;
				}).catch((error) => {
					console.error('Error fetching specs for banner:', error);
					return banner;
				});
			});
			return Promise.all(promises);
		}).then((bannersWithSpecs) => {
			setInformativeBanners(bannersWithSpecs);
			setLoadingContent(false);
		}).catch((error) => {
			console.error('Error fetching banners:', error);
			setLoadingContent(false);
		});

	}, []);


	const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 600);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};


	}, []);

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		return date.toLocaleDateString('en-US', options);
	};

	const categoryTagBody = () => {
		let body = [];
		if (categoriesTag) {
			categoriesTag.forEach((categoryTag, index) => {
				body.push(
					<div key={index} className="single-item rotate1">
						<Link to={`/shop?category=${categoryTag.id}`}>
							<div className="icon-wrapper" style={{ borderColor: categoryTag.color_code }}>
								<div className="icon-div" style={{ backgroundColor: categoryTag.color_code }}>
									<img src={categoryTag.image_url} alt="" />
								</div>
								<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 84 84" fill="none">
									<circle cx="42" cy="42" r="40" transform="rotate(90 42 42)" stroke="url(#paint0_linear_1808_6658)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
									<defs>
										<linearGradient id="paint0_linear_1808_6658" x1="101" y1="42" x2="-17" y2="42" gradientUnits="userSpaceOnUse">
											<stop stopColor="#78F7F9" />
											<stop offset="1" stopColor="#076E70" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div className="item-text">
								<span>{categoryTag.name}</span>
							</div>
						</Link>
					</div>
				);
			});
		}
		return body;
	};

	const featuredBannerBody = () => {
		let body = [];
		if (featuredBanners) {
			featuredBanners.forEach((banner, index) => {
				body.push(
					<div className="Common-crd-withImg " key={index}>
						<div className="flex-div container">
							<div className="single-crd-with-img">
								<div className="cardWrapp" style={{ background: banner.primary_color, borderRadius: '12px' }}>
									<div className="imgCard">
										<picture>
											<source media="(max-width: 767px)" srcSet={banner.image_url} alt="" />
											<source media="(max-width: 1023px)" srcSet={banner.image_url} alt="" />
											<img src={banner.image_url} alt="background" />
										</picture>
									</div>
									<div className="txtWrapper">
										<span className="smallTxt">{banner.heading}</span>
										<span className="bigTxt">{banner.sub_heading}</span>
										<div className="button-rw">
											<Link to={banner.button_link}>
												<button className="color-btn">{banner.button_label}</button>
											</Link>

											<Link to="/shop">
												<button className="trnspr-btn">Go to Shop
													<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
														<path d="M8.86673 6.37938L7.71756 5.23021L5.84506 3.35771C5.4484 2.96688 4.77173 3.24688 4.77173 3.80688V7.44104V10.7135C4.77173 11.2735 5.4484 11.5535 5.84506 11.1569L8.86673 8.13521C9.35089 7.65688 9.35089 6.86354 8.86673 6.37938Z" fill="" />
													</svg>
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
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
	const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'LKR',
            minimumFractionDigits: 0,
        }).format(price).replace('LKR', 'LKR ');
    };
	// const productSectionBody = (sectionIndex) => {
	// 	let body = [];
	// 	if (productSections && productSections.length > sectionIndex) {
	// 		const productSection = productSections[sectionIndex];
	// 		const productIds = productSection.product_id;
	// 		const sectionProducts = products.filter(product => productIds.includes(product.id));

	// 		body.push(
	// 			<div key={sectionIndex} className="product-launching-grid container">
	// 				<div className="heading-txt">
	// 					<span className="small-txt-grd reduce-spac-01">{productSection.main_heading}</span>
	// 					<h2 className="main-txt-grd">{productSection.sub_heading}</h2>
	// 				</div>
	// 				<div className="prd-slider">
	// 					<div className="cont-body">
	// 						{sectionProducts.map((product, productIndex) => (
	// 							<div key={productIndex} className="single-grid-card">
	// 								<div className="lft-img">
	// 									<img
	// 										src={product.image_url}
	// 										alt={product.product_name}
	// 									/>
	// 								</div>
	// 								<div className="rgt-txt">
	// 									<span className="small-txt">{product.category_id.category_name}</span>
	// 									<span className="big-txt">{product.product_name}</span>
	// 									<span className="price">{formatPrice(product.unit_price)}</span>
	// 									<Link to={`/product/${convertToSlug(product.product_name)}-${product.id}`} className="single-item">
	// 										<button className="by-nw">Buy Now</button>
	// 									</Link>
	// 								</div>
	// 							</div>
	// 						))}
	// 					</div>
	// 				</div>
	// 			</div>
	// 		);
	// 	}
	// 	return body;
	// };
	const chunkArray = (array, size) => {
		const result = [];
		for (let i = 0; i < array.length; i += size) {
		  result.push(array.slice(i, i + size));
		}
		return result;
	  };
	  
	  const productSectionBody = (sectionIndex) => {
		let body = [];
		if (productSections && productSections.length > sectionIndex) {
		  const productSection = productSections[sectionIndex];
		  const productIds = productSection.product_id;
		  const sectionProducts = products.filter(product => productIds.includes(product.id));
		  const chunks = chunkArray(sectionProducts, 8); // Chunk the products into arrays of 8
	  
		  body.push(
			<div key={sectionIndex} className="product-launching-grid container">
			  <div className="heading-txt">
				<span className="small-txt-grd reduce-spac-01">{productSection.main_heading}</span>
				<h2 className="main-txt-grd">{productSection.sub_heading}</h2>
			  </div>
			  <div className="prd-slider">
				<OwlCarousel className="owl-theme" loop margin={10} nav items={1}>
				  {chunks.map((chunk, chunkIndex) => (
					<div key={chunkIndex} className="cont-body">
					  {chunk.map((product, productIndex) => (
						<div key={productIndex} className="single-grid-card">
							<div className="lft-img">
								<div className="lft-img">
									<img
									src={product.image_url}
									alt={product.product_name}
									/>
								</div>
								<div className="rgt-txt">
									<span className="small-txt">{product.category_id.category_name}</span>
									<span className="big-txt">{product.product_name}</span>
									<span className="price">{formatPrice(product.unit_price)}</span>
									
								</div>
						  </div>
						  <div className="rgt-txt">
						  <Link to={`/product/${convertToSlug(product.product_name)}-${product.id}`} className="single-item">
							  <button className="by-nw">Buy Now</button>
							</Link>
						  </div>
						</div>
					  ))}
					</div>
				  ))}
				</OwlCarousel>
			  </div>
			</div>
		  );
		}
		return body;
	  };
	  

	const countdownBannerBody = () => {
		if (countdownBanners && countdownBanners.length > 0) {
			const latestBanner = countdownBanners[countdownBanners.length - 1];
			return (
				<div className="LeftImgCommonBanner uncommin-div" style={{ background: '#F0FCFC' }}>
					<div className="ReAlignCont container">
						<div className="imgDiv">
							<img src={latestBanner.image_url} alt="" className="uncommon-img" />
						</div>
						<div className="RelativeTextCont">
							<div className="myco-logo">
								<img src={latestBanner.logo_url} alt="" />
							</div>
							<div className="main-header-text">
								<h2 className="countD-h2">{latestBanner.heading}</h2>
							</div>
							<span className="tag-for-maintxt">
								{latestBanner.sub_heading}
							</span>
							<div className="count-down">
								<CountdownTimer startDate={latestBanner.start_date} endDate={latestBanner.end_date} />
							</div>
							<div className="button-row">
								<Link to={latestBanner.button_link}>
									<button className="pd-banner-btn">{latestBanner.button_label}</button>
								</Link>
								<Link to={'/shop'}>
									<button className="go-toShop-btn">
										Learn More
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
											<path d="M11.4 8.13063L9.92251 6.65313L7.51501 4.24563C7.00501 3.74313 6.13501 4.10313 6.13501 4.82313V9.49563V13.7031C6.13501 14.4231 7.00501 14.7831 7.51501 14.2731L11.4 10.3881C12.0225 9.77313 12.0225 8.75313 11.4 8.13063Z" fill="" />
										</svg>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			);
		}
		return null;
	};

	const mainBannerBody = () => {
		let body = [];
		if (mainBanners) {
			mainBanners.forEach((mainBanner, index) => {
				body.push(
					<div key={index} className="item">
						<section className="hm-homeBanner">
							<div className="backgroundLayer container">
								<div className="RelativeTextCont">
									<div className="small-text-top">
										<span>— {mainBanner.sub_heading}</span>
									</div>
									<div className="main-header-text">
										<h1>{mainBanner.heading}</h1>
									</div>
									<div className="banner-para">
										<p>{mainBanner.paragraph}</p>
									</div>
									<div className="button-row green-to-black">
										<Link to={mainBanner.button_link}>
											<button className="pd-banner-btn">{mainBanner.button_label}</button>
										</Link>

										<Link to={'/shop'}>
											<button className="go-toShop-btn">
												Go to Shop
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
												>
													<path
														d="M10.1331 6.99328L8.81979 5.67995L6.67979 3.53995C6.22646 3.09328 5.45312 3.41328 5.45312 4.05328V8.20662V11.9466C5.45312 12.5866 6.22646 12.9066 6.67979 12.4533L10.1331 8.99995C10.6865 8.45328 10.6865 7.54662 10.1331 6.99328Z"
														fill=""
													/>
												</svg>
											</button>
										</Link>
									</div>
								</div>
								<div className="RelativeImgCont">
									<img
										src={mainBanner.image_url}
										alt={mainBanner.heading}
									/>
								</div>
							</div>
							<div className="bg-color-changing" style={{ backgroundImage: `linear-gradient(294deg,${mainBanner.primary_color} 30%, ${mainBanner.secondary_color} 30%)` }}></div>
						</section>
					</div>
				)
			})
		}
		return body;
	};

	const mainBannerBodyy = () => {
		let body = [];
		if (mainBanners) {
			mainBanners.forEach((mainBanner, index) => {
				body.push(
					<div key={index} className="item">
					<section className="hm-homeBanner">
						<div className="full-width-wrap">
							<a href={mainBanner.product_url} className="full-width-img">
								<picture>
									<source media="(max-width: 767px)" srcSet={mainBanner.mobile_url} alt="mobile header banner" />
									<source media="(max-width: 1023px)" srcSet="https://dummyimage.com/800x800%20/3357ab/ffffff&text=mobile+banner+image+800x800+" alt="mobile header banner" />
									<img src={mainBanner.image_url} alt="desktop header banner" />
								</picture>
							</a>
						</div>
					</section>
				</div>
				)
			})
		}
		return body;
	};

	const productBannerBody = (bannerIndex) => {
		let body = [];
		if (productBanners && productBanners.length > bannerIndex) {
			const productBanner = productBanners[bannerIndex];

			body.push(
				<div key={bannerIndex} className="LeftImgCommonBanner" style={{ background: `var(--Linear-brown, linear-gradient(98deg, ${productBanner.primary_color} 0%, ${productBanner.secondary_color} 100%))` }}>
					<div className="ReAlignCont container">
						<div className="imgDiv">
							<img src={productBanner.image_url} />
						</div>
						<div className="RelativeTextCont">
							<div className="small-text-top">
								<span>— {productBanner.sub_heading}</span>
							</div>
							<div className="main-header-text">
								<h2>{productBanner.heading}</h2>
							</div>
							<div className="button-row">
								<Link to={productBanner.button_link}>
									<button className="pd-banner-btn">{productBanner.button_label}</button>
								</Link>
								<Link to="/shop">
									<button className="go-toShop-btn">
										Go To Shop
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="19"
											viewBox="0 0 18 19"
											fill="none"
										>
											<path
												d="M11.4 8.13063L9.92251 6.65313L7.51501 4.24563C7.00501 3.74313 6.13501 4.10313 6.13501 4.82313V9.49563V13.7031C6.13501 14.4231 7.00501 14.7831 7.51501 14.2731L11.4 10.3881C12.0225 9.77313 12.0225 8.75313 11.4 8.13063Z"
												fill=""
											/>
										</svg>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			);
		}
		return body;
	}

	const informativeBanner = () => {
		let body = [];
		if (informativeBanners && informativeBanners.length > 0) {
			// Get the latest banner
			const latestBanner = informativeBanners[informativeBanners.length - 1];
			const specs = latestBanner.specs;

			body.push(
				<div key={latestBanner.id} className="LeftImgCommonBanner lowerUncommon lowerUncommon-special c2SP" style={{ background: "#fff" }}>
					<div className="imgDiv">
						<picture>
							<source media="(max-width: 767px)" srcSet={latestBanner.image_url} alt="" />
							<source media="(max-width: 1023px)" srcSet={latestBanner.image_url} alt="" />
							<img src={latestBanner.image_url} alt="background" />
						</picture>
					</div>
					<div className="RelativeTextCont">
						<div className="small-text-top">
							<span>— {latestBanner.sub_heading}</span>
						</div>
						<div className="main-header-text">
							<h2 className="inforB-h2">{latestBanner.heading}</h2>
						</div>
						<span className="small-hd-tg">{latestBanner.description}</span>
						<div className="div-detail">
							<div className="specs-container">
								{/* Iterate over specs and display specifications */}
								{specs.map((spec, specIndex) => {
									let specificationNames = [];
									let specificationValues = [];

									try {
										specificationNames = JSON.parse(spec.specification_name);
										specificationValues = JSON.parse(spec.specification_value);

									} catch (error) {
										console.error('Error parsing JSON:', error);
									}

									return (
										<div key={specIndex} className="spec-item">
											{/* Map over specificationNames and render */}
											{specificationNames.map((name, nameIndex) => (
												<span key={`name-${nameIndex}`} className="parameter">
													<svg xmlns="http://www.w3.org/2000/svg" width="144" height="4" viewBox="0 0 144 4" fill="none">
														<path d="M2 2H142" stroke="#28989A" strokeWidth="3" strokeLinecap="round" />
													</svg>
													<div className="informative-details">
														<div className="parameter-name">
															{name}
														</div>
														<div className="informative-value">
															{specificationValues[nameIndex]}
														</div>
													</div>
												</span>
											))}
										</div>
									);
								})}
							</div>
						</div>
						<div className="button-row">
							<Link to={latestBanner.button_link}>
								<button className="pd-banner-btn">{latestBanner.button_label}</button>
							</Link>
							<Link to="/shop">
								<button className="go-toShop-btn">
									Go To Shop
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
										<path d="M11.4 8.13063L9.92251 6.65313L7.51501 4.24563C7.00501 3.74313 6.13501 4.10313 6.13501 4.82313V9.49563V13.7031C6.13501 14.4231 7.00501 14.7831 7.51501 14.2731L11.4 10.3881C12.0225 9.77313 12.0225 8.75313 11.4 8.13063Z" fill="" />
									</svg>
								</button>
							</Link>
						</div>
					</div>
				</div>
			);
		}
		return body;
	};





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





	const handleChangeSearchBar = (event) => {
		const inputValue = event.target.value;
		setSearchValue(inputValue);
};


	const [isOpen, setIsOpen] = useState(false);
	const [hasError, setHasError] = useState(false);

	const togglePopup = async (event) => {
		event.preventDefault();

		const findOrderEndpoint = `/api/order/orderno/find/${searchValue}`;

		console.log('Fetching order details from:', findOrderEndpoint);

		try {
			const response = await getRequest(findOrderEndpoint);
			console.log('Response received:', response);

			if (response.status === 200) {
				const responseData = response.data;

				setTrackingProduct(responseData);
				setIsOpen(!isOpen);
				if (response.status === 200) {
					setHasError(false);
				}
			} else {
				console.error('Error fetching order details:', response.statusText);

				if (response.status === 404) {
					setHasError(true);
				}
			}
		} catch (error) {
			console.error('Error fetching order details:', error);
		}
	};

	const orderBody = () => {
		let body = [];
		if (TrackingProduct && TrackingProduct.order ) {


				let statusIndicator = null;
			switch (TrackingProduct.order.status) {
					case 'DELIVERED':
						statusIndicator = (

							<>
								<style>
									{`
                    [class="tracking-item 1"]  {
						opacity:1
                    }
					[class="tracking-item 2"]  {
						opacity: 1
                    }
					[class="tracking-item 3"]  {
						opacity: 1
                    }
					[class="tracking-item 4"]  {
						opacity: 1
                    }
					[class="tracking-item 5"]  {
						opacity: 1
                    }

                    `}
								</style>
								<div class="step-delivered">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<circle cx="12" cy="12" r="12" fill="#FFFCF2" />
										<circle cx="12" cy="12" r="8" fill="#049d464d" />
										<circle cx="12" cy="12" r="4" fill="#049d46" />
									</svg>
									Delivered</div>
							</>
						);
						break;
					case 'PAID':
						statusIndicator = (
							<>
								<style>
									{`
                    [class="tracking-item 1"]  {
						opacity:1
                    }
					[class="tracking-item 2"]  {
						opacity: 1
                    }
					[class="tracking-item 3"]  {
						opacity: 1
                    }
					[class="tracking-item 4"]  {
						opacity: 0.25
                    }
					[class="tracking-item 5"]  {
						opacity: 0.25
                    }

                    `}
								</style>
								<div class="step-pending">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<circle cx="12" cy="12" r="12" fill="#FFFCF2" />
										<circle cx="12" cy="12" r="8" fill="#FAF0CC" />
										<circle cx="12" cy="12" r="4" fill="#FFC400" />
									</svg>
									Paid</div>
							</>
						);
						break; case 'PROCESSING':
						statusIndicator = (
							<>
								<style>
									{`
                    [class="tracking-item 1"]  {
						opacity:1
                    }
					[class="tracking-item 2"]  {
						opacity: 1
                    }
					[class="tracking-item 3"]  {
						opacity: 1
                    }
					[class="tracking-item 4"]  {
						opacity: 1
                    }
					[class="tracking-item 5"]  {
						opacity: 0.25
                    }

                    `}
								</style>
								<div class="step-progres">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<circle cx="12" cy="12" r="12" fill="#FFFCF2" />
										<circle cx="12" cy="12" r="8" fill="#FAF0CC" />
										<circle cx="12" cy="12" r="4" fill="#FFC400" />
									</svg>
									In Progress</div>
							</>
						);
						break; case 'IN_DELIVERY':
						statusIndicator = (
							<>
								<style>
									{`
                    [class="tracking-item 1"]  {
						opacity:1
                    }
					[class="tracking-item 2"]  {
						opacity: 1
                    }
					[class="tracking-item 3"]  {
						opacity: 1
                    }
					[class="tracking-item 4"]  {
						opacity: 1
                    }
					[class="tracking-item 5"]  {
						opacity: 1
                    }

                    `}
								</style>

								<span className='step-pending'>
									<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5.00035 7.58643L9.59655 2.99023L10.3036 3.69734L5.00035 9.00063L1.81836 5.81867L2.52546 5.11157L5.00035 7.58643Z" fill="#138354" />
									</svg>
									IN DELIVERY
								</span>
							</>
						);
						break;
					case 'PENDING':
						statusIndicator = (
							<>
								<style>
									{`
                    [class="tracking-item 1"]  {
						opacity:1
                    }
					[class="tracking-item 2"]  {
						opacity: 1
                    }
					[class="tracking-item 3"]  {
						opacity: 0.25
                    }
					[class="tracking-item 4"]  {
						opacity: 0.25
                    }
					[class="tracking-item 5"]  {
						opacity: 0.25
                    }

                    `}
								</style>

								<div class="step-pending">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<circle cx="12" cy="12" r="12" fill="#FFFCF2" />
										<circle cx="12" cy="12" r="8" fill="#FAF0CC" />
										<circle cx="12" cy="12" r="4" fill="#FFC400" />
									</svg>
									Pending</div>

							</>

						);
						break;
					case 'CANCELLED':

						statusIndicator = (
							<>
								<style>
									{`
                    [class="tracking-item 1"]  {
						opacity: 0.25
                    }
					[class="tracking-item 2"]  {
						opacity: 0.25
                    }
					[class="tracking-item 3"]  {
						opacity: 0.25
                    }
					[class="tracking-item 4"]  {
						opacity: 0.25
                    }
					[class="tracking-item 5"]  {
						opacity: 0.25
                    }

                    `}
								</style>
								<div className="step-cancelled">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<circle cx="12" cy="12" r="12" fill="#FFFCF2" />
										<circle cx="12" cy="12" r="8" fill="#fc9292" />
										<circle cx="12" cy="12" r="4" fill="#f20c0c" />
									</svg>
									CANCELLED
								</div>

							</>
						);
						break;
					default:
						break;
				}

				body.push(
					<tr key={TrackingProduct.id}>
						<td className="detail-status" >{statusIndicator}</td>
					</tr>
				);

		}
		return body;
	};

	if (!loadingContent) {
		return (
			<div>
				{/*Main banner content------------------------------- */}
				{/* <div>
					<OwlCarousel className="owl-theme"
						Loop
						Auto
						items={1}
						slideBy={1}
						autoplay
						autoplayTimeout={3000}
						autoplayHoverPause
					>
						{mainBannerBody()}
					</OwlCarousel>
				</div> */}

				<div>
					<OwlCarousel className="owl-theme"
						Loop
						Auto
						items={1}
						slideBy={1}
						autoplay
						autoplayTimeout={3000}
						autoplayHoverPause
					>
						{mainBannerBodyy()}
					</OwlCarousel>
				</div>


				{/*Item list in second section below------------------------- */}
				<div className="item-grid-hm container">
					{isMobile ? (
						<div className="flex-container-spc-home">
							{categoryTagBody().map((item, index) => (
								<div key={index} className="flex-item">
									{item}
								</div>
							))}
						</div>
					) : (
						<OwlCarousel
							className="owl-theme"
							loop
							auto
							slideBy={1}
							autoplay
							autoplayTimeout={3000}
							autoplayHoverPause
							responsive={{
								0: {
									items: 3
								},
								600: {
									items: 3
								},
								1024: {
									items: 6
								}
							}}
						>
							{categoryTagBody()}
						</OwlCarousel>
					)}
				</div>


				{/* hard coded "Track your package section below------------------------" */}
				<div className="tracking-search">
					<div className="tracking-wrapper container">
						<span className="main-topic-track">Track your package</span>
						<span className="mini-topic-track">Please enter your order ID</span>


						<div className="flex-div">
							<form className="orderTracking">
								<div className="search-container">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										className="search-icon"
									>
										<path
											d="M6.4165 1.16602C9.3145 1.16602 11.6665 3.51802 11.6665 6.41602C11.6665 9.31402 9.3145 11.666 6.4165 11.666C3.5185 11.666 1.1665 9.31402 1.1665 6.41602C1.1665 3.51802 3.5185 1.16602 6.4165 1.16602ZM6.4165 10.4993C8.67255 10.4993 10.4998 8.67206 10.4998 6.41602C10.4998 4.15997 8.67255 2.33268 6.4165 2.33268C4.16046 2.33268 2.33317 4.15997 2.33317 6.41602C2.33317 8.67206 4.16046 10.4993 6.4165 10.4993ZM11.3663 10.5408L13.0162 12.1907L12.1912 13.0157L10.5413 11.3658L11.3663 10.5408Z"
											fill="#9A9A9A"
										/>
									</svg>
									<input
										type="text"
										className="searchTracking"
										placeholder="Order ID"
										value={searchValue}
										onChange={handleChangeSearchBar}
									/>
								</div>

								<button className="submitTrackNum" onClick={togglePopup}>
									Track Order
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="15"
										viewBox="0 0 14 15"
										fill="none"
									>
										<path
											d="M1.16675 5.91146V4.74479C1.16675 2.99479 2.33341 1.82812 4.08341 1.82812H9.91675C11.6667 1.82812 12.8334 2.99479 12.8334 4.74479V5.91146"
											stroke="#F2F2F2"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M1.16675 9.41016V10.5768C1.16675 12.3268 2.33341 13.4935 4.08341 13.4935H9.91675C11.6667 13.4935 12.8334 12.3268 12.8334 10.5768V9.41016"
											stroke="#F2F2F2"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M3.90845 6.0625L7.00012 7.85334L10.0684 6.07418"
											stroke="#F2F2F2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M7 11.0268V7.84766"
											stroke="#F2F2F2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M6.27655 4.33078L4.40989 5.36913C3.98989 5.60247 3.63989 6.19163 3.63989 6.67579V8.6533C3.63989 9.13747 3.98405 9.72663 4.40989 9.95996L6.27655 10.9983C6.67322 11.2199 7.32656 11.2199 7.72906 10.9983L9.59572 9.95996C10.0157 9.72663 10.3657 9.13747 10.3657 8.6533V6.67579C10.3657 6.19163 10.0216 5.60247 9.59572 5.36913L7.72906 4.33078C7.32656 4.10328 6.67322 4.10328 6.27655 4.33078Z"
											stroke="#F2F2F2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</button>

							</form>
							<div className='mainBG'>
								{isOpen === false && hasError
									? (
										<div className='flx-tp'>
											<span className='txt'>Order Not Found</span>
										</div>
									) : null}
							</div>
							{isOpen && (
								<div className="popup-tract-order">
									<div className="popup-content">
										<button className="close-popup-track" onClick={togglePopup}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="24px" height="24px"><path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z" /></svg>
										</button>
										<div className="main-row">
											<div className="lft">
												<span className="mn-tp">Tracking Details</span>
												<span className="ls-tp">Track your order</span>
											</div>

											{orderBody()}
										</div>
										<div className="carousel-container">
										<OwlCarousel
											ref={owlRef}
											className="owl-theme"
											items={1}
											slideBy={1}
											dots={true}
											cellPadding={10}
											autoplayHoverPause={true}
											responsive={{
												0: {
													items: 1
												},
												678: {
													items: 1
												}
											}}
										>
										{TrackingProduct.orderProducts.map((product, index) => (
										<div className="product-detail">

											<div className="product-image">
															<img src={product.image_url} alt={product.product_name} />
											</div>
											<div className="order-name-id">
													<span className="order-name">{product.product_name}</span>
															<span className="order-id">Order ID: {product.id}</span>
											</div>

										</div>
										))}
										 </OwlCarousel>
										 </div>
										<hr className="hr-popup"></hr>
										<div className="oder-user-detail">
											<div className="one-data">
												<span className="detail-type">Order Date</span>
												<span className="detail-data">{formatDate(TrackingProduct.userAddress?.created_at)}</span>
											</div>

											<div className="one-data">
												<span className="detail-type">Customer Name</span>
												<span className="detail-data">{TrackingProduct.userAddress?.first_name} {TrackingProduct.userAddress?.last_name}</span>
											</div>
											<div className="one-data">
												<span className="detail-type">Email address</span>
												<span className="detail-data">{TrackingProduct.userAddress?.email_address}</span>
											</div>
											<div className="one-data">
												<span className="detail-type">Destination</span>


												{TrackingProduct.userAddress.street_address_one ? (
													<div>
														<span className='detail-data'>{TrackingProduct.userAddress.street_address_one},
														{TrackingProduct.userAddress.street_address_two},<br></br></span>
														<span className='detail-data'>{TrackingProduct.userAddress.city}<br></br></span>
													</div>
												) : (
														<div className='detail-data'>No related Address to display</div>
												)}

											</div>
											<div className="one-data">
												<span className="detail-type">Total</span>
												<span className="detail-data">LKR:{TrackingProduct.order.total_amount}.00</span>
											</div>
										</div>
										<hr className="hr-popup"></hr>
										<div class="tracking-content">
											<div class="tracking-item 1">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
													<circle cx="6" cy="6.00012" r="4" fill="#28989A" stroke="#E6FCFC" stroke-width="2" />
												</svg>
												<div>
													<span class="tracking-status delivered">Order Confirmed</span>
													<span class="tracking-date">Order ID :{TrackingProduct.id}</span>
												</div>
											</div>
											<div class="tracking-item 2">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
													<circle cx="6" cy="6.00012" r="4" fill="#28989A" stroke="#E6FCFC" stroke-width="2" />
												</svg>
												<div>
													<span class="tracking-status in-progress">Pending</span>
													<span class="tracking-date">Order ID : {TrackingProduct.id}</span>
												</div>
											</div>

											<div class="tracking-item 3">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
													<circle cx="6" cy="6.00012" r="4" fill="#28989A" stroke="#E6FCFC" stroke-width="2" />
												</svg>
												<div>
													<span class="tracking-status in-progress">Paid</span>
													<span class="tracking-date">Order ID : {TrackingProduct.id}</span>
												</div>
											</div>

											<div class="tracking-item 4">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
													<circle cx="6" cy="6.00012" r="4" fill="#28989A" stroke="#E6FCFC" stroke-width="2" />
												</svg>
												<div>
													<span class="tracking-status confirmed">In Progress</span>
													<span class="tracking-date">Order ID : {TrackingProduct.id}</span>
												</div>
											</div>
											<div class="tracking-item 5">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
													<circle cx="6" cy="6.00012" r="4" fill="#28989A" stroke="#E6FCFC" stroke-width="2" />
												</svg>
												<div>
													<span class="tracking-status pending">Delivered</span>
													<span class="tracking-date">Order ID : {TrackingProduct.id}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}

						</div>
					</div>
				</div>



				{/* hard coded product banner content below ------------------------------ */}


				<div className="count-db">
					{productBannerBody(0)}
				</div>

				{/*Featured banner section below---------------------------- */}
				<div className="Common-crd-withImg random-01">
					<div className="flex-div container">
						<div className="single-crd-with-img">
							{featuredBannerBody()}
						</div>
					</div>
				</div>

				{/*CountDown Section below---------------------------------- */}
				<div className="count-db">
					{countdownBannerBody()}
				</div>

				{/* Hard coded "now launching"section here----------------------------------------- */}
				{productSectionBody(0)}

				{/* hard coded Informative banner here--------------------------------------------- */}

				<div>
					{informativeBanner()}
				</div>


				{/* Hard coded Gaming Peripherals section ------------------------------------------ */}
				{productSectionBody(1)}

				<div className="count-db">
					{productBannerBody(1)}
				</div>


				{/*Dynamic New arrivals banner section ------------------------------------------ */}
				{/*  <div className="LeftImgCommonBanner-black" style={{background: {newArrivalBannerBGColor}}}>
					<slider {...newArrivalBannerSlider}>
						{newArrivalData.map((item, index) => (
						<div className="ReAlignCont container">
							<div className="imgDiv">
								<img src={newArrivalBAnnerProductImage}/>
							</div>
							<div className="RelativeTextCont">
								<div className="small-text-top">
									<span>{newArrivalBannerTagLine}</span>
								</div>
								<div className="main-header-text">
									<h2>{newArrivalBannerMainText}</h2>
								</div>
								<div className="button-row">
									<Link to={newArrivalBAnnerButtonLink}>
										<button className="pd-banner-btn">Buy Now</button>
									</Link>
									<Link to="/shop">
										<button className="go-toShop-btn">
											Go To Shop
											<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
												<path d="M11.3998 8.36744L9.92227 6.88995L7.51477 4.48245C7.00477 3.97995 6.13477 4.33995 6.13477 5.05995V9.73245V13.9399C6.13477 14.6599 7.00477 15.0199 7.51477 14.5099L11.3998 10.6249C12.0223 10.0099 12.0223 8.98994 11.3998 8.36744Z" fill=""/>
											</svg>
										</button>
									</Link>
								</div>
							</div>
							</div>
						))}
						</slider>
					</div>
					*/}

				{/* Hard coded New arrivals cards ------------------------------------------ */}
				{productSectionBody(2)}
				<div className="count-db">
					{productBannerBody(2)}
				</div>

				{/* Dynamic now launching banner ------------------------------------------ */}

				{/* Hard coded blogs and news section ------------------------------------------------------  */}
				<div className="blogFeature container">
					<div className="header-sec">
						<span className="small-txt">Featured blog and news</span>
						<div className="flx">
							<span className="main">Learn More About The Latest Tech</span>
							<Link to="/">
								<button className="allBlog">
									All blog
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="21"
										viewBox="0 0 20 21"
										fill="none"
									>
										<path
											d="M10.9761 10.526L6.85132 6.40116L8.02983 5.22266L13.3332 10.526L8.02983 15.8292L6.85132 14.6507L10.9761 10.526Z"
											fill=""
										/>
									</svg>
								</button>
							</Link>
						</div>
					</div>
					<div className="blogitems">
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
									items: 1 // Show 2 items on screens smaller than 678px
								},
								678: {
									items: 3 // Show 6 items on screens 678px and above
								}
							}}
						>
							<div className="blog-one-item">
								<div className="single-item">
									<div className="imgSec">
										<img src="https://dummyimage.com/600x400/c4c4c4/000000" />
									</div>
									<div className="bodySec">
										<span className="tagline">Technology</span>
										<span className="blogttl">
											JBL Pulse 5 Speaker with lED Lights: popular reviews
										</span>
										<p className="paragraph">
											JBL has always had a good track record for great sounding
											portable bluetooth speakers, and the new Pulse 4 is no
											exception....
										</p>
										<Link to="/">
											<button className="readMore">
												Read More
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
												>
													<path
														d="M8.78077 8.00047L5.48096 4.70062L6.42376 3.75781L10.6664 8.00047L6.42376 12.2431L5.48096 11.3003L8.78077 8.00047Z"
														fill=""
													/>
												</svg>
											</button>
										</Link>
									</div>
								</div>
							</div>
							<div className="blog-one-item">
								<div className="single-item">
									<div className="imgSec">
										<img src="https://dummyimage.com/600x400/c4c4c4/000000" />
									</div>
									<div className="bodySec">
										<span className="tagline">Technology</span>
										<span className="blogttl">
											JBL Pulse 5 Speaker with lED Lights: popular reviews
										</span>
										<p className="paragraph">
											JBL has always had a good track record for great sounding
											portable bluetooth speakers, and the new Pulse 4 is no
											exception....
										</p>
										<Link to="/">
											<button className="readMore">
												Read More
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
												>
													<path
														d="M8.78077 8.00047L5.48096 4.70062L6.42376 3.75781L10.6664 8.00047L6.42376 12.2431L5.48096 11.3003L8.78077 8.00047Z"
														fill=""
													/>
												</svg>
											</button>
										</Link>
									</div>
								</div>
							</div>
							<div className="blog-one-item">
								<div className="single-item">
									<div className="imgSec">
										<img src="https://dummyimage.com/600x400/c4c4c4/000000" />
									</div>
									<div className="bodySec">
										<span className="tagline">Technology</span>
										<span className="blogttl">
											JBL Pulse 5 Speaker with lED Lights: popular reviews
										</span>
										<p className="paragraph">
											JBL has always had a good track record for great sounding
											portable bluetooth speakers, and the new Pulse 4 is no
											exception....
										</p>
										<Link to="/">
											<button className="readMore">
												Read More
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
												>
													<path
														d="M8.78077 8.00047L5.48096 4.70062L6.42376 3.75781L10.6664 8.00047L6.42376 12.2431L5.48096 11.3003L8.78077 8.00047Z"
														fill=""
													/>
												</svg>
											</button>
										</Link>
									</div>
								</div>
							</div>
							<div className="blog-one-item">
								<div className="single-item">
									<div className="imgSec">
										<img src="https://dummyimage.com/600x400/c4c4c4/000000" />
									</div>
									<div className="bodySec">
										<span className="tagline">Technology</span>
										<span className="blogttl">
											JBL Pulse 5 Speaker with lED Lights: popular reviews
										</span>
										<p className="paragraph">
											JBL has always had a good track record for great sounding
											portable bluetooth speakers, and the new Pulse 4 is no
											exception....
										</p>
										<Link to="/">
											<button className="readMore">
												Read More
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
												>
													<path
														d="M8.78077 8.00047L5.48096 4.70062L6.42376 3.75781L10.6664 8.00047L6.42376 12.2431L5.48096 11.3003L8.78077 8.00047Z"
														fill=""
													/>
												</svg>
											</button>
										</Link>
									</div>
								</div>
							</div>
						</OwlCarousel>
					</div>
				</div>




				{/* Dynamic blogs and news section ------------------------------------------------------  */}
				{/*
					<div className="blogFeature container">
						<div className="header-sec">
							<span className="small-txt">Featured blog and news</span>
							<div className="flx">
								<span className="main">Learn More About The Latest Tech</span>
								<Link to="/">
									<button className="allBlog">All blog
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
										<path d="M10.9761 10.526L6.85132 6.40116L8.02983 5.22266L13.3332 10.526L8.02983 15.8292L6.85132 14.6507L10.9761 10.526Z" fill=""/>
									</svg></button>
								</Link>
							</div>
						</div>
						<div className="blogitems">

							<Slider {...settings}>
							<div className="single-item">
								<div className="imgSec">
									<img src={blogHeaderImgUrl}/>
								</div>
								<div className="bodySec">
									<span className="tagline">{blogTitle}</span>
									<span className="blogttl">{blogSubTitle}</span>
									<p className="paragraph">{blogContent}</p>
									<Link to="/">
										<button className="readMore">Read More
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
												<path d="M8.78077 8.00047L5.48096 4.70062L6.42376 3.75781L10.6664 8.00047L6.42376 12.2431L5.48096 11.3003L8.78077 8.00047Z" fill=""/>
											</svg>
										</button>
									</Link>
								</div>
							</div>
						</Slider>
						</div>
					</div>
				*/}

				<Testimonials />
				<OurPartner />



				<div className="services container">
					<div className="singleCard">
						<img src={warrenty} />
						<span className="mainTxt">Warranty</span>
						<span className="smallTxt">Up to 6 Months</span>
					</div>
					<div className="singleCard">
						<img src={bestPrice} />
						<span className="mainTxt">Best Price</span>
						<span className="smallTxt">Deals & Discounts</span>
					</div>
					<div className="singleCard">
						<img src={delevery} />
						<span className="mainTxt">Delivery</span>
						<span className="smallTxt">Up to 6 Months</span>
					</div>
					<div className="singleCard">
						<img src={customServ} />
						<span className="mainTxt">Customer Service</span>
						<span className="smallTxt">Help & Support 24/7</span>
					</div>
				</div>


				<Footer />
			</div>
		);
	}
}
export default HomePage;