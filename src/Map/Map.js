import React from "react";

const Map = () => {
  const oldArr = ["joyin", "rohan", "karan"];
  // console.log(oldArr[0]);
  const newArr = oldArr.map((cvalue) => {
    return cvalue;
  });
  console.log(newArr);
  return <div></div>;
};

export default Map;
