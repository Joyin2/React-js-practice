import React, { useState } from 'react'

const State = () => {
    const [first, setfirst] = useState(1);
    const update =()=>{
        setfirst(first + 1)
    }
  return (
    <div>
        {first}

        <button onClick={update}>Click</button>
    </div>
  )
}

export default State