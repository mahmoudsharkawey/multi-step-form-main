// StepInfo.js
import React, { useState } from "react";

const StepInfo = ({ onNext }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      onNext();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="stepInfo">
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form onSubmit={handleSubmit}>
        <div className="flexError">
          <label>
            Name {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="flexError">
          <label>
            Email Address{" "}
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="flexError">
          <label>
            Phone Number{" "}
            {errors.phoneNumber && (
              <span className="error">{errors.phoneNumber}</span>
            )}
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="e.g. +1 234 567 890"
          />
        </div>
        <div className="buttonContainerStepOne">
          <button type="submit" className="nextStep">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepInfo;
