import React, { useState } from "react";
import './ReadMoreComponent.scss';



const ReadMoreComponent = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text} &nbsp;
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "Read more" : " Show less"}
        </span>
      </p>
    );
  };

  export default ReadMoreComponent
  