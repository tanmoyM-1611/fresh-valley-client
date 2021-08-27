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
        
          
           
          
        <section className="home">
            <section className="container-fluid">
        <div className="row row-cols-1  row-cols-md-3  justify-content-center  products-container  ">
            {
                products.length===0 && 
                <p class="spinner-border text-info" role="status"> </p>
            } 
            {
                products.map(pd=><Products product={pd}></Products>)
            }
        </div>   
        </section>
        </section>
    );
};

export default Home;