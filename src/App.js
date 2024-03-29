
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import Checkout from './components/Checkout/Checkout';
import Details from './Details/Details';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
   
    <UserContext.Provider  value={[loggedInUser, setLoggedInUser]}>
      
      <Router >
         
        <div className='header-part'>
          <Header></Header>

        </div>
        <div className='router-part'>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
           
            <Route path="/login">
              <Login></Login>
            </Route>  

           

            <Route path="/details">
              <Details></Details>
            </Route> 

            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>

            <PrivateRoute path="/checkout">
              <Checkout></Checkout>
            </PrivateRoute>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>


          </Switch>
        </div>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
