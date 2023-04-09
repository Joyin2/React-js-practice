import React, { useState } from 'react'

const Incre = () => {
  const [number, setNumber] = useState(0)
  const IncNum = () =>{
    setNumber(number+1)
    
  }
  const DecNum = ()=>{
    
    if (number<=0) {
      return alert("zero limit reached")
    }else{
      setNumber(number - 1);
    }
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={IncNum} >Click to increase</button>
      <button onClick={DecNum} >Click to decrease</button>
    </>
  )
}

export default Incre
