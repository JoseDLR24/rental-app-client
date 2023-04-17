import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToasterMessage from "../Toaster";

const Table = ({ data, getData }) => {
  // Using ENV variable
  const apiUrl = process.env.REACT_APP_API_URL;

  // Function to capitalize the first lettter in the value received
  const capitalize = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  // Function to delete a record
  const deleteRecord = async (e) => {
    // let url = `https://rental-server.onrender.com/api/v1/data/?_id=${e}`;
    let url = `${apiUrl}/api/v1/data/?_id=${e}`;

    try {
      await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      toast.success("Record Deleted");
      await getData();
    } catch (error) {
      toast.error("Error: ", error);
    }
  };

  // Function to print the table and populate it
  const printTable = () => {
    return data.map((e, i) => {
      return (
        <tr key={i}>
          <td>
            <span id={e._id} onClick={(e) => deleteRecord(e.target.id)}>
              🗑️
            </span>
          </td>
          <td>{e.dateCollected}</td>
          <td>{capitalize(e.monthCollected)}</td>
          <td>
            {e.source !== "upload"
              ? e.source.slice(8, e.source.length)
              : "Upload"}
          </td>
          <td>{capitalize(e.municipality)}</td>
          <td>{e.address || "unclear"}</td>
          <td>{e.postCode || "Unclear"}</td>
          <td>{capitalize(e.HousingType || "unclear")}</td>
          <td>{capitalize(e.utilitiesIncluded)}</td>
          <td>{e.unitSize}</td>
          <td>{e.qtyBathrooms}</td>
          <td>{capitalize(e.secondarySuite)}</td>
          <td>{capitalize(e.typeSecondarySuite)}</td>
          <td>{capitalize(e.landlordType)}</td>
          <td>
            {Number(e.totalCost).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}
          </td>
          <td>{capitalize(e.possibleDuplicate)}</td>
          <td>{capitalize(e.stability)}</td>
          <td>
            {e.source === "https://www.agsecure.ca"
              ? `https://www.agsecure.ca${e.urlAds}`
              : e.urlAds}
          </td>
        </tr>
      );
    });
  };

  return (
    <main className="scrappertable-container">
      <ToasterMessage />
      <div className="table-wrapper">
        {!data ? (
          <Loader />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Delete</th>
                <th>Date Collected</th>
                <th>Month Collected</th>
                <th>Source</th>
                <th>Local Municipality</th>
                <th>Address</th>
                <th>Postal Code</th>
                <th>Housing Type</th>
                <th>Utilities Included</th>
                <th>Qty Rooms</th>
                <th>Qty Bathrooms</th>
                <th>Secondary Suite</th>
                <th>Secondary Suite Type</th>
                <th>Landlord Type</th>
                <th>Monthly Price</th>
                <th>Possible Duplicate</th>
                <th>Stability</th>
                <th>Ads Link</th>
              </tr>
            </thead>
            <tbody>{printTable()}</tbody>
          </table>
        )}
      </div>
    </main>
  );
};

export default Table;
