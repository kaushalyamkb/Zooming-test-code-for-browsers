// YourPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer'

import '../assets/css/checkP.css'
import '../assets/css/paymentDetail.css'

import { loadUserAddress } from '../common/Common';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
};

const PayData = () => {

    const location = useLocation();
    const { orderData } = location.state || {};
    const [orderAddress, setUserAddress] = useState('0');

    console.log(orderAddress)

    useEffect(() => {
        loadUserAddress(orderData.order.id).then(data => {
            setUserAddress(data);
        }).catch(() => null);
    }, [orderData.order.id]);



    const breadcrumbPaths = [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: 'checkout' },
    ];

    return (
        <div>
            <div className="page-wrapper container">
                <Breadcrumb paths={breadcrumbPaths} />
                <h4>Checkout</h4>

                {orderData &&
                    <div className="paymentDtl-wrapp">
                        <span className='successMsg'>{orderData.code}</span>

                        <div className='wrapper-data'>
                            <div className="flex-mn">
                                <div className='rowt'>
                                    <span className='big-txt'>Order number</span>
                                    <span className='value'>{orderData.order.order_no}</span>
                                </div>

                                <div className='rowt'>
                                    <span className='big-txt'>Date</span>
                                    <span className='value'>{formatDate(orderData.order.created_at)}</span>
                                </div>

                                <div className='rowt'>
                                    <span className='big-txt'>Email</span>
                                    {orderAddress ? (
                                        <span className='value'>{orderAddress.email_address}</span>
                                    ) : (
                                        <div>Loading...</div>
                                    )}
                                </div>

                                <div className='rowt'>
                                    <span className='big-txt'>Total</span>
                                    <span className='value'>LKR {orderData.order.total_amount}</span>
                                </div>

                                <div className='rowt'>
                                    <span className='big-txt'>Payment method</span>
                                    <span className='value'>{orderData.order.payment_method}</span>
                                </div>
                            </div>
                            {/* <span className='payWithOption'>
                        Pay with Cash upon Delivery
                    </span> */}
                        </div>
                        <span className='billing-add'>Billing Address</span>

                        <div className='main-data-sml'>
                            {orderAddress ? (
                                <div>
                                    <span className='sml-de-tg'>{orderAddress.first_name} {orderAddress.last_name}<br></br></span>

                                    {orderAddress.street_address_one ? (
                                        <div>
                                            <span className='sml-de-tg'>{orderAddress.street_address_one}<br></br></span>
                                            <span className='sml-de-tg'>{orderAddress.street_address_two}<br></br></span>
                                            <span className='sml-de-tg'>{orderAddress.city}<br></br></span>
                                        </div>
                                    ) : (
                                        <div>No related Address to display</div>
                                    )}


                                    <span className='sml-de-tg'>{orderAddress.phone_number}<br></br></span>
                                    <span className='sml-de-tg'>{orderAddress.email_address}</span>
                                </div>
                            ) : (
                                <div>Loading...</div>
                            )}

                        </div>
                    </div>
                }
            </div>
            <div className="page-wrapper container">
                <div className='checkoutForm '>
                    <form onSubmit={""}>
                        <div className='middleCont'>
                            <span className='topicC'>Your Orders</span>

                            <div className='top-flx'>
                                <span className='lblSp'>Product</span>
                                <span className='lblSp'>Total</span>
                            </div>

                            <div className='btm-flx'>
                                {orderData.products.map((product, index) => (
                                    <div className='rw'>
                                        <div className='sin-col'>
                                            <span className='smallLb'>{product.product_name}</span>

                                            <span className='colorLbl'>Color : <span className="bar-color" style={{ background: product.color }}></span></span>
                                        </div>
                                        <span className='lbl'>LKR {product.total_amount}</span>
                                    </div>
                                ))}
                                <div className='rw'>
                                    <span className='smallLbSP'>Subtotal :</span>
                                    <span className='lblSp'>LKR {orderData.order.sub_total}</span>
                                </div>

                                <div className='rw'>
                                    <span className='smallLbSP'>Delivery :</span>
                                    <span className='lblSp'>LKR {orderData.order.delivery_charges}</span>
                                </div>

                                <div className='rw '>
                                    <span className='smallLbSP'>Payment Method :</span>
                                    <span className='lblSp totF'>{orderData.order.payment_method}</span>
                                </div>

                                <div className='rw rw-last'>
                                    <span className='smallLbSP'>Total</span>
                                    <span className='lblSp totF'>LKR {orderData.order.total_amount}</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PayData;
