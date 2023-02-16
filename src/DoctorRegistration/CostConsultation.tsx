import React from "react";

function CostConsultation() {
  return (
    <div className="space-y-3  flex flex-col">
      <h5 className="font-semibold text-2xl">
        What is the maximum cost perconsultation?*
      </h5>
      <p className="text-[#585858]">This can be edited later on from the preferences section.</p>
      <input className="input-box" placeholder="Enter Amount"  />
      <button className="submit-btn w-40">Save</button>
    </div>
  );
}

export default CostConsultation;
