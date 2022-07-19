import React from 'react';
import { useState, useEffect } from "react";
import './ShippingMethod.scss';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { setShippingMethod } from '../../reducers/form';
import { useNavigate } from "react-router-dom";
import EditIcon from '../../assets/svg/edit.svg';
import PriceSummary from './PriceSummary';

function ShippingMethod() {
    const { register, handleSubmit, setValue, formState: { errors }} = useForm();
    const [count, setCount] = useState(0);
    const cartItems = useSelector(state => state.products.cart);
    const getFormShIn = useSelector(state => state.form.shippingInformation);
    const getFormShMe = useSelector(state => state.form.shippingMethod);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
      dispatch(setShippingMethod(data));
       navigate('/PaymentInformation');
        console.log(data);
      };
    const editValue = () =>{
      navigate('/ShippingInformation');
    }  
    useEffect(() => {
      setValue("ShippingMethod", getFormShMe.ShippingMethod); 
  }, []);

    return (
    <>
    <div className="inner-container shipping--information shipping--method--page">
            <h1 className="checkout--heading">Checkout</h1>
            <div className='aem-Grid aem-Grid--12' aria-label="Add Cart Details">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                <form onSubmit={handleSubmit(onSubmit)}>
                      <h2 className="guest--checkout">Guest Checkout</h2>
                      
                      <div className="shipping--information--edit">
                        <div className='aem-Grid aem-Grid--12 form--row'>
                          <h4 className='shipping--information--edit_heading'>Shipping Information</h4>
                          <div className="edit" onClick={editValue}>
                               <img src={EditIcon} className="edit--icon" alt="Edit Icon" />
                               <span className="edit--title" role="Edit Cart Item">Edit</span>
                          </div>
                        </div>
                        <div className='aem-Grid aem-Grid--12 form--row'>
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                              <span className='shipping--information--edit__email'>{getFormShIn.Email}</span>
                              <span className='shipping--information--edit__phonenumber'>{getFormShIn.PhoneNumber}</span>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                              <span className='shipping--information--edit__name'>{getFormShIn.FirstName} {getFormShIn.LastName}</span>
                              <span className='shipping--information--edit__address'>{getFormShIn.StreetAddress} <br /> {getFormShIn.StreetAddress}</span>
                              <span className='shipping--information--edit__city'>{getFormShIn.City}</span>
                              <span className='shipping--information--edit__statezip'>{getFormShIn.State} - {getFormShIn.Zip}</span>
                            </div>
                        </div>     
                      </div>
                      <h4 className='shipping--information-heding'>2. Shipping Method</h4>
                      <div className='aem-Grid aem-Grid--12 form--row'>
                          <div className="aem-GridColumn aem-GridColumn--default--12 shipping--method">
                            <div className="form--group">
                                <input type="radio" className='standardShipping' id="standardShipping" name='standardShipping' value="Standard Shipping (4-8 business days via USPS) FREE" {...register("ShippingMethod", {required: "Required"
                                })} /> 
                                <label for="standardShipping"> Standard Shipping (4-8 business days via USPS) FREE</label>
                              </div>
                              <div className="form--group">
                                <input type="radio" className='standardShipping' id='expressDeliver' name='expressDeliver' value="Express Delivery ( 2-5 business days via USPS ) $17.95" {...register("ShippingMethod", {required: "Required"
                                })} /> 
                                <label for="expressDeliver">Express Delivery ( 2-5 business days via USPS ) $17.95</label>
                                </div>
                                <div className="form--group">
                                <input type="radio" className='standardShipping' id='nextDayDeliver' name='nextDayDeliver' value="Next Day Delivery (Next business days via FedEx) $53.61" {...register("ShippingMethod", {required: "Required"
                                })} /> 
                                <label for="nextDayDeliver"> Next Day Delivery (Next business days via FedEx) $53.61</label>
                                {errors.ShippingMethod && <p className="errorMsg">{errors.ShippingMethod.message}</p>}   
                            </div>
                          </div>
                        </div>


                      <div className='checkout--button'>
                        <input type='submit' className='transparent--button' value="CONTINUE TO PAYMENT" />     
                      </div>
                    </form>
                    <div className='method--rows'>
                      <span className='method--rows__title'>
                                    3. Payment Information
                      </span>
                    </div>
                </div>
                
                <PriceSummary /> 
                {/* Cart items Pricing details end*/}  
                </div>
                
            </div>    
    </>
    )
}

export default ShippingMethod;

