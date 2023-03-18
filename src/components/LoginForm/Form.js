import React from 'react'

const Login = () => {
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" autoComplete='off' value=""/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value="" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login
