// YourPage.js
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer'

import '../assets/css/Shop.css'
import RelatedProductsSlider from '../components/RelatedProductsSlider';
import SingleItemCompo from '../components/singleItemDetail';
import SingleItemCompo2 from '../components/smpleCards';
import OurPartner from "../components/ourPartner";

import { getUser } from "../auth/Auth";
import { loadProduct, loadProductVariants } from "../common/Common";

function SingleItem({ parentUpdateCount }) {

    const [productId] = useState(() => {
        const urlParts = window.location.href.split('/');
        const lastPart = urlParts[urlParts.length - 1];
        const productIdPart = lastPart.split('-').pop();
        return decodeURI(productIdPart);
    }),
        [product, setProduct] = useState(null),
        [variants, setVariants] = useState(null),
        [loadingContent, setLoadingContent] = useState(true);

    const minWidth1200Styles = window.innerWidth >= 1200 ? { margin: "-80px 0px -60px" } : {};
    const breadcrumbPaths = [
        // { label: 'Home', link: '/' },
        // { label: 'Shop', link: '/shop' },
        // { label: <Link to={`/shop?tag=${product?.tag}`}>{product?.tag}</Link> },
        // { label: product?.product_name },
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: product?.tag },
        { label: product?.product_name },
    ];

    useEffect(() => {
        setLoadingContent(true);
        loadProduct(productId)
            .then(productData => {
                setProduct(productData);
                return loadProductVariants(productId);
            })
            .then(variantsData => {
                setVariants(variantsData);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            })
            .finally(() => {
                setLoadingContent(false);
            });
    }, []);



    if (!loadingContent) {
        return (
            <div>
                <div className="page-wrapper container">
                    <Breadcrumb paths={breadcrumbPaths} />
                    <SingleItemCompo variants={variants}  product={product} parentUpdateCount={parentUpdateCount} />
                    <RelatedProductsSlider product={product} />
                    <OurPartner />
                </div>
                <SingleItemCompo2 />
                <Footer />
            </div>
        );
    }
};

export default SingleItem;
