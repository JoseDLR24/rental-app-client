import React, { useState, useEffect } from "react";
import FilterNav from "../../components/FilterNav";
import Table from "../../components/Table";
import ButtonContainer from "../../components/Buttons";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Scraper = () => {
  // variable to save the all the records from the API
  const [data, setData] = useState(undefined);
  // Using ENV variable
  const apiUrl = process.env.REACT_APP_API_URL;

  // Function to fetch the API without filters
  const getData = async () => {
    try {
      // const response = await fetch("https://rental-server.onrender.com/api/v1/data");
      const response = await fetch(`${apiUrl}/api/v1/data`);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        // console.log(data);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Hook to call the getData function in the first render
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="scrapper">
      <h1>SCRAPER</h1>
      <FilterNav setData={setData} />
      <Table data={data} getData={getData} />
      <ButtonContainer getData={getData} setData={setData} data={data} />
    </div>
  );
};

export default Scraper;
