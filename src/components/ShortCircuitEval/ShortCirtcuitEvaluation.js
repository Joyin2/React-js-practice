import React, { useState } from 'react'

const ShortCirtcuitEvaluation = () => {
  const [demo, setDemo] = useState() //demo is empty
  return (
    <>
    <h1>
      { demo ||
        <>
        <h1>Hello bro</h1>
        <p>how are you</p>
        </>
      }
    </h1>
    </>
  )
}

export default ShortCirtcuitEvaluation
