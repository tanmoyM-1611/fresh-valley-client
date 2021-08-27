import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  return (

    <nav className="navbar navbar-expand-lg navbar-light h-100">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ fontFamily: "cursive" }}><b>ChalDal</b> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link" ><b>Home</b></Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link"><b>Orders</b> </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link" ><b>Admin</b></Link>
            </li>
            <li className="nav-item">
              <Link to="/details" className="nav-link"><b>Details</b></Link>
            </li>
            <li className="nav-item">
              {loggedInUser.success ? <p className="m-2"><strong>{loggedInUser.name}</strong></p> 
              : <Link to="/login"><button type="button" class="btn btn-success ms-2">Log in</button></Link>}
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
};

export default Header;