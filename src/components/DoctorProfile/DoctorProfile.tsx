import React from "react";
import ProfileGeneral from "./ProfileGeneral";
import ProfileTab from "./ProfileTab";

function DoctorProfile() {
  return (
    <div className="px-5 py-5 m-5">
      <div>
        <ProfileGeneral />
      </div>
      <div>
        <ProfileTab />
      </div>
    </div>
  );
}

export default DoctorProfile;
