import React from 'react';
import { useState } from "react";
import './SuccessfullPage.scss';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditIcon from '../../assets/svg/edit.svg';
import OrderItems from './OrderItems';

function SuccessfullPage() {
    const { register, handleSubmit, setValue, formState: { errors }} = useForm();
    const [count, setCount] = useState(0);
    const cartItems = useSelector(state => state.products.cart);
    const getFormShIn = useSelector(state => state.form.shippingInformation);
    const getFormShMe = useSelector(state => state.form.shippingMethod);
    const getFormPayIn = useSelector(state => state.form.paymentInformation);
     const url="";
    return (
    <>
    <div className="inner-container shipping--information payment-method review-order successfull--page">
            <h1 className="order--heading">Order Successfull</h1>
            <div className='aem-Grid aem-Grid--12 placed--items--information' aria-label="Add Cart Details">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                      <h2 className="order--number">Order Number 1700834</h2>
                      
                    <div className='aem-Grid aem-Grid--12' aria-label="Add Cart Details">
                      <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                          <div className="shipping--information--edit">
                              <h4 className='shipping--information--edit_heading'>Shipping Information</h4>
                                <div className='shipping--information--edit__email'>{getFormShIn.Email}</div>
                                  <div className='shipping--information--edit__phonenumber'>{getFormShIn.PhoneNumber}</div>
                                  <div className='shipping--information--edit__name'>{getFormShIn.FirstName} {getFormShIn.LastName}</div>
                                  <div className='shipping--information--edit__address'>{getFormShIn.StreetAddress} <br /> {getFormShIn.StreetAddress}</div>
                                  <div className='shipping--information--edit__city'>{getFormShIn.City}</div>
                                  <div className='shipping--information--edit__statezip'>{getFormShIn.State} - {getFormShIn.Zip}</div>
                          </div>
                      </div>
                      <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                          <div className="shipping--information--edit shipping--Method--edit">
                              <h4 className='shipping--information--edit_heading'>Shipping Method</h4>
                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                  <span className='shipping--Method--edit__standarshipping'>{getFormShMe.ShippingMethod}</span>
                                </div>   
                          </div>
                          <div className="shipping--information--edit payment--method--edit">
                              <h4 className='shipping--information--edit_heading'>Payment Information</h4>
                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                  <div className='shipping--Method--edit__standarshipping'>{getFormPayIn.CreditCard}</div>
                                  <div className='shipping--Method--edit__standarshipping'>Visa ending in {getFormPayIn.CreditCardNumber}</div>
                                </div>   
                          </div>
                        </div>
                    </div>  

                  
                      {/* Added Cart items list start*/} 
                      <OrderItems />
                        {/* Added Cart items list end*/}
            
                <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                  <div className='cart--advt'>
                    <p>Give us a follow to SAVE 20% on your next order.</p>
                    <div className='social--network'>
                        <a href={url} aria-label='Instagram Link'>
                            <img src={require('../../assets/images/instagram.png')} alt="Instagram Icon" />
                        </a>
                        <a href={url} className="facebook" aria-label='Facebook Link'>
                            <img src={require('../../assets/images/facebook.png')} alt="Facebook Icon" />
                        </a>
                        <a href={url} aria-label='Twitter Link'>
                            <img src={require('../../assets/images/twitter.png')} alt="Twitter Icon" />
                        </a>      
                    </div>
                  </div>
                </div> 
            </div>  
            </div>  
    </>
    )
}

export default SuccessfullPage;

