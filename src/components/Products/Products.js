import { Link } from 'react-router-dom';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

import "../Products/Products.css";
const Products = (props) => {
  const { name, imageURL, price,_id } = props.product;
  const handleOrder = id => {
    console.log(id)
    sessionStorage.setItem("id",id)
  }
  return (
    
      <Card className="m-3 card-container" style={{ width: '17rem' }}>
        <Card.Img className="card-img border-bottom p-3  mt-2" variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title style={{ fontSize: '18px' }}><strong>{name}</strong></Card.Title>
          <div className="d-flex mt-3">
            <div className="price-part ">
              <h5>${price}</h5>
            </div>
            <div className="button-part">
            <Link to={"/checkout"}> <Button style={{ padding: "5px" }} onClick={()=>handleOrder(_id)} className="rounded" variant="success"> <span style={{ fontSize: '15px' }}>Buy Now</span> </Button></Link>
            </div>
          </div>

        </Card.Body>
      </Card>
    
  );
};

export default Products;