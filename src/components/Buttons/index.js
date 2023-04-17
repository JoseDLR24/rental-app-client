import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { toast } from "react-toastify";
import ToasterMessage from "../Toaster";

const ButtonContainer = ({ getData, setData, data }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const [fileSelected, setFileSelected] = useState("");

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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader();
    let url = `${apiUrl}/api/v1/runappfile`;

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet_name_list = workbook.SheetNames;
      const json = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list]);

      // Go through al the rows in the file .xls and sending them to server one by one
      json.map(async (record) => {
        // Cycle for convert all the values to string
        for (let prop in record) {
          if (record.hasOwnProperty(prop)) {
            record[prop] = record[prop].toString(); // Convert the property value to the new type
          }
        }
        // Harcoding source property as upload
        record.source = "upload";
        // turning on the loader
        setData(undefined);
        try {
          await fetch(url, {
            method: "POST",
            body: JSON.stringify(record),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        } catch (error) {
          console.log(error);
        }
        await getData();
      });
    };
    setFileSelected("");
    toast.success("File Uploaded ");
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="buttons-container">
     <ToasterMessage />
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
      <button className="btn btn-outline-dark" id="upload">
        Upload .xls
        <input
          value={fileSelected}
          type="file"
          id="myfile"
          name="myfile"
          onChange={handleFileUpload}
        />
      </button>
    </div>
  );
};

export default ButtonContainer;