import React from "react";
import Clock from "../../components/Clock";
import Navigation from "./../../components/Navigation";
import "./style.css";

const Application = () => {
  return (
    <div>
      <h1>Here is the page where is my Aplication</h1>
      <h5>this is my component: </h5>
      <Clock shit={"time"} name={"andres"}/>
    </div>
  );
};

export default Application;
