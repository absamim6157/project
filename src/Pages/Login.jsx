import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [state,setState] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const {email,password}=state;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic goes here
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className=' m-auto shadow-sm border p-4' style={{width:"30%"}}>
      <h2 className='text-center mb-3'>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control"
   id="exampleFormControlInput1"
    placeholder="name@example.com"
    name="email"
    value={email}
   onChange={handleChange}
    />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>
        <div>
        <label for="inputPassword5" className="form-label">Password</label>
            <input type="password"
                id="inputPassword5"
               className="form-control"
               aria-describedby="passwordHelpBlock"
                name="password"
                value={password} 
                onChange={handleChange} />
                {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          </div>

          <div className="col-12">
         
          </div>
          <button type="submit" className
          ="btn btn-primary mt-4">Sign In</button>
      </form>
    <div className='row text-primary mt-4 '>
    <p className='col'> New User? </p>
     <Link to="/register" className='col' >Register</Link>

    </div>
    </div>
  );
};

export default Login ;
