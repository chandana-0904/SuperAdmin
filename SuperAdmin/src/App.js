import React from "react";
import "./styles.css";
import Checkboxes from "./components/AddPartnerComponents/Checkboxes";
import Form from "./components/AddPartnerComponents/Form";
import Navbar from "./components/AddPartnerComponents/Navbar";
import AddButton from "./components/AddPartnerComponents/AddButton";
import AccountDetails from "./components/AddPartnerComponents/AccountDetails";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <AccountDetails />
      <Checkboxes />
      <AddButton />
    </div>
  );
}
