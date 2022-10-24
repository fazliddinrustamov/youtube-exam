import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import authContext from '../context/authContext';

const SignUp = () => {
  const { token, setToken } = useContext(authContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      setToken('success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className="form-signin w-25 mx-auto mt-5 pt-5">
      <div className='login-inner bg-info p-4 rounded-5 shadow'>
        <h1 className='mb-3 font-weight-normal mt-3'>Please sign up to continue</h1>

        <label htmlFor="inputEmail" className='sr-only fw-bold mb-2'>Email address</label>

        <input type="email" autoComplete='off' id="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>

        <label htmlFor="inputPassword" className='sr-only mt-3 fw-bold mb-2'>Password</label>

        <input type="password" autoComplete='off' id="inputPassword" className="form-control" placeholder="Password" required></input>

        <button className='btn btn-lg btn-primary mt-3' type="submit">Sign Up</button>
      </div>
    </form>
  )
}

export default SignUp;