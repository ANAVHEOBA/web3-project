import { pharmacyUpdateStep } from "@/features/pharmacyStepSlice";
import React from "react";
import { useDispatch } from "react-redux";

type pharmacyStruct = {
  name: string;
  address: string;
  city: string;
  state: string;
  about: string;
};

type props = {
  pharmacyPersonaData: pharmacyStruct;
  setPharmacyPersonalData: (pharmacyPersonaData: pharmacyStruct) => void;
  pharmacyImage: any;
  setPharmacyImage: (pharmacyImage: any) => void;
};

const PharmacyPersonal: React.FC<props> = ({
  pharmacyPersonaData,
  setPharmacyPersonalData,
  pharmacyImage,
  setPharmacyImage,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="form-group">
      <div className="flex w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-96 h-32 border-2 border-[#E6E9F4] border-dashed rounded-lg cursor-pointer bg-[#F5F6FA] hover:bg-gray-100 dark:bg-dark-blue-input dark:border-dark-input-border"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            name="image"
            onChange={(e) =>
              setPharmacyImage(
                e.currentTarget.files && e.currentTarget.files[0]
              )
            }
          />
        </label>
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="name">
          Pharmacy Legal Name *
        </label>
        <input
          type={"text"}
          name="name"
          id="name"
          value={pharmacyPersonaData.name}
          onChange={(e) =>
            setPharmacyPersonalData({
              ...pharmacyPersonaData,
              name: e.currentTarget.value,
            })
          }
          className="input-box"
          placeholder="Enter Pharmacy Name"
        />
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="address">
          Address *
        </label>
        <textarea
          id="address"
          name="address"
          className="input-box md:w-[30rem]"
          placeholder="Enter Address"
          value={pharmacyPersonaData.address}
          onChange={(e) =>
            setPharmacyPersonalData({
              ...pharmacyPersonaData,
              address: e.currentTarget.value,
            })
          }
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
            name="city"
            className="input-box"
            placeholder="City"
            value={pharmacyPersonaData.city}
            onChange={(e) =>
              setPharmacyPersonalData({
                ...pharmacyPersonaData,
                city: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="state">
            State *
          </label>
          <input
            type={"text"}
            id="state"
            name="state"
            className="input-box"
            placeholder="State"
            value={pharmacyPersonaData.state}
            onChange={(e) =>
              setPharmacyPersonalData({
                ...pharmacyPersonaData,
                state: e.currentTarget.value,
              })
            }
          />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="about">
          About Pharmacy *
        </label>
        <textarea
          name="about"
          id="about"
          className="input-box md:w-[30rem] h-[6rem]"
          value={pharmacyPersonaData.about}
          onChange={(e) =>
            setPharmacyPersonalData({
              ...pharmacyPersonaData,
              about: e.currentTarget.value,
            })
          }
        />
      </div>
      <button
        className="submit-btn"
        onClick={() => dispatch(pharmacyUpdateStep(1))}
      >
        Continue
      </button>
    </div>
  );
};

export default PharmacyPersonal;
