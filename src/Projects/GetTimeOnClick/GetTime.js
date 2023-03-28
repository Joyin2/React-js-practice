import React, { useState } from "react";
import "./GetTime.scss";

const GetTime = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime)
  const updateTime = ()=>{
    let newCTime = new Date().toLocaleTimeString()
    setCtime(newCTime)
  }
  
  return (
    <div className="GetTime">
      <h1>{ctime}</h1>
      <button className="g-button" onClick={updateTime} >Get Time</button>
    </div>
  );
};

export default GetTime;
