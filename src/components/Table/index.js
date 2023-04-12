import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Table = () => {
  const [getFullData, setGetFullData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://rental-server.onrender.com/api/v1/data"
      );
      if (response.ok) {
        const data = await response.json();
        setGetFullData(data);
        console.log(data);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main class="scrappertable-container">
      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th>Date Collected</th>
              <th>Local Municipality</th>
              <th>Housing Type</th>
              <th>Street No.</th>
              <th>Street Name</th>
              <th>Street Type</th>
              <th>Postal Code</th>
              <th>Unit Size</th>
              <th>Secondary Suite</th>
              <th>Monthly Rent</th>
              <th>Utilities Included</th>
              <th>Add Hydro</th>
              <th>Add Gas</th>
              <th>Lease</th>
              <th>Possible duplicate</th>
            </tr>
          </thead>
          <tbody>
            {getFullData.map((e) => {
              return (
                <tr>
                  <td>{e.source}</td>
                  <td>{e.municipality}</td>
                  <td>{e.HousingType || 'unclear'}</td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Table;
