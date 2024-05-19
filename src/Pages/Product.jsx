import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import {useState,useEffect} from "react"
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action/action';
import bootstrap from "bootstrap";
function Product() {
    const {id}=useParams();
    const [loading,setLoading]=useState(false);
    const [product,setProduct]=useState([])
	const dispatch=useDispatch()
	const addProduct=(product)=>{
		dispatch(addItem(product))
	}

    useEffect(()=>{
        setLoading(true)
        const getProduct=async()=>{
            const response=await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    },[])

    const Loading=()=>{
        return (
			<div className='d-flex'>

			<div className='col-md-6' >
			<Skeleton height={400}/>
			</div>
			<div className="col-md-6" style={{lineHeight:2}}>
			<Skeleton height={50} width={300}/>
			<Skeleton height={75}/>
			<Skeleton height={25} width={150}/>
			<Skeleton height={50}/>
			<Skeleton height={150}/>
			<Skeleton height={50} width={100}/>
			<Skeleton height={50} width={100} style={{marginLeft:6}}/>

			</div>
			</div>
		)
		  
    
    }
    const ShowProduct=()=>{
        return (
            <div className='d-flex my-5'>
			<div className="com-md-6  p-4">
			<img src={product.image} alt={product.title} width="400px" height="400px"/>
			</div>
			<div className="col-md-6   p-4">
				<h4 className='text-uppercase text-black-50'>{product.category}</h4>
				<h1 className="display-5">{product.title}</h1>
				<p className="lead fw-bolder"> Rating {product.rating && product.rating.rate}
				<i className='fa fa-star'></i></p>
				<p className="lead fw-bold display-6 my-4">Price: ${Math.trunc(product.price)}</p>
				<p className='lead'>{product.description}</p>
				<button className='btn btn-outline-dark mx-2' onClick={()=>addProduct(product)}>Add to Cart</button>
				<NavLink to="/cart" className="btn btn-dark mx-2">Go to Cart</NavLink>
			</div>

            </div>
        )
    }

  return (
    <div>
      <div className="container">
        <div className="row">
           
                {loading?<Loading/>:<ShowProduct/>}
          
        </div>
      </div>
    </div>
  )
}

export default Product
