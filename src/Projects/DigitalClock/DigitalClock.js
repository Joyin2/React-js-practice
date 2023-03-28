import React, { useState } from "react";
import "./DigitalClock.scss";

const DigitalClock = () => {
  let Time = new Date().toLocaleTimeString()
  const [ctime, setCtime] = useState(Time)
  const updateTime = ()=>{
    Time = new Date().toLocaleTimeString();
    setCtime(Time)
  }
  setInterval(updateTime, 1000)

  return (
    <>
    <h1 className="d-c-h1">{ctime}</h1>
    </>
  )
};

export default DigitalClock;
