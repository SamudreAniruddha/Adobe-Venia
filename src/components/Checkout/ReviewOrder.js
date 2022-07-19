import React from 'react';
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { setPaymentInformation } from '../../reducers/form';
import { useNavigate } from "react-router-dom";
import EditIcon from '../../assets/svg/edit.svg';
import PriceSummary from './PriceSummary';
import OrderItems from './OrderItems';

function ReviewOrder() {
    const { register, handleSubmit, setValue, formState: { errors }} = useForm();
    const [count, setCount] = useState(0);
    const cartItems = useSelector(state => state.products.cart);
    const getFormShIn = useSelector(state => state.form.shippingInformation);
    const getFormShMe = useSelector(state => state.form.shippingMethod);
    const getFormPayIn = useSelector(state => state.form.paymentInformation);
    const navigate = useNavigate();

    const ShippingInformationEdit = () =>{
      navigate('/ShippingInformation');
    } 
    const ShippingMethodEdit = () =>{
        navigate('/ShippingMethod');
      }
      const PaymentInformationEdit = () =>{
        navigate('/PaymentInformation');
      } 
      const onSubmit = (data) => {
        navigate('/SuccessfullPage');
          console.log(data);
        };      

    return (
    <>
    <div className="inner-container shipping--information shipping--method--page payment-method review-order">
            <h1 className="checkout--heading">Checkout</h1>
            <div className='aem-Grid aem-Grid--12' aria-label="Add Cart Details">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                <form onSubmit={handleSubmit(onSubmit)}>
                      <h2 className="guest--checkout">Guest Checkout</h2>
                      
                      <div className="shipping--information--edit">
                        <div className='aem-Grid aem-Grid--12 form--row'>
                          <h4 className='shipping--information--edit_heading'>Shipping Information</h4>
                          <div className="edit" onClick={ShippingInformationEdit}>
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

                      <div className="shipping--information--edit shipping--Method--edit">
                        <div className='aem-Grid aem-Grid--12 form--row'>
                          <h4 className='shipping--information--edit_heading'>Shipping Method</h4>
                          <div className="edit" onClick={ShippingMethodEdit}>
                               <img src={EditIcon} className="edit--icon" alt="Edit Icon" />
                               <span className="edit--title" role="Edit Cart Item">Edit</span>
                          </div>
                        </div>
                        <div className='aem-Grid aem-Grid--12 form--row'>
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                              <span className='shipping--Method--edit__standarshipping'>{getFormShMe.ShippingMethod}</span>
                            </div>
                        </div>     
                      </div>

                      <div className="shipping--information--edit payment--method--edit shipping--Method--edit">
                        <div className='aem-Grid aem-Grid--12 form--row'>
                          <h4 className='shipping--information--edit_heading'>Payment Information</h4>
                          <div className="edit" onClick={PaymentInformationEdit}>
                               <img src={EditIcon} className="edit--icon" alt="Edit Icon" />
                               <span className="edit--title" role="Edit Cart Item">Edit</span>
                          </div>
                        </div>
                        <div className='aem-Grid aem-Grid--12 form--row'>
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                              <span className='shipping--Method--edit__standarshipping'>{getFormPayIn.creditCard}</span>
                              <span className='shipping--Method--edit__standarshipping'>Visa ending in {getFormPayIn.CreditCardNumber}</span>
                            </div>
                        </div>     
                      </div>

                              {/* Added Cart items list start*/} 
                        <OrderItems />
                        {/* Added Cart items list end*/}
                      
                     
                      <div className='checkout--button'>
                        <input type='submit' className='blue--button' value="PLACE ORDER" /> 
                        <p className='terms--conditions'>By clicking confirm order you agree to our Terms and Conditions</p>         
                      </div>
                    </form>

                </div>
                
                <PriceSummary />
                {/* Cart items Pricing details end*/}  
                </div>
            </div>    
    </>
    )
}

export default ReviewOrder;

