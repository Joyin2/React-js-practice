import React from 'react'
import UseState from './hooks/UseState'
import UseStateToggle from './toggle/UseStateToggle'
import UseStateArray from "./hooks/UseStateArray"
import "./App.css"


const App = () => {

  return (
    <div className='App'>
      {/* <UseState/> */}
      {/* <UseStateToggle/> */}
      <UseStateArray/>
    </div>
  )
}

export default App
