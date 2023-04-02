import React from "react";
import aboveTheFold from './images/white.png';
import "./style.css";
import bgImage from './images/home-bg.jpeg';
import { Link } from 'react-router-dom';


const Main = () => {
  return (
    <section class="above-the-fold container-fluid">
      <div class="AtF-bg" style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        zIndex: "-1",
        opacity: "0.9",
        filter: "blur(2px)"
      }}></div>
      <div class="AtF-content">
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
