import React from "react";

function SideOptions() {
  return (
    <div className="float-container">
      <div className="SideNavContaienr container float-child">
        <div className="Home">
          <i class="fas fa-home">
            <a>Home</a>
          </i>
        </div>
        <div className="RestaurantData">Restaurant Data</div>
        <div className="UserData">User Data</div>
      </div>
    </div>
  );
}
export default SideOptions;
