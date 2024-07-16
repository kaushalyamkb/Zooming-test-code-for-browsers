// YourPage.js
import React,{useEffect , useState}from 'react';
import { useNavigate } from 'react-router-dom';
import {NavLink, withRouter} from "react-router-dom";
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer'

import '../assets/css/checkP.css'
import { Link } from 'react-router-dom';

import { loadDeliveries,updateList } from "../common/Common";


function CheckoutProcess() {
    //breadcrumb
  const breadcrumbPaths = [
    { label: 'Home', link: '/' },
    { label: 'Shop', link: '/shop' },
    { label: 'checkout' },
  ];
  const navigate = useNavigate(),
   [acceptTerms, setAcceptTerms] = useState(false),
   [selectedOption, setSelectedOption] = useState(null),
   [selectedPayment, setSelectedPayment] = useState(null),
   [userAddressId, setUserAddressId] = useState(null),
   [firstName, setFirstName] = useState(''),
   [lastName, setLastName] = useState(''),
   [comName, setComName] = useState(''),
   [region, setRegion] = useState(''),
   [addLine1, setAddLine1] = useState(''),
   [addLine2, setAddLine2] = useState(''),
   [town, setTown] = useState(''),
   [postCode, setPostCode] = useState(''),
   [pnum, setPnum] = useState(''),
   [email, setEmail] = useState(''),
   [loading, setLoading] = useState(false),
   [deliveries, setDeliveries] = useState([]),
   [firstNameDefAdd, setFirstNameDefAdd] = useState(''),
   [lastNameDefAdd, setLastNameDefAdd] = useState(''),
   [comNameDefAdd, setComNameDefAdd] = useState(''),
   [countryDefAdd, setCountryDefAdd] = useState(''),
   [addLine1DefAdd, setAddLine1DefAdd] = useState(''),
   [addLine2DefAdd, setAddLine2DefAdd] = useState(''),
   [isDropdownOpen, setIsDropdownOpen] = useState(false),
   [townDefAdd, setTownDefAdd] = useState(''),
   [postCodeDefAdd, setPostCodeDefAdd] = useState(''),
   [pnumDefAdd, setPnumDefAdd] = useState(''),
   [emailDefAdd, setEmailDefAdd] = useState(''),
   [oderNoteDefAdd, setOrderNoteDefAdd] = useState(''),
   [selectedRegion, setSelectedRegion] = useState(''),
   [orderResponseStatus, setOrderResponseStatus] = useState([]),
   [orderData, setOrderData] = useState(null);




  const handleCheckboxChange = () => {
    setAcceptTerms(!acceptTerms);
  };
  const handleCheckboxChangeDelivery = (option) => {
    setSelectedOption(option);
      setSelectedRegion('');
  };

  const handleCheckboxChangePayment = (option) => {
    setSelectedPayment(option);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleComNameChange = (event) => {
    setComName(event.target.value);
  };

  const handleCountryChange = (event) => {
    setRegion(event.target.value);
  };

  const handleDeliveryChange = (event) => {
    setSelectedRegion(event.target.value);
};


  const handleAddLine1Change = (event) => {
    setAddLine1(event.target.value);
  };

  const handleAddLine2Change = (event) => {
    setAddLine2(event.target.value);
  };

  const handleTownChange = (event) => {
    setTown(event.target.value);
  };

  const handlePostCodeChange = (event) => {
    setPostCode(event.target.value);
  };

  const handlePnumChange = (event) => {
    setPnum(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const handleFirstNameDefAddChange = (event) => {
    setFirstNameDefAdd(event.target.value);
  };

  const handleLastNameDefAddChange = (event) => {
    setLastNameDefAdd(event.target.value);
  };

  const handleComNameDefAddChange = (event) => {
    setComNameDefAdd(event.target.value);
  };

  const handleCountryDefAddChange = (event) => {
    setCountryDefAdd(event.target.value);
  };

  const handleAddLine1DefAddChange = (event) => {
    setAddLine1DefAdd(event.target.value);
  };

  const handleAddLine2DefAddChange = (event) => {
    setAddLine2DefAdd(event.target.value);
  };

  const handleTownDefAddChange = (event) => {
    setTownDefAdd(event.target.value);
  };

  const handlePostCodeDefAddChange = (event) => {
    setPostCodeDefAdd(event.target.value);
  };

  const handlePnumDefAddChange = (event) => {
    setPnumDefAdd(event.target.value);
  };

  const handleEmailDefAddChange = (event) => {
    setEmailDefAdd(event.target.value);
  };

  const handleOrderNoteDefAdd = (event) => {
    setOrderNoteDefAdd(event.target.value);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    };

  useEffect(() => {
    loadDeliveries().then(data => {
        setDeliveries(data);
    }).catch(() => null);
    }, []);

    const [list, setList] = useState(JSON.parse(sessionStorage.getItem('list')));


    const calculateDiscount = (list) => {
        let discount = 0;
        list.forEach((product) => {
            if (product.promoCode && typeof product.discount === 'number') {
                discount += product.discount;
            }
        });
        return discount.toFixed(2);
    };

    const getPromoCodeFromList = (list) => {
        let promoCode = null;
        list.forEach((product) => {
            if (product.promoCode) {
                promoCode = product.promoCode;
            }
        });
        return promoCode;
    };

    const subtotal = list.reduce((total, product) => total + product.selectedQuantity * product.numericPrice, 0);

    const cartListSubTotal = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
    }).format(subtotal);

    const formattedSubtotal = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
    }).format(subtotal - calculateDiscount(list));

    const total = subtotal - calculateDiscount(list) + (selectedRegion && selectedRegion.delivery_charge ? selectedRegion.delivery_charge : 0);

    const formattedTotal = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
    }).format(total);

  const ordersBody = (products) => {
    let body = [];
    if (products) {
        products.forEach((product, index) => {

            body.push(
                <div product={product} index={index} className='rw'>
                    <div className='sin-col'>
                        <span className='smallLb'>{product.product_name}</span>
                        <div className='flx-color-bar'>
                            <span className='colorLbl'>Color :</span><span className="bar-color" style={{ background: product.color }}></span>
                        </div>
                        <span className='colorLbl'>Qty : {product.selectedQuantity}</span>
                        <span className='colorLbl'>Capacity : {product.selectedVariant.sizes}</span>
                        <span className='colorLbl'>Warranty : {product?.selectedWarrantyOption?.warranty_period || 'No warranty available'}</span>
                    </div>
                    <span className='lbl'>LKR {new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,
                            }).format(product.selectedQuantity * product.numericPrice)}</span>
                </div>
            )
        })
    } return body
  }

    const regionBody = () => {

        return deliveries.map((delivery, index) => (

            <a className="dropdown-item" key={index} value={delivery.region} onClick={() => {
                setSelectedRegion(delivery);

            }  }>
                {delivery.region}
            </a>


        ));
    };

    function generateSessionId() {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        var day = currentDate.getDate().toString().padStart(2, '0');

        var randomDigits = Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');

        var sessionId = 'CREF' + year + '.' + month + '.' + day + '-' + randomDigits;

        return sessionId;
    }

    const handleCartCreate = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            let sessionId = generateSessionId();
            sessionStorage.setItem('sessionId', sessionId);

            let list = JSON.parse(sessionStorage.getItem('list')) || [];

            let selectedVariantId = null;
            if (list.length > 0 && list[0].selectedVariant) {
                selectedVariantId = list[0].selectedVariant.id;
            }

            let selectedWarrantyId = null;
            if (list.length > 0 && list[0].selectedWarrantyOption) {
                selectedWarrantyId = list[0].selectedWarrantyOption.id;
            }

            const response = await fetch('/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    session_id: sessionId,
                    selected_variant_id: selectedVariantId,
                    warranty_id: selectedWarrantyId,
                    products: list.map(product => ({
                        product_id: product.id,
                        product_name: product.product_name,
                        quantity: product.selectedQuantity,
                        colors: product.color,
                        notes: product.oderNoteDefAdd,
                    })),
                }),
            });

            if (response.ok) {
                const cartResponseData = await response.json();

                const cartData = cartResponseData;


                handlePlaceOrder(sessionId, cartData);
            } else {
                console.error('Failed to add to cart:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }

        setLoading(false);
    };



    const handlePlaceOrder = async (sessionId, cartData) => {
        console.log('cart', cartData)
        setLoading(true);
        try {
            const promoCode = getPromoCodeFromList(list);

            let selectedVariantSizes = null;
            if (list.length > 0 && list[0].selectedVariant) {
                selectedVariantSizes = list[0].selectedVariant.sizes;
            }

            let selectedWarrantyOption = null;
            if (list.length > 0 && list[0].selectedWarrantyOption) {
                selectedWarrantyOption = list[0].selectedWarrantyOption.warranty_period;
            }


            const deliveryId = selectedRegion ? selectedRegion.id : null;
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    session_id: sessionId,
                    delivery_charges: deliveryId,
                    order_type: selectedOption,
                    payment_method: selectedPayment,
                    promo_code: promoCode,
                    warranty_id: selectedWarrantyOption,
                    selected_variant_id: selectedVariantSizes,

                }),
            };
            const orderResponse = await fetch('/api/order/create', requestOptions);
            if (orderResponse.ok) {
                setOrderResponseStatus(orderResponse);
                const orderData = await orderResponse.json();


                handleUserAddressCreate(cartData.cart.warranty_id, orderData.order.id);

                if (orderData.order.payment_method === 'card') {
                    setOrderData(orderData);

                } else {
                    navigate('/bill-detail', { state: { orderData } });
                    setOrderData(orderData);

                }
            } else {
                console.error('Failed to create order:', orderResponse.statusText);
            }
        } catch (error) {
            console.error('Error handling place order:', error);
        }

        setLoading(false);
    };

    const handleUserAddressCreate = async (cartId, orderId) => {
        setLoading(true);

        try {
            const userFormData = {
                firstName,
                lastName,
                comName,
                region,
                addLine1,
                addLine2,
                town,
                postCode,
                pnum,
                email,
                  firstNameDefAdd,
                  lastNameDefAdd,
                 comNameDefAdd,
                  countryDefAdd,
                  addLine1DefAdd,
                  addLine2DefAdd,
                 townDefAdd,
                 postCodeDefAdd,
                  pnumDefAdd,
                  emailDefAdd,
                cartId,
                orderId,
                acceptTerms,
            };

            const addressResponse = await fetch('/api/user/address/delivery/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userFormData),
            });

            if (addressResponse.ok) {
                const addressData = await addressResponse.json();

                const userAddressId = addressData.id;
                //setUserAddressId(userAddressId);



            } else {
                console.error('Failed to add delivery address:', addressResponse.statusText);
            }
        } catch (error) {
            console.error('Error adding delivery address:', error);
        }

        setLoading(false);
    };



    const renderRegionName = () => {

        if (deliveries && deliveries.length > 0) {
            const delivery = deliveries.find(delivery => delivery.id === selectedRegion.id);

            if (delivery) {
                return delivery.region;

            }
        }
        return "Select a delivery region";
    };

    const submitIPGForm = () => {
        setLoading(true);
        document.ipgForm.submit();
    }

  //---------------------------------------------------------------------------------------------------------------------

  return (
    <div>
        <div className="page-wrapper container">
            <Breadcrumb paths={breadcrumbPaths} />
            <h4>Checkout</h4>

            <div className='checkoutForm '>

                <form onSubmit={'handlePlaceOrder'}>
                <div className='middleCont'>
                        <span className='topic'>Your Orders</span>

                        <div className='top-flx'>
                            <span className='lblSp'>Product</span>
                            <span className='lblSp'>Sub Total</span>
                        </div>

                        <div className='btm-flx'>
                            {ordersBody(list)}
                            <div className='rw rmv-line'>
                                <span className='smallLbSP'>Subtotal</span>
                                <span className='lblSp'>LKR {cartListSubTotal}</span>
                            </div>
                        </div>
                    </div>

                    <div className="fianl-pay-option">
                        {list.every(product => product.delivery_type === 'Pickup only') ? (
                            <>
                                <div className="flex-rw">
                                    <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedOption === 'pickup'}
                                        onChange={() => handleCheckboxChangeDelivery('pickup')}
                                    />
                                    Pick Up
                                    </label>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex-rw">
                                    <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedOption === 'delivery'}
                                        onChange={() => handleCheckboxChangeDelivery('delivery')}
                                    />
                                    Delivery
                                    </label>
                                    {selectedOption === 'delivery' && (
                                    <>
                                        <p>Pay with cash upon delivery only for order below LKR 20,000</p>

                                        <div className='no-flex-div mt-5' style={{ background: '#F9F9F9', borderRadius: '6px', padding: '48px 32px'}}>
                                            <label className='label flex-spc-checkout'>
                                                Delivery Region *:
                                                <div className='drp-parent'>
                                                <div className="dropdown">
                                                        <>
                                                        <button className="form-control button-flex-spc dropdown-toggle payment-drp-dwn" type="button"
                                                                id="delivery_id"
                                                                name="delivery_id" data-toggle="dropdown"
                                                                onClick={toggleDropdown}
                                                                style={{alignItems: "center"}}>

                                                                          <span className="mr-auto drop-text">
                                                                              {renderRegionName()}</span>
                                                            <svg width="16" height="16"
                                                                viewBox="0 0 16 16"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M7.99996 8.78028L11.2998 5.48047L12.2426 6.42328L7.99996 10.6659L3.75732 6.42328L4.70014 5.48047L7.99996 8.78028Z" fill="#CDCDCD"/>
                                                            </svg>
                                                        </button></>
                                                    </div>
                                                              <div className={`dropdown-menu product-name-dropdown-menu drp-menu payment-reagon-body ${isDropdownOpen ? 'show' : ''}`} id="sp-cont"  onClick={toggleDropdown}>
                                                        {regionBody()}
                                                    </div>
                                                </div>

                                            </label>
                                        </div>
                                    </>
                                    )}
                                </div>

                                <div className="flex-rw">
                                    <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedOption === 'pickup'}
                                        onChange={() => handleCheckboxChangeDelivery('pickup')}
                                    />
                                    Pick Up
                                    </label>
                                </div>
                            </>
                        )}
                    </div>

                    <span className='checkNAme'>Billing Details</span>

                    {selectedOption === 'delivery' && (
                        <div className='top-cont'>
                        <div className='flex-div'>
                            <label className='label'>
                                First Name *:
                                <input
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                placeholder='FirstName'
                                />
                            </label>
                            <label className='label'>
                                Last Name *:
                                <input
                                type="text"
                                name="firstName"
                                value={lastName}
                                onChange={handleLastNameChange }
                                placeholder='Last Name'
                                />
                            </label>
                        </div>
                        <div className='no-flex-div'>
                            <label className='label'>
                                Company Name (optional):
                                <input
                                type="text"
                                name="firstName"
                                value={comName}
                                onChange={handleComNameChange }
                                />
                            </label>
                        </div>
                        {/* <div className='no-flex-div'>
                            <label className='label'>
                                Delivery Region *:
                                <select
                                    name="country"
                                    value={region}
                                    onChange={handleCountryChange}
                                >
                                    <option value="Select Country" disabled>
                                        Select Delivery Region
                                    </option>
                                    {regionBody()}
                                </select>
                            </label>
                        </div> */}
                        <div className='no-flex-div'>
                            <label className='label'>
                                Street Address *:
                                <input
                                type="text"
                                name="firstName"
                                value={addLine1}
                                onChange={handleAddLine1Change }
                                placeholder='Street address'
                                required
                                />
                                <input
                                type="text"
                                name="firstName"
                                value={addLine2}
                                onChange={handleAddLine2Change }
                                placeholder='Town name'
                                required
                                />
                            </label>
                        </div>
                        <div className='flex-div'>
                            <label className='label'>
                                Town / City *:
                                <input
                                type="text"
                                name="firstName"
                                value={town}
                                onChange={handleTownChange }
                                placeholder='town'
                                required
                                />
                            </label>
                            <label className='label'>
                                Postal code / Zip Code *:
                                <input
                                type="text"
                                name="firstName"
                                value={postCode}
                                onChange={handlePostCodeChange }
                                placeholder='zip code'
                                required
                                />
                            </label>
                        </div>
                        <div className='flex-div'>
                            <label className='label'>
                                Phone number *:
                                <input
                                type="tel"
                                name="firstName"
                                value={pnum}
                                onChange={handlePnumChange }
                                placeholder='Phone Number'
                                required
                                />
                            </label>
                            <label className='label'>
                                Email Address *:
                                <input
                                type="email"
                                name="firstName"
                                value={email}
                                onChange={handleEmailChange }
                                placeholder='zip code'
                                required
                                />
                            </label>
                        </div>
                        <label className='label accept'>
                            <input
                                type="checkbox"
                                name="acceptTerms"
                                checked={acceptTerms}
                                onChange={handleCheckboxChange}
                                className='chSp'
                            />
                            Ship to a different address?

                        </label>

                        {acceptTerms && (
                            <>

                            <div className='flex-div'>
                                    <label className='label'>
                                        First Name *:
                                        <input
                                        type="text"
                                        name="firstName"
                                        value={firstNameDefAdd}
                                        onChange={handleFirstNameDefAddChange }
                                        placeholder='FirstName'
                                        required
                                        />
                                    </label>
                                    <label className='label'>
                                        Last Name *:
                                        <input
                                        type="text"
                                        name="firstName"
                                        value={lastNameDefAdd}
                                        onChange={handleLastNameDefAddChange }
                                        placeholder='Last Name'
                                        required
                                        />
                                    </label>
                                </div>
                                <div className='no-flex-div'>
                                    <label className='label'>
                                        Company Name (optional):
                                        <input
                                        type="text"
                                        name="firstName"
                                        value={comNameDefAdd}
                                        onChange={handleComNameDefAddChange }
                                        />
                                    </label>
                                </div>
                                {/* <div className='no-flex-div'>
                                    <label className='label'>
                                        Country / region *:
                                        <select
                                        name="country"
                                        value={countryDefAdd}
                                        onChange={handleCountryDefAddChange }
                                        required
                                        >
                                        <option value="Select Country" disabled>
                                            Select Country
                                        </option>
                                        <option value="Canada">Sri Lanka</option>
                                        {regionBody}
                                        Add more country options as needed
                                        </select>
                                    </label>
                                </div> */}
                                <div className='no-flex-div'>
                                    <label className='label'>
                                        Street Address *:
                                        <input
                                        type="text"
                                        name="firstName"
                                        value={addLine1DefAdd}
                                        onChange={handleAddLine1DefAddChange }
                                        placeholder='Street address'
                                        />
                                        <input
                                        type="text"
                                        name="firstName"
                                        value={addLine2DefAdd}
                                        onChange={handleAddLine2DefAddChange }
                                        placeholder='Town name'
                                        required
                                        />
                                    </label>
                                </div>
                                <div className='flex-div'>
                                    <label className='label'>
                                        Town / City *:
                                        <input
                                        type="text"
                                        name="firstName"
                                        value={townDefAdd}
                                        onChange={handleTownDefAddChange }
                                        placeholder='town'
                                        required
                                        />
                                    </label>
                                    <label className='label'>
                                        Postal code / Zip Code *:
                                        <input
                                        type="text"
                                        name="firstName"
                                        value={postCodeDefAdd}
                                        onChange={handlePostCodeDefAddChange }
                                        placeholder='zip code'
                                        required
                                        />
                                    </label>
                                </div>
                                <div className='flex-div'>
                                    <label className='label'>
                                        Phone number *:
                                        <input
                                        type="tel"
                                        name="firstName"
                                        value={pnumDefAdd}
                                        onChange={handlePnumDefAddChange }
                                        placeholder='town'
                                        required
                                        />
                                    </label>
                                    <label className='label'>
                                        Email Address *:
                                        <input
                                        type="email"
                                        name="firstName"
                                        value={emailDefAdd}
                                        onChange={handleEmailDefAddChange }
                                        placeholder='zip code'
                                        required
                                        />
                                    </label>
                                </div>
                            </>
                        )}

                        <div className='no-flex-div'>
                            <label className='label'>
                                Order Notes (optional):
                                <textarea
                                    name="notes"
                                    value={oderNoteDefAdd}
                                    onChange={handleOrderNoteDefAdd}
                                    />
                            </label>
                        </div>
                    </div>
                    )}

                    {selectedOption === 'pickup' && (
                        <div className='top-cont'>
                        <div className='flex-div'>
                            <label className='label'>
                                First Name *:
                                <input
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                placeholder='FirstName'
                                required
                                />
                            </label>
                            <label className='label'>
                                Last Name *:
                                <input
                                type="text"
                                name="firstName"
                                value={lastName}
                                onChange={handleLastNameChange }
                                placeholder='Last Name'
                                required
                                />
                            </label>
                        </div>
                        <div className='no-flex-div'>
                            <label className='label'>
                                Company Name (optional):
                                <input
                                type="text"
                                name="firstName"
                                value={comName}
                                onChange={handleComNameChange }
                                />
                            </label>
                        </div>
                        <div className='flex-div'>
                            <label className='label'>
                                Phone number *:
                                <input
                                type="tel"
                                name="firstName"
                                value={pnum}
                                onChange={handlePnumChange }
                                placeholder='Phone Number'
                                required
                                />
                            </label>
                            <label className='label'>
                                Email Address *:
                                <input
                                type="email"
                                name="firstName"
                                value={email}
                                onChange={handleEmailChange }
                                placeholder='johndoe123@gmail.com'
                                required
                                />
                            </label>
                        </div>

                        <div className='no-flex-div'>
                            <label className='label'>
                                Order Notes (optional):
                                <textarea
                                    name="notes"
                                    value={oderNoteDefAdd}
                                    onChange={handleOrderNoteDefAdd}
                                    />
                            </label>
                        </div>
                    </div>
                    )}

                <div className='middleCont'>
                        <span className='topic'>Order Summary</span>

                        <div className='top-flx'>
                            <span className='lblSp'></span>
                            <span className='lblSp'>Sub Total</span>
                        </div>

                        <div className='btm-flx'>
                        {list.some(product => product.promoCode) && (
                            <div className='rw'>
                                <span className='smallLbSP'>Promotion Discount</span>
                                <span className='lblSp'>- LKR {calculateDiscount(list)}</span>
                            </div>
                        )}
                            <div className='rw'>
                                <span className='smallLbSP'>Subtotal</span>
                                <span className='lblSp'>LKR {formattedSubtotal}</span>
                            </div>
                            <div className='rw'>
                                <span className='smallLbSP'>Delivery</span>
                                <span className='lblSp'>LKR {selectedRegion && selectedRegion.delivery_charge ? selectedRegion.delivery_charge : '0.00'}</span>
                            </div>
                            <div className='rw '>
                                <span className='smallLbSP'>Total</span>
                                <span className='lblSp'>LKR {formattedTotal}</span>
                            </div>
                        </div>
                    </div>

                    {total >= 20000 && selectedOption === 'delivery' && (
                            <div className="fianl-pay-option">
                                <div className="flex-rw">
                                    <label htmlFor='card'>
                                        <input
                                            type="checkbox"
                                            value="card"
                                            id='card'
                                            name='paymentMethod'
                                            checked={selectedPayment === 'card'}
                                            onChange={() => handleCheckboxChangePayment('card')}
                                        />
                                        Pay with Credit/Debit Cards
                                    </label>
                                    {selectedPayment === 'card' && (
                                        <p>Pay with cash upon delivery only for order below LKR 20,000</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {total <= 20000 && selectedOption === 'delivery' && (
                            <div className="fianl-pay-option">

                                <div className="flex-rw">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedPayment === 'cash'}
                                            onChange={() => handleCheckboxChangePayment('cash')}
                                        />
                                        {selectedOption === 'delivery' ? 'Cash Upon Delivery' : 'Cash Upon Pickup'}
                                    </label>
                                    {selectedPayment === 'cash' && (
                                        <p>Pay with cash upon delivery only for orders below LKR 20,000</p>
                                    )}
                                </div>

                                <div className="flex-rw">
                                    <label htmlFor='card'>
                                        <input
                                            type="checkbox"
                                            value='card'
                                            id='card'
                                            checked={selectedPayment === 'card'}
                                            onChange={() => handleCheckboxChangePayment('card')}
                                        />
                                        Pay with Credit/Debit Cards
                                    </label>
                                    {selectedPayment === 'card' && (
                                        <p>Pay with cash upon delivery only for order below LKR 20,000</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {selectedOption === 'pickup' && (
                            <div className="fianl-pay-option">
                                <div className="flex-rw">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedPayment === 'cash'}
                                            onChange={() => handleCheckboxChangePayment('cash')}
                                        />
                                        {selectedOption === 'delivery' ? 'Cash Upon Delivery' : 'Cash Upon Pickup'}
                                    </label>
                                    {selectedPayment === 'cash' && (
                                        <p>Pay with cash upon delivery only for orders below LKR 20,000</p>
                                    )}
                                </div>

                                <div className="flex-rw">
                                    <label htmlFor='card'>
                                        <input
                                            type="checkbox"
                                            value='card'
                                            id='card'
                                            checked={selectedPayment === 'card'}
                                            onChange={() => handleCheckboxChangePayment('card')}
                                        />
                                        Pay with Credit/Debit Cards
                                    </label>
                                    {selectedPayment === 'card' && (
                                        <p>Pay with cash upon delivery only for order below LKR 20,000</p>
                                    )}
                                </div>
                            </div>
                        )}

                        <span className='addTxt'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</span>
                        {/* <Link to="/">
                            <button type="submit">Place order</button>
                        </Link> */}


                </form>
                    <form onSubmit={handleCartCreate}>
                        <button type="submit">
                        {loading ?
                        <span className="spinner-grow spinner-grow-sm ml-1" role="status"
                            aria-hidden="true"/>
                        : null
                        }
                        Place order</button>
                    </form>

                    <div className={"modal fade" + (orderResponseStatus.ok ? ' show-modal' : '')} tabIndex="-1">
                    {/* <div className={"modal fade" + (orderData && orderData.order && orderData.order.payment_method === 'card' ? ' show-modal' : '')} tabIndex="-1"> */}
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    {orderData && orderData.order && orderData.order.payment_method === 'card' ?
                                        <form action="https://www.paystage.com/AccosaPG/verify.jsp"
                                            name="ipgForm" onSubmit={submitIPGForm} method="post">
                                            <input hidden name="pg_instance_id" value={orderData.order.instanceId} readOnly />
                                            <input hidden name="merchant_id" value={orderData.order.merchantId} readOnly />
                                            <input hidden name="perform" value="initiatePaymentCapture#sale" readOnly />
                                            <input hidden name="currency_code" value="144" readOnly />
                                            <input hidden name="amount" value={orderData.order.amount} readOnly />
                                            <input hidden name="merchant_reference_no" value={orderData.order.order_no} readOnly />
                                            <input hidden name="order_desc" value={orderData.order.orderDescription} readOnly />
                                            <input hidden name="message_hash" value={orderData.order.messageHash} readOnly />
                                            <input hidden name="merchant_response_url" value={orderData.order.responseUrl} readOnly />
                                            <div className='d-flex justify-content-center'>
                                                <button className="btn " type="submit"
                                                    style={{ marginBottom: 0 }}>
                                                        {loading ?
                                                        <span className="spinner-grow spinner-grow-sm ml-1" role="status"
                                                            aria-hidden="true"/>
                                                        : null
                                                    }
                                                    Continue to pay
                                                </button>
                                            </div>
                                        </form>
                                        :
                                        <>
                                            <h1>Thank you for Ordering!</h1>
                                            <p>
                                                Kindly check your Email for the Order receipt, or view the receipt &nbsp;
                                                <NavLink className="red-font"
                                                    to={"/order/" + (orderData ? Buffer.from(String(orderData.reference)).toString('base64') : '')}>
                                                    here.
                                                </NavLink>
                                            </p>
                                            <button className="btn red-button" key="checkoutButton">
                                                <NavLink className="nav-link" to="/menu">Back to Menu</NavLink>
                                            </button>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <Footer/>
    </div>
  );
};

export default CheckoutProcess;
