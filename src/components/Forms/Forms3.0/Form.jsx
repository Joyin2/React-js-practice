import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleInput = () => {};
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="username">Fullname</label>
          <input
            type="text"
            autoComplete="off"
            value=""
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            autoComplete="off"
            value=""
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            autoComplete="off"
            value=""
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            autoComplete="off"
            value=""
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Form;
