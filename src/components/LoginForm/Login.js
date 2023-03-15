import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [entry, setEntry] = useState([])
  const submitForm = (e)=>{
    e.prevent
    const newEntry = {email:email, password:password}

  }

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Email</label>
          <input
            type="text"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {
          entry.map((curElem) =>{
            return(
              <div>
                <p>{curElem.email}</p>
                <p>{curElem.password}</p>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default Login;
