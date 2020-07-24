import React from "react";

function TopSection() {
  return (
    <div className="float-container">
      <div className="TopSection float-child">
        <div className="addPartner float-child2">
          <button>Add Partner</button>
        </div>
        <div className="SearchBox float-child2">
          <input type="text" placeholder="🔍 Search" />
        </div>
      </div>
    </div>
  );
}
export default TopSection;
