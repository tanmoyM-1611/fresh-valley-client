import React from 'react';
import "../OrderInfo/OrderInfo.css"
const OrderInfo = (props) => {
    console.log(props)
    const {name, price}=props.order
    console.log(price,name)
    
    

    return (
        
        <div className="order">
         
       <h3 style={{backgroundColor:"yellow"}}><b>Name : </b> {name}<b className="ms-2">Price:</b> ${price}</h3>

        </div>
        
        
    );
};

export default OrderInfo;