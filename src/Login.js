import React, { useState } from 'react'
import './Login.css'
import signup  from "./Assest/amazon logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      navigate('/')
    })
    .catch(error => alert(error.message)) 
  }

  const register = e => {
    e.preventDefault();

    auth
       .createUserWithEmailAndPassword(email, password)
       .then((auth) =>{
        console.log(auth);
        if (auth) {
          navigate('/')
        }
        
       })
       .catch(error => alert(error.message))
  }


  return (
    <div className='login'>
      <Link to ='/'>
      <img 
        className="login_logo"
        src={signup}>
      </img>
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text'  value={email}
           onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password'  value={password}
           onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn}
            className='login_signInButton'>
            Sign In
            </button>
        </form>

        <p>
          By signing-in you agree to AMAZON CLONE
          Conditions of Use & Sale. Please see our
          Privacy Notice, our Interest-Based Ads Notice.
        </p>

        <button onClick={register}
        className='login_registerButton'>
          Create Your Amazon Account
        </button>
      </div>
        
        
    </div>
    
  )
}

export default Login;