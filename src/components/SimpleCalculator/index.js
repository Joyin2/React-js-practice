import React from "react";
import "./index.css"

const index = () => {
  function add(a, b) {
    return a + b;
  }
  return (
    <div className="app">
      <h1>The sum of two number is {add(40, 40)}</h1>
    </div>
  );
};

export default index;
