import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ButtonContainer = () => {
    return(
        <div className="buttons-container">
            <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#confirmalert">RUN THE APP</button>

            <div className="modal fade" id="confirmalert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="modaltitle">Confirm before you continue</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    Are you sure you want to run the app and save the information into the Database?
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn confirmbtn">I confirm</button>
                    </div>
                </div>
                </div>
            </div>
            <button type="button" className="btn btn-outline-dark">DOWNLOAD XLS</button>
            <button type="button" className="btn btn-outline-dark">UPLOAD FILES</button>
        </div>
    );
};

export default ButtonContainer;