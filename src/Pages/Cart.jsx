import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delItem } from '../redux/action/action';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import bootstrap from 'bootstrap';
import Footer from '../Components/Footer';


const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    console.log(111,state)

    const [cartItems,setCartItems]=useState(state)

    console.log(22,cartItems)
  const handleIncrement = (id) => {
    setCartItems(prevCartItems => prevCartItems.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const handleDecrement = (id) => {
    setCartItems(prevCartItems => prevCartItems.map(item =>
      item.id === id ? { ...item, qty: item.qty - 1 } : item
    ));
  };


const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (Math.trunc(item.price * item.qty)), 0);
  };
    
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItemCom = (cartItem) => {
   
        return(
            <div className="px-4 my-2 bg-light shadow-sm rounded-3 w-75 m-auto border" key={cartItem.id}>
                <div className="container py-2 ">
                    <button   onClick={()=>handleClose(cartItem)} className="btn-close float-end"  aria-label="Close"></button>
                 
  
                    <div className="row justify-content-center ">
                        <div className="col-md-3">
                            <img src={cartItem.image} alt={cartItem.title} height="130px" width="150px" />
                        </div>
                        <div className="col-md-3">
                            <h4>{cartItem.title.substring(0,18)}</h4>
                            <p className="lead fw-bold">${cartItem.price}</p>
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <button className='ps-4 pe-4 border fs-4' onClick={()=>handleIncrement(cartItem.id)}>+</button>
                            <div className='ps-4 pe-4 fs-4'>{cartItem.qty}</div>
                            <button className='ps-4 pe-4 border fs-4' onClick={()=>handleDecrement(cartItem.id)} disabled={cartItem.qty<=1}>-</button>
                        </div>
                        <div className="col-md-3" style={{lineHeight:2}}>
                            <h5 className="" >Price:${Math.trunc(cartItem.price)}</h5>
                            <h5 className="">Items: {cartItem.qty}</h5>
                            <h5 className="">Total: ${Math.trunc(cartItem.price*cartItem.qty)}</h5>

                        </div> 
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row text-center">
                        <h3>Your Cart is Empty</h3>
                    </div>
                      <div className="text-center">

                      </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                 <h4 className="text-center">
                Total Price :${getTotalPrice()}
            </h4>
            
                <div className="mt-4 text-center mb-5">
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Proceed To Checkout 
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Are you sure ?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
      <NavLink to="/checkout" type="button" className="btn btn-primary">confrim</NavLink> 
        
       
      </div>
    </div>
  </div>
</div>



                </div>
            </div>
        );
    }

    return (
        <>
           {state.length === 0 && emptyCart()}
            {state.length !== 0 && cartItems.map(cartItemCom)}
            {state.length !== 0 && button()} 
            <Footer/>
         
        </>
    )
}

export default Cart