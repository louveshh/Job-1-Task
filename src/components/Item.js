import React from "react";
import "./Item.css";
import { useGlobalContext } from "./AppProvider";


const Item = ({ qty, id, image, product_name, product_options, price }) => {
  const { currency, increaseAmount, decreaseAmount, setAmount, removeItem } =
    useGlobalContext();
  const handleInput = (event) => {
    if (!isNaN(event.target.value) || event.target.value === "") {
      if (event.target.value === "") {
        event.target.value = "1";
        setAmount(id, 0);
      } else if (event.target.value > 10) {
        event.target.value = 10;
        setAmount(id, 10);
      } else if (event.target.value < 1) {
        event.target.value = 1;
        setAmount(id, 1);
      } else {
        setAmount(id, event.target.value);
      }
    } else {
      console.log(event.target.value);
    }
  };

  return (
    <div className="item">
      <div className="grid-container">
        <div className="grid-pic">
          <div className="image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="grid-info">
          <div className="info">
            <div className="justify">
              <h3>{product_name}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                onClick={(event) => {
                  event.preventDefault();
                  removeItem(id);
                }}
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            </div>

            {product_options.map((option) => {
              return (
                <p key={option.id}>
                  {option.name}: <span>{option.value}</span>
                </p>
              );
            })}
          </div>
        </div>
        <div className="grid-qty">
          <div className="qty-all">
            <span>Qty: </span>
            <div className="custom-qty">
              <div
                className="qty1"
                style={
                  qty > 1
                    ? { backgroundColor: "#5050BA" }
                    : { backgroundColor: "#B9B9ED" }
                }
                onClick={(event) => {
                  if (qty >= 2) {
                    event.preventDefault();
                    decreaseAmount(id);
                  }
                }}
              >
                <img src="https://img.icons8.com/material-outlined/16/ffffff/minus.png" />
              </div>
              <div className="qty2">
                <input required onChange={handleInput} value={qty ? qty : ""} />
              </div>
              <div
                className="qty3"
                style={
                  qty != 10
                    ? { backgroundColor: "#5050BA" }
                    : { backgroundColor: "#B9B9ED" }
                }
                onClick={(event) => {
                  if (qty < 10) {
                    event.preventDefault();
                    increaseAmount(id);
                  }
                }}
              >
                <img src="https://img.icons8.com/android/16/ffffff/plus.png" />
              </div>
            </div>
      
          </div>
          <div className="qty-price">
            <p className="p1">
              {price.old_price ? (
                <>
                  {currency}
                  {price.old_price.toFixed(2)}
                </>
              ) : (
                <br />
              )}
            </p>

            <p className="p2">
              {currency}
              {price.current_price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
