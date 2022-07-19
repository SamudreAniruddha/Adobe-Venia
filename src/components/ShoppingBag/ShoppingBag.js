import React, {useState, useEffect} from "react";
import './ShoppingBag.scss';
import SaveForIcon from '../../assets/svg/heart.svg';
import EditIcon from '../../assets/svg/edit.svg';
import RemoveIcon from '../../assets/svg/trash.svg';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { addToCart } from "../../reducers/products";
import {deleteToCart} from "../../reducers/products";
import { Link } from "react-router-dom";
import CollapsibleComponent from "../Collapsible/CollapsibleComponent";
import PriceSummary from '../Checkout/PriceSummary';

function ShoppingBag() {
  const cartItems = useSelector(state => state.products.cart);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const [subTotalCount, setSubTotalCount] = useState([]);
  const [EstimatedTotalCount, setEstimatedTotalCount] = useState([0]);

  useEffect(() => {
    const count = 0;
   // var Subtotal = cartItems.reduce((total, item)=>total+(item.price*item.quantity),count);
    // setSubTotalCount(Subtotal);

   // const estimated = Subtotal + 4;
   // setEstimatedTotalCount(estimated);
}, [])
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
   

const removeItem = (product) =>{
    const productId = product.id;
    const x = cartItems.filter((item) => item.id !== productId);

     // setDeleteToCartItem(productId)
      dispatch(deleteToCart(x));
}

  return (
    cartItems.length ?
    <div className="inner-container">
            <h1 className="sh-bag-heading">Your Shopping Bag</h1>
            <div className='shopping-bag aem-Grid aem-Grid--12' aria-label="Add Cart Details">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">

                {/* Added Cart items list start*/} 
                <section>     
                    {cartItems.map((product) => ( 
                    <> 
                    <div className="shopping-thumbnails aem-Grid aem-Grid--12" >
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" role="Added Cart items" key={product.id}>
                            <img src={product.image} alt="Product Image" />
                            <div className="bag-product-details" role="Added Cart item Details">
                                <span className="bag-p-name">{product.title}</span>
                                <span className="bag-p-size">Size: Medium</span>
                                <span className="bag-p-color">Color: Storm</span>
                                <span className="bag-p-price">${product.price}</span>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                <div className="quantity" role="Product Quantity">
                                <button type="button" onClick={decrement}> - </button>
                                <input type="number" min="0" max="10" maxLength="2"  pattern="[0-9]" id={product.id} value={product.quantity} onChange={CounthandleChange} />
                                <button type="button" onClick={increment}> + </button>
                                </div>
                                <div className="product-modify" role="Product Modification">
                                    <Link to={`/products/${product.id}`}>
                                        <div className="edit">
                                            <img src={EditIcon} className="Edit-icon" alt="Edit Icon" />
                                            <span className="edit-title" role="Edit Cart Item">Edit item</span>
                                        </div>
                                    </Link>
                                    <div className="remove" onClick={() => removeItem(product)} id={product.id}>
                                        <img src={RemoveIcon} className="remove-icon" alt="Remove Icon" />
                                        <span className="remove-title" role="Remove Cart Item">Remove</span>
                                    </div>
                                    <div className="savefor">
                                        <img src={SaveForIcon} className="savefor-icon" alt="Save for later" />
                                        <span className="save-later" role="Save for later Cart Item">Save for later</span>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </>
                    ))}
                </section>
                {/* Added Cart items list end*/}

                 {/* Product Shipping details start*/}
                  <section>
                        <div className="product--estimation">
                            <div className="product--estimation__row">
                                <CollapsibleComponent label="Estimation your shipping">
                                    Estimation shipping details...
                                </CollapsibleComponent> 
                            </div>
                            <div className="product--estimation__row">
                            <CollapsibleComponent label="Enter a coupon code">
                                   Coupon code details...
                            </CollapsibleComponent> 
                            </div>
                            <div className="product--estimation__row">
                            <CollapsibleComponent label="Apply gift card">
                                   Gift card details:..
                            </CollapsibleComponent>
                            </div>
                        </div>
                  </section>      
                 {/* Product Shipping details end*/}       

                </div>

                {/* Cart items Pricing details start
                <div className="pricing-summary-box aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <div className="pricing-summary" role="Added Cart items Total Values">
                        <aside>
                        <h6>Pricing Summary</h6>
                        <div className="price-row">
                            <span className="left-val">Subtotal</span>
                            <span className="left-val"><strong>$ {Math.round(cartItems.reduce((total, item)=>total+(item.price*item.quantity),count)*  100) / 100}</strong></span>
                        </div>
                        <div className="price-row">
                            <span className="left-val">Coupon</span>
                            <span className="left-val"> $ 1</span>
                        </div>
                        <div className="price-row">
                            <span className="left-val">Gift Cart</span>
                            <span className="left-val"> $ 2</span>
                        </div>
                        <div className="price-row">
                            <span className="left-val">Estimated Tax</span>
                            <span className="left-val">$ 1</span>
                        </div>
                        <div className="price-row">
                            <span className="left-val">Estimated Shipping</span>
                            <span className="left-val">Free</span>
                        </div>
                        <div className="price-row">
                            <span className="left-val">Estimated Total</span>
                            <span className="left-val"><strong>$ {Math.round((cartItems.reduce((total, item)=>total+(item.price*item.quantity),count)+2) * 100) / 100}</strong></span>
                        </div>
                        <div className="buttons" role="Checkout and Paypal buttons">
                            <Link to={`/ShippingInformation`} className="checkout--link">
                                <button type="button" className="checkout">
                                    <img src={require('../../assets/images/lock.png')} alt="Checkout" />
                                    Checkout
                                </button>
                            </Link>
                            <button type="button" className="paypal">
                            <img src={require('../../assets/images/PayPal.png')} alt="Paypal" />
                            </button>
                        </div>
                       </aside> 
                    </div>
                </div>
                {/* Cart items Pricing details end*/}  
                <PriceSummary />
            </div>    
    </div> : <p className="no-cart" aria-label="No Products Description">No Products added in your Cart</p>
  );
}

export default ShoppingBag;

