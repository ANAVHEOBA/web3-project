import React from "react";
import { GrDocumentText } from "react-icons/gr";

function UploadIdentification() {
  return (
    <div className="form-group">
      <h5 className="font-semibold text-2xl">Upload identification</h5>
      <p className="text-[#585858]">
        We need to determine if an identity document is authentic and belongs to
        you. You just need to go through some steps which will help us to build
        a secure system together
      </p>
      <div className="input-group">
        <label className="input-label" htmlFor="gender">
          Gender *
        </label>
        <select className="input-box" placeholder="Select Gender" id="gender">
          <option>Select Document Type</option>
          <option>PDF</option>
          <option>TXT</option>
          <option>JPEC</option>
        </select>
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="name">
          Document Number *
        </label>
        <input
          type={"text"}
          id="name"
          className="input-box"
          placeholder="Enter Document Number"
        />
      </div>
      <div className="flex w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-96 h-32 border-2 border-[#E6E9F4] border-dashed rounded-lg cursor-pointer bg-[#F5F6FA] hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <GrDocumentText className="w-10 h-10 mb-3" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Upload Document</span>
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <button className="submit-btn">
        Continue
      </button>
    </div>
  );
}

export default UploadIdentification;
