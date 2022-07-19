import React from 'react';
import { useState, useEffect } from "react";
import './ShippingInformation.scss';
// import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { setShippingInformation} from '../../reducers/form';
// import {setShippingMethod } from '../../reducers/form';

import { useNavigate } from "react-router-dom";
import PriceSummary from './PriceSummary';

function ShippingInformation() {
    const { register, handleSubmit, setValue, formState: { errors }} = useForm();
    // const [count, setCount] = useState(0);
    // const cartItems = useSelector(state => state.products.cart);
    const getFormShIn = useSelector(state => state.form.shippingInformation);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
      dispatch(setShippingInformation(data));
        console.log(data);
        navigate('/ShippingMethod')
      };
      useEffect(() => {
        setValue("Email", getFormShIn.Email); 
        setValue("PhoneNumber", getFormShIn.PhoneNumber); 
        setValue("Country", getFormShIn.Country); 
        setValue("FirstName", getFormShIn.FirstName); 
        setValue("LastName", getFormShIn.LastName); 
        setValue("StreetAddress", getFormShIn.StreetAddress); 
        setValue("StreetAddress2", getFormShIn.StreetAddress2); 
        setValue("City", getFormShIn.City); 
        setValue("State", getFormShIn.State); 
        setValue("Zip", getFormShIn.Zip); 
    }, []);

    return (
    <>
    <div className="inner-container shipping--information">
            <h1 className="checkout--heading">Checkout</h1>
            <div className='aem-Grid aem-Grid--12' aria-label="Add Cart Details">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                <form onSubmit={handleSubmit(onSubmit)}>
                      <h2 className="guest--checkout">Guest Checkout</h2>
                      <h4 className='contact--information'>Contact information</h4>
                      <span className='contact--information-subtitle'>We’ll use these details to keep you informed on your delivery.</span>
                          
                      <div className='aem-Grid aem-Grid--12 form--row'>
                          <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <div className="form--group margin--mobile">
                                <label> Email</label>
                                <input placeholder='abc@xyz.com'
                                name="Email" type="text" {...register("Email", {required: "Required",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: 'Email is not valid.'
                                }
                                })}
                                />
                                {errors.Email && <p className="errorMsg">{errors.Email.message}</p>}   
                            </div>
                          </div>
                          <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <div className="form--group ">
                                <label> Phone Number</label>
                                <input placeholder='(222)222-2222'
                                name="PhoneNumber" type="number" {...register("PhoneNumber", {required: "Required"
                                
                                })}
                                />
                                {errors.PhoneNumber && <p className="errorMsg">{errors.PhoneNumber.message}</p>}   
                            </div>
                          </div>
                      </div>  

                      <h4 className='shipping--information-heding'>1. Shipping information</h4>
                      <div className='aem-Grid aem-Grid--12 form--row'>
                          <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <div className="form--group ">
                                <label> Country</label>
                                <select
                                name="Country" {...register("Country", {required: "Required"
                                })}
                                >
                                <option value="United Sates">India</option>
                                <option value="UK">Austrslia</option>
                                <option value="Newziland">Dubai</option>
                                <option value="England">South Afrika</option>
                                </select>
                                {errors.Country && <p className="errorMsg">{errors.PhoneNumber.message}</p>}   
                            </div>
                          </div>
                        </div>

                        <div className='aem-Grid aem-Grid--12 form--row'>
                          <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <div className="form--group margin--mobile">
                                <label> First Name</label>
                                <input 
                                name="FirstName" type="text" {...register("FirstName", {required: "Required",
                               
                                })}
                                />
                                {errors.FirstName && <p className="errorMsg">{errors.FirstName.message}</p>}   
                            </div>
                          </div>
                          <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <div className="form--group ">
                                <label> Last Name</label>
                                <input
                                name="LastName" type="text" {...register("LastName", {required: "Required",
                                
                                })}
                                />
                                {errors.LastName && <p className="errorMsg">{errors.LastName.message}</p>}   
                            </div>
                          </div>
                      </div>

                      <div className='aem-Grid aem-Grid--12 form--row'>
                          <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <div className="form--group margin--mobile">
                                <label> Street Address</label>
                                <input 
                                name="StreetAddress" type="text" {...register("StreetAddress", {required: "Required",
                                
                                })}
                                />
                                {errors.StreetAddress && <p className="errorMsg">{errors.StreetAddress.message}</p>}   
                            </div>
                          </div>
                          <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <div className="form--group ">
                                <label> Street Address 2</label>
                                <input 
                                name="StreetAddress2" type="text" {...register("StreetAddress2", {required: "Required",
                                
                                })}
                                />
                                {errors.StreetAddress2 && <p className="errorMsg">{errors.StreetAddress2.message}</p>}   
                            </div>
                          </div>
                      </div>

                      <div className='aem-Grid aem-Grid--12 form--row'>
                          <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <div className="form--group margin--mobile">
                                <label> City</label>
                                <input 
                                name="City" type="text" {...register("City", {required: "Required",
                                
                                })}
                                />
                                {errors.City && <p className="errorMsg">{errors.City.message}</p>}   
                            </div>
                          </div>
                          <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                           <div className='aem-Grid aem-Grid--12'>
                            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                              <div className="form--group ">
                                  <label> State</label>
                                  <select 
                                  name="State" type="text" {...register("State", {required: "Required",
                                  
                                  })}>
                                    <option value="California">Maharastra</option>
                                    <option value="Uk">Gujrat</option>
                                    <option value="England">Madhya Pradesh</option>
                                    </select>
                                  {errors.State && <p className="errorMsg">{errors.State.message}</p>}   
                              </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--5 margin--top--mobile">
                              <div className="form--group ">
                                    <label> ZIP</label>
                                    <input 
                                    name="Zip" type="number" {...register("Zip", {required: "Required",
                                    
                                    })}
                                    />
                                    {errors.Zip && <p className="errorMsg">{errors.Zip.message}</p>}   
                                </div>
                            </div>
                           </div>         
                          </div>
                      </div>  

                      <div className='checkout--button'>
                        <input type='submit' className='transparent--button' value="CONTINUE TO SHIPPING METHOD" />          
                                   
                      </div>
                    </form>

                    <div className='method--rows'>
                      <span className='method--rows__title'>
                                    2. Shipping Method
                      </span>
                      <span className='method--rows__title'>
                                    3. Payment Information
                      </span>
                    </div>
                </div>
                <PriceSummary /> 
                </div>
                
            </div>    
    </>
    )
}

export default ShippingInformation;

