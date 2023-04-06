import React, { useState } from "react";
import "./Forms.scss";

const Forms = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [lastName, setLastName] = useState();
  const [lastNameFull, setLastNameFull] = useState();
  const inputEvent = (event) => {
    // console.log(event.target.value)
    setName(event.target.value);
  };
  const formSubmit = (event) => {
    setFullName(name);
    event.preventDefault();
    setLastNameFull(lastName);
  };
  const inputEventTwo = (event) => {
    // console.log(event.target.value)
    setLastName(event.target.value);
  };

  return (
    <div className="Forms2">
      <form action="" onSubmit={formSubmit}>
        <h1>
          Hello {fullName} {lastNameFull}
        </h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="enter your name"
          onChange={inputEvent}
          value={name}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="last name"
          onChange={inputEventTwo}
          value={lastName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
