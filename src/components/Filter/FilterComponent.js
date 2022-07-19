import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './FilterComponent.scss';
import { useNavigate } from "react-router-dom";
import { setCartElectronics, setCartJewellery, setCartWomen, setProducts } from "../../reducers/products";
import { setCartMen } from "../../reducers/products";

function FilterComponent() {
  const productsMain = useSelector(store => store.products.datas);
  const products = useSelector(store => store.products.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jewelleryItems = useSelector(store => store.products.jewellery);
  const menItems = useSelector(store => store.products.men);
  const womenItems = useSelector(store => store.products.women);
  const electronicItems = useSelector(store => store.products.electronics);
  const allChecksVals = useSelector(store => store.products.jewellery)
    let url = "";

 /* const jewelleryCheckbox = () =>{
  dispatch(setProducts(jewelleryItems));
  navigate('/Products/Jewellery');
} */

useEffect(() => {
  

     }, []);


    const checkedResults =[...allChecksVals];
    const cartCheckbox = (e) => {
        var s = e.target.value;
        if (e.target.checked) {
          checkedResults.concat(s);
             checkedResults.push(s);          
        } else {
            var index = checkedResults.indexOf(s);
            if (index > -1) {
              checkedResults.splice(index, 1);
            } 
            if(checkedResults.length == 0){
              dispatch(setProducts(productsMain));
            }
        }
        let totalVals=[];
       /* checkedResults.forEach(val => {
                    if(val == 'womenItems'){
                      let result = productsMain.filter(x => 
                          x.category == "women's clothing"
                        );
                        Array.prototype.push.apply(totalVals, result);
              } else if(val == 'menItems'){
                  let result = productsMain.filter(x => 
                      x.category == "men's clothing"
                  );
                  Array.prototype.push.apply(totalVals, result);
              } else if(val == 'jewelleryItems'){
                  let result = productsMain.filter(x => 
                      x.category == "jewelery"
                  );
                  Array.prototype.push.apply(totalVals, result);
              } else if(val == 'electronicItems'){
                  let result = productsMain.filter(x => 
                      x.category == "electronics"
                  );
                  Array.prototype.push.apply(totalVals, result);
              }
        }); */
        var a = checkedResults;
        for(let i=0; i < a.length; i++){
                    if(a[i] == 'womenItems'){
                      let result = productsMain.filter(x => 
                          x.category == "women's clothing"
                        );
                        Array.prototype.push.apply(totalVals, result);
              } else if(a[i] == 'menItems'){
                  let result = productsMain.filter(x => 
                      x.category == "men's clothing"
                  );
                  Array.prototype.push.apply(totalVals, result);
              } else if(a[i] == 'jewelleryItems'){
                  let result = productsMain.filter(x => 
                      x.category == "jewelery"
                  );
                  Array.prototype.push.apply(totalVals, result);
              } else if(a[i] == 'electronicItems'){
                  let result = productsMain.filter(x => 
                      x.category == "electronics"
                  );
                  Array.prototype.push.apply(totalVals, result);
              } 

              if(a.length - 1 === i) {
                
                dispatch(setCartJewellery(checkedResults));
                dispatch(setProducts(totalVals));
              }
        }
        
    }
  

    return (
    <>  
        {/* Page Navigation section */} 
        <nav className="crumbs">
            <Link to="/" aria-label='Clothing url'>Clothing</Link> /
            <Link to="/" aria-label='Womens url'>Women's</Link> /
            <Link to="/" aria-label='Outerwear url'>Outerwear</Link>    
        </nav>

         {/* filters section start */}   
        <div className="filters">
             <div className="filters-mobile">
                    <div className='filter-title'>
                        Filters
                    </div>
                     
                </div> 
                <div className='filter-title filters-desktop'>Filters</div>

             {/* Brands section start */}   
            <fieldset>
                <div className='filter-sub-title'>Category</div>
                    <div role="group">
                      <label>  
                          <input type="checkbox" onChange={cartCheckbox}  value="jewelleryItems" className="checkbox-field" />
                          Jewellery
                      </label>
                    </div>
                    <div role="group">
                      <label>  
                          <input type="checkbox" onChange={cartCheckbox}  value="electronicItems" className="checkbox-field" />
                          Electronics
                        </label>
                    </div>
                    <div role="group">
                        <label>  
                          <input type="checkbox" onChange={cartCheckbox} value="menItems" className="checkbox-field" />
                          Men's Clothing
                        </label>
                    </div>
                    <div role="group">
                      <label>  
                          <input type="checkbox" onChange={cartCheckbox} value="womenItems" className="checkbox-field" />
                          Women's Clothing
                        </label>
                    </div>
                 </fieldset>   
        </div>
        {/* filters section end */}
    </>
    )
}

export default FilterComponent


