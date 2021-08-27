import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
const EditProduct = () => {
  const { id } = useParams();
  console.log(id);
  const { register, handleSubmit} = useForm();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://enigmatic-meadow-19132.herokuapp.com/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  const onSubmit = (data) => {
    console.log(data)
    const eventData = {
      name: data.name,
      price: data.price
    };
    console.log(eventData)
    fetch(`https://enigmatic-meadow-19132.herokuapp.com/updateProduct/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => res.json())
      .then(result => {
        console.log("update")
      }
      )
      document.getElementById("product-name").value=null;
      document.getElementById("price").value=null;
      

      alert("Product Update Successfully")

  }

  return (

    <section style={{ border: "1px solid black" }} className="m-5 p-5">
        
      <h2 style={{ textAlign: "center", color: "gray" }}>Edit Your Product Here !</h2>
      <div className="d-flex justify-content-center mt-4">

        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 style={{ color: "red" }}>Product Name : {product.name} </h4>
          <h6 style={{ color: "green" }}>Edit Product Name : </h6>
          <input className="form-control" id="product-name" name="name"  {...register("name", { required: true, maxLength: 5000 })} />
          <br />
          <h4 style={{ color: "red" }}>Product Price : {product.price} </h4>

          <h6 style={{ color: "green" }}>Edit Price : </h6>
          <input className="form-control" id="price" type="number" name="price"  {...register("price")} />

          <input type="submit" />
        </form>
      </div>
    </section>

  );
};

export default EditProduct;