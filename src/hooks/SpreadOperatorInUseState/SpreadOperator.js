import React,{useState} from 'react'

const SpreadOperator = () => {
  const [myObj, setMyObj] = useState({
    myName: "Joyin", age: "22"
  })
  const update = ()=>{
    // setMyObj({myName:"Joyin Mahmmad", age: "23"})
    setMyObj({ ...myObj, myName: "Joyin Mahmmad" });
  }
  return (
    <div>
      <h1>Name : {myObj.myName} , Age: {myObj.age} </h1>
      <button onClick={update}>Update</button>
    </div>
  )
}

export default SpreadOperator
