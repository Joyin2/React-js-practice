import React, { useState } from "react";
import "./UseStateArray.css";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "Joyin",
      age: 22,
    },
    {
      id: 1,
      myName: "Mahmmad",
      age: 22,
    },
    {
      id: 2,
      myName: "Aslam",
      age: 22,
    },
  ];
  const [Array, setArray] = useState(bioData);
  const clearArray = () => {
    setArray([]);
  };

  return (
    <>
      {Array.map((curr) => {
        return (
          <h1 key={curr.id}>
            Name: {curr.myName}, Age: {curr.age}
          </h1>
        );
      })}
      <button onClick={clearArray}>Clear</button>
    </>
  );
};

export default UseStateArray;
