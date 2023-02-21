import React from "react";
import { BsArrowRight } from "react-icons/bs";

function OverviewTab() {
  const serviceList = [
    "Tooth cleaning",
    "Root Canal Therapy",
    "Implants",
    "Composite Bonding",
    "Fissure Sealants",
    "Surgical Extractions",
  ];
  const specializationList = [
    "Children Care",
    "Dental Care",
    "Oral and Maxillofacial Surgery",
    "Orthodontist",
    "Periodontist",
    "Prosthodontics",
  ];
  return (
    <div className="space-y-3 text-[#272b41]">
      <h5 className="text-[#272b41] text-lg font-medium dark:text-white">About Me</h5>
      <p className="text-[#272b41] dark:text-dark-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="space-y-2">
        <h5 className="font-medium text-lg dark:text-white">Services</h5>
        <ul className="grid grid-cols-1 md:grid-cols-3 dark:text-dark-muted">
          {serviceList.map((serviceItem, index) => {
            return (
              <li key={index} className="space-x-2 flex">
                <BsArrowRight className="h-6 w-6" />
                <span>{serviceItem}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h5 className="font-medium text-lg dark:text-white">specialization</h5>
        <ul className="grid grid-cols-1 md:grid-cols-3">
          {specializationList.map((specializationItem, index) => {
            return (
              <li key={index} className="space-x-2 flex dark:text-dark-muted">
                <BsArrowRight className="h-6 w-6" />
                <span>{specializationItem}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default OverviewTab;
