import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AddProduct from './components/AddProduct/AddProduct';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import Checkout from './components/Checkout/Checkout';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

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
