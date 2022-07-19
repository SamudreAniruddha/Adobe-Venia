import React from "react";

function ProductsComponent() {

    return (
        <div style={{ textAlign: 'center' }}>     {/* Loader image*/}  
            <img src={require('../../assets/images/loader.gif')} width={200} alt="Loading..." />
        </div>

    )
}

export default ProductsComponent