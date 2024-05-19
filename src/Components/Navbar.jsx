import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar=()=> {
  const state=useSelector((state)=>state.handleCart)
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4" to="/" >
      <img src="https://t3.ftcdn.net/jpg/05/59/35/24/360_F_559352449_lc9msFvf3v1rDLz27Pu5Ue9Jx5vEbTIz.jpg" 
      alt="logo"  width={80} height={60} className='rounded-circle'/>
    </NavLink>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-success">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
    
      </ul>
     
        <div className='buttons'>
            <NavLink className='btn btn-outline-drak' to='/login'>
            <i className="fa fa-sign-in me-1"></i> Login</NavLink>
            <NavLink className='btn btn-outline-drak ms-2'to='/register' >
            <i className="fa fa-user-plus me-1" ></i> Register</NavLink> 
            <NavLink className='btn btn-outline-drak ms-2' to="/cart">
            <i className="fa fa-cart-plus me-1"></i>Cart({state.length})</NavLink> 
        </div>
      
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
