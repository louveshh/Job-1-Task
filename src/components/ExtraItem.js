import React from "react";
import "./ExtraItem.css";
import { useGlobalContext } from "./AppProvider";

const ExtraItem = ({ title, image, price, hasMargin }) => {
  const { currency } = useGlobalContext();
  return (
    <>
      <div
        className="single-element"
        style={hasMargin ? { marginLeft: "30px" } : {}}
      >
        {title ? (
          <>
            <div className="image-container">
              <img src={image} alt="" />
            </div>
            <div className="mobile">
              <div className="desc">{title}</div>
              <div className="bottom">
                <div className="bottom-items">
                  <p>
                    {currency}
                    {price.toFixed(2)}
                  </p>
                  <button>Add</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </>
  );
};

export default ExtraItem;
