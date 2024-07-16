import React from 'react';
import "../assets/css/Header.css";

function ListProductDetails({product = null, index, finalPrice, removeFromList, parent = null}) {
    if (product) {
        return (
            <div className="item-row-cart mb-2" key={(parent ? parent : "") + "ProductList" + index}>
                <img src={product.image_url} alt={product.product_name} className="cart-img-sml"/>
                <div className="flx-in-ln">
                    <span className="main-name">{product.product_name}</span>
                    <span className="qty-price">{product.selectedQuantity} x lKR {new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,
                                }).format(product.numericPrice)}</span>
                </div>
                
                <div aria-label="Close" onClick={() => removeFromList(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="sml-close-cart"  width="17" height="17" viewBox="0 0 20 20" fill="none">
                        <path d="M10.0006 8.82208L14.1253 4.69727L15.3038 5.87577L11.1791 10.0006L15.3038 14.1253L14.1253 15.3038L10.0006 11.1791L5.87577 15.3038L4.69727 14.1253L8.82208 10.0006L4.69727 5.87577L5.87577 4.69727L10.0006 8.82208Z" fill="#494949"/>
                    </svg>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default ListProductDetails;