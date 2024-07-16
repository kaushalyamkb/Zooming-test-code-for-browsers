import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import '../assets/css/comingsoon.css';
import '../assets/css/PrivacyPolicy.css';

import VDO from '../assets/images/squvd.mp4';
import logo from '../assets/images/myco_user_pic.jpg';

function ComingSoon({ onPinSubmit }) {
    const [pin, setPin] = useState('');
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pin === 'KernelUser@123') {
            onPinSubmit();
        } else {
            alert('Incorrect PIN');
        }
    };

    useEffect(() => {
        const targetDate = new Date('2024-07-15T00:00:00');

        const updateCountdown = () => {
            const now = new Date();
            const timeDifference = targetDate - now;

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            } else {
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <video className="bg-video" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop"><source src={VDO} type="video/mp4" /></video>

            <div className="masthead">
                <div className="masthead-content text-white">
                    <div className="container-fluid px-4 px-lg-0">
                        <img src={logo} style={{ width: '30%', marginBottom: '10%' }} alt="logo" />

                        <h1 className="fst-italic lh-1 mb-4">Launching Soon! </h1>

                        <p className="mb-5">We're gearing up to unveil our brand new website. We can't wait to share it with you!</p>

                        <div className="countdownd d-flex justify-content-center">
                            <div className="day-count">
                                <h3 className="counter-cont">{countdown.days}</h3>
                                <h4 className="tt-text">Days</h4>
                            </div>
                            <div className="day-count">
                                <h3 className="counter-cont">{countdown.hours}</h3>
                                <h4 className="tt-text"> Hours</h4>
                            </div>
                            <div className="day-count">
                                <h3 className="counter-cont">{countdown.minutes}</h3>
                                <h4 className="tt-text">Minutes</h4>
                            </div>
                            <div className="day-count">
                                <h3 className="counter-cont">{countdown.seconds}</h3>
                                <h4 className="tt-text">Seconds</h4>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="row input-group-newsletter">
                                <div className="col">
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Enter Your PIN to continue"
                                        value={pin}
                                        onChange={(e) => setPin(e.target.value)}
                                        aria-label="Enter Your PIN"
                                        required
                                    />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary" type="submit">Submit!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
            <div className="social-icons">
                <div className="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                    <a className="btn btn-dark m-3" href="https://www.facebook.com/share/33bSfYqNbEAmvK9A/?mibextid=LQQJ4d"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-dark m-3" href="https://www.instagram.com/mycointernational?igsh=ajNqZ3RieXoxZDI1"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-dark m-3" href="https://www.tiktok.com/@mycointernational?_t=8nleHHj4EXC&_r=1"><i className="fab fa-tiktok"></i></a>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        </>
    );
};

export default ComingSoon;
