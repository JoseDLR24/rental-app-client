import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
// styles
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// js bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//Images
import logo from './images/greenlogo.png';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid d-flex">
        <img src={logo} alt="Logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to="/scrapper">Scrapper</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/how-to-use">How to use</NavLink>
            </li>
            <li className="nav-item contact">
            <NavLink to="/contact">Contact us</NavLink>
            </li>
            <button id="contact-btn">Contact Us</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
