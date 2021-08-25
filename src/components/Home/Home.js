import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import"../Home/Home.css"
const Home = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    })
    
    return (
        <section className="container-fluid home">

       
        <div className="row row-cols-1  row-cols-md-3  justify-content-center  products-container">
            {
                products.map(pd=><Products product={pd}></Products>)
            }
        </div> 
        </section>
    );
};

export default Home;