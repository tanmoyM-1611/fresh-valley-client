import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import"../Home/Home.css"
const Home = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("https://enigmatic-meadow-19132.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
   
    return (
        
          
           
          
        <section className="home container-fluid ">
        <div className="d-flex  row row-cols-1  row-cols-md-3  justify-content-center  ">
            {
                products.length===0 && 
                <div  class="spinner-border text-info" role="status"> </div>
            } 
            {
                products.map(pd=><Products product={pd}></Products>)
            }
        </div>   
        
        </section>
    );
};

export default Home;