import React from 'react';
import "../OrderInfo/OrderInfo.css"
const OrderInfo = (props) => {
    console.log(props)
    const {name, price}=props.order
    console.log(price,name)
    
    

    return (
        
        <div className="order">
         
       <p><b>Name : </b> {name}<b className="ms-2">Price:</b> ${price}</p>

        </div>
        
        
    );
};

export default OrderInfo;