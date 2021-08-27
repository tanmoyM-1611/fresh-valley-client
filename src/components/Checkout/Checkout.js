import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import "../Checkout/Checkout.css"
const Checkout = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const[product,setProduct]=useState({})
    let history = useHistory();
    const id=sessionStorage.getItem("id")
    useEffect(() => { 
        fetch(`https://enigmatic-meadow-19132.herokuapp.com/product/${id}`)
          .then(res => res.json())
          .then(data => setProduct(data))
      }, [id])
    const onSubmit = data =>{ 
       
        console.log(id)
       
        const orderDetails={...loggedInUser,product:product,shipment:data,orderTime:new Date()}

        fetch("https://enigmatic-meadow-19132.herokuapp.com/addOrder",{
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        alert("Submit Successfully")
        history.push("/home")
    }
    return (
        <section style={{border:"1px solid black"}}className="m-5 p-3"> 
          
        <h2 style={{textAlign:"center",color:"gray"}}>Checkout Here !</h2>
        <div  className="d-flex justify-content-center">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <h5 >Name : </h5>
        <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
        {errors.name && <span className="error">Name is required</span>}
        <h5 >Email: </h5>
        <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" />
        {errors.email&& <span className="error">Name is required</span>}
         <h5 >Address : </h5>
        <input {...register("address", { required: true })} placeholder="Your Address" />
        {errors.address && <span className="error">Name is required</span>}
        <h5 >Phone: </h5>
        <input {...register("phone", { required: true })} placeholder="Your Phone-Number" />
        {errors.phone && <span className="error">Name is required</span>}
        <input type="submit" />
      </form>
      </div>
      </section>
    );
};

export default Checkout;