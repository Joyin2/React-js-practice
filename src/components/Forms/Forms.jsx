import React, { useState } from "react";
import "./Forms.scss";

const Forms = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const inputEvent = (event) => {
    // console.log(event.target.value)
    setName(event.target.value);
  };
  const onSubmit = () => {
    setFullName(name);
  };
  return (
    <div className="Forms">
      <h1>Hello {fullName}</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="enter your name"
        onChange={inputEvent}
        value={name}
      />
      <button onClick={onSubmit}>Click</button>
    </div>
  );
};

export default Forms;
