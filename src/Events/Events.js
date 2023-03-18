import React, { useState } from "react";

const Events = () => {
  const purple = "#8e44ad"
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("Click Me")
  const bgChange = () => {
    let newBg = "#34495e"
    setBg(newBg)
    setName("single clicked")
  };
  const bgBack = () =>{
    setBg(purple)
    setName("double clicked")
  }
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
        <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
      </div>
    </>
  );
};

export default Events;
