const ReviewAndConfirm = ({ plan, addons, total, onBack, onConfirm }) => {
  return (
    <div className="reviewAndConfirm">
      <h1>Finishing up</h1>
      <p className="description">
        Double-check everything looks OK before confirming.
      </p>
      <div className="resume">
        <div className="containerResume">
          <div id="resumeMonth">
            <div className="flexResume">
              <div>
                <h4 id="modeResume">
                  {plan.name} ({plan.billing})
                </h4>
                <button onClick={onBack}>Change Plan</button>
              </div>
              <label id="priceResume">
                ${plan.price}/{plan.billing === "Yearly" ? "yr" : "mo"}
              </label>
            </div>
            <br />
            {/* Add-ons */}
            {addons.length > 0 &&
              addons.map((addon, index) => (
                <div className="flexResume" key={index}>
                  <p>{addon.name}</p>
                  <label id={`${addon.name}Price`}>
                    +${addon.price}/{plan.billing === "Yearly" ? "yr" : "mo"}
                  </label>
                </div>
              ))}
          </div>
        </div>
        {/* Total Price */}
        <div className="flexTotal">
          <p id="modeTotal">Total ({plan.billing.toLowerCase()})</p>
          <span id="totalPrice">
            ${total}/{plan.billing === "Yearly" ? "yr" : "mo"}
          </span>
        </div>
        {/* Navigation Buttons */}
        <div className="buttonContainerStepTwo">
          <button onClick={onBack} className="goBack">
            Go Back
          </button>
          <button onClick={onConfirm} className="nextStep">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndConfirm;
