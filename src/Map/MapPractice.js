import React from 'react'

const MapPractice = () => {
    const students = [
        {
            name:"joyin",
            age: "22"
        },
        {
            name:"ravi",
            age: "23"
        },
        {

            name:"rohan",
            age: "24"
        }
    ]
   
  return (
    <div>
        {students.map((details)=>(
            <div>
                {details.name}
            </div>
        ))}
    </div>
  )
}

export default MapPractice