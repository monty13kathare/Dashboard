import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Login.css";
import ViewClients from './ViewClients';
const axios = require("axios")


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  function getData() {
    axios.post("http://localhost:4000",  { crossdomain: true }).then(response => {
      setEmail(response.data.email);
      setPassword(response.data.password);
    });
  }

 
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch ('/login', {
       method: 'POST',
       body: JSON.stringify({
         email: e.target.value ,
         password: e.target.value,
      }),
  })
    
    .then((result) => {
      if(result.message === 'success'){
        alert("You are logged in");
       
       } else {
           alert("Please check your login information");
       }
    });
  navigate('/view')
  }
  
  
  
  

  return (
    <div className='login'>
<div className="left">
    <div className="content">
        <h2>Welcome</h2>
        <p>Enter your Username and Password</p>
        <form action="/view" method='POST' onSubmit={handleSubmit}>
          <div className="input1">
          <i class="fa-regular fa-user"></i>
            <input 
            name='email'
            type="email" placeholder='Username'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
         
          </div>
          <div className="input1">
          <i class="fa-solid fa-lock"></i>
            <input type="password"
            name='password'
             placeholder='Password'
              required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
            />
           
          </div>
         
             <button type='submit' onClick={getData}>Login</button>
          
             <p>Forgot Password?</p>
        </form>
    </div>
    <div className="footer1">
           <p>Terms of Use</p>
            <p>Privacy Policy</p>
        </div>
        <div className="footer2">
           <p>© Punctualiti 2022. All rights reserved</p>
           </div>
       
</div>
<div className="right">
    <div className="box">
        <div className="content"></div>
        <div className="box2"></div>
       
    </div>
    <div className="desc">
            <h2>360° Solution for Asset management</h2>
            <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.</p>
        </div>
</div>
    </div>
  )
}

export default Login