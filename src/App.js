import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes, Switch } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './views/HomePage';
import ShopPage from './views/ShopPage';
import CartView from './views/Cart';
import AboutUs from './views/AboutUs';
import Blogs from './views/Blogs';
import ContactUs from './views/ContactUs';
import ComingSoon from './views/ComingSoon';
import OffersAndDeals from './views/OffersAndDeals';
import PrivacyPolicy from './views/PrivacyPolicy';
import RefundPolicy from './views/RefundPolicy';

import SingleItem from './views/singleItem'
import SingleItemC from './views/checkoutPage'
import PayData from './views/paymentDetail'
import NotFoundPage from './views/nopage'
import SingleBlog from './views/SingleBlog'

function App() {

    const [count, setCount] = useState(0);
    const [showComingSoon, setShowComingSoon] = useState(true);

    const updateCount = () => {
        setCount(count + 1);
    }

    const handlePinSubmit = () => {
        setShowComingSoon(false);
    };


    return (
        <Router>
            <div id="header">
                <Header />
            </div>
            <div id="headerandbody">
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/shop' element={<ShopPage />} />
                    <Route path='/product/:productId' element={<SingleItem parentUpdateCount={updateCount} />} />
                    <Route path='/cart' element={<CartView />} />
                    <Route path='/checkout' element={<SingleItemC />} />
                    <Route path='/bill-detail' element={<PayData />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/contact-us' element={<ContactUs />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                    <Route path='/refund-policy' element={<RefundPolicy />} />
                    <Route path="/blog/name" element={<SingleBlog />} />
                    <Route path='/404' element={<NotFoundPage />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </div>
            <div id="footer" style={{ position: 'relative' }}>

            </div>

            {showComingSoon && (
                <div className="app-js-style" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'white', zIndex: 9999 }}>
                    <ComingSoon onPinSubmit={handlePinSubmit} />
                </div>
            )}
        </Router>
    );
}

export default App;