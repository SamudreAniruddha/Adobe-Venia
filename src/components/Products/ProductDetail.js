import React from "react"
import {useParams} from "react-router-dom"
import HeartIcon from '../../assets/svg/heart.svg';
import ShareIcon from '../../assets/svg/share.svg';
import SweatwickIcon from '../../assets/svg/layers.svg';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import './ProductDetails.scss';
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../reducers/products";
import LoaderComponent from "../Loader/LoaderComponent";
import { Rating } from 'react-simple-star-rating';
import ReadMoreComponent from '../ReadMore/ReadMoreComponent';
import {setWishlist } from "../../reducers/products";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
    const productsMain = useSelector(store => store.products.datas);
    const products = useSelector(store => store.products.data);
    const [rating, setRating] = useState(0) // initial rating value
    const cartItems = useSelector(store => store.products.cart);
    const dispatch = useDispatch();
    const {productId} = useParams();
    const navigate = useNavigate();
   // const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    

    //fetching products
   /* const fetchProducts = async () => {
        const { data } = await Axios.get(
        "https://fakestoreapi.com/products"
        );
        const products = data;
        setProducts(products);
    };
    useEffect(() => {
        fetchProducts();
    }, []); */

    //fetch add cart item
    const thisProduct = products.filter(prod => prod.id == productId)
    useEffect(() => {
        if (cartItems.length >= 1) {
            document.title = `Cart (${cartItems.length})`
        }
    }, [cartItems.length])
    const addItemToCart = (product, count) => {
        if(count > 0){
            alert("Product added in 'My Cart' successfully..")
            
                const x = [product];
                const y = x.map(obj =>({ ...obj, quantity: count}));
                const itemInCart = cartItems.find(item => item.id === y.id);
               
                if(!itemInCart) {
                    var cartItemsTotal = [...cartItems, y[0]];
                }else {
                  // TODOL: UPDATE ITEM COUNT
                }
               // return { cartItems };

            dispatch(addToCart(cartItemsTotal));
            navigate('/ShoppingBag');
        } else {
            alert("Please select Product Quantity");
        }
    }
    const increment = () =>{
        if(count<10){
            setCount(count + 1)
        }
    }
    const decrement = () =>{
        if(count>0){
            setCount(count - 1)
        }
    }
    let CounthandleChange = (e)=>{
        setCount(e.target.value);
       }
       
    const HeartIconEvent = (e) =>{
        const x = e.target.id;
        if(e.target.className == "save--share__save__heart--icon"){
            e.target.className = "save--share__save__heart--icon--red"
        } else {
            e.target.className = "save--share__save__heart--icon"
        }
        // setChangeHeartIcon(x);
        const whishItem  = productsMain.filter(xv => 
            xv.id == x
         );
     dispatch(setWishlist(whishItem)); 
  }   

    return (
        thisProduct.length ?
        <div className="inner-container">
           {thisProduct.map((product) => (
             <><div className='product-details aem-Grid aem-Grid--12' aria-label="Product Details">
                
                   {/* Product Thumbnails start*/} 
                   <div className="product-thumbnails aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--hide">
                       <img src={product.image} alt="Product Thumbnail" />
                       <img src={product.image} alt="Product Thumbnail" />
                   </div>
                   {/* Product Thumbnails end */}

                   {/* Product Big image */}
                   <div className="product-image aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <nav className="crumbs mobile-view">
                                <Link to="/" aria-label='Clothing url'>Clothing</Link> /
                                <Link to="/" aria-label='Womens url'>Women's</Link> /
                                <Link to="/" aria-label='Outerwear url'>Outerwear</Link>
                        </nav>
                       <img src={product.image} alt="Product Image" />
                   </div>

                   {/* Product all details start */}
                   <div className="details aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                       <nav className="crumbs desktop-view">
                           <Link to="/" aria-label='Clothing url'>Clothing</Link> /
                           <Link to="/" aria-label='Womens url'>Women's</Link> /
                           <Link to="/" aria-label='Outerwear url'>Outerwear</Link>
                       </nav>
                       <h2 className="product-name" role="Product Name">{product.title}</h2>
                       <h6 className="product-price" role="Product Price">${product.price}</h6>
                       <div className="product-rating" role="Product star Rating">
                       <Rating readonly fillColor="#172026"  ratingValue={( product.rating.rate *20)} /* Available Props */ />
                        &nbsp; ({product.rating.count})</div>
                       <div className="description" role="Product Description">
                            <ReadMoreComponent>
                           {product.description}
                           </ReadMoreComponent>
                            {/* <span className="readmore">Read more</span>*/}
                       </div>
                       <div className="quantity" role="Product Quantity">
                           <h6 className="p-details-heading">quantity</h6>
                          <div> 
                           <button type="button" onClick={decrement}> - </button>
                            <input type="number" min="0" max="10" maxLength="2"  pattern="[0-9]" id={product.id} value={count} onChange={CounthandleChange} />
                           <button type="button" onClick={increment}> + </button>
                          </div>  
                       </div>

                        {/* Product Add to Cart and share buttons */}
                       <div className="addToCart" role="Product Add To Cart" >
                           <button type="button" onClick={() => addItemToCart(product, count)}>ADD TO CART</button>
                       </div>
                       <div className="save--share" role="product save and share">
                           <div className="save--share__save">
                               { /* <img src={HeartIcon} className="heart-icon" alt="Heart icon" /> */}
                               <span onClick={HeartIconEvent} id={product.id}  className="save--share__save__heart--icon">
                               </span>
                               <span className="save--share__save__title">
                                    Save
                                </span>
                           </div>
                           <div className="save--share__share">
                               <img src={ShareIcon} className="save--share__share__icon" alt="Share icon" />
                               <span className="save--share__share__title">Share</span>
                           </div>
                       </div>

                   </div>
               </div>

                {/* Product summary */}
                    <div className='bottom-row-details aem-Grid aem-Grid--12' aria-label="Product Details"  key={product.id}>
                           <h2 className="product-name" role="Product Name">{product.title}</h2>
                           <h6 className="product-description" role="Product Description Name">Description</h6>
                           <p role="Product Description">
                               {product.description}
                           </p>
                   </div></>
           ))} 
        </div> 
        : <LoaderComponent />
    )
}
let id = 0;
const createRandomItem = () => {
  id = id + 1;
  return {
    id,
    qty: 1,
    desc: `Item number: ${id}`,
    price: Number((Math.random() * 10 + 1).toFixed(2))
  };
};
export default ProductDetail
