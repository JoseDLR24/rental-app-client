import React from "react";
import aboveTheFold from './images/white.png';
import "./style.css";
import bgImage from './images/home-bg.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section className="above-the-fold container-fluid">
      <div className="AtF-bg"  style={{backgroundImage: `url(${bgImage})`, height: "120vh"}}></div>
      <div className="AtF-content">
        <img src={aboveTheFold} alt="CCSI logo and Slogan Affordable Housing lab" />
        <h1>
          Effortlessly track and analyze local rental markets
        </h1>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <button>Learn More</button>
        </Link>

      </div>

    </section>
  );
};

export default Main;
