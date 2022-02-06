import React from "react";
import "./Background.css";
import { useGlobalContext } from "./AppProvider";

const Background = () => {
  const { hide, switchCart, hideCart } = useGlobalContext();

  return (
    <div>
      {!hide ? (
        <button className="slider-button" onClick={switchCart}>
          Open Cart
        </button>
      ) : null}
      <div className="filler" onClick={hideCart}></div>
    </div>
  );
};

export default Background;
