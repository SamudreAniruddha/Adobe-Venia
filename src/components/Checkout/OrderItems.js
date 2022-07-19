import React from 'react';
import { useState } from "react";
import './OrderItems.scss';
import { useSelector } from "react-redux";

function OrderItems() {
    const [count, setCount] = useState(0);
    const cartItems = useSelector(state => state.products.cart);

         

    return (
    <>                  
                              {/* Added Cart items list start*/} 
                        <div className='placed--items'> 
                          <section>     
                          <div className='order--items'>{cartItems.length} items in your order</div>
                            <> 
                            <div className="order--item" >
                                {cartItems.map((product) => ( 
                                <div className="order--item__box" role="Added Cart items" key={product.id}>
                                    <img src={product.image} alt="Product Image" />
                                    <div className="bag-product-details" role="Added Cart item Details">
                                        <span className="bag-p-name">{product.title}</span>
                                        <span className="bag-p-size">Size: XL</span>
                                        <span className="bag-p-color">Color: Red</span>
                                        <span className="bag-p-price">Price: ${product.quantity}</span>
                                    </div>
                                  </div>
                                  ))}
                            </div>
                            </>
                        </section>
                        </div>
                        {/* Added Cart items list end*/}
                  
    </>
    )
}

export default OrderItems;

