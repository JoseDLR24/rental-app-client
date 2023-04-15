import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const FilterNav = ({ setData }) => {
  // Add the variables and functions to add the strings to the link in order to filter. Do not forget to do the functions with onChange in order to catch the value every time the users clicks one of the options instead of grabbing the ID (more work to do), and change the value to one single word or number so its easier to manipulate.
  // create the price function grabbing the greater value minus 500 in order to have the range of min and max, that would be a hidden filter from the backend.
  // Add the funciton to the Update! button in order to add the filters values to the string so the api can fetch the app properly

  // variable to store the value of the municipality selected
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRooms, setSelectedRooms] = useState("");
  const [selectedUtilities, setSelectedUtilities] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  // var with the options for location / municipality / city
  const locationOptions = [
    { value: "", text: "Location", disabled: true, selected: true },
    { value: "angus", text: "Angus" },
    { value: "alliston", text: "Alliston" },
    { value: "barrie", text: "Barrie" },
    { value: "bradford", text: "Bradford" },
    { value: "collingwood", text: "Collingwood" },
    { value: "friday", text: "Friday" },
    { value: "innisfil", text: "Innisfil" },
    { value: "newTecumsetch", text: "NewTecumsetch" },
    { value: "midland", text: "Midland" },
    { value: "orillia", text: "Orillia" },
    { value: "orangeville", text: "Orangeville" },
    { value: "tottenham", text: "Tottenham" },
    { value: "penetanguishene", text: "Penetanguishene" },
    { value: "wasaga", text: "Wasaga" },
  ];

  const getData = async () => {
    // const url = `https://rental-server.onrender.com/api/v1/data/`
    const url = `https://rental-server.onrender.com/api/v1/data/?municipality=${selectedLocation}`
    try {
      const response = await fetch(url);
      if (response.ok) {

        const data = await response.json();
        setData(data);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="filternavcomponent">
      <div className="filter-container">
        {/* <div className="dateCollected">
          <label htmlFor="date-input">Enter a date:</label>
          <input
            id="date-input"
            type="date"
            value={dateValue}
            onChange={handleDateChange}
          />
        </div> */}

        {/* Locations */}
        <select
          className="form-select"
          aria-label="Default select example"
          name="Location"
          id="location"
          onChange={(event) => setSelectedLocation(event.target.value)}
          value={selectedLocation}
        >
          {locationOptions.map((option) => (
            <option
              key={option.value} // Use a unique identifier as the key
              value={option.value}
              disabled={option.disabled}
            >
              {option.text}
            </option>
          ))}
        </select>
        {/* Rooms */}
        <select
          className="form-select"
          aria-label="Default select example"
          name="rooms"
          id="rooms"
          onChange={(event) => setSelectedRooms(event.target.value)}
          value={selectedRooms}
        >
          <option value="" disabled>
            Unit Size
          </option>
          <option value="1">1 Bed</option>
          <option value="2">2 Bed</option>
          <option value="3">3 Bed</option>
          <option value="4">4 Bed</option>
          <option value="4+ Bed">4+ Bed</option>
        </select>
        {/* Utilities */}
        <select
          className="form-select"
          aria-label="Default select example"
          name="utilities"
          id="utilitiesIncluded"
          onChange={(event) => setSelectedUtilities(event.target.value)}
          value={selectedUtilities}
        >
          <option value="" disabled>
            Utilities Inclduded
          </option>
          <option value="yes">Yes</option>
          <option value="not">No</option>
        </select>
        {/* Price */}
        <select
          className="form-select"
          aria-label="Default select example"
          name="Price"
          id="price"
          onChange={(event) => setSelectedPrice(event.target.value)}
          value={selectedPrice}
        >
          <option value="" disabled>
            Price
          </option>
          <option value="500">0 - 500</option>
          <option value="1000">500 - 1000</option>
          <option value="1500">1000 - 1500</option>
          <option value="2000">1500 - 2000</option>
          <option value="2500">2000 - 2500</option>
          <option value="3000">2500 - 3000</option>
          <option value="3500">3000 - 3500</option>
          <option value="3500">3500+</option>
        </select>
        <button
          onClick={getData}
        >
          Update!
        </button>
      </div>
      {/* <div className="advanced-filters">
        <button
          className="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Advanced Filters
        </button>

        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <select
              className="form-select"
              aria-label="Default select example"
              name="advanced-filters"
              id="secondarysuite"
            >
              <option value="" selected disabled>
                Secondary Suite
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unclear">Unclear</option>
            </select>
            <select
              className="form-select"
              aria-label="Default select example"
              name="advanced-filters"
              id="typeofsecondarysuite"
            >
              <option value="" selected disabled>
                Type of Secondary Suite
              </option>
              <option value="Lower">Lower</option>
              <option value="Upper">Upper</option>
              <option value="Garden">Garden</option>
              <option value="Res/Comm">Res/Comm</option>
              <option value="Unclear">Unclear</option>
            </select>
            <select
              className="form-select"
              aria-label="Default select example"
              name="advanced-filters"
              id="landlordtype"
            >
              <option value="" selected disabled>
                Landlord Type
              </option>
              <option value="P.Mgmt">P.Mgmt</option>
              <option value="Private">Private</option>
              <option value="Not Stated">Not Stated</option>
              <option value="Non-Profit/Co-op">Non-Profit/Co-op</option>
            </select>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FilterNav;
