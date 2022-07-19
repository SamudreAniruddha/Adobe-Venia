import React from 'react'
import './HomeShopCollectionComponent.scss'
import { Link } from "react-router-dom";
import { setProducts } from "../../reducers/products";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomeShopCollectionComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsMain = useSelector(store => store.products.datas);
    const shopNow = () => {
        dispatch(setProducts(productsMain));
        navigate('/Products')
    }
    
}

export default HomeShopCollectionComponent
