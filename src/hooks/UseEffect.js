import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    
    useEffect(() =>{
        console.log("Hello") 
    })
  return (
    <div>
      <h1>{count}</h1>
      <button className='btn'onClick={}>Click</button>
    </div> 
  )
}

export default UseEffect
