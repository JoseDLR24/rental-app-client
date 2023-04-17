import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// styles
import "./style.css";
//Images
import logo from "./images/greenlogo.png";
import { Collapse } from "react-bootstrap";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-light" id="Navigation">
      <div className="container-fluid d-flex">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-controls="collapsable"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className={`collapse navbar-collapse ${open?"show":""}`} > */}

        <Collapse in={open} className="navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/scraper">Scraper</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/how-to-use">How to use</NavLink>
            </li>

          </ul>
        </Collapse>
      </div>
    </nav>
  );
};

export default Navigation;
