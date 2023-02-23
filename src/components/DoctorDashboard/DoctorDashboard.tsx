import React, { useState } from "react";
import DoctorAppointments from "./DoctorAppointments";
import DoctorGeneral from "./DoctorGeneral";

function DoctorDashboard() {
  return (
    <div className="flex space-x-5 my-8 mx-5">
      <div className="">
        <DoctorGeneral />
      </div>
      <div>
        <DoctorAppointments />
      </div>
    </div>
  );
}

export default DoctorDashboard;
