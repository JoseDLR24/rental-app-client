import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ButtonContainer = () => {
    return(
        <div class="buttons-container">
            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#confirmalert">RUN THE APP</button>

            <div class="modal fade" id="confirmalert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modaltitle">Confirm before you continue</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    Are you sure you want to run the app and save the information into the Database?
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn confirmbtn">I confirm</button>
                    </div>
                </div>
                </div>
            </div>
            <button type="button" class="btn btn-outline-dark">DOWNLOAD XLS</button>
            <button type="button" class="btn btn-outline-dark">UPLOAD FILES</button>
        </div>
    );
};

export default ButtonContainer;