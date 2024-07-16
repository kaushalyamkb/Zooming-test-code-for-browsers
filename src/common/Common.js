import {getRequest} from "../routes/Routes";
import { toast } from "react-toastify";

export const loadTestimonials = async (token) => {
    try {
        const response = await getRequest('/api/testimonials/all', token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        toast.error("An error occurred while loading Testimonials", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return [];
};

export const loadCategories = async () => {
    let productCategory = [];
    await getRequest('/api/categories/all').then(response => {
        if (response.status === 200) {
            productCategory = response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    });
    return productCategory;
};

export const loadFeaturedBanners = async (token) => {
    try {
        const response = await getRequest('/api/banners/featured/all', token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        toast.error("An error occurred while loading Featured banners", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return [];
};

export const loadCountDownbanners = async (token) => {
    try {
        const response = await getRequest('/api/banners/countdown/all', token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        toast.error("An error occurred while loading countdown banners", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return [];
};

export const loadPartners = async (token) => {
    try {
        const response = await getRequest('/api/lp/all', token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        toast.error("An error occurred while loading main banners", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return [];
};

export const loadMainBanners = async (token) => {
    try {
        const response = await getRequest('/api/banners/main/all', token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        toast.error("An error occurred while loading main banners", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return [];
};

export const loadProductBanners = async (token) => {
    try {
        const response = await getRequest('/api/banners/product/all', token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.log('error', error)
        toast.error("An error occurred while loading product banners", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return [];
};

export const loadProducts = async () => {
    let products = [];
    await getRequest('/api/products/all').then(response => {
        if (response.status === 200) {
            products = response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    });
    return products;
};

export const loadInformativeBanners = async (token) => {
    try {
        const response = await getRequest('/api/banners/informative/all', token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.log('error', error)
        toast.error("An error occurred while loading infomative banners", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return [];
};

export const loadInformativeBannerSpecs = async (id, token) => {
    try {
        const response = await getRequest(`/api/banners/informative/specs/find/${id}`, token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.error('Error fetching informative banner spec:', error);
        throw error;
    }
};

export const loadProduct = async (id, token) => {
    try {
        const response = await getRequest(`/api/products/find/${id}`, token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};

export const loadProductColors = async (id, token) => {
    try {
        const response = await getRequest(`/api/products/colors/find/${id}`, token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.error('Error fetching colors:', error);
        throw error;
    }
};

export const loadWarrantyOption = async (token) => {
    try {
        const response = await getRequest('/api/warranty/options/all', token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.log('error', error)
        toast.error("An error occurred while loading product slider images", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return [];
};

export const loadProductVariants = async (id, token) => {
    try {
        const response = await getRequest(`/api/products/variants/find/${id}`, token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.error('Error fetching variants:', error);
        throw error;
    }
};

export const loadProductSliderImages = async (id, token) => {
    try {
        const response = await getRequest(`/api/products/images/find/${id}`, token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.error('Error fetching slider images:', error);
        throw error;
    }
};

// export const loadProductSliderImages = async (token) => {
//     try {
//         const response = await getRequest('/api/products/images/all', token);

//         if (response.status === 200) {
//             return response.data;
//         } else {
//             toast.error(response.data.message, {
//                 position: "bottom-center",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//         }
//     } catch (error) {
//         console.log('error', error)
//         toast.error("An error occurred while loading product slider images", {
//             position: "bottom-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//     }
//     return [];
// };

export const loadDeliveries = async () => {
    let deliveryCharges = [];
    await getRequest('/api/deliveries/all').then(response => {
        if (response.status === 200) {
            deliveryCharges = response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    });
    return deliveryCharges;
};

// export const addProductToList = (product) => {
//     let list = JSON.parse(sessionStorage.getItem('list'));
//     if (list && list.length > 0) {
//         let productIndex = list.findIndex(function (item) {
//             return (item.id === product.id);
//         });
//         if (productIndex >= 0) {
//             list[productIndex] = product;
//         } else {
//             list.push(product);
//         }
//     } else {
//         list = [];
//         list.push(product);
//     }
//     sessionStorage.setItem('list', JSON.stringify(list));
// }

export const addProductToList = (product) => {
    let list = JSON.parse(sessionStorage.getItem('list')) || [];
    list.push(product);
   sessionStorage.setItem('list', JSON.stringify(list));
}

export const updateList = (list) => {
    sessionStorage.setItem('list', JSON.stringify(list));
};

export const loadBestSellerOptions = async (token) => {
    try {
        const response = await getRequest('/api/best-seller-options/all', token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.log('error', error)
        toast.error("An error occurred while loading best seller options", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return [];
};

export const loadProductSections = async (token) => {
    try {
        const response = await getRequest('/api/product-section/all', token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.log('error', error)
        toast.error("An error occurred while loading product sections", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return [];
};

export const loadOrders = async () => {
    let orders = [];
    await getRequest('/api/order/all').then(response => {
        if (response.status === 200) {
            orders = response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    });
    return orders;
};

export const loadOrder = async (id, token) => {
    try {
        const response = await getRequest(`/api/order/find/${id}`, token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.error('Error fetching Featured Banner:', error);
        throw error;
    }
};

//for the order tracking
export const loadOrderUsingOrderNo = async (id, token) => {
    try {
        const response = await getRequest(`/api/order/find/${id}`, token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.error('Error fetching Featured Banner:', error);
        throw error;
    }
};

export const loadShopPageMainBanner = async (token) => {
    try {
        const response = await getRequest('/api/banners/shoppagemain/all', token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.log('error', error)
        toast.error("An error occurred while loading best seller options", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return [];
};

export const loadUserAddress = async (id, token) => {
    try {
        const response = await getRequest(`/api/user/address/delivery/find/${id}`, token);

        if (response.status === 200) {
            return response.data;
        } else {
            toast.error(response.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        console.error('Error fetching user address:', error);
        throw error;
    }
};
