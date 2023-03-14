import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FilterNav = () => {
    return (
    <div id="filternavcomponent">
        <div class="filter-container">
            <select class="form-select" aria-label="Default select example" name="rooms" id="rooms">
                <option value="" selected disabled>Unit Size</option>
                <option value="Room">Room</option>
                <option value="Bach">Bach</option>
                <option value="1 Bed">1 Bed</option>
                <option value="2 Bed">2 Bed</option>
                <option value="3 Bed">3 Bed</option>
                <option value="4 Bed">4 Bed</option>
                <option value="4+ Bed">4+ Bed</option>
            </select>
            
            <select class="form-select" aria-label="Default select example" name="advanced-filters" id="leaseterm">
                <option value="" selected disabled>Lease term</option>
                <option value="Short-Term">Short-Term</option>
                <option value="Long Term">Long Term</option>
                <option value="Not Stated">Not Stated</option>
            </select>
        
            <select class="form-select" aria-label="Default select example" name="Type" id="type">
                <option value="" selected disabled>Utilities Inclduded</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Partly">Partly</option>
                <option value="N/S">N/S</option>
                <option value="Partly<50%">Partly less than 50%</option>
                <option value="Partly>50%">Partly more than 50%</option>
            </select>
        
            <select class="form-select" aria-label="Default select example" name="Location" id="location">
                <option value="" selected disabled>Location</option>
                <option value="Angus">Angus</option>
                <option value="Alliston">Alliston</option>
                <option value="Barrie">Barrie</option>
                <option value="Bradford">Bradford</option>
                <option value="Collingwood">Collingwood</option>
                <option value="Friday">Friday</option>
                <option value="Innisfil">Innisfil</option>
                <option value="NewTecumsetch">NewTecumsetch</option>
                <option value="Midland">Midland</option>
                <option value="Orillia">Orillia</option>
                <option value="Orangeville">Orangeville</option>
                <option value="Tottenham">Tottenham</option>
                <option value="Penetanguishene">Penetanguishene</option>
                <option value="Wasaga">Wasaga</option>
            </select>
        
            <select class="form-select" aria-label="Default select example" name="Price" id="price">
                <option value="" selected disabled>Price</option>
                <option value="">0 - 500</option>
                <option value="">500 - 1000</option>
                <option value="">1000 - 1500</option>
                <option value="">1500 - 2000</option>
                <option value="">2000 - 2500</option>
                <option value="">2500 - 3000</option>
                <option value="">3000 - 3500</option>
                <option value="">3500+</option>
            </select>
        
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