import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
const Admin = () => {
    return (
        <Router>
        <section className="home">
            
          <nav className="d-flex justify-content-center">
                <Link to="/addProduct"><button type="button" class="btn btn-success m-2">ADD PRODUCT</button></Link>
                <Link to="/manageProduct"><button type="button" class="btn btn-success m-2">MANAGE PRODUCT</button></Link>
              <br />
          </nav>
  
  <div className="m-5">
          <Switch>
            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/manageProduct">
             <ManageProduct></ManageProduct>
            </Route>
            <Route path="/editProduct/:id">
              <EditProduct></EditProduct>
            </Route>

          </Switch>
          </div>
        </section>
      </Router>
    );
};

export default Admin;