import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <NavLink to="/main">Main</NavLink>
      <NavLink to="/app">App</NavLink>
      <NavLink to="/oe">OEEEEEEEEEEE</NavLink>
    </nav>
  );
};

export default Navigation;
