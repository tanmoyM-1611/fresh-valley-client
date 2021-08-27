import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const AddProduct = () => {
   const { register, handleSubmit } = useForm();
  const [imageURL, setIMageURL] = useState(null);
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  
  const onSubmit=data=>{
    console.log(data)
    const eventData={
      email:loggedInUser.email,
      name:data.name,
      price:data.price,
      imageURL: imageURL
     
    };
    console.log(eventData)
        const url=`https://enigmatic-meadow-19132.herokuapp.com/addProduct`
        fetch(url, {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response', res))
       
      document.getElementById("product-name").value=null;
      document.getElementById("price").value=null;
      document.getElementById("file").value=null;

      alert("Product Submit Successfully")
  
  }

    const handleImageUpload=event=>{
        console.log(event.target.files[0])
        const imageData=new FormData();
        imageData.set('key','678c62c1b5789908df29cec372ffb8ce')
        imageData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
          setIMageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <section style={{border:"1px solid black"}}className="m-5 p-5"> 
          
            <h2 style={{textAlign:"center",color:"black"}}>Add Your Product Here !</h2>
       <div  className="d-flex justify-content-center mt-4">
         
        <form onSubmit={handleSubmit(onSubmit)}>
        <h5 >Product Name : </h5>
      <input className="form-control" id="product-name" name="name" placeholder="Product Name" {...register("name", { required: true, maxLength: 500 })} />
      <br/>
      <h5>Add Price : </h5>
      <input className="form-control" id="price" type="number" name="price" placeholder="price" {...register("price")} />
      <br/> 
      <h5>Add Photo : </h5>
      <input className="form-control"  name="exampleRequired" id="file" type="file" onChange={handleImageUpload} /> 
      <br/>
      <input type="submit" />
    </form>
</div>
    
        </section>
    );
};

export default AddProduct;