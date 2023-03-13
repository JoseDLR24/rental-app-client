import React from "react";
import { BsHousesFill } from "react-icons/bs";
import "./style.css";

const Clock = ({ shit, name }) => {
  let a = "";

  if (shit === "time") {
    a = new Date().toLocaleTimeString();
  } else {
    a = new Date().toLocaleDateString();
  }
  return (
    <div id="clock">
      <h5>
        {a} <BsHousesFill />{" "}
      </h5>
      {name}
    </div>
  );
};

export default Clock;
