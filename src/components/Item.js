import React from "react";
import "./Item.css";
const Item = (param) => {
  return <div className="item">{param.product_name}</div>;
};

export default Item;
