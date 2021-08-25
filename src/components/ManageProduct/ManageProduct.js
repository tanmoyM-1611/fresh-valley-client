import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory} from 'react-router-dom';
import { UserContext } from '../../App';
import EditProduct from '../EditProduct/EditProduct';

const ManageProduct = () => {
    let history = useHistory();
    const [products, setProducts] = useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    
    useEffect(() => {
        fetch("http://localhost:4000/manageProducts?email="+loggedInUser.email,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${sessionStorage.getItem("token")}`
            }
            
        })
            .then(res => res.json())
            .then(data => setProducts(data))

    },[])

    const deleteItems=(id)=>{
       
     console.log(id)
    
       fetch(`http://localhost:4000/deleteProduct/${id}`,{
           method:'DELETE'
       })
       .then(res=>res.json())
       .then(result=>{
           console.log("delete successfully") 
           alert("Delete Successfully")
           
       }) 
       history.push("/admin")
    }
   
    return (
        <section className="container-fluid home">

                <div className="row row-cols-1  row-cols-md-3  justify-content-center  products-container">
                    {
                         products.map(product =>

                       <Card id="card"  className="m-3 card-container" style={{ width: '17rem' }}>
                                <Card.Img className="card-img border-bottom p-3  mt-2" variant="top" src={product.imageURL} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '18px' }}><strong>{product.name}</strong></Card.Title>
                                    <b>Price : ${product.price}</b>
                                    <div className="d-flex mt-3">
                                        <div className="price-part ">
                                        <Link to={"/editProduct/"+product._id}><Button style={{ padding: "5px" } } className="rounded" variant="success"> <span style={{ fontSize: '15px' }}>EDIT</span> </Button></Link>
                                        </div>
                                        <div className="button-part">
                                            <Button  onClick={()=>deleteItems(product._id)} style={{ padding: "5px" }} className="rounded" variant="danger"> <span style={{ fontSize: '15px' }}>DELETE</span> </Button>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                       
                        )

                    }</div>
                
           
        </section>
         
    );
};

export default ManageProduct;