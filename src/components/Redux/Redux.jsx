import React from "react";
import "./Redux.scss"

const Redux = () => {
  return (
    <div>
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div className="quantity">
        <a className="minus" title="Decrement">
          <span>-</span>
        </a>
        <input type="text" name="quantity" value="0" />
        <a className="plus" title="Increment">
          <span>+</span>
        </a>
      </div>
    </div>
  );
};

export default Redux;
