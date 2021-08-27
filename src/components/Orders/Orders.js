import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderInfo from '../OrderInfo/OrderInfo';
import "../Orders/Orders.css"
const Orders = () => {
    const [loggedInUser]=useContext(UserContext);
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
    },[loggedInUser.email])
    // const total=orders.reduce((total,od)=>total+od.product.price,0||1)
    let total=0
    for (let i = 0; i < orders.length; i++) {
        const prd = orders[i].product;
        total=total+Number(prd.price);   
    }

    return (
        
       
            
        <section className="home"> 
        {orders.length > 0 ?
            <div style={{border:"1px solid green"}}>
             
             {
               orders.length===0 && 
                <div  class="spinner-border text-info" role="status"> </div>
            }
            
            <div  className="m-5 p-5 "> 
            
            {
            orders.map(od=><OrderInfo order={od.product}></OrderInfo>)
            } 
    
           </div>
           <div>
               <h2 style={{textAlign:"center" ,backgroundColor:"red",color:"white"}}> <strong>Total : $ {total}</strong> </h2>
           </div>
           </div>
            :
            <div>
              <h2 style={{color:"white"}}>No Orders Here...</h2>
            </div>
}      
           </section> 
           
        
        
    );
};

export default Orders;