import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/CartCompo.css'
import CartBody from '../components/cartBody';

const CartComponent = () => {

  return (
    <div className="CartCompo">

        <div className='mainBG' >
            <div className='flx-tp'>
                <Link to="/">
                    <button className='buttonReturn'>Undo ?</button>
                </Link>
                <span className='txt'>“JBL Boombox 3 - Portable Bluetooth Waterproof Speaker” has been removed.</span>
            </div>
        </div>

        <div className='mainBG' >
            <div className='flx'>
                <Link to="/shop">
                <button className='buttonReturn'>Return To Shop</button>
                </Link>
                <span className='txt'>Your cart is currently empty.</span>
            </div>
        </div>


    </div>
  );
};

export default CartComponent;
