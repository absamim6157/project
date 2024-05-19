import React from 'react';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products';
import { Route,Routes } from 'react-router-dom';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Cart from '../Pages/Cart';
import Product from '../Pages/Product';
import Checkout from '../Pages/Checkout';
function Routing() {
  return (
    <div>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/product' element={<Products/>}/>
         <Route path='/product/:id' element={<Product/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      
    </div>
  )
}

export default Routing
