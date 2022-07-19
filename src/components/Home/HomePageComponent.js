import React from "react";
import Axios from "axios";
import BannerComponent from "../Banner/BannerComponent";
import HomeProductsComponent from "../Home/HomeProductsComponent";
import HomeShopCollectionComponent from "../Home/HomeShopCollectionComponent";
import HomeShopDevicesComponent from "../Home/HomeShopDevicesComponent";


function HomePageComponent() {
  
  
      
  return (
    <div>
      <BannerComponent />
      <HomeProductsComponent />
      <HomeShopCollectionComponent />
      <HomeShopDevicesComponent />
    </div>
  );
}

export default HomePageComponent;

