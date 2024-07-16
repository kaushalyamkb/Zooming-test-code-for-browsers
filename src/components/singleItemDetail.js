import React, { useEffect, useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import { Link } from 'react-router-dom';
import '../assets/css/CartCompo.css'

import EditorJS from '@editorjs/editorjs';
import { getEditorJSTools } from "../components/editor-constants";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/singleItem.css'
import coco from '../assets/images/coco.webp'
import errsvg from '../assets/images/err-svg.svg'
import { addProductToList, loadWarrantyOption, loadProductSliderImages, loadProductColors } from '../common/Common';


let editor = undefined;

function SingleItemCompo({ product, variants, setSelectedProducts, parentUpdateCount, onAddToCart }) {

    const [selectedColor, setSelectedColor] = useState(null),
        [categoriesTag, setCategoriesTag] = useState([]),
        [loadingContent, setLoadingContent] = useState(true),
        [warrantyOptions, setWarrantyOptions] = useState([]),
        [sliderImages, setSliderImages] = useState([]),
        [quantity, setQuantity] = useState(null),
        [isDropdownOpen, setIsDropdownOpen] = useState(false),
        [isDropdownTwoOpen, setIsDropdownTwoOpen] = useState(false),
        [products, setProducts] = useState([]),
        [size, setSize] = useState(null),
        [variant, setVariant] = useState(null),
        [sizes, setSizes] = useState([]),
        [selectedVariant, setselectedVariant] = useState([]),
        [showConfirmation, setShowConfirmation] = useState(false),
        [showConfirmationLink, setShowConfirmationLink] = useState(false),
        [showRequirement, setShowRequirement] = useState(false),
        [selectedColorId, setSelectedColorId] = useState([]),
        [selectedImage, setSelectedImage] = useState(product ? product.image_url : null),
        [selectedSvgId, setSelectedSvgId] = useState(null),
        [ColorOptions, setColorOptions] = useState([]),
        [finalPrice, setFinalPrice] = useState(""),
        [numericPrice, setNumericPrice] = useState(""),
        [warrantyOptions1, setWarrantyOptions1] = useState(""),
        [selectedSvgId1, setSelectedSvgId1] = useState(null),
        [showPopup, setShowPopup] = useState(null),
        [currentUrl, setCurrentUrl] = useState(window.location.href),
        [isInitialLoad, setIsInitialLoad] = useState(true);

    const options = {
        items: 4,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true, // Add this line
        autoplayTimeout:1000, // Adjust the timeout as needed (in milliseconds)
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 5,
                autoplay: true, // Add this line
                autoplayTimeout:1000, // Adjust the timeout as needed (in milliseconds)
            },
        },
    };

    console.log(warrantyOptions1)

    useEffect(() => {
        if (product) {
            setSelectedImage(product.image_url);
            setSelectedColor(null);
            setQuantity(1);

            loadProductSliderImages(product.id)
                .then(data => {
                    setSliderImages(data.filter(image => image.product_id === product.id));
                })
                .catch(() => null);

            loadProductColors(product.id)
                .then(data => {
                    setColorOptions(data);
                })
                .catch(() => null);
        }

        loadWarrantyOption()
            .then(data => {
                setWarrantyOptions(data);
            })
            .catch(() => null);

    }, [product, variants]);

    useEffect(() => {
        if (product && variants && size) {
            const selectedVariant = variants.find(variant => variant.color_id === selectedSvgId && variant.sizes === size.sizes);
            if (selectedVariant) {
                setselectedVariant(selectedVariant);
            }
        }
    }, [selectedColorId, size, variants]);

    useEffect(() => {
        const calculatedPrice = ((warrantyOptions1?.price_add_on && Number(warrantyOptions1.price_add_on) > 0) || (size && size.price > 0)) ?
            product.unit_price + (warrantyOptions1?.price_add_on || 0) + (size ? size.price : 0) :
            product.unit_price;
        console.log('total', calculatedPrice)
        const formattedPrice = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
        }).format(calculatedPrice);
        setFinalPrice(formattedPrice);
        const numericPrice = parseFloat(formattedPrice.replace(/,/g, ''));
        setNumericPrice(numericPrice);
    }, [product, warrantyOptions1,size]);

    const colorBody = () => {
        return ColorOptions.map((ColorOption, index) => {
            const colorValue = ColorOption.colors;
            return (
                <div key={index} style={{ marginRight: '0px' }} >
                    <input
                        type="radio"
                        value={colorValue}
                        name="color"
                        checked={selectedColor === colorValue}
                        id={'color' + index}
                        onChange={() => handleColorChange(colorValue, ColorOption.id)}
                        required
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id={'color-clicker-' + index}
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill={colorValue}
                        onClick={() => {
                            handleSvgClick1('color-clicker-' + index);
                            handleSvgClick(ColorOption.id, colorValue);

                        }}

                        style={{
                            cursor: 'pointer',
                            border: selectedSvgId1 === 'color-clicker-' + index ? '3px solid var(--Primary-500, #28989A)' : '3px solid #E2E5E8',
                            padding: '2px',
                            borderRadius: '50%'
                        }}
                    >
                        <circle cx="12" cy="12" r="12" fill={colorValue} />
                    </svg>
                </div>
            );
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdownTwo = () => {
        setIsDropdownTwoOpen(!isDropdownTwoOpen);
    };

    const clear = () => {
        setSize(null);
        setWarrantyOptions1(null);
        setQuantity('1');
    }


    const resetSize = () => {
        setSize(null);
        setWarrantyOptions1(null);

    };

    useEffect(() => {
        resetSize();

    }, [selectedSvgId]);

    const sizeBody = () => {
        let body = [];
        if (variants) {
            variants.forEach((variant, index) => {
                if (variant && variant.sizes && selectedSvgId === variant.color_id) {
                    body.push(
                        <a className="dropdown-item" key={index} onClick={() => setSize(variant)}>
                            {variant.sizes}
                        </a>
                    );
                }
            });
        }
        return body;
    }

    const hasSizes = variants && variants.some(variant => variant.sizes && variant.sizes.length > 0 && !variant.sizes.includes(0));



    const warrantyOptionId = product.warranty_option_id;
    const idsArray = warrantyOptionId.replace(/"/g, '').split(',');

    const arr1Numbers = idsArray.map(Number);

    const foundWarrantyPeriods = [];
    arr1Numbers.forEach(number => {
        const warrantyOption = warrantyOptions.find(option => option.id === number);
        if (warrantyOption) {
            foundWarrantyPeriods.push(warrantyOption);
        }
    });

    const warrantyBody = () => {
        let body = [];
        if (foundWarrantyPeriods.length > 0) {
            foundWarrantyPeriods.forEach((warrantyPeriod1, index) => {
                body.push(
                    <a className="dropdown-item" key={index} onClick={() => setWarrantyOptions1(warrantyPeriod1)}>
                        {warrantyPeriod1.warranty_period}
                    </a>
                );
            });
        } else {
            body.push(
                <span>No warranty periods found</span>
            );
        }
        return body;
    }

    const handleColorChange = (colorValue, id) => {


    };

    const handleSvgClick = (ColorOption,colorcode) => {
        setSelectedSvgId(ColorOption);
        setSelectedColor(colorcode);
    };
    const handleSvgClick1 = (indexId) => {
        setSelectedSvgId1(indexId);
    };

    const additionalInfoBody = (product) => {
        let body = [];
        if (product) {
            const names = JSON.parse(product.additional_info_name);
            const values = JSON.parse(product.additional_info_value);

            names.forEach((name, index) => {
                body.push(
                    <tr key={index}>
                        <td>{name}</td>
                        <td>{values[index]}</td>
                    </tr>
                );
            });
        }
        return body;
    };

    // setFinalPrice(
    //     ((warrantyOptions1.price_add_on && Number(warrantyOptions1.price_add_on) > 0) || (size && size.price > 0)) ?
    //     new Intl.NumberFormat('en-US', {
    //         minimumFractionDigits: 2,
    //     }).format(product.unit_price + (Number(warrantyOptions1.price_add_on) || 0) + (size ? size.price : 0)) :
    //     new Intl.NumberFormat('en-US', {
    //         minimumFractionDigits: 2,
    //     }).format(product.unit_price)
    // );

    const getCategoryName = (categoryId) => {
        const category = categoriesTag.find(category => category.id === categoryId);
        return category ? category.name : 'Unknown Category';
    };

    const addToList = () => {

        if (selectedColor === null || hasSizes &&  size===null) {

            setShowRequirement(true);
            setTimeout(() => {
                setShowRequirement(false);
            }, 3000);

        }else{
        let tempProduct = product;
        tempProduct.selectedQuantity = quantity;
        tempProduct.color = selectedColor;
        tempProduct.size = size;
        tempProduct.numericPrice = numericPrice;
        tempProduct.selectedVariant = selectedVariant;
        tempProduct.selectedWarrantyOption = warrantyOptions1;
        addProductToList(tempProduct);
        parentUpdateCount();
        setShowConfirmation(true);
        setTimeout(() => {
            setShowConfirmation(false);
        }, 3000);
        }
    }

    useEffect(() => {
        if (isInitialLoad) {
            setIsInitialLoad(false);
        } else {
            addToList();
        }
    }, []);

    const handleImageClick = (index) => {
        const clickedImage = sliderImages[index];
        setSelectedImage(clickedImage.image_url);
    };

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };

    const [activeTab, setActiveTab] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
    };
    const handleTabClick = (tabNumber) => {
        if (editor && activeTab === 1) {
            editor.destroy();
            editor = null;
        }
        setActiveTab(tabNumber);
    };

    let tabContent;
    if (activeTab === 1) {
        tabContent = (
            <div className="tabWinMainCon">
                <div id="editor" />
            </div>
        );
    } else if (activeTab === 2) {
        tabContent = (
            <div className='contSP'>
                <table>
                    <tbody>
                        {additionalInfoBody(product)}
                    </tbody>
                </table>
            </div>
        );
    }

    if (product) {
        if (activeTab === 1 && !editor) {
            editor = new EditorJS({
                holder: 'editor',
                tools: getEditorJSTools(null),
                readOnly: true,
                data: JSON.parse(product.description),
            });
        }



        const copyUrl = () => {
            navigator.clipboard.writeText(currentUrl);
            setShowPopup(false);
        };

        const togglePopup = () => {
            setShowPopup(!showPopup);
            setShowPopup(true);
            setTimeout(() => {
                setShowConfirmationLink(true);

            }, 500);
            setTimeout(() => {
                setShowConfirmationLink(false);
            }, 3000);

        };


        // const productId = product.id; // Assuming you have the product ID
        // const productName = product.product_name; // Assuming you have the product name

        // // Generate the new URL path segment
        // const newUrlPath = "/product/" + convertToSlug(productName);

        // // Replace only the URL path segment
        // const currentUrl = window.location.href;
        // const baseUrl = currentUrl.split("/product/")[0]; // Get the base URL
        // const newUrl = baseUrl + newUrlPath;

        // // Navigate to the new URL
        // window.location.href = newUrl;


        return (
            <div className="sinPrd">
                <div className="CartCompo">
                    <div className='share-main'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => togglePopup(false)} width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.74745 11.3485L5.94818 9.82152C5.46155 10.3416 4.76906 10.6666 4.00065 10.6666C2.52789 10.6666 1.33398 9.47265 1.33398 7.99992C1.33398 6.52716 2.52789 5.33325 4.00065 5.33325C4.76902 5.33325 5.46148 5.65823 5.9481 6.17823L8.74745 4.65134C8.69512 4.44286 8.66732 4.22463 8.66732 3.99992C8.66732 2.52716 9.86125 1.33325 11.334 1.33325C12.8067 1.33325 14.0007 2.52716 14.0007 3.99992C14.0007 5.47268 12.8067 6.66658 11.334 6.66658C10.5656 6.66658 9.87312 6.34159 9.38645 5.82156L6.58716 7.34845C6.63952 7.55692 6.66732 7.77519 6.66732 7.99992C6.66732 8.22465 6.63952 8.44285 6.58719 8.65132L9.38652 10.1783C9.87312 9.65825 10.5656 9.33325 11.334 9.33325C12.8067 9.33325 14.0007 10.5272 14.0007 11.9999C14.0007 13.4727 12.8067 14.6666 11.334 14.6666C9.86125 14.6666 8.66732 13.4727 8.66732 11.9999C8.66732 11.7752 8.69512 11.5569 8.74745 11.3485ZM4.00065 9.33325C4.73703 9.33325 5.33398 8.73632 5.33398 7.99992C5.33398 7.26352 4.73703 6.66658 4.00065 6.66658C3.26427 6.66658 2.66732 7.26352 2.66732 7.99992C2.66732 8.73632 3.26427 9.33325 4.00065 9.33325ZM11.334 5.33325C12.0704 5.33325 12.6673 4.7363 12.6673 3.99992C12.6673 3.26354 12.0704 2.66659 11.334 2.66659C10.5976 2.66659 10.0007 3.26354 10.0007 3.99992C10.0007 4.7363 10.5976 5.33325 11.334 5.33325ZM11.334 13.3333C12.0704 13.3333 12.6673 12.7363 12.6673 11.9999C12.6673 11.2635 12.0704 10.6666 11.334 10.6666C10.5976 10.6666 10.0007 11.2635 10.0007 11.9999C10.0007 12.7363 10.5976 13.3333 11.334 13.3333Z" fill="#050505" />
                        </svg>
                        <button className='product-share' onClick={() => togglePopup()}>Share</button>
                    </div>
                    {showPopup && (
                        <div className="popup-product-share">
                            <ul>
                                <p className="popup-product-share-text">URL: <span>{currentUrl}</span></p>
                                <button className="popup-product-share-button" onClick={copyUrl}>Copy URL</button>
                            </ul>
                        </div>
                    )}

                    <div className='mainBG' >
                        {showPopup === false && showConfirmationLink === true && (
                            <div className='flx-tp'>
                                <span className='txt'>{product.product_name} product link copied successfully.</span>
                            </div>
                        )}
                    </div>

                    <div className='mainBG' >
                        {showConfirmation === true && (
                            <div className='flx-tp'>
                                <span className='txt'>“{product.product_name}” has been added to the cart.</span>
                            </div>
                        )}
                        {/* {showRequirement === true && hasSizes === true && (
                            <div className='flx-tp-req'>
                                <span className='txt'>“Please Select Color and Capacity"</span>
                            </div>
                        )}
                        {showRequirement === true && hasSizes === false && (
                            <div className='flx-tp-req'>
                                <span className='txt'>“Please Select Color"</span>
                            </div>
                        )} */}
                    </div>
                </div>
                <div className="main-flx">
                    <div className="image-cont">
                        <div className='top-view'>
                            <img
                                className={`bigView ${isHovered ? 'hovered' : ''}`}
                                src={selectedImage}
                                alt={`Product ${selectedImage}`}
                                style={{
                                    width: '100%',
                                    transform: isHovered
                                        ? `translate(${(mousePosition.x - 0.5) * 50}px, ${(mousePosition.y - 0.5) * 50}px)`
                                        : ''
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                            />
                        </div>
                        <div style={{ display: 'flex' }} className='bottom-view'>
                            <div style={{ display: 'flex' }} className='bottom-view'>
                                <OwlCarousel options={options}>
                                    {sliderImages.map((sliderImage, index) => (
                                        <div
                                            className='com'
                                            key={index}
                                            style={{
                                                width: '25%',
                                                cursor: 'pointer',
                                                backgroundColor: selectedImage === index ? '' : 'transparent',
                                                border: selectedImage === index ? '' : '1px solid var(--Black-200, #CCC)',
                                            }}
                                            onClick={() => handleImageClick(index)}
                                        >
                                            <img
                                                className='smallView'
                                                src={sliderImage.image_url}
                                                alt={`Product ${index + 1}`}
                                                style={{ width: '100%' }}
                                            />
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                    <div className="right-cont">
                        <span>
                            {product.productSectionTag.map((tag, index) => (
                                <React.Fragment key={index}>
                                    <span className="deal-lable">{tag}</span>

                                </React.Fragment>
                            ))}
                        </span>
                        <span className="main-topic">{product.product_name}</span>
                        <span className="small-dis">{product.tag}</span>
                        <div className="flx-rw">
                            <s className="crossName">{product.discounted_price}</s>
                            <span className="correctVal">
                                LKR {finalPrice}
                            </span>

                        </div>
                        <div className="flx-rw-lst">
                            {/* <span className="littleInfo">Interest free payment in 3 - instalments with</span>
                            <div className='coco'>
                                <img src={coco} />
                            </div> */}
                        </div>
                        <div className="color-selecting">
                            <form>
                                <label className='saml'>
                                    Choose Color:
                                    <div className='temp-radio-product'>
                                        {colorBody(variants)}
                                    </div>
                                </label>

                                <div className="col">
                                    {hasSizes ? (
                                    <div className="form-group d-flex select-product-cat special-flex-pcategory">

                                        <label htmlFor="selectProductCategory">Capacity :</label>
                                        <div className="dropdown">
                                            <button
                                                className=" spc-spc-009 form-control button-flex-spc dropdown-toggle"
                                                type="button"
                                                id="size_id"
                                                name="size_id"
                                                data-toggle="dropdown"
                                                onClick={toggleDropdown}
                                                style={{ alignItems: "center" }}
                                            >
                                                <span className="mr-auto drop-text">
                                                    {size ? size.sizes : "Select Product Size"}
                                                </span>
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path fillRule="evenodd" d="M7.99996 8.78028L11.2998 5.48047L12.2426 6.42328L7.99996 10.6659L3.75732 6.42328L4.70014 5.48047L7.99996 8.78028Z" fill="#CDCDCD" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className={`dropdown-menu product-name-dropdown-menu ${isDropdownOpen ? 'show' : ''}`} id="sp-cont" onClick={toggleDropdown}>
                                            {sizeBody()}
                                        </div>

                                    </div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <div className="form-group d-flex select-product-cat special-flex-pcategory">
                                        <label htmlFor="selectProductCategory">Warranty :</label>
                                        <div className="dropdown">
                                            <button
                                                className=" spc-spc-009 form-control button-flex-spc dropdown-toggle"
                                                type="button"
                                                id="size_id"
                                                name="size_id"
                                                data-toggle="dropdown"
                                                onClick={toggleDropdownTwo}
                                                style={{ alignItems: "center" }}
                                                required
                                            >
                                                <span className="mr-auto drop-text">
                                                    {warrantyOptions1 ? warrantyOptions1.warranty_period : "Select Product Warranty"}
                                                </span>
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path fillRule="evenodd" d="M7.99996 8.78028L11.2998 5.48047L12.2426 6.42328L7.99996 10.6659L3.75732 6.42328L4.70014 5.48047L7.99996 8.78028Z" fill="#CDCDCD" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className={`dropdown-menu product-name-dropdown-menu ${isDropdownTwoOpen ? 'show' : ''}`} id="sp-cont" onClick={toggleDropdownTwo}>
                                            {warrantyBody()}
                                        </div>
                                        <Link onClick={clear}
                                            className='clear' >
                                            clear
                                        </Link>
                                    </div>

                                </div>
                                <div className='mainBG' >
                                {showRequirement === true && hasSizes === true && (
                                    <div className='flx-tp-req'>
                                        <span className='txt'>
                                            <img src={errsvg}/>
                                            Please Select Color and Capacity</span>
                                    </div>
                                    )}
                                    {showRequirement === true && hasSizes === false && (
                                        <div className='flx-tp-req'>

                                            <span className='txt'>
                                            <img src={errsvg}/>Please Select Color</span>
                                        </div>
                                    )}
                                </div>
                                <div className='flx-txt-gt'>
                                    <label>
                                        <input
                                            required
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            min="1"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            max={selectedVariant ? selectedVariant.quantity : 1}
                                            placeholder='1'
                                        />
                                    </label>

                                    <button type='button' onClick={(event) => {
                                        event.preventDefault();
                                        addToList();
                                    }}
                                        className="AddtoCart">
                                        Add to Cart
                                    </button>

                                    {/* <button type='submit' onClick={(event) => {event.preventDefault(); addToList()}}
                                    className="AddtoCart">
                                    Add to Cart
                                </button> */}
                                </div>
                            </form>
                        </div>
                        <div className='model-num'>
                            <hr></hr>
                            <h3>SKU : <span>{product.sku}</span> | Model : <span>{product.model}</span> | Delivery Options : <span>{product.delivery_type}</span></h3>
                        </div>
                        <div className='categories'>
                            <h3>Categories : <a>{getCategoryName(product.category_id)} , {product.tag}</a></h3>
                        </div>

                    </div>
                </div>

                {/* tab */}
                <div className="tab-container">
                    <div
                        className={`tab ${activeTab === 2 ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick(2)}
                    >
                        Additional Information
                    </div>
                    <div
                        className={`tab ${activeTab === 1 ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick(1)}
                    >
                        Description
                    </div>
                    
                </div>

                <div className="tab-content">
                    {tabContent}
                </div>
            </div>
        );
    }
};

export default SingleItemCompo;