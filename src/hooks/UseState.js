import React, { useState } from 'react'

const UseState = () => {
    const [myName, setMyName] = useState("click below button to change me dynamically");
    const changeName = ()=>{
      setMyName("changed bruhhh...")
    }
    return (
      <div>
        <h1>{myName}</h1>
        <button className="btn" onClick={changeName}>Click me bruhh...</button>
      </div>
    )
}

export default UseState
