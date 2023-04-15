import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ToasterMessage from './../Toaster'
import { toast } from "react-toastify";
import {BsSearch} from "react-icons/bs"
const FilterNav = ({ setData }) => {
  // variable to store the value of the municipality selected
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRooms, setSelectedRooms] = useState("");
  const [selectedUtilities, setSelectedUtilities] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  // var with the options for location / municipality / city
  const locationOptions = [
    { value: "", text: "All Locations", selected: true },
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

  const monthNames = [
    "all",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  // Function to fetch the API with filters
  const getData = async () => {
    const base = "https://rental-server.onrender.com/api/v1/data/?";
    let completedUrl = base;
    // Conditons to create url structure according to the data selectd b the user
    completedUrl += selectedLocation ? `municipality=${selectedLocation}&` : "";
    completedUrl += selectedRooms ? `unitSize=${selectedRooms}&` : "";
    completedUrl += selectedUtilities ? `utilitiesIncluded=${selectedUtilities}&`: "";
    completedUrl += selectedMonth && selectedMonth !== "all" ? `monthCollected=${selectedMonth}&` : "";
    completedUrl += selectedPrice ? `max=${selectedPrice}&min=${selectedPrice-500}` : "";
    try {
      const response = await fetch(completedUrl);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        toast.success("Table Updated");
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div id="filternavcomponent">
    <ToasterMessage/>
      <div className="filter-container">
        {/* Month */}
        <select
          className="form-select"
          name="monthCollected"
          id="monthCollected"
          onChange={(event) => setSelectedMonth(event.target.value)}
          value={selectedMonth}
        >
          {monthNames.map((month) => (
            <option key={month} value={month} >
              {month.charAt(0).toUpperCase() + month.slice(1)}
            </option>
          ))}
        </select>
        {/* Locations */}
        <select
          className="form-select"
          name="location"
          id="location"
          onChange={(event) => setSelectedLocation(event.target.value)}
          value={selectedLocation}
        >
          {locationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        {/* Rooms */}
        <select
          className="form-select"
          name="rooms"
          id="rooms"
          onChange={(event) => setSelectedRooms(event.target.value)}
          value={selectedRooms}
        >
          <option value="">All Sizes</option>
          <option value="1">1 Bed</option>
          <option value="2">2 Bed</option>
          <option value="3">3 Bed</option>
          <option value="4">4 Bed</option>
          <option value="4+ Bed">4+ Bed</option>
        </select>
        {/* Utilities */}
        <select
          className="form-select"
          name="utilitiesIncluded"
          id="utilitiesIncluded"
          onChange={(event) => setSelectedUtilities(event.target.value)}
          value={selectedUtilities}
        >
          <option value="">Any</option>
          <option value="yes">Yes</option>
          <option value="not">No</option>
        </select>
        {/* Price */}
        <select
          className="form-select"
          name="price"
          id="price"
          onChange={(event) => setSelectedPrice(event.target.value)}
          value={selectedPrice}
        >
          <option value="">Any Price</option>
          <option value="500">0 - 500</option>
          <option value="1000">500 - 1000</option>
          <option value="1500">1000 - 1500</option>
          <option value="2000">1500 - 2000</option>
          <option value="2500">2000 - 2500</option>
          <option value="3000">2500 - 3000</option>
          <option value="3500">3000 - 3500</option>
          <option value="3500">3500+</option>
        </select>
        <button onClick={getData}>Search <BsSearch/></button>
      </div>
    </div>
  );
};

export default FilterNav;
