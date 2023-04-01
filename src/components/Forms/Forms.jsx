import React, { useState } from "react";
import "./Forms.scss";

const Forms = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const inputEvent = (event) => {
    // console.log(event.target.value)
    setName(event.target.value);
  };
  const formSubmit = (event) => {
    setFullName(name);
    event.preventDefault()
  };

  return (
    <div className="Forms">
      <form action="" onSubmit={formSubmit}>
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="enter your name"
          onChange={inputEvent}
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
