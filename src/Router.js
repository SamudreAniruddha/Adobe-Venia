import React from "react";
import App from "./App";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProductDetail from './components/Products/ProductDetail';
import ShoppingBag from './components/ShoppingBag/ShoppingBag';
import HeaderComponent from './components/Header/HeaderComponent';
import HomePageComponent from "./components/Home/HomePageComponent.js";
import ProductsComponent from "./components/Products/ProductsComponent";
import ProductsPageComponent from "./components/Products/ProductsPageComponent";
import ShippingInformation from "./components/Checkout/ShippingInformation";
import ShippingMethod from "./components/Checkout/ShippingMethod";
import PaymentInformation from "./components/Checkout/PaymentInformation";
import ReviewOrder from "./components/Checkout/ReviewOrder";
import SuccessfullPage from "./components/Checkout/SuccessfullPage";

 const Router = () => (
  <BrowserRouter>
    <App>
    <Routes>
    <Route path="/" element={ <HomePageComponent/> } />
          <Route path="/veniareactjs" element={ <HomePageComponent/> } />
          <Route path="/Home" element={ <HomePageComponent/> } />
          <Route path="/Products" element={ <ProductsPageComponent/>} />
          <Route path="/Products/Women" element={ <ProductsPageComponent/>} />
          <Route path="/Products/Men" element={ <ProductsPageComponent/>} />
          <Route path="/Products/Jewellery" element={ <ProductsPageComponent/>} />
          <Route path="/Products/Electronics" element={ <ProductsPageComponent/>} />
          <Route path="/products/:productId" element={ <ProductDetail/>} />
          <Route path="/ShoppingBag" element={ <ShoppingBag /> } />
          <Route path="/ShippingInformation" element={ <ShippingInformation /> } />
          <Route path="/ShippingMethod" element={ <ShippingMethod /> } />
          <Route path="/PaymentInformation" element={ <PaymentInformation /> } />
          <Route path="/ReviewOrder" element={ <ReviewOrder /> } />
          <Route path="/SuccessfullPage" element={ <SuccessfullPage /> } />
      </Routes>
    </App>
  </BrowserRouter>
 );

 const Users = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/ShoppingBag')
  }

  return (
    <>
    <HeaderComponent />
    <div className="dashboard">
      <h3>
        <span onClick={navigateToDashboard}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.828" viewBox="0 0 16 16.828">
            <g id="arrow-left" transform="translate(-4 -3.586)">
              <line id="Line_372" data-name="Line 372" x1="14" transform="translate(5 12)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              <path id="Path_37878" data-name="Path 37878" d="M12,19,5,12l7-7" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
          </svg>
          &nbsp;&nbsp;
        </span>
  
        Dummy Page!!
      </h3>
    </div>
    </>
  )
}


export default Router;
