import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import '../assets/css/Shop.css';
import SingleItemCompo2 from '../components/smpleCards';
import CartBody from '../components/cartBody';
import { Link } from "react-router-dom";
import { updateList } from "../common/Common";

function CartView() {
    const [list, setList] = useState(JSON.parse(sessionStorage.getItem('list')) || []);
    const [couponInfo, setCouponInfo] = useState(null);
    const [code, setCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [networkError, setNetworkError] = useState(''); // New state variable for network error

    const applyCoupon = () => {
        fetch(`/api/promotion/code/${code}/total/${numericSubtotal}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error applying coupon. Coupon Not Valid!');
                }
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    alert(data.message);
                } else {
                    setCouponInfo(data.promoCode);
                    setDiscount(data.discount);
                    setNetworkError(''); // Clear any previous network error

                    // Update the list with the promotion data
                    const updatedList = list.map(item => ({
                        ...item,
                        promoCode: data.promoCode,
                        discount: data.discount,
                    }));
                    setList(updatedList);
                    updateList(updatedList);
                }
            })
            .catch(error => {
                console.error('Error applying coupon:', error);
                setNetworkError(error.message); // Set network error message
            });
    };

    const removeCoupon = () => {
        setCouponInfo(null);
        setDiscount(0);
        setNetworkError(''); // Clear any previous network error

        // Remove the promotion data from the list
        const updatedList = list.map(item => {
            const { promoCode, discount, ...rest } = item;
            return rest;
        });
        setList(updatedList);
        updateList(updatedList);
    };

    const breadcrumbPaths = [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'Cart' },
    ];

    const [loading, setLoading] = useState(false);

    const removeFromList = (index) => {
        let tempList = JSON.parse(JSON.stringify(list));
        tempList.splice(index, 1);
        setList(tempList);
        updateList(tempList);
    };

    const updateQuantity = (index, quantity) => {
        let tempList = JSON.parse(JSON.stringify(list));
        tempList[index].selectedQuantity = quantity;
        setList(tempList);
        updateList(tempList);
    };

    // Calculate subtotal with discount
    const numericSubtotal = list.reduce((total, product) => total + product.selectedQuantity * product.numericPrice, 0);
    const discountedSubtotal = numericSubtotal - discount;

    const formattedSubtotal = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
    }).format(discountedSubtotal);

    const cartBody = (products) => {
        let body = [];
        if (products) {
            products.forEach((product, index) => {
                body.push(
                    <CartBody key={index} product={product} index={index} updateQuantity={updateQuantity} removeFromList={removeFromList} />
                );
            });
        }
        return body;
    };

    return (
        <div>
            <div className="page-wrapper container">
                <Breadcrumb paths={breadcrumbPaths} />
                <h4>Cart</h4>
                <div>
                    {list && list.length > 0 ? (
                        <div>
                            {cartBody(list)}
                        </div>
                    ) : (
                        <div className="CartCompo">
                            <div className='mainBG'>
                                <div className='flx'>
                                    <Link to="/shop">
                                        <button className='buttonReturn'>Return To Shop</button>
                                    </Link>
                                    <span className='txt'>Your cart is currently empty.</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {couponInfo && (
                    <div className='cupn-applied'>
                        <span>Coupon applied!</span>
                    </div>
                )}

                {networkError && ( // Conditionally render the network error message
                    <div className='cupn-error'>
                        <span>{networkError}</span>
                    </div>
                )}
                
                <div className="coupon-section">
                    <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={code}
                        onChange={e => setCode(e.target.value)}
                        className='cupponInput'
                    />
                    <button onClick={applyCoupon} className='applyCoupon'>Apply Coupon</button>
                    {couponInfo && (
                        <div style={{ border: '1px solid #000', padding: '10px', marginTop: '10px' }} className='special-cupen-popup'>
                            <p>Coupon Applied: {couponInfo.promo_code}</p>
                            <p>Discount: LKR {new Intl.NumberFormat('en-US', {
                                minimumFractionDigits: 2,
                            }).format(discount)}</p>
                            <button onClick={removeCoupon} className='remove-cpn-sp'>Remove Coupon</button>
                        </div>
                    )}
                </div>

                <div className='totDetail'>
                    <span className='topic'>Cart Detail</span>
                    <div className='wrapper'>
                        <div className='flx-rw'>
                            <span className='bold'>Subtotal</span>
                            <span className='val'>LKR {formattedSubtotal}</span>
                        </div>
                        <Link to="/checkout">
                            <button className='process'>Proceed to checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
            <SingleItemCompo2 />
            <Footer />
        </div>
    );
}

export default CartView;
