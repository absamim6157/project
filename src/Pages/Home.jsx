import React from 'react';
import bootstrap from "bootstrap";
import Products from "./Products";
import Footer from '../Components/Footer';
function Home() {
  return (
   <>
   <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active">
    <img src="https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-36168.jpg?w=900&t=st=1706712829~exp=1706713429~hmac=68aee85c6a2ef1a43772d041fe1ef4f4d84039e6f2fb05cbb897ae5801ea0b22" 
        className="d-block w-100 card-img"  alt="background" height="350px" /> 
          
     </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/736x/b6/89/96/b68996b0aeb13339740f961ada455a77.jpg"
             className="d-block w-100 card-img"  alt="background" height="350px"/>
    </div>
    <div className="carousel-item">
      <img src="https://mobirise.com/extensions/commercem4/assets/images/galleries-1-1200x800.png"
       className="d-block w-100 card-img"  alt="background" height="350px" />
    </div>
   

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Products/>
<Footer/>
   </>
  )
}
/*
const Home2=()=>{
  return (<>
   < div className='hero'>
      <div className="card text-bg-dark text-dark border-0">
  <img src="https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-36168.jpg?w=900&t=st=1706712829~exp=1706713429~hmac=68aee85c6a2ef1a43772d041fe1ef4f4d84039e6f2fb05cbb897ae5801ea0b22" 
  className="card-img" alt="background" height="300px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <h5 className="card-title display-3 fw-bolder mb-3 text-center">NEW SEASON ARRIVALS </h5>
    <p className="card-text lead fs-2 text-blue text-center">CHECKOUT ALL THE TRENDS</p>
  </div>

</div>



    </div>
  
  </>)
}
*/
export default Home;



