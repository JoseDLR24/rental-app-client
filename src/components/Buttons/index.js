import React, { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { toast } from "react-toastify";

const ButtonContainer = ({ getData, setData, data }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;

  const runApp = async () => {
    let url = `${apiUrl}/api/v1/runapp`;
    
    // turning on the loader
    setData(undefined);
    try {
      setIsDisabled(true);
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });

      await getData();
      await getData();
      toast.success("Fetching Data succesfully");
      setIsDisabled(false);
    } catch (error) {
      toast.error("Error: ", error);
    }
  };


  // function to create the excel sheet
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  // declaring the file variable
  const [file, setFile] = useState(null);

  const handleFileUpload = async () => {

    const formData = new FormData();
    formData.append('file', file);

    // Use axios to send the file to the server
    try {
      let url = `${apiUrl}/api/v1/runappfile`;
      const response = await axios.post(url, formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="buttons-container">
      <button
        disabled={isDisabled}
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
              Are you sure you want to scrape the rental websites and save the
              information into the Database?
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
                onClick={runApp}
              >
                I confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={exportToExcel}
        className="btn btn-outline-dark"
      >
        Download .xls
      </button>
      <input type="file" onChange={handleFileChange} />
      <button type="button" className="btn btn-outline-dark" onClick={handleFileUpload}>
        Upload .xls
      </button>
    </div>
  );
};

export default ButtonContainer;
