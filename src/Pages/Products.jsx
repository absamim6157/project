import React from 'react';
import { useState,useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Components/Loader';
function Products() {
  const [data,setData]=useState([])
  const [filter,setFilter]=useState(data)
  const [loading,setLoading]=useState(false)
  const [currentPage ,setCurrentPage]=useState(1)
  const [limit,setLimit]=useState(8);
  const [searchTerm, setSearchTerm] = useState('');
  const [err,setErr]=useState(false)


  useEffect(()=>{
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setLoading(false)
        setData(response.data)
        setFilter(response.data);
      } catch (error) {
        
        console.log('Error fetching data:', error);
        setLoading(false)
        setErr(true)
      }
    };

    fetchData();

  },[])

 
 // Category wise Filter
const filterProducts=(cat)=>{
  const updatedList=data.filter((a)=>a.category===cat)
  setFilter(updatedList)
}

// search functionality & Pagination 
  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = filter.slice(indexOfFirstItem, indexOfLastItem);

const paginate=(pageNumber)=>setCurrentPage(pageNumber)
const filteredProducts = currentItems.filter((product) =>
product.title.toLowerCase().includes(searchTerm.toLowerCase())
);
const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
  setCurrentPage(1); // Reset to first page when searching
};


const descProducts= async()=>{
  try{
    let res=await axios.get('https://fakestoreapi.com/products?sort=desc')
    setFilter(res.data)

  }
  catch(err){
    console.log(err)
  }
}
const ascProducts= async()=>{
  try{
    let res=await axios.get('https://fakestoreapi.com/products?sort=asc')
    setFilter(res.data)

  }
  catch(err){
    console.log(err)
  }
}

  const ShowProducts=()=>{
    return (<>
    <div className="buttons d-flex justify-content-center mb-4">
      <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>ALl</button>
      <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("men's clothing")}>Men's Clothing</button>
      <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("women's clothing")}>Women's Clothing</button>
      <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("jewelery")}>Jewelery</button>
      <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("electronics")}>Electronics</button>
      <button className="btn btn-outline-dark me-2" onClick={descProducts}>Dscending</button>
      <button className="btn btn-outline-dark me-2" onClick={ascProducts}>Ascending</button>
    </div>
    {filteredProducts.map((product)=>{
      return (
        <div className="col-md-3 mb-4" key={product.id} >
        <NavLink className="text-decoration-none" to={`/product/${product.id}`} >
        <div className="card h-100 text-center p-4 " >
          <img src={product.image} className="card-img-top" alt={product.title} height="200px"/>
           <div className="card-body">
              <h5 className="card-title">{product.title.substring(0,12)}</h5>
              <p className="card-text fw-bold">Price:${Math.trunc(product.price)}</p>
                <button  className="btn btn-outline-dark">Buy Now </button>
             </div>
        </div> 
        </NavLink>
      </div>

      
    
        
      )
    })}
    
    </>)
  }
 /*
  const Loading=()=>{
        return (
          <>
          <div className="col-md-3">
            <Skeleton/>
          </div>
          <div className="col-md-3">
            <Skeleton/>
          </div>
          <div className="col-md-3">
            <Skeleton/>
          </div>
          <div className="col-md-3">
            <Skeleton/>
          </div>
          </>
        )
  }
*/
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 d-flex position-relative" >
            <h1 className='text-center fw-bolder display-6 mr-5'>Latest Products</h1>
              <div className="position-absolute top-0 end-0">
              <input
           className='px-5 border rounded-2 py-2'
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
              </div>
           
          
            <hr/>
          </div>
        </div>
        <div className=" row justify-content-center">
        {loading?<Loader/>:<ShowProducts/>}
        {/*  Pagination*/}
        <nav aria-label="...">
  <ul className="pagination justify-content-center">
        {Array.from({ length: Math.ceil(filter.length / limit) }, (_, i) => (
          <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          </li>
        ))}
  </ul>
</nav>
{/*  */}
        </div>
      </div>
     
    </div>
  )
}

export default Products;
