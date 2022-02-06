import React from "react";
import Item from "./Item";
import "./SideBar.css";
import Summary from "./Summary";
import TopCounter from "./TopCounter";
import { useGlobalContext } from "./AppProvider";
import Extra from "./Extra";
const SideBar = (props) => {
  const { cart } = useGlobalContext();

  return (
    <div className="side-bar">
      <TopCounter />

      <form onSubmit={() => {}}>
        <div className="back">
          {cart.map((item, index) => {
            return (
              <div key={item.id}>
                <Item {...item} />
                {/* {cart.length === index + 1 ? (
                  <div className="fix-summary"></div>
                ) : null} */}
              </div>
            );
          })}
          <Extra />
        </div>

        <Summary />
      </form>
    </div>
  );
};

export default SideBar;
