import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Table = () => {
    return(
        <main class="scrappertable-container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Resources</th>
                        <th>Picture</th>
                        <th>Location</th>
                        <th>Type of house</th>
                        <th>Number of Rooms</th>
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
                </tbody>
            </table>
        </main>
    );
};

export default Table;