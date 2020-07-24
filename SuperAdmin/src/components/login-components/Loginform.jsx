import React from "react";

function Loginform() {
  return (
    <div className="container-fluid">
      <form className=" form-container col-12 col-sm-6 col-md-4">
        <div className="form-group">
          <input type="text" name="Username" placeholder="UserName" />
        </div>
        <div className="form-group">
          <input type="password" name="Password" placeholder="Password" />
        </div>
        <div classNmae="forgot">
          {" "}
          <a href="#">Forgot Password?</a>{" "}
        </div>
        <button className="signin">Sign-in</button>
      </form>
    </div>
  );
}

export default Loginform;
