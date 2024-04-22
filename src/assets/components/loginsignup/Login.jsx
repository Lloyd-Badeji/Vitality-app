import React, { useState } from 'react';
import "../loginsignup/Login.css"


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ username, password });      
  };

  return (
    <>
      <div className='border'>
        <h2 id='Head'>Login</h2>
       <form onSubmit={handleLogin} className='User'>
         <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
         />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" id='submit'>Login</button>
        </form>
      </div>
      
    </>
  );
};

export default Login;
