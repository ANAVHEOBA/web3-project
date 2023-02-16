import React from "react";

function PersonalDetailsForm() {
  return (
    <div className="form-group">
      <div className="flex w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-96 h-32 border-2 border-[#E6E9F4] border-dashed rounded-lg cursor-pointer bg-[#F5F6FA] hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="name">
          Legal Name *
        </label>
        <input
          type={"text"}
          id="name"
          className="input-box"
          placeholder="Enter Name"
        />
      </div>
      <div className="flex space-x-2">
        <div className="input-group">
          <label className="input-label" htmlFor="gender">
            Gender *
          </label>
          <select className="input-box" placeholder="Select Gender" id="gender">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="dob">
            Date of Birth *
          </label>
          <input
            type={"date"}
            id="dob"
            className="input-box"
            placeholder="Date of Birth"
          />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="address">
          Address *
        </label>
        <textarea
          id="address"
          className="input-box md:w-[30rem]"
          placeholder="Enter Address"
        />
      </div>
      <div className="flex flex-col md:flex-row space-x-2">
        <div className="input-group">
          <label className="input-label" htmlFor="city">
            City *
          </label>
          <input
            type={"text"}
            id="city"
            className="input-box"
            placeholder="City"
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="state">
            State *
          </label>
          <input
            type={"text"}
            id="state"
            className="input-box"
            placeholder="State"
          />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="address">
          About You *
        </label>
        <textarea id="address" className="input-box md:w-[30rem] h-[6rem]" />
      </div>
      <button className="px-2 py-2 bg-primary-green text-white rounded-md">
        Continue
      </button>
    </div>
  );
}

export default PersonalDetailsForm;
