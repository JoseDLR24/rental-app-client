import React from "react";
import Example from "../../components/Example";
import Navigation from "./../../components/Navigation";
const Main = () => {
  return (
    <div>
      <h1>This is my main page</h1>

      <h3>I am calling the component Example from this page</h3>

      <Example />
    </div>
  );
};

export default Main;
