import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Table = () => {
    return(
        <main class="scrappertable-container">
            <div class="table-wrapper">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Date Collected</th>
                            <th>Location</th>
                            <th>Local Municipality</th>
                            <th>Housing Type</th>
                            <th>Stratified Area</th>
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
                        <tr>
                            <td>Kijiji.ca</td>
                            <td>picture</td>
                            <td>Barrie</td>
                            <td>Apartment</td>
                            <td>2 Bedrooms</td>
                        </tr>
                        <tr>
                            <td>Kijiji.ca</td>
                            <td>picture</td>
                            <td>Barrie</td>
                            <td>Apartment</td>
                            <td>2 Bedrooms</td>
                        </tr>
                        <tr>
                            <td>Kijiji.ca</td>
                            <td>picture</td>
                            <td>Barrie</td>
                            <td>Apartment</td>
                            <td>2 Bedrooms</td>
                        </tr>
                        <tr>
                            <td>Kijiji.ca</td>
                            <td>picture</td>
                            <td>Barrie</td>
                            <td>Apartment</td>
                            <td>2 Bedrooms</td>
                        </tr>
                        <tr>
                            <td>Kijiji.ca</td>
                            <td>picture</td>
                            <td>Barrie</td>
                            <td>Apartment</td>
                            <td>2 Bedrooms</td>
                        </tr>
                        <tr>
                            <td>Kijiji.ca</td>
                            <td>picture</td>
                            <td>Barrie</td>
                            <td>Apartment</td>
                            <td>2 Bedrooms</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </main>
    );
};

export default Table;