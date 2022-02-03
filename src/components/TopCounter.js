import React from "react";
import "./TopCounter.css";
const TopCounter = (param) => {
  return (
    <div className="top-counter">
      TOP
      <button
        className="slider-button-top"
        onClick={() => {
          param.handleSlider();
        }}
      >
        X
      </button>
    </div>
  );
};

export default TopCounter;
