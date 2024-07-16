import React, {useEffect, useState} from 'react';
import { Link, Navigate, useLocation } from "react-router-dom";

import payVisa from '../assets/images/payVisa.png'
import payMaster from '../assets/images/payMaster.png'
import payAme from '../assets/images/payAme.png'
import payCOCO from '../assets/images/payCOCO.png'
import logoMyco from '../assets/images/logoMyco.webp'
import '../assets/css/Footer.css';
import { loadCategories, loadProducts, loadBestSellerOptions, loadShopPageMainBanner } from "../common/Common";

function Footer () {
    const [products] = useState([]),
        [productCategories, setProductCategories] = useState([]),
        [categoryStates, setCategoryStates] = useState({}),
        [categoryTagId, setCategoryId] = useState(0),
        location = useLocation();
    useEffect(() => {
        loadCategories().then(data => {
            setProductCategories(data);
        }).catch(() => null);
    }, []);
    const toggleLinks = (categoryId) => {
        setCategoryId(categoryId);
        setCategoryStates((prevStates) => ({
            ...prevStates,
            [categoryId]: !prevStates[categoryId],
        }));
    };
    const currentYear = new Date().getFullYear();
    const categoryBody = () => {
        let body = [];
        if (productCategories && productCategories.length > 4) {
            for (let i = 0; i < 4; i++) {
                const category = productCategories[i];
                const categoryId = category.id;
                body.push(

                        <li key={categoryId}
                            id={categoryId}
                            value={categoryId}
                            data-bs-target="#filterModal"
                            data-bs-dismiss="modal"
                        >
                            <a href={`/shop/${category.name}`}>{category.name} </a>
                    </li>
                )
            }
            body.push(
                <li key="see-more">
                    <a href="/shop">See more</a>
                </li>
            )
        } else if (productCategories) {
            productCategories.forEach((category, index) => {
                const categoryId = category.id;
                body.push(
                    <li key={categoryId}
                    id={categoryId}
                    value={categoryId}
                    data-bs-target="#filterModal"
                    data-bs-dismiss="modal"
                >
                    <a href={`/shop/${category.name}`}>{category.name} </a>
            </li>
                )
            })
        }
        return body;
    }



    return (
        <>
            <div className='footer-wrapper-main'>
                <div className='top-layer container'>
                    <div className='flx'>
                        <div className='single-Col contUs'>
                            <span className='sec-topic'>Contact Us</span>

                            <a href="tel:0771400140" className='cell-flx'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M9.36556 10.9438C10.302 12.5905 11.6712 13.9597 13.3179 14.8961L14.2024 13.6578C14.4965 13.2462 15.0516 13.119 15.4956 13.3615C16.9024 14.13 18.4571 14.597 20.0789 14.7254C20.599 14.7666 21 15.2006 21 15.7223V20.1851C21 20.6978 20.6122 21.1274 20.1022 21.1798C19.5723 21.2343 19.0377 21.2617 18.5 21.2617C9.93959 21.2617 3 14.3221 3 5.76172C3 5.22399 3.02742 4.68943 3.08189 4.15948C3.1343 3.64947 3.56394 3.26172 4.07665 3.26172H8.53942C9.0611 3.26172 9.49513 3.66276 9.5363 4.18281C9.66467 5.8046 10.1317 7.35936 10.9002 8.76616C11.1427 9.21012 11.0155 9.76526 10.6039 10.0593L9.36556 10.9438ZM6.84425 10.2869L8.7442 8.92981C8.20547 7.76686 7.83628 6.53355 7.64727 5.26172H5.00907C5.00303 5.42804 5 5.59472 5 5.76172C5 13.2175 11.0442 19.2617 18.5 19.2617C18.667 19.2617 18.8337 19.2587 19 19.2526V16.6144C17.7282 16.4254 16.4949 16.0562 15.3319 15.5175L13.9748 17.4175C13.4258 17.2042 12.8956 16.9532 12.3874 16.6678L12.3293 16.6347C10.3697 15.5204 8.74134 13.892 7.627 11.9324L7.59394 11.8743C7.30849 11.3661 7.05754 10.8359 6.84425 10.2869Z" fill="#F2F2F2"/>
                                </svg>
                                <div className='box-txt'>
                                    <span className='Main-itm'>Phone Number</span>
                                    <span className='cont'>SL : +94 77 140 0140</span>
                                </div>
                            </a>
                            <a href="mailto:mycointernational@gmail.com" className='cell-flx'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M3 3.26172H21C21.5523 3.26172 22 3.70944 22 4.26172V20.2617C22 20.814 21.5523 21.2617 21 21.2617H3C2.44772 21.2617 2 20.814 2 20.2617V4.26172C2 3.70944 2.44772 3.26172 3 3.26172ZM20 7.49964L12.0718 14.5997L4 7.47766V19.2617H20V7.49964ZM4.51146 5.26172L12.0619 11.9237L19.501 5.26172H4.51146Z" fill="#F2F2F2"/>
                                </svg>
                                <div className='box-txt'>
                                    <span className='Main-itm'>Email Address</span>
                                    <span className='cont'>mycointernational@gmail.com</span>
                                </div>
                            </a>
                            <a href="https://maps.app.goo.gl/juKoxxF1JJwDPebn6" target="_blank" className='cell-flx'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M12 21.1612L16.9497 16.2114C19.6834 13.4778 19.6834 9.04564 16.9497 6.31197C14.2161 3.5783 9.78392 3.5783 7.05025 6.31197C4.31658 9.04564 4.31658 13.4778 7.05025 16.2114L12 21.1612ZM12 23.9896L5.63604 17.6257C2.12132 14.1109 2.12132 8.41248 5.63604 4.89776C9.15076 1.38304 14.8492 1.38304 18.364 4.89776C21.8787 8.41248 21.8787 14.1109 18.364 17.6257L12 23.9896ZM12 13.2617C13.1046 13.2617 14 12.3663 14 11.2617C14 10.1571 13.1046 9.26172 12 9.26172C10.8954 9.26172 10 10.1571 10 11.2617C10 12.3663 10.8954 13.2617 12 13.2617ZM12 15.2617C9.79086 15.2617 8 13.4708 8 11.2617C8 9.05258 9.79086 7.26172 12 7.26172C14.2091 7.26172 16 9.05258 16 11.2617C16 13.4708 14.2091 15.2617 12 15.2617Z" fill="#F2F2F2"/>
                                </svg>
                                <div className='box-txt lftDiv'>
                                    <span className='Main-itm'>Location</span>
                                    <span className='cont addr'>No 89 Bankshall Street, 4th Floor Unit 12, Colombo 11</span>
                                </div>
                            </a>
                        </div>

                        <div className='single-Col BuyUs'>
                            <span className='sec-topic'>Our Promises</span>

                            <div className='cell-flx'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M3.15256 2.6154L10 1.09375L16.8474 2.6154C17.2287 2.70013 17.5 3.03831 17.5 3.42889V11.7512C17.5 13.4229 16.6645 14.9841 15.2735 15.9114L10 19.4271L4.7265 15.9114C3.33551 14.9841 2.5 13.4229 2.5 11.7512V3.42889C2.5 3.03831 2.77128 2.70013 3.15256 2.6154ZM4.16667 4.09737V11.7512C4.16667 12.8657 4.72367 13.9064 5.651 14.5247L10 17.424L14.349 14.5247C15.2763 13.9064 15.8333 12.8657 15.8333 11.7512V4.09737L10 2.80107L4.16667 4.09737Z" fill="#F2F2F2"/>
                                </svg>
                                <span className='buy-name'>06 Months warranty</span>
                            </div>
                            <div className='cell-flx'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M7.47038 15.263C7.2682 16.6764 6.05262 17.763 4.58325 17.763C3.11389 17.763 1.8983 16.6764 1.69612 15.263H0.833252V5.26302C0.833252 4.80279 1.20635 4.42969 1.66659 4.42969H13.3333C13.7935 4.42969 14.1666 4.80279 14.1666 5.26302V6.92969H16.6666L19.1666 10.3094V15.263H17.4704C17.2682 16.6764 16.0526 17.763 14.5833 17.763C13.1139 17.763 11.8983 16.6764 11.6961 15.263H7.47038ZM12.4999 6.09635H2.49992V12.8051C3.0293 12.2649 3.76713 11.9297 4.58325 11.9297C5.74675 11.9297 6.75113 12.6109 7.21923 13.5964H11.9473C12.087 13.3022 12.2746 13.035 12.4999 12.8051V6.09635ZM14.1666 11.0964H17.4999V10.8589L15.8263 8.59635H14.1666V11.0964ZM14.5833 16.0964C15.1275 16.0964 15.5905 15.7485 15.7621 15.263C15.8082 15.1327 15.8333 14.9924 15.8333 14.8464C15.8333 14.156 15.2736 13.5964 14.5833 13.5964C13.8929 13.5964 13.3333 14.156 13.3333 14.8464C13.3333 14.9924 13.3583 15.1327 13.4044 15.263C13.576 15.7485 14.039 16.0964 14.5833 16.0964ZM5.83325 14.8464C5.83325 14.156 5.27361 13.5964 4.58325 13.5964C3.89289 13.5964 3.33325 14.156 3.33325 14.8464C3.33325 14.9924 3.35832 15.1327 3.40438 15.263C3.57598 15.7485 4.03899 16.0964 4.58325 16.0964C5.12751 16.0964 5.59053 15.7485 5.76213 15.263C5.80818 15.1327 5.83325 14.9924 5.83325 14.8464Z" fill="#F2F2F2"/>
                                </svg>
                                <span className='buy-name'>Island wide delivery</span>
                            </div>
                            {/*<div className='cell-flx'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M9.08675 2.01172L17.3363 3.19023L18.5148 11.4398L10.8545 19.1001C10.5291 19.4256 10.0015 19.4256 9.67601 19.1001L1.42645 10.8506C1.10101 10.5251 1.10101 9.99747 1.42645 9.67205L9.08675 2.01172ZM9.67601 3.77949L3.19422 10.2613L10.2653 17.3324L16.7471 10.8506L15.8633 4.66337L9.67601 3.77949ZM11.4438 9.0828C10.7929 8.43191 10.7929 7.37664 11.4438 6.72576C12.0947 6.07489 13.1499 6.07489 13.8008 6.72576C14.4517 7.37664 14.4517 8.43191 13.8008 9.0828C13.1499 9.73364 12.0947 9.73364 11.4438 9.0828Z" fill="#F2F2F2"/>
                                </svg>
                                <span className='buy-name'>Best Price Guaranteedy</span>
                            </div>*/}
                            <div className='cell-flx'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M16.615 6.92708H17.4999C18.4204 6.92708 19.1666 7.67327 19.1666 8.59375V11.9271C19.1666 12.8476 18.4204 13.5937 17.4999 13.5937H16.615C16.2049 16.8823 13.3996 19.4271 9.99992 19.4271V17.7604C12.7613 17.7604 14.9999 15.5218 14.9999 12.7604V7.76042C14.9999 4.99899 12.7613 2.76042 9.99992 2.76042C7.23849 2.76042 4.99992 4.99899 4.99992 7.76042V13.5937H2.49992C1.57944 13.5937 0.833252 12.8476 0.833252 11.9271V8.59375C0.833252 7.67327 1.57944 6.92708 2.49992 6.92708H3.38483C3.79491 3.63849 6.60023 1.09375 9.99992 1.09375C13.3996 1.09375 16.2049 3.63849 16.615 6.92708ZM2.49992 8.59375V11.9271H3.33325V8.59375H2.49992ZM16.6666 8.59375V11.9271H17.4999V8.59375H16.6666ZM6.46612 13.4145L7.34957 12.001C8.11793 12.4822 9.02642 12.7604 9.99992 12.7604C10.9734 12.7604 11.8819 12.4822 12.6503 12.001L13.5338 13.4145C12.5093 14.0562 11.2979 14.4271 9.99992 14.4271C8.70192 14.4271 7.4906 14.0562 6.46612 13.4145Z" fill="#F2F2F2"/>
                                </svg>
                                <span className='buy-name'>24/7 Customer support</span>
                            </div>


                        </div>

                        <div className='single-Col lanG'>
                            <div className='cell-flx'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M12 22.2617C6.47715 22.2617 2 17.7845 2 12.2617C2 6.73887 6.47715 2.26172 12 2.26172C17.5228 2.26172 22 6.73887 22 12.2617C22 17.7845 17.5228 22.2617 12 22.2617ZM9.71002 19.9291C8.74743 17.8876 8.15732 15.6359 8.02731 13.2617H4.06189C4.458 16.4382 6.71639 19.0364 9.71002 19.9291ZM10.0307 13.2617C10.1811 15.7005 10.8778 17.9914 12 20.0137C13.1222 17.9914 13.8189 15.7005 13.9693 13.2617H10.0307ZM19.9381 13.2617H15.9727C15.8427 15.6359 15.2526 17.8876 14.29 19.9291C17.2836 19.0364 19.542 16.4382 19.9381 13.2617ZM4.06189 11.2617H8.02731C8.15732 8.88749 8.74743 6.63579 9.71002 4.59428C6.71639 5.48705 4.458 8.08522 4.06189 11.2617ZM10.0307 11.2617H13.9693C13.8189 8.82294 13.1222 6.53197 12 4.50971C10.8778 6.53197 10.1811 8.82294 10.0307 11.2617ZM14.29 4.59428C15.2526 6.63579 15.8427 8.88749 15.9727 11.2617H19.9381C19.542 8.08522 17.2836 5.48705 14.29 4.59428Z" fill="#F2F2F2"/>
                                </svg>
                                <span className='lan'>LNG / English</span>
                            </div>
                            <div className='ico-flx'>
                                <a href="https://www.facebook.com/share/33bSfYqNbEAmvK9A/?mibextid=LQQJ4d" className='social'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M8.16658 8.13802H9.62492L10.2083 5.80469H8.16658V4.63802C8.16658 4.03755 8.16658 3.47135 9.33325 3.47135H10.2083V1.51141C10.0183 1.48618 9.3 1.42969 8.54161 1.42969C6.95815 1.42969 5.83325 2.39619 5.83325 4.17118V5.80469H4.08325V8.13802H5.83325V13.0964H8.16658V8.13802Z" fill="black"/>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/mycointernational?igsh=ajNqZ3RieXoxZDI1" className='social'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M7.59972 1.42969C8.25621 1.43077 8.58888 1.43424 8.87635 1.4428L8.98957 1.44651C9.12036 1.45115 9.24939 1.45699 9.40496 1.46428C10.0257 1.49296 10.4491 1.59115 10.821 1.73553C11.2055 1.88379 11.5302 2.08407 11.8544 2.40831C12.1782 2.73254 12.3785 3.05824 12.5273 3.44178C12.6711 3.81316 12.7693 4.23705 12.7985 4.85782C12.8054 5.01337 12.811 5.14241 12.8157 5.27322L12.8193 5.38643C12.8278 5.67387 12.8318 6.00659 12.833 6.66307L12.8334 7.09807C12.8335 7.15121 12.8335 7.20604 12.8335 7.26262L12.8334 7.42718L12.8331 7.86217C12.832 8.51866 12.8285 8.85133 12.82 9.1388L12.8162 9.25202C12.8116 9.38281 12.8058 9.51184 12.7985 9.66742C12.7698 10.2881 12.6711 10.7116 12.5273 11.0835C12.379 11.4679 12.1782 11.7927 11.8544 12.1169C11.5302 12.4406 11.204 12.641 10.821 12.7897C10.4491 12.9336 10.0257 13.0318 9.40496 13.061C9.24939 13.0679 9.12036 13.0735 8.98957 13.0781L8.87635 13.0818C8.58888 13.0903 8.25621 13.0942 7.59972 13.0954L7.16473 13.0959C7.11159 13.096 7.05676 13.096 7.00017 13.096L6.83561 13.0959L6.40062 13.0955C5.74414 13.0944 5.41142 13.091 5.12398 13.0824L5.01077 13.0787C4.87995 13.0741 4.75092 13.0682 4.59537 13.061C3.9746 13.0323 3.55169 12.9336 3.17933 12.7897C2.7953 12.6414 2.47009 12.4406 2.14585 12.1169C1.82162 11.7927 1.62183 11.4665 1.47308 11.0835C1.3287 10.7116 1.23099 10.2881 1.20183 9.66742C1.1949 9.51184 1.18925 9.38281 1.18467 9.25202L1.181 9.1388C1.17246 8.85133 1.16857 8.51866 1.16731 7.86217L1.16724 6.66307C1.16832 6.00659 1.17179 5.67387 1.18035 5.38643L1.18405 5.27322C1.1887 5.14241 1.19454 5.01337 1.20183 4.85782C1.2305 4.23657 1.3287 3.81365 1.47308 3.44178C1.62134 3.05775 1.82162 2.73254 2.14585 2.40831C2.47009 2.08407 2.79579 1.88428 3.17933 1.73553C3.5512 1.59115 3.97412 1.49345 4.59537 1.46428C4.75092 1.45735 4.87995 1.4517 5.01077 1.44712L5.12398 1.44345C5.41142 1.43491 5.74414 1.43102 6.40062 1.42976L7.59972 1.42969ZM7.00017 4.34595C5.38847 4.34595 4.08349 5.65234 4.08349 7.26262C4.08349 8.87432 5.38989 10.1793 7.00017 10.1793C8.61187 10.1793 9.91684 8.87286 9.91684 7.26262C9.91684 5.65092 8.61041 4.34595 7.00017 4.34595ZM7.00017 5.51261C7.9667 5.51261 8.75017 6.29581 8.75017 7.26262C8.75017 8.22915 7.96693 9.01262 7.00017 9.01262C6.03365 9.01262 5.25016 8.22938 5.25016 7.26262C5.25016 6.2961 6.03336 5.51261 7.00017 5.51261ZM10.0627 3.47095C9.66058 3.47095 9.33351 3.79755 9.33351 4.19962C9.33351 4.60167 9.66011 4.92879 10.0627 4.92879C10.4647 4.92879 10.7918 4.60218 10.7918 4.19962C10.7918 3.79755 10.4642 3.47044 10.0627 3.47095Z" fill="#0D0D0D"/>
                                    </svg>
                                </a>
                                <a href="https://www.tiktok.com/@mycointernational?_t=8nleHHj4EXC&_r=1" className='social'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M9.33333 5.07282V9.30469C9.33333 11.3988 7.63577 13.0964 5.54167 13.0964C3.44759 13.0964 1.75 11.3988 1.75 9.30469C1.75 7.21058 3.44759 5.51302 5.54167 5.51302C5.84284 5.51302 6.13579 5.54813 6.41667 5.61448V7.45949C6.15148 7.33349 5.8548 7.26302 5.54167 7.26302C4.41408 7.26302 3.5 8.1771 3.5 9.30469C3.5 10.4323 4.41408 11.3464 5.54167 11.3464C6.66925 11.3464 7.58333 10.4323 7.58333 9.30469V1.42969H9.33333C9.33333 3.04052 10.6392 4.34635 12.25 4.34635V6.09635C11.1464 6.09635 10.1323 5.71327 9.33333 5.07282Z" fill="#0D0D0D"/>
                                    </svg>
                                </a>
                                <a href="" className='social'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path d="M4.04869 3.17891C4.04848 3.65393 3.76029 4.08138 3.32003 4.25971C2.87976 4.43805 2.37534 4.33165 2.04461 3.99069C1.71387 3.64973 1.62289 3.14229 1.81454 2.70766C2.0062 2.27303 2.44223 1.998 2.91703 2.01225C3.54765 2.03118 4.04898 2.548 4.04869 3.17891ZM4.08369 5.20891H1.75036V12.5122H4.08369V5.20891ZM7.77037 5.20891H5.44869V12.5122H7.74704V8.67973C7.74704 6.54473 10.5295 6.3464 10.5295 8.67973V12.5122H12.8337V7.8864C12.8337 4.28725 8.71537 4.42141 7.74704 6.1889L7.77037 5.20891Z" fill="#0D0D0D"/>
                                    </svg>
                                </a>
                            </div>

                            <div className='logos-pay'>
                                <img src={payVisa} alt=""/>
                                <img src={payMaster} alt=""/>
                                <img src={payAme} alt=""/>
                                <img src={payCOCO} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='middle-layer container'>
                    <div className='sin-card-flx'>
                        <span className='crd-name'>Company</span>
                        <div className='nav-set'>
                            <ul>
                                <li>
                                <Link to="/">Home</Link>
                                </li>
                                <li>
                                <Link to="/about-us">About Us</Link>
                                </li>
                                <li>
                                <Link to="/contact-us">Contact Us</Link>
                                </li>
                                <li>
                                <Link to="/shop">Shop</Link>
                                </li>
                                <li>
                                <Link to="/blog">Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='sin-card-flx '>
                        <span className='crd-name'>Products</span>
                        <div className='nav-set'>
                            <ul>
                                {categoryBody()}
                            </ul>
                        </div>
                    </div>

                    <div className='sin-card-flx'>
                        <span className='crd-name'>Program</span>
                        <div className='nav-set'>
                            <ul>
                                <li>
                                <Link to="/">New Arrivals</Link>
                                </li>
                                <li>
                                <Link to="/">Hot Deals</Link>
                                </li>
                                <li>
                                <Link to="/">Featured products</Link>
                                </li>
                                <li>
                                <Link to="/">Discounts</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='sin-card-flx'>
                        <span className='crd-name'>Support</span>
                        <div className='nav-set'>
                            <ul>
                                <li>
                                <Link to="/privacy-policy">privacy policy</Link>
                                </li>
                                <li>
                                <Link to="/privacy-policy">Terms & conditions</Link>
                                </li>
                                <li>
                                <Link to="/refund-policy">Returns & refund policy</Link>
                                </li>
                                <li>
                                <Link to="/contact-us">FAQ</Link>
                                </li>
                                <li>
                                <Link to="/contact-us">Connected Equipment Warranty</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='copy container'>
                    <img src={logoMyco} alt=""/>
                    <span className='cpy-txt'>
                        Copyright @ {currentYear} MYCO International | all rights reserved
                    </span>
                </div>
            </div>
        </>
    );
}
export default Footer;