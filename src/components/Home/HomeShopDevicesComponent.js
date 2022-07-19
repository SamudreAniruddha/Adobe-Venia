import React from 'react'
import './HomeShopDevicesComponent.scss'
import { Link } from "react-router-dom";
import { setProducts } from "../../reducers/products";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomeShopDevicesComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsMain = useSelector(store => store.products.datas);
    const shopeDevices = () => {
            const result = productsMain.filter(x => 
                x.category == "electronics"
             );
            dispatch(setProducts(result));
            navigate('/Products/Electronics');
    }
   
}

export default HomeShopDevicesComponent
