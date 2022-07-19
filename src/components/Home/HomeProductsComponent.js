import React from 'react'
import './HomeProductsComponent.scss'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../reducers/products";
import { useNavigate } from "react-router-dom";

function HomeProductsComponent() {
    let url = "";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(store => store.products.data);
    const productsMain = useSelector(store => store.products.datas);
    const getWomensValue = () => {
        const result = productsMain.filter(x => 
            x.category == "women's clothing"
         );
        dispatch(setProducts(result));
        navigate('/Products/Women')
    }
    const getMensValue = () => {
        const result = productsMain.filter(x => 
            x.category == "men's clothing"
         );
        dispatch(setProducts(result));
        navigate('/Products/Men')
    }
    const getJewelleryValue = () => {
        const result = productsMain.filter(x => 
            x.category == "jewelery"
         );
        dispatch(setProducts(result));
        navigate('/Products/Jewellery')
    }
    const getElectronicsValue = () => {
        const result = productsMain.filter(x => 
            x.category == "electronics"
         );
        dispatch(setProducts(result));
        navigate('/Products/Electronics')
    } 
    return (
        <>
        <section className='inner-container'>
           <div className='home--products'> 
            <figure onClick={getWomensValue}>
                    <img src={require('../../assets/images/product01.jpg')} alt='Product' className='home--products__image' tabIndex={0} />
                    <figcaption>
                        <span className='home--products__heading'>Shop Women</span>
                        <span className='home--products__description'>Lorem ipsum dolor sit amet</span>
                    </figcaption>
                
            </figure>
            <figure onClick={getMensValue}>
                    <img src={require('../../assets/images/product1.jpg')} alt='Product' className='home--products__image' tabIndex={0} />
                    <figcaption>
                        <span className='home--products__heading'>Shop Men</span>
                        <span className='home--products__description'>Lorem ipsum dolor sit amet</span>
                    </figcaption>
            </figure>
            <figure onClick={getJewelleryValue}>
                    <img src={require('../../assets/images/product2.jpg')} alt='Product' className='home--products__image' tabIndex={0} />
                    <figcaption>
                        <span className='home--products__heading'>Shop Jewellery</span>
                        <span className='home--products__description'>Lorem ipsum dolor sit amet</span>
                    </figcaption>
            </figure>
            <figure onClick={getElectronicsValue}>
                    <img src={require('../../assets/images/product3.jpg')} alt='Product' className='home--products__image' tabIndex={0} />
                    <figcaption>
                        <span className='home--products__heading'>Shop Electronics</span>
                        <span className='home--products__description'>Lorem ipsum dolor sit amet</span>
                    </figcaption>
            </figure>
          </div> 
        </section>       
        </>
    )
}

export default HomeProductsComponent
