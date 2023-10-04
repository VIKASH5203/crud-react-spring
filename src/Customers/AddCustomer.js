import axios from "axios";

import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function AddCustomer() {
  let navigate = useNavigate();

  const [Customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    idType: "",
    idNumber: "",
  });

  const { firstName, lastName, dob, gender, idType, idNumber } = Customer;

  const onInputChange = (e) => {
    setCustomer({ ...Customer, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/customer", Customer);

    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Customer</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">
                First Name
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">
                Last Name
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Last name"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>

              <input
                type={"date"}
                className="form-control"
                placeholder="Enter your dob"
                name="dob"
                value={dob}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Gender" className="form-label">
                Gender
              </label>

              <select
                onChange={(e) => onInputChange(e)}
                className="form-select"
                name="gender"
              >
                <option selected>Select Gender</option>

                <option value="Male">Male</option>

                <option value="Female">Female</option>

                <option value="Others">Others</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="IdType" className="form-label">
                ID Type
              </label>

              <select
                onChange={(e) => onInputChange(e)}
                className="form-select"
                name="idType"
              >
                <option selected>Select ID Type</option>

                <option value="Aadhaar">Aadhaar</option>

                <option value="PAN">PAN </option>

                <option value="Passport">Passport</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="idNumber" className="form-label">
                ID Number
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the ID Number"
                name="idNumber"
                value={idNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>

            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
