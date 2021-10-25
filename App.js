import React, { useState, useRef } from "react";
import Table from "./component/table";
import "./App.css";

function App() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const firstElement = useRef(null);
  const secondElement = useRef(null);
  const emailElement = useRef(null);
  const phoneElement = useRef(null);
  const [formData, setFormData] = useState(initialState);
  const [formUsers, setFormUsers] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const handleClickData = (e) => {
    e.preventDefault();
    if (formData.firstName === "") {
      firstElement.current.focus();
      setIsValid(false);
      return;
    }
    if (formData.lastName === "") {
      secondElement.current.focus();
      setIsValid(false);
      return;
    }
    if (formData.email === "") {
      emailElement.current.focus();
      setIsValid(false);
      return;
    }
    if (formData.phone === "") {
      phoneElement.current.focus();
      setIsValid(false);
      return;
    }
    setFormUsers((prevState) => {
      return [...prevState, formData];
    });
    setFormData(initialState);
    // window.sessionStorage.setItem("Users", JSON.stringify(formUsers));
  };

  const handleInputChange = (e) => {
    let updateFormFields;
    if (e.target.name === "firstName") {
      updateFormFields = {
        firstName: e.target.value,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      };
    }
    if (e.target.name === "lastName") {
      updateFormFields = {
        firstName: formData.firstName,
        lastName: e.target.value,
        email: formData.email,
        phone: formData.phone,
      };
    }
    if (e.target.name === "email") {
      updateFormFields = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: e.target.value,
        phone: formData.phone,
      };
    }
    if (e.target.name === "phone") {
      updateFormFields = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: e.target.value,
      };
    }
    setFormData(updateFormFields);
  };
  return (
    <React.Fragment>
      <div className="App">
        <form>
          <div>
            <label>First name</label>
            <input
              className={isValid ? "valid" : "not-valid"}
              name="firstName"
              type="text"
              ref={firstElement}
              value={formData.firstName}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label>Last name</label>
            <input
              className={isValid ? "valid" : "not-valid"}
              name="lastName"
              type="text"
              ref={secondElement}
              value={formData.lastName}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              className={isValid ? "valid" : "not-valid"}
              name="email"
              type="text"
              ref={emailElement}
              value={formData.email[2]}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label>Phone number</label>
            <input
              className={isValid ? "valid" : "not-valid"}
              name="phone"
              type="text"
              ref={phoneElement}
              value={formData.phone[3]}
              onChange={handleInputChange}
            ></input>
          </div>
          <button type="submit" onClick={handleClickData}>
            Submit
          </button>
        </form>
      </div>
      <Table users={formUsers}></Table>
    </React.Fragment>
  );
}

export default App;
