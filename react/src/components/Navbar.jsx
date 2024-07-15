import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";

function Navbar(props) {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Game Store</a>

        <div className="d-flex justify-content-end align-items-center flex-grow-1">
          
          <Search setData={props.setData}/>
          
          <a href="/cart" className="nav-link mx-4">
            <i className="fas fa-shopping-cart"></i>
          </a>

        </div>
      </div>
    </nav>

  );
}

export default Navbar;
