import React from "react";
import aboveTheFold from './images/white.png';
import "./style.css"
import bgImage from './images/home-bg.jpeg';

const Main = () => {
  return (
    <section class="above-the-fold container-fluid" id="Main" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <img src={aboveTheFold} alt="CCSI logo and Slogan Affordable Housing lab" />
      <h1>
        Effortlessly track and analyze local rental markets
      </h1>
      <button>
        Learn more
      </button>
    </section>
  );
};

export default Main;
