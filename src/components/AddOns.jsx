import React, { useState } from "react";

const AddOns = ({ onNext, onBack }) => {
  const [addons, setAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleAddonChange = (event) => {
    const { name, checked } = event.target;
    setAddons((prevAddons) => ({
      ...prevAddons,
      [name]: checked,
    }));
  };

  return (
    <div className="stepAddOn">
      <h1>Pick add-ons</h1>
      <p className="description">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="row">


        <label>
          <div className="pickRow">
            <input
              type="checkbox"
              name="onlineService"
              checked={addons.onlineService}
              onChange={handleAddonChange}
            />
            <span>Online Servic</span>
          </div>
          <span>- $1/mo</span>
        </label>


        <label>
          <div className="pickRow">
            <input
              type="checkbox"
              name="largerStorage"
              checked={addons.largerStorage}
              onChange={handleAddonChange}
            />
            <span>Larger Storage</span>
          </div>{" "}
          - $2/mo
        </label>
        <label>
          <div className="pickRow">
            <input
              type="checkbox"
              name="customizableProfile"
              checked={addons.customizableProfile}
              onChange={handleAddonChange}
            />
            <span>Customizable Profile</span>
          </div>{" "}
          - $2/mo
        </label>
      </div>

      
        <div className="buttonContainerStepTwo">
          <button className="goBack" onClick={onBack}>
            Go Back
          </button>
          <button className="nextStep" onClick={onNext}>
            Next Step
          </button>
        </div>
      </div>

  );
};

export default AddOns;
