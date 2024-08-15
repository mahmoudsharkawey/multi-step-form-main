import React from "react";

function Sidebar({ step }) {
  console.log(step);
  return (
    <div className="displayStep">
      <div className="circle">
        <div className={`circle1 ${step >= 1 ? "active" : ""}`}>1</div>
        <p>
          <span>STEP 1</span> <br />
          YOUR INFO
        </p>
      </div>
      <div className="circle">
        <div className={`circle2 ${step >= 2 ? "active" : ""}`}>2</div>
        <p>
          <span>STEP 2</span> <br />
          SELECT PLAN
        </p>
      </div>
      <div className="circle">
        <div className={`circle3 ${step >= 3 ? "active" : ""}`}>3</div>
        <p>
          <span>STEP 3</span> <br />
          ADD-ONS
        </p>
      </div>
      <div className="circle">
        <div className={`circle4 ${step >= 4 ? "active" : ""}`}>4</div>
        <p>
          <span>STEP 4</span> <br />
          SUMMARY
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
