import React, { useState, useEffect } from "react";
import Axios from "axios";
import FilterComponent from '../Filter/FilterComponent';
import LoaderComponent from "../Loader/LoaderComponent";
import FiltersIcon from '../../assets/svg/filters.svg';
import ArrowUpIcon from '../../assets/svg/arrow-up.svg';
import ArrowDownIcon from '../../assets/svg/arrow-down.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import './ProductsComponent.scss';
import './PaginationComponent.scss';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"

import Pagination from "react-js-pagination";
import { setProducts, setWishlist } from "../../reducers/products";
import { setMainProducts } from "../../reducers/products";
import { useDispatch, useSelector } from "react-redux";

function ProductsComponent() {
   // const [inData1, setHideLightbox1] = useState();
const productsMain = useSelector(store => store.products.datas);
   const [dropdownValue, setDropdownValue] = useState([]);
   const [sortAllProducts, setSortAllProducts] = useState(false);
   const [changeHeartIcon, setChangeHeartIcon] = useState(false);
    const [hideLightbox, setHideLightbox] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
     const dispatch = useDispatch();
     const products = useSelector(store => store.products.data);
     const location = useLocation();
    /* useEffect(() => {
      if(products.length == 0){
       Axios.get('https://fakestoreapi.com/products').then(res => {
               const data = res.data;
               dispatch(setProducts(data));  
               dispatch(setMainProducts(data));   
             })
           }
         }, []); */
    
  /* useEffect(() => {
    Axios.get('https://fakestoreapi.com/products').then(res => {
        var data1 = res.data;
    }); 
        var data1 = products;
        const x = window.location.href;
        const lastPathValue = x.substring(x.lastIndexOf('/') + 1)
        if(lastPathValue == 'Women'){
                const result = data1.filter(x => 
                     x.category == "women's clothing"
                  );
            dispatch(setProducts(result));
        } else if(lastPathValue == 'Men'){
            const result = data1.filter(x => 
                x.category == "men's clothing"
             );
            dispatch(setProducts(result));
        } else if(lastPathValue == 'Jewellery'){
            const result = data1.filter(x => 
                x.category == "jewelery"
             );
            dispatch(setProducts(result));
        } else if(lastPathValue == 'Electronics'){
            const result = data1.filter(x => 
                x.category == "electronics"
             );
            dispatch(setProducts(result));
        } else {
              const inData = data1?.sort((a, b) => (a.price > b.price ? 1 : -1));
              dispatch(setProducts(inData));
        }
    
  
}, [dispatch]); */
  

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const dropdownChange = (e) => {
        var x = e.target.value;
        if(x == "low"){
            var inData = products?.sort((a, b) => (a.price > b.price ? 1 : -1));
            setDropdownValue(x);
            dispatch(setProducts(inData));  
        } else {
            var inData = products?.sort((a, b) => (a.price > b.price ? -1 : 1));
            setDropdownValue(x);
            dispatch(setProducts(inData)); 
        }
      }
    const sortProducts = (value) => {
        var x = value;
        if(x == "low"){
            var inData = products?.sort((a, b) => (a.price > b.price ? 1 : -1));
            setDropdownValue(x);
            dispatch(setProducts(inData));  
        } else {
            var inData = products?.sort((a, b) => (a.price > b.price ? -1 : 1));
            setDropdownValue(x);
            dispatch(setProducts(inData)); 
        }
    }  

      const HeartIconEvent = (e) =>{
            const x = e.target.id;
            if(e.target.className == "products--box__product__heart--icon"){
                e.target.className = 'products--box__product__heart--icon--red'
            } else {
                e.target.className = 'products--box__product__heart--icon'
            }
            // setChangeHeartIcon(x);
            const whishItem  = productsMain.filter(xv => 
                xv.id == x
             );
         dispatch(setWishlist(whishItem)); 
      }

    //pagination 
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    let url = "";
    
    return (
      products.length ?
      <div className='inner-container'>
        <div className='products aem-Grid aem-Grid--12' aria-label="Cloth Products">
        
         {/* Left Filters section start */}
         <div className={`${hideLightbox ? "products__show--lightbox" : "products__hide--lightbox"}`}>
            <span className='products__cross--mobile' onClick={() => setHideLightbox(false)}> X </span>
            <div className="products__filters aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 min768px">
              <aside>
                <FilterComponent />
               </aside>  
            </div> 
          </div>
          <div className="products__filters aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 min768px">
            <aside> 
             <FilterComponent />
            </aside> 
          </div> 
          
        {/* Left Filters section end */}
     
        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 min768pxx">
         
         {/* Filter resultsand sort products for mobile view */}   
            <div className='filters--sort mobile--view'>
                <span className='filters--sort__results' onClick={() => setHideLightbox(true)}>
                   <img src={FiltersIcon} alt="Filters icon" />
                    Filter Results
                </span>
                <span className='filters--sort__products'>
                    <img src={ArrowDownIcon}  onClick={()=>sortProducts('low')} alt="Sort Products icon" />
                    <img src={ArrowUpIcon}  onClick={()=>sortProducts('high')} alt="Sort Products icon" />
                    Sort Products
                </span>
            </div>
            {/* Filter resultsand sort products for mobile view end*/}  

             {/* products length and sort dropdown start*/}  
            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                <div className='aem-Grid aem-Grid--12'>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <span className='dark--gunmental semi-bold'> {products.length} Results</span>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--hide">
                       <select onChange={(e) => dropdownChange(e)}>
                            <option value="low">Sort By Price: Low to High</option>
                            <option value="high">Sort By Price: High to Low</option>
                        </select>
                    </div>
                 </div>   
             </div>  
              {/* products length and sort dropdown end*/}  

             {/* products List start*/}  
             <section>
                <div className='products--box'>
                        {currentPosts.map((product) => (     
                           
                            <article  key={product.id}> 
                                <div className='products--box__product'>
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.image} alt={product.title} /> 
                                    <span className='products--box__product__name'>{product.title}</span>
                                    <span className='products--box__product__price'>${product.price}</span>
                                </Link> 
                                 <div onClick={HeartIconEvent} id={product.id}  className="products--box__product__heart--icon"></div>
                                
                                </div>
                            </article>
                        ))} 
                </div>
             </section>
             {/* products List end*/}   

            {/* Pagination start*/}          
             <div className="pagination-background">
                <Pagination
                itemsCountPerPage={postsPerPage}
                activePage={currentPage}
                totalItemsCount={products.length}
                onChange={handlePageChange}
                hideFirstLastPages={true}
                itemClass="page-item"
                linkClass="page-link"
                />
            </div>   {/* Pagination end*/}      
        </div>   
      </div>
    </div>
    :  <div className='container'><LoaderComponent /></div>
    )
}

export default ProductsComponent