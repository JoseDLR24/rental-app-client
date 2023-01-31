import React, { useState, useEffect } from "react";
import "./style.css";

const Example = () => {
  const [getFullData, setGetFullData] = useState([]);

  useEffect(() => {
    fetch("/data")
      .then((response) => response.json())
      .then((data) => setGetFullData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(getFullData);

  return (
    <div className="example-container">
      <h1>GETTING DATA FROM THE API</h1>
      {getFullData.length === 0 ? (
        <h2>LOADING ....</h2>
      ) : (
        getFullData.map((data) => {
          return (
            <ul key={data.name}>
              <li>Name: {data.name}</li>
              <li>Last Name: {data.lastname}</li>
              <li>Age: {data.age}</li>
            </ul>
          );
        })
      )}
      ;
    </div>
  );
};

export default Example;
