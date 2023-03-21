import React from "react";
import { NavLink } from "react-router-dom";
// styles
import "./style.css"
//Images
import logo from './images/greenlogo.png';



const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light" id="Navigation">
      <div className="container-fluid d-flex">
        <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsable"
          aria-controls="collapsable" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsable">
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
            <NavLink to="/contact"><button id="contact-btn">Contact Us</button></NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
