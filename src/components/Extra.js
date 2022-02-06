import React from "react";
import "./Extra.css";

import { useGlobalContext } from "./AppProvider";
import ExtraItem from "./ExtraItem";

const Extra = () => {
  const { extra } = useGlobalContext();
  return (
    <div className="extra-back">
      <div className="title">
        <span>Recommended Products:</span>
      </div>
      <div className="extra">
        <ExtraItem className="element1" {...extra[0]} hasMargin={true} />
        <ExtraItem className="element2" {...extra[1]} />
      </div>
    </div>
  );
};

export default Extra;
