import React from 'react'
import "./index.css"

const index = () => {
    const currentDate = new Date().toLocaleDateString()
    const currentTime = new Date().toLocaleTimeString()
  return (
    <>
      <h1>Hello, find time and date</h1>
      <h2 className="date">Current Date is : {currentDate}</h2>
      <h2 className="time">Current Time is : {currentTime} </h2>
    
    </>
  )
}

export default index
