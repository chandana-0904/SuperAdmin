import React from "react";

function Form() {
  return (
    <div className="formItems">
      <div className="row">
        <label>Restaurant Name</label>
        <input id="formElements" className="RestaurantName" type="text" />
      </div>
      <div className="row">
        <label>Restaurant Ph.No</label>
        <input id="formElements" className="RestaurantPhone" type="number" />
      </div>
      <div className="row">
        <label>Restaurant Address</label>
        <input id="formElements" className="RestaurantAddress" type="text" />
      </div>
      <div className="row">
        <label>Restaurant Email</label>
        <input id="formElements" className="RestaurantEmail" type="email" />
      </div>
      <div className="row">
        <label>Owner Name</label>
        <input id="formElements" className="OwnerName" type="text" />
      </div>
      <div className="row">
        <label>Owner Ph.No</label>
        <input id="formElements" className="OwnerPhone" type="number" />
      </div>
    </div>
  );
}

export default Form;
