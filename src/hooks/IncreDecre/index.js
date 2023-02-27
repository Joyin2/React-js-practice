import React, { useState } from 'react'

const Index = () => {
    const [num, setNum] = useState(0);
    const IncNum = () => {
        return setNum(num + 1)
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={IncNum}>Click me</button>
    </div>
  )
}

export default Index
