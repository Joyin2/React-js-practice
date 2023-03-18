import React, {useState} from 'react'

const Form = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("")
  const InputEvent = (e) => {
    setName(e.target.value)
  };
  const onSubmit = ()=> {
    setFullName(name)
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "purple",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow:"hidden",
            color:"white"
          }}
        >
          <h1>Hello, {fullName} </h1>
          <div style={{ overflow: "hidden" }}>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={InputEvent}
              value={name}
              style={{ overflow: "hidden" }}
            />
          </div>
          <button type="submit" onClick={onSubmit}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Form
