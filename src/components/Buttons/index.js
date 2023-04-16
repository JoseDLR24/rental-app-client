import React, { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ButtonContainer = () => {
    
    // FOR THE UPLOAD BUTTON
    // const [selectedFile, setSelectedFile] = useState(null);

    // const handleFileChange = (event) => {
    //     setSelectedFile(event.target.files[0]);
    // };

    // const handleUpload = () => {
    //     const formData = new FormData();
    //     formData.append("file", selectedFile);

    //     fetch("http://localhost:5000/api/v1/runappfile", {
    //         method: "POST",
    //         body: formData,
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    //         .catch((error) => console.error(error));
    // };
    
    // variable to save the all the records from the API
    const [data, setData] = useState(undefined);

    // Function to fetch the API without filters
    const getData = async () => {
        try {
        const response = await fetch(
            "https://rental-server.onrender.com/api/v1/data"
        );
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

    // function to create the excel sheet
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'data.xlsx');
    }

    return (
        <div className="buttons-container">
            <button
                type="button"
                className="btn btn-outline-dark"
                data-bs-toggle="modal"
                data-bs-target="#confirmalert"
            >
                Run App
            </button>

            <div
                className="modal fade"
                id="confirmalert"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modaltitle">
                                Confirm before you continue
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to run the app and save the information into
                            the Database?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn confirmbtn"
                                data-bs-dismiss="modal"
                            >
                                I confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" onClick={exportToExcel} className="btn btn-outline-dark">
                Download .xls
            </button>
            <input type="file" onChange={handleFileChange} />
            <button
                type="button"
                className="btn btn-outline-dark"
                onClick={handleUpload}
            >
                Upload .xls
            </button>
        </div>
    );
};

export default ButtonContainer;
