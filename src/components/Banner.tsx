import React from "react";
import { BsSearch } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

function Banner() {
  return (
    <div className="py-20 px-3 bg-[#f9f9f9] items-center flex flex-col space-y-2 dark:bg-[#030B29]">
      <h4 className="text-4xl font-bold text-[#272b41] dark:text-white">
        Search Doctor, Make an Appointment
      </h4>
      <p className="text-muted dark:text-dark-muted">
        Discover the best doctors, clinic and hospital the city nearest to you.
      </p>
      <div className="flex gap-x-2 gap-y-2 flex-col md:flex-row">
        <div className="text-light-gray">
          <div className="border border-[#ccc] rounded-md flex items-center bg-white space-x-2 px-2 py-1 dark:border-dark-input-border dark:bg-dark-blue-input">
            <BsSearch className="h-5 w-5 dark:text-white" />
            <input
              type={"text"}
              className="outline-transparent bg-transparent focus:outline-none w-72 md:w-40 h-8 dark:border-dark-input-border dark:bg-dark-blue-input dark:placeholder:text-dark-placeholder"
              placeholder="Search Location"
            />
          </div>
          <span className="dark:text-dark-muted">Based on your Location</span>
        </div>
        <div className="text-light-gray">
          <div className="border border-[#ccc] rounded-md flex items-center bg-white space-x-2 px-2 py-1 dark:border-dark-input-border dark:bg-dark-blue-input">
            <GrLocation className="h-5 w-5 dark:text-white" />
            <input
              type={"text"}
              className="outline-transparent bg-transparent focus:outline-none w-72 md:w-40 h-8"
              placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
            />
          </div>
          <span className="dark:text-dark-muted">Ex : Dental or Sugar Check up etc</span>
        </div>
        <button className="bg-primary-green text-white h-12 md:w-10 md:h-10 rounded-md flex space-x-2 dark:bg-primary-yellow dark:text-black">
          <span className="mx-auto flex my-auto space-x-2">
            <BsSearch className="h-5 w-5 font-semibold" />
            <span className="block md:hidden">Search</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
