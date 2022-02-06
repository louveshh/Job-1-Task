import React from "react";
import "./Summary.css";
import { useGlobalContext } from "./AppProvider";

const Summary = () => {
  const { currency, shipping, total } = useGlobalContext();
  return (
    <div className="summary">
      <div className="checkout">
        <p className="d1">Shipping</p>
        <p className="d1">
          {currency}
          {shipping.toFixed(2)}
        </p>
      </div>

      <div className="checkout">
        <p className="d2">Order Total:</p>
        <p className="d2">
          {currency}
          {total.toFixed(2)}
        </p>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default Summary;
