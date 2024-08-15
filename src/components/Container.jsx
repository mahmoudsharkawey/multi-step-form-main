import React, { useState } from "react";
import StepInfo from "./StepInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import ThankYou from "./ThankYou";
import ReviewAndConfirm from "./ReviewAndConfirm";
import Sidebar from "./Sidebar";

const Container = () => {
  // Define initial state for the plan and add-ons
  const [currentStep, setCurrentStep] = useState(1); // Track the current step in the process

  const [plan, setPlan] = useState({
    name: "Arcade",
    price: 9,
    billing: "Monthly",
  });

  const [addons, setAddons] = useState([
    { name: "Online service", price: 1, selected: true },
    { name: "Larger storage", price: 2, selected: true },
    { name: "Customizable profile", price: 2, selected: true },
  ]);

  // Calculate the total price
  const total =
    plan.price +
    addons.reduce(
      (acc, addon) => (addon.selected ? acc + addon.price : acc),
      0
    );
  // Handle the previous step
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  // Handle the Next step
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  // Handle confirming the selection
  const handleConfirm = () => {
    setCurrentStep(5);
    alert("Subscription confirmed!");
  };

  // Handle updating plan
  const updatePlan = (name, price, billing) => {
    setPlan({ name, price, billing });
  };

  return (
    <div className="container">
      <Sidebar />
      {currentStep === 1 && <StepInfo onNext={handleNext} />}
      {currentStep === 2 && <SelectPlan onUpdatePlan={updatePlan} onNext={handleNext} onBack={handleBack} />}
      {currentStep === 3 && <AddOns onNext={handleNext} onBack={handleBack} />}
      {currentStep === 4 && (
        <ReviewAndConfirm
          plan={plan}
          addons={addons.filter((addon) => addon.selected)}
          onBack={handleBack}
          total={total}
          onConfirm={handleConfirm}
        />
      )}
      {currentStep === 5 && <ThankYou />}
    </div>
  );
};

export default Container;
