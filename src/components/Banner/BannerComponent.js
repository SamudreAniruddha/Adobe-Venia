import React from 'react'
import './BannerComponent.scss'
import { Link } from "react-router-dom";
import { setProducts } from "../../reducers/products";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BannerComponent() {
    let url = "";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsMain = useSelector(store => store.products.datas);
    const shopNow = () => {
        dispatch(setProducts(productsMain));
        navigate('/Products')
    }
    return (
        <>
        <section>
            <div className="banner">
                    <article className='banner__text'>
                       <div> 
                            <h1>Shop the new <br />Signature Collection</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                            <button onClick={shopNow} className='blue--button'>SHOP NOW</button>
                        </div> 
                    </article>
                <div className='banner__image'></div>
            </div>  
        </section>       
        </>
    )
}

export default BannerComponent
