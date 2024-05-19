import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { registerInitiate } from '../redux/action/action';
import { NavLink } from 'react-bootstrap';

function Register() {
  const [state,setState]=useState({
    displayName:"",
    email:"",
    password:"",
    passwordConfirm:""
  })
const [errors, setErrors] = useState({});
const {displayName,email,password,passwordConfirm}=state
// const dispatch=useDispatch()
// const {currentUser}=useSelector((state)=>state.user)
// const history=useHistory()
// useEffect(()=>{
//   if(currentUser){
//     history.push("/")
//   }
// },[currentUser,history])
const handleSubmit=(e)=>{
  e.preventDefault()
  // if(password !=passwordConfirm){
  //   return 
  // }
  // dispatch(registerInitiate(email,password,displayName))
  // setState({email:"",password:"",displayName:""})
  const newErrors = {};
  if (!displayName.trim()) {
    newErrors.displayName = 'Name is required';
  }
  if (!email.trim()) {
    newErrors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    newErrors.email = 'Invalid email address';
  }
  if (!password) {
    newErrors.password = 'Password is required';
  } else if (password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters long';
  }
  if (!passwordConfirm) {
    newErrors.passwordConfirm = 'Please confirm your password';
  } else if (password !== passwordConfirm) {
    newErrors.passwordConfirm = 'Passwords do not match';
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    // Form submission logic goes here
    console.log('Form submitted successfully');
    console.log(state)
  }




}
const handleChange=(e)=>{
  const {name,value}=e.target;
  setState({...state,[name]:value})
}



  return (
    <div className=' m-auto shadow p-3 mb-5 bg-body-tertiary rounded px-4' style={{width:"35%"}}>
<h4 className='text-center '> Register</h4>
<form onSubmit={handleSubmit}>
<div className="mb-3">
    <label for="exampleInputName" className="form-label"> Name </label>
    <input className="form-control" aria-label="default input example"
    type="text" 
    name='displayName'
    value={displayName}
    onChange={handleChange}
    placeholder="Enter your name "
     />
    {errors.displayName && <div style={{ color: 'red' }}>{errors.displayName}</div>}

  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    type="email" 
    name='email'
    value={email}
    onChange={handleChange}
     placeholder='Enter Your Email'/>
     {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input  className="form-control" id="exampleInputPassword1"
    type="password" 
    name='password'
    value={password}
    onChange={handleChange}
    placeholder=' Enter Passward'/>
    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}

  </div>
  <div className="mb-3">
    <label for="exampleInputPasswordConfrim" className="form-label">Confrim Password</label>
    <input  className="form-control" id="exampleInputPasswordConfrim"
    type="password" 
    name='passwordConfirm'
    value={passwordConfirm}
    onChange={handleChange}
    placeholder=' Enter Confrim Passward'/>
    {errors.passwordConfirm && <div style={{ color: 'red' }}>{errors.passwordConfirm}</div>}

  </div>
 
   
<input type="submit"  value="Register" className="btn btn-primary "/>

</form>

<div className="row">
<p className='text-primary col-8 fs-6 '> Have Already Account? </p>
     <Link to="/login" className='text-primary col-4' >Sign In</Link>
</div>
    </div>
  )
}

export default Register
