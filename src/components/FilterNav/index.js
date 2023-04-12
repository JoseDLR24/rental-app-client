import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FilterNav = () => {

    // Add the variables and functions to add the strings to the link in order to filter. Do not forget to do the functions with onChange in order to catch the value every time the users clicks one of the options instead of grabbing the ID (more work to do), and change the value to one single word or number so its easier to manipulate.
    // create the price function grabbing the greater value minus 500 in order to have the range of min and max, that would be a hidden filter from the backend.
    // Add the funciton to the Update! button in order to add the filters values to the string so the api can fetch the app properly

    // const to store the value of the date selected
    const [dateValue, setDateValue] = useState("");

    // function to catch the event when the users click a different value in order to use onChange
    function handleDateChange(event) {
        setDateValue(event.target.value);
    };

    // variable to store the value of the municipality selected
    const [selectedLocation, setSelectedLocation] = useState("");

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

    const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    };

    console.log(selectedLocation);

    return (
    <div id="filternavcomponent">
        <div class="filter-container">
            <div class="dateCollected">
                <label htmlFor="date-input">Enter a date:</label>
                <input
                    id="date-input"
                    type="date"
                    value={dateValue}
                    onChange={handleDateChange}
                />
            </div>

            <select
                className="form-select"
                aria-label="Default select example"
                name="Location"
                id="location"
                onChange={handleLocationChange}
                value={selectedLocation}
                >
                {locationOptions.map((option, index) => (
                    <option
                    key={index}
                    value={option.value}
                    disabled={option.disabled}
                    selected={option.selected}
                    >
                    {option.text}
                    </option>
                ))}
            </select>

            <select class="form-select" aria-label="Default select example" name="rooms" id="rooms">
                <option value="" selected disabled>Unit Size</option>
                <option value="1">1 Bed</option>
                <option value="2">2 Bed</option>
                <option value="3">3 Bed</option>
                <option value="4">4 Bed</option>
                <option value="4+ Bed">4+ Bed</option>
            </select>
        
            <select class="form-select" aria-label="Default select example" name="utilities" id="utilitiesIncluded">
                <option value="" selected disabled>Utilities Inclduded</option>
                <option value="yes">Yes</option>
                <option value="not">No</option>
            </select>

            
        
            <select class="form-select" aria-label="Default select example" name="Price" id="price">
                <option value="" selected disabled>Price</option>
                <option value="500">0 - 500</option>
                <option value="1000">500 - 1000</option>
                <option value="1500">1000 - 1500</option>
                <option value="2000">1500 - 2000</option>
                <option value="2500">2000 - 2500</option>
                <option value="3000">2500 - 3000</option>
                <option value="3500">3000 - 3500</option>
                <option value="3500">3500+</option>
            </select>
            <button>Update!</button>
        </div>
    <div class="advanced-filters">
        
        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Advanced Filters
        </button>
        
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <select class="form-select" aria-label="Default select example" name="advanced-filters" id="secondarysuite">
                    <option value="" selected disabled>Secondary Suite</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Unclear">Unclear</option>
                </select>
                <select class="form-select" aria-label="Default select example" name="advanced-filters" id="typeofsecondarysuite">
                    <option value="" selected disabled>Type of Secondary Suite</option>
                    <option value="Lower">Lower</option>
                    <option value="Upper">Upper</option>
                    <option value="Garden">Garden</option>
                    <option value="Res/Comm">Res/Comm</option>
                    <option value="Unclear">Unclear</option>
                </select>
                <select class="form-select" aria-label="Default select example" name="advanced-filters" id="landlordtype">
                    <option value="" selected disabled>Landlord Type</option>
                    <option value="P.Mgmt">P.Mgmt</option>
                    <option value="Private">Private</option>
                    <option value="Not Stated">Not Stated</option>
                    <option value="Non-Profit/Co-op">Non-Profit/Co-op</option>
                </select>
            </div>
        </div>
    </div>
        </div>
    );
};

export default FilterNav;