import React from "react";
import BackIcon from "./BackIcon";
import RightIcons from "./RightIcons";
import Heading from "./Heading";
function Navbar() {
  return (
    <div className="navbar">
      <BackIcon />
      <Heading />
      <RightIcons />
    </div>
  );
}
export default Navbar;
