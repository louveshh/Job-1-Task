import React from "react";
import Item from "./Item";
import "./SideBar.css";
import Summary from "./Summary";
import TopCounter from "./TopCounter";
import Data from "../data/Data.json";
const SideBar = (param) => {
  return (
    <div className="side-bar">
      <TopCounter handleSlider={param.handleSlider} />

      {Data.items.map((item) => {
        console.log(item.product_name);

        return <Item key={item.id} {...item} />;
      })}

      <Summary />
    </div>
  );
};

export default SideBar;
