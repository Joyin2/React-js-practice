import React from 'react'
import "./index.css"

const index = () => {
    let name = prompt("Enter your name");
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = ""
    if(curDate>=1 && curDate<12){
        greeting = "Good Morning"
    }else if(curDate>=12 && curDate<19){
        greeting = "Good Afternoon"
    }else{
        greeting = "Good Night"
    }

  return (
    <div>
      <h1>Hello {name}, {greeting}</h1>
    </div>
  )
}

export default index
