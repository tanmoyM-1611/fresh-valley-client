import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderInfo from '../OrderInfo/OrderInfo';
import "../Orders/Orders.css"
const Orders = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch("https://enigmatic-meadow-19132.herokuapp.com/getOrders?email="+loggedInUser.email,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${sessionStorage.getItem("token")}`
            }
            
        })
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    // const total=orders.reduce((total,od)=>total+od.product.price,0||1)
    let total=0
    for (let i = 0; i < orders.length; i++) {
        const prd = orders[i].product;
        total=total+Number(prd.price);   
    }

    return (
        
            
        <section style={{border:"1px solid black"}} className="m-5 p-5">
            <div> 
            
            {
            orders.map(od=><OrderInfo order={od.product}></OrderInfo>)
            } 
    
           </div>
           <div>
               <p style={{textAlign:"center"}}> <strong>Total : $ {total}</strong> </p>
           </div>
           
           </section> 
           
        
        
    );
};

export default Orders;