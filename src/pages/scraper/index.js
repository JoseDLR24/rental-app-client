import React from "react";
import FilterNav from "../../components/FilterNav";
import Table from "../../components/Table";
import ButtonContainer from "../../components/Buttons";
import Navigation from "../../components/Navigation";
// styles
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// js bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Scraper = () => {
    return(
        <div id="scrapper">
            <h1>SCRAPPER</h1>
            <FilterNav/>
            <Table/>
            <ButtonContainer/>
        </div>
    );
};

export default Scraper;