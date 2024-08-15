import React, { useState } from "react";

const SelectPlan = ({ onUpdatePlan, onNext, onBack }) => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly");
  };

  const handleSelectPlan = (name, price, billing) => {
    setSelectedPlan(name); // Update the selected plan
    onUpdatePlan(name, price, billing);
  };

  return (
    <div className="selectPlan">
      <h1>Select your plan</h1>
      <p className="description">
        You have the option of monthly or yearly billing.
      </p>
      {billingPeriod === "monthly" ? (
        <div className="planMonth">
          <button
            style={{
              backgroundColor: selectedPlan === "Arcade" ? "#c6e7f7" : "white",
            }}
            className="planButton"
            onClick={() => handleSelectPlan("Arcade", 9, "Monthly")}
          >
            <img src="../assets/images/icon-arcade.svg" alt="Arcade Icon" />
            <p>Arcade</p>
            <span className="priceMonth active">9$/mo</span>
          </button>
          <button
            style={{
              backgroundColor: selectedPlan === "Advanced" ? "#c6e7f7" : "white",
            }}
            className="planButton"
            onClick={() => handleSelectPlan("Advanced", 12, "Monthly")}
          >
            <img src="../assets/images/icon-advanced.svg" alt="Advanced Icon" />
            <p>Advanced</p>
            <span className="priceMonth">12$/mo</span>
          </button>
          <button
            style={{
              backgroundColor: selectedPlan === "Pro" ? "#c6e7f7" : "white",
            }}
            className="planButton"
            onClick={() => handleSelectPlan("Pro", 15, "Monthly")}
          >
            <img src="../assets/images/icon-pro.svg" alt="Pro Icon" />
            <p>Pro</p>
            <span className="priceMonth">15$/mo</span>
          </button>
        </div>
      ) : (
        <div className="planMonth">
          <button
            style={{
              backgroundColor: selectedPlan === "Arcade" ? "#c6e7f7" : "white",
            }}
            className="planButton"
            onClick={() => handleSelectPlan("Arcade", 90, "Yearly")}
          >
            <img src="../assets/images/icon-arcade.svg" alt="Arcade Icon" />
            <p>Arcade</p>
            <span className="priceYear">90$/yr</span>
            <label className="free">2 months free</label>
          </button>
          <button
            style={{
              backgroundColor: selectedPlan === "Advanced" ? "#c6e7f7" : "white",
            }}
            className="planButton"
            onClick={() => handleSelectPlan("Advanced", 120, "Yearly")}
          >
            <img src="../assets/images/icon-advanced.svg" alt="Advanced Icon" />
            <p>Advanced</p>
            <span className="priceYear">120$/yr</span>
            <label className="free">2 months free</label>
          </button>
          <button
            style={{
              backgroundColor: selectedPlan === "Pro" ? "#c6e7f7" : "white",
            }}
            className="planButton"
            onClick={() => handleSelectPlan("Pro", 150, "Yearly")}
          >
            <img src="../assets/images/icon-pro.svg" alt="Pro Icon" />
            <p>Pro</p>
            <span className="priceYear">150$/yr</span>
            <label className="free">2 months free</label>
          </button>
        </div>
      )}

      <div className="switch">
        <p className="monthly">Monthly</p>
        <label className="check">
          <input
            type="checkbox"
            id="switch"
            checked={billingPeriod === "yearly"}
            onChange={toggleBillingPeriod}
          />
          <span></span>
        </label>
        <p className="yearly">Yearly</p>
      </div>

      <div className="buttonContainerStepTwo">
        <button onClick={onBack} className="goBack">
          Go back
        </button>
        <button onClick={onNext} className="nextStep">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectPlan;