import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Search from "./Search";

function Navbar(props) {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">Game Store</a>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/cat/Racing">Racing</a></li>
              <li><a className="dropdown-item" href="/cat/Adventure">Adventure</a></li>
              <li><a className="dropdown-item" href="/cat/RPG">RPG</a></li>
              <li><a className="dropdown-item" href="/cat/Action">Action</a></li>
              <li><a className="dropdown-item" href="/cat/Shooter">Shooter</a></li>
            </ul>
          </li>
        </ul>

        <div className="d-flex justify-content-end align-items-center flex-grow-1">
          <Search setData={props.setData} />
          <a href="/cart" className="nav-link mx-4">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </nav>


  );
}

export default Navbar;
