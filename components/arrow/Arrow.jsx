import React from "react";
import "./prompt.css"

const Arrow = ({ onClick, isSet1Visible }) => {
  return (
    <div className="arrow-container">
      <div className="arrow" onClick={onClick}>
        {isSet1Visible ? "\u25B6" : "\u25C0"}
      </div>
    </div>
  );
};

export default Arrow;
