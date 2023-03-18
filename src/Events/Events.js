import React, { useState } from "react";

const Events = () => {
  const purple = "#8e44ad"
  const [bg, setBg] = useState(purple);
  const bgChange = () => {
    let newBg = "#34495e"
    setBg(newBg)
  };
  return (
    <>
      <div
        style={{
          background: bg,
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={bgChange}>Click me</button>
      </div>
    </>
  );
};

export default Events;
