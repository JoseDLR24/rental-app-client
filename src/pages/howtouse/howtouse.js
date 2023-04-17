import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import bgImage from "./images/how-to-use-bg.jpg";


const HowToUse = () => {
    return (
        <section className="howtouse" >
            <div id="background" style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "-1",
          }}>
            </div>
            <div className="htu-body">
                <h1>HOW TO USE</h1>
                <hr className="pdivider" />
                <p>To retrieve the latest information from the database, simply press the "Search" button. This function will return all the data that's been saved in the DB. If you've applied any filters, the search will be based on them. Otherwise, it will bring back all the information.
                </p>
                <p>If you want to upload information from a .xls file into the DB, just click the "Upload File" button. Once you've selected your file from your device, the upload will start automatically. The app will extract the data from the file and save it into the database.</p>
                <p>To download a file containing the information currently displayed in the main table, click on the "Download XLS" button. When you press this button, a file with the .xls extension will be created and downloaded onto your device.</p>
                <p>If you want to scrape the website and collect information about the rental market, press the "Run App" button. This will immediately fetch information from the websites and save it into the database. Once the process is complete, you can use the "Search" button again to see the updated information in the table, as explained in step 1.</p>
            </div>
        </section>
    );
};

export default HowToUse;
