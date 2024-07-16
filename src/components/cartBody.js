import React from 'react';

function CartBody({ product = null, index, updateQuantity, removeFromList, parent = null }) {
    const calculateSubtotal = () => {
        if (product) {
            return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(product.numericPrice * product.selectedQuantity);
        }
        return 0;
    };    

    // Render the table headings separately
    const tableHeadings = (
        <div className="CartCompoS">
            <div className='cartbody'>
                <div className='cartAddedItem'>
                    <div className='singleItem itm-spc-1'>
                        
                        <div className='flx-t'>
                            <span className='boldtxt tblehead'>Products</span>
                        </div>
                        <div className='spc-spac'></div>
                        <div className='flx-t'>
                            <span className='boldtxt tblehead'>Price</span>
                        </div>
                        <div className='flx-t'>
                            <span className='boldtxt tblehead'>Quantity</span>
                        </div>
                        <div className='flx-t subT'>
                            <span className='boldtxt tblehead'>Sub Total</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    if (product) {
        // Render cart body for each product
        return (
            <>
                <div className="CartCompoS mobile-only-cart-body">
                    <div className='cartbody' key={(parent ? parent : "") + "ProductList" + index}>
                        <div className='cartAddedItem'>
                            <div className='singleItem'>
                                <div className='ImgClass'>
                                    <img src={product.image_url}/>
                                </div>
                                <div className='flx-t'>
                                    <span className='boldtxt'>Products</span>
                                    <span className='tag'>{product.product_name}</span>
                                </div>
                                <div className='flx-t'>
                                    <span className='boldtxt'>Price</span>
                                    <span className='price'>LKR {new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,
                                        }).format(product.numericPrice)}</span>
                                </div>
                                <div className='flx-t'>
                                    <span className='boldtxt'>Quantity</span>
                                    <input 
                                        type="number" 
                                        value={product.selectedQuantity} 
                                        max={product.selectedVariant ? product.selectedVariant.quantity : 0} 
                                        onChange={(event) => updateQuantity(index, parseInt(event.target.value))} 
                                        placeholder="01"
                                    />
                                </div>
                                <div className='flx-t subT'>
                                    <span className='boldtxt'>Sub Total</span>
                                    <span className='price'>LKR {calculateSubtotal()}</span>
                                </div>
            
                                <div className='closeIco' onClick={() => removeFromList(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8.00047 7.05767L11.3003 3.75781L12.2431 4.70062L8.94327 8.00047L12.2431 11.3003L11.3003 12.2431L8.00047 8.94327L4.70062 12.2431L3.75781 11.3003L7.05767 8.00047L3.75781 4.70062L4.70062 3.75781L8.00047 7.05767Z" fill=""/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            <div className='desktop-only-cart-body' >
                {index === 0 && tableHeadings}
                <div className="CartCompoS">
                    <div className='cartbody' key={(parent ? parent : "") + "ProductList" + index}>
                        <div className='cartAddedItem'>
                            <div className='singleItem'>
                                <div className='ImgClass'>
                                    <img src={product.image_url}/>
                                </div>
                                <div className='flx-t'>
                                    <span className='tag'>{product.product_name}</span>
                                </div>
                                <div className='flx-t'>
                                    <span className='price'>LKR {new Intl.NumberFormat('en-US', {minimumFractionDigits: 2}).format(product.numericPrice)}</span>
                                </div>
                                <div className='flx-t'>
                                    <input 
                                        type="number" 
                                        value={product.selectedQuantity} 
                                        max={product.quantity} 
                                        onChange={(event) => updateQuantity(index, parseInt(event.target.value))} 
                                        placeholder="01"
                                    />
                                </div>
                                <div className='flx-t subT'>
                                    <span className='price'>LKR {calculateSubtotal()}</span>
                                </div>
        
                                <div className='closeIco' onClick={() => removeFromList(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8.00047 7.05767L11.3003 3.75781L12.2431 4.70062L8.94327 8.00047L12.2431 11.3003L11.3003 12.2431L8.00047 8.94327L4.70062 12.2431L3.75781 11.3003L7.05767 8.00047L3.75781 4.70062L4.70062 3.75781L8.00047 7.05767Z" fill=""/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    } else {
        return null;
    }
}

export default CartBody;