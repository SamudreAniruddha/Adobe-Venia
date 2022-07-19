import React from 'react'
import './ProductsBannerComponent.scss'

function ProductsBannerComponent() {
    let url = "";
    return (
        <>
        <section>
        <div className="products--banner">
            <div className="aem-Grid aem-Grid--12">

                {/* womens Text box start for desktop */}
                <div className="aem-GridColumn aem-GridColumn--default--4 desktop-view" aria-label="Banner Description">
                    <span className='products--banner__text'>
                        <h4>Men's <br />Outerwear</h4>
                    </span>
                </div>
                {/* womens Text box end */}

                {/* Banner Image Start */}
                    <div className="aem-GridColumn aem-GridColumn--default--8 desktop-view">
                        <span className="products--banner__image" tabIndex={0}>
                            <img src={require('../../assets/images/banner.jpg')} alt='Banner Image' tabIndex={0} />
                        </span>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--12 mobile-view">
                        <span className="products--banner__image" tabIndex={0}>
                            <img src={require('../../assets/images/banner.jpg')} alt='Banner Image' tabIndex={0} />
                        </span>
                    </div>
                {/* Banner Image End*/}

                {/* womens Text box start for mobile */}
                <div className="aem-GridColumn  aem-GridColumn--phone--12 mobile-view">
                    <span className='products--banner__text'>
                        <h4>Women's <br />Outerwear</h4>
                    </span>
                </div>
                {/* womens Text box end */}

                </div>
            </div>  
            </section>          
        </>
    )
}

export default ProductsBannerComponent
