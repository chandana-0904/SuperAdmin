import React, { useState } from "react";

/*function AccountDetails() {
  return (
    <div className="AccountDetails">
      <button>Account Details</button>
      <div className="accDetails">
        <div className="row">
          <label>Account Number</label>
          <input
            id="formElements"
            className="AccountNumber"
            type="text"
            placeholder="Account Number"
          />
        </div>
        <div className="row">
          <label>IFSC Code</label>
          <input
            id="formElements"
            className="IFSCCode"
            type="number"
            placeholder="IFSC Code"
          />
        </div>
        <div className="row">
          <label>Branch</label>
          <input
            id="formElements"
            className="Branch"
            type="text"
            placeholder="Branch"
          />
        </div>
      </div>
      <div className="UploadButtons">
        <button>FSSAI Upload</button>
        <button>GST Upload</button>
      </div>
    </div>
  );
}
export default AccountDetails;*/
function AccountDetails() {
  return (
    <div>
      <Mycomp />
    </div>
  );
}

function Mycomp() {
  const [dp, setDp] = useState("none");

  return (
    <div className="AccountDetails">
      <button
        type="button"
        onClick={() => {
          setDp("block");
        }}
      >
        AccountDetails
      </button>
      <div className="accDetails" style={{ display: dp }}>
        <div className="row">
          <label>Account Number</label>
          <input
            id="formElements"
            className="AccountNumber"
            type="text"
            placeholder="Account Number"
          />
        </div>
        <div className="row">
          <label>IFSC Code</label>
          <input
            id="formElements"
            className="IFSCCode"
            type="number"
            placeholder="IFSC Code"
          />
        </div>
        <div className="row">
          <label>Branch</label>
          <input
            id="formElements"
            className="Branch"
            type="text"
            placeholder="Branch"
          />
        </div>
      </div>
      <div className="UploadButtons">
        <button>FSSAI Upload</button>
        <button>GST Upload</button>
      </div>
    </div>
  );
}

export default AccountDetails;
