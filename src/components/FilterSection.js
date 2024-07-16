// FilterSection.js
import React, { useState, useEffect  } from "react";
import { Link } from 'react-router-dom';

import {getUser} from "../auth/Auth";
import { loadCategories, loadProducts } from "../common/Common";

import '../assets/css/fillterSection.css'

function FilterSection() {

  const handleCheckboxChange = (event) => {
    // Do something with the checkbox value (event.target.checked)
    console.log('Checkbox checked:', event.target.checked);
  };

  //
  const [isLinksVisible1, setLinksVisible1] = useState(false),
    [categories, setCategories] = useState([]),
    [products, setProducts] = useState([]),
    [user, setUser] = useState(null);

  const toggleLinks = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        setLinksVisible1(!isLinksVisible1);    
        break;
      default:
        break;
    }
  };

  const [isPopupVisible, setPopupVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setPopupVisible(false);
      } else {
        setPopupVisible(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);

    useEffect(() => {
		getUser().then((data) => {
			setUser(data);
		}).catch(() => {
			setUser(null);
		});
		loadCategories().then(data => {
			setCategories(data);
		}).catch(() => null);
        loadProducts().then(data => {
			setProducts(data);
		}).catch(() => null);
	}, []);

    const categoryBody = () => {
        let body = [];
        if (categories) {
            categories.forEach((categories, index) => {
                body.push(
                    <div key={index} className="single-item">
                        <button onClick={() => toggleLinks(1)}>
                        {categories.name} {isLinksVisible1 ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.00047 8.78101L4.70062 5.4812L3.75781 6.42401L8.00047 10.6667L12.2431 6.42401L11.3003 5.4812L8.00047 8.78101Z" fill=""/>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.78028 8.00047L5.48047 4.70062L6.42328 3.75781L10.6659 8.00047L6.42328 12.2431L5.48047 11.3003L8.78028 8.00047Z" fill=""/>
                        </svg>
                        }
                        </button>
                        {isLinksVisible1 && (
                        <div>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        )}
                    </div>
                )
            })
        }
        return body;
    }

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div>
      {isPopupVisible && (
        <div className="wrapper-filter popup">
          <button onClick={closePopup} className="absBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8.00047 7.05767L11.3003 3.75781L12.2431 4.70062L8.94327 8.00047L12.2431 11.3003L11.3003 12.2431L8.00047 8.94327L4.70062 12.2431L3.75781 11.3003L7.05767 8.00047L3.75781 4.70062L4.70062 3.75781L8.00047 7.05767Z" fill="#1A1A1A"/>
          </svg></button>
          <div className="hide-show-mobile-ico"></div>

          <div className="category-lable">
            <div className="main-lable">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.66667 3.33341H17.5V5.00008H6.66667V3.33341ZM2.5 2.91675H5V5.41675H2.5V2.91675ZM2.5 8.75008H5V11.2501H2.5V8.75008ZM2.5 14.5834H5V17.0834H2.5V14.5834ZM6.66667 9.16675H17.5V10.8334H6.66667V9.16675ZM6.66667 15.0001H17.5V16.6667H6.66667V15.0001Z"
                  fill="#050505"
                />
              </svg>
              <span className="lable">Category</span>
            </div>
            <div className="category-contents">
              {categoryBody()}
            </div>
          </div>

          <div className="brands">
            <span className="brand-lbl">Brands</span>
            <div className="cont">
              <label>
                <input type="checkbox" onChange={handleCheckboxChange} />
                Enable Feature
              </label>
              <label>
                <input type="checkbox" onChange={handleCheckboxChange} />
                Enable Feature
              </label>
              <label>
                <input type="checkbox" onChange={handleCheckboxChange} />
                Enable Feature
              </label>
            </div>
          </div>
          
          <div className="brands">
            <span className="brand-lbl">Price</span>
            <div className="cont">
              <label>
                <input type="checkbox" onChange={handleCheckboxChange} />
                Enable Feature
              </label>
              <label>
                <input type="checkbox" onChange={handleCheckboxChange} />
                Enable Feature
              </label>
              <label>
                <input type="checkbox" onChange={handleCheckboxChange} />
                Enable Feature
              </label>
            </div>
          </div>

          <div className="brands brdSpc">
            <span className="brand-lbl">Colors</span>
            <div className="cont">
              <button className="colo-round"  style={{background: '#0D0D0D'}}></button>
              <button className="colo-round" style={{background: '#7A755F'}}></button>
              <button className="colo-round" style={{background: '#272D51'}}></button>
              <button className="colo-round" style={{background: '#E9121F'}}></button>
              <button className="colo-round" style={{background: '#1FADA8'}}></button>
            </div>
          </div>

          <div className="brands">
            <div className="cont">
              <label>
                <input type="checkbox" onChange={handleCheckboxChange} />
                Enable Feature
              </label>
              <label>
                <input type="checkbox" onChange={handleCheckboxChange} />
                Enable Feature
              </label>
              <label>
                <input type="checkbox" onChange={handleCheckboxChange} />
                Enable Feature
              </label>
            </div>
          </div>
          
          <div className="img-banner-simple" style={{background: 'url(https://dummyimage.com/200x200/000/000000), lightgray 50% / cover no-repeat'}}>
            <img className="logo" src="https://dummyimage.com/20x20/c4c4c4/000000"/>
            <img className="bigimg" src="https://dummyimage.com/200x115/c4c4c4/000000"/>
            <span className="big-txt">JBL GO 3</span>
            <span className="sml-txt">Portable bluetooth speaker</span>
            <span className="vry-sml-txt">Dustproof | Waterproof</span>
          </div>
                  
        </div>
      )}

    <button onClick={togglePopup} className="main-toggle-filters">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5.62492 2.08203C7.58093 2.08203 9.16658 3.66769 9.16658 5.6237V9.16536H5.62492C3.66891 9.16536 2.08325 7.57971 2.08325 5.6237C2.08325 3.66769 3.66891 2.08203 5.62492 2.08203ZM7.49992 7.4987V5.6237C7.49992 4.58816 6.66045 3.7487 5.62492 3.7487C4.58939 3.7487 3.74992 4.58816 3.74992 5.6237C3.74992 6.65923 4.58939 7.4987 5.62492 7.4987H7.49992ZM5.62492 10.832H9.16658V14.3737C9.16658 16.3297 7.58093 17.9154 5.62492 17.9154C3.66891 17.9154 2.08325 16.3297 2.08325 14.3737C2.08325 12.4177 3.66891 10.832 5.62492 10.832ZM5.62492 12.4987C4.58939 12.4987 3.74992 13.3382 3.74992 14.3737C3.74992 15.4092 4.58939 16.2487 5.62492 16.2487C6.66045 16.2487 7.49992 15.4092 7.49992 14.3737V12.4987H5.62492ZM14.3749 2.08203C16.3309 2.08203 17.9166 3.66769 17.9166 5.6237C17.9166 7.57971 16.3309 9.16536 14.3749 9.16536H10.8333V5.6237C10.8333 3.66769 12.4189 2.08203 14.3749 2.08203ZM14.3749 7.4987C15.4104 7.4987 16.2499 6.65923 16.2499 5.6237C16.2499 4.58816 15.4104 3.7487 14.3749 3.7487C13.3394 3.7487 12.4999 4.58816 12.4999 5.6237V7.4987H14.3749ZM10.8333 10.832H14.3749C16.3309 10.832 17.9166 12.4177 17.9166 14.3737C17.9166 16.3297 16.3309 17.9154 14.3749 17.9154C12.4189 17.9154 10.8333 16.3297 10.8333 14.3737V10.832ZM12.4999 12.4987V14.3737C12.4999 15.4092 13.3394 16.2487 14.3749 16.2487C15.4104 16.2487 16.2499 15.4092 16.2499 14.3737C16.2499 13.3382 15.4104 12.4987 14.3749 12.4987H12.4999Z" fill="black"/>
      </svg>
    </button>
  </div>
  );
};

export default FilterSection;
