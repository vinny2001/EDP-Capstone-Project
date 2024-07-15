import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Game Store</a>

        <div className="d-flex justify-content-end align-items-center flex-grow-1">
          
          <form className="d-flex me-2" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          
          <a href="/cart" className="nav-link mx-4">
            <i className="fas fa-shopping-cart"></i>
          </a>

        </div>
      </div>
    </nav>

  );
}

export default Navbar;
