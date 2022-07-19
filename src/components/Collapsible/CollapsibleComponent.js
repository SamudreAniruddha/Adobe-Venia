import React from "react";
import "./CollapsibleComponent.scss";
import {useState, useEffect} from "react";


function CollapsibleComponent({children, label}) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className='product--estimation__toggle' onClick={() => setIsOpen(!isOpen)}>
     <span className="product--estimation__left">{label}
       </span>
          <span className="product--estimation__right">
                                        Shipping to 91001
            <span className={isOpen ? 'product--estimation__uparrow' : 'product--estimation__downarrow'}>
            </span>
            </span>
   </div>
    <div className={isOpen ? 'product--estimation__content product--estimation__show' : 'product--estimation__content'}>{children}</div>
   </>
  )
}

export default CollapsibleComponent