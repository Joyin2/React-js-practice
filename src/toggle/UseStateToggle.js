import React, {useState} from 'react'


const UseStateToggle = () => {
  
    const [myName, setMyName] = useState("click below button to change me dynamically");
    const changeName = () =>{
        let val = myName;
        if(val==="click below button to change me dynamically"){
            setMyName("changed bruhhh...")
        }else{
            setMyName("click below button to change me dynamically")
        }
      
    }
    return (
      <div>
        <h1>{myName}</h1>
        <button className="btn" onClick={changeName}>Click me to toggle bruhh...</button>
      </div>
    )
  
}

export default UseStateToggle
