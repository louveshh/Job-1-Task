import React from "react";
import "./Background.css";
import { useGlobalContext } from "./AppProvider";

const Background = () => {
  const { switchCart, hideCart } = useGlobalContext();

  return (
    <div>
      <button className="slider-button" onClick={switchCart}>
        KOSZYK
      </button>
      <div className="filler" onClick={hideCart}></div>
    </div>
  );
};

export default Background;
