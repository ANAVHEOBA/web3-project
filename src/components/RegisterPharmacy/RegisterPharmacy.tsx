import { pharmacyUpdateStep } from "@/features/pharmacyStepSlice";
import { RootState } from "@/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OwnerDetails from "./OwnerDetails";
import PharmacyPersonal from "./PharmacyPersonal";
import PharmacyVerification from "./PharmacyVerification";
import PreferencePharmacy from "./PreferencePharmacy";

type pharmacyStruct = {
  name: string;
  address: string;
  city: string;
  state: string;
  about: string;
};

type pharmacyOwnerStruct = {
  name: string;
  gender: string;
  dob: string;
  city: string;
  state: string;
  about: string;
};

type pharmacyCouncilStruct = {
  councilNumber: string;
  medicineSpecialization: string;
};

type pharmacyPreference = {
  openDays: string[];
  startTime: string;
  endTime: string;
};

function RegisterPharmacy() {
  const doctorStep = useSelector(
    (state: RootState) => state.pharmacyStep.value
  );
  const dispatch = useDispatch();
  // Pharmacy Data
  const [pharmacyPersonaData, setPharmacyPersonalData] =
    useState<pharmacyStruct>({
      name: "",
      address: "",
      city: "",
      state: "",
      about: "",
    });
  const [pharmacyImage, setPharmacyImage] = useState<any>();
  //   Pharmacy Owner data
  const [pharmacyOwnerData, setPharmacyOwnerData] =
    useState<pharmacyOwnerStruct>({
      name: "",
      gender: "",
      dob: "",
      city: "",
      state: "",
      about: "",
    });
  const [pharmacyOwnerImage, setPharmacyOwnerImage] = useState<any>();
  //   Pharmacy Verification
  const [pharmacyVerificationData, setPharmacyVerificationData] =
    useState<pharmacyCouncilStruct>({
      councilNumber: "",
      medicineSpecialization: "",
    });
  const [pharmacyVerificationDoc, setPharmacyVerificationDoc] = useState<any>();
  // Pharmacy Preference
  const [pharmacyPreferenceData, setPharmacyPreferenceData] =
    useState<pharmacyPreference>({
      openDays: [],
      startTime: "",
      endTime: "",
    });
    const onSubmitPharmacy = () => {
      console.log("Submit Phamacy");
      
    }
  const registrationSteps = [
    {
      id: 1,
      title: "Registration",
      subTitle: "Enter Pharmacy Details",
      component: (
        <PharmacyPersonal
          pharmacyPersonaData={pharmacyPersonaData}
          setPharmacyPersonalData={setPharmacyPersonalData}
          pharmacyImage={pharmacyImage}
          setPharmacyImage={setPharmacyImage}
        />
      ),
      step: 1,
    },
    {
      id: 2,
      title: "Owner Details",
      subTitle: "Enter pharmacy owner Details",
      component: (
        <OwnerDetails
          pharmacyOwnerData={pharmacyOwnerData}
          setPharmacyOwnerData={setPharmacyOwnerData}
          pharmacyOwnerImage={pharmacyOwnerImage}
          setPharmacyOwnerImage={setPharmacyOwnerImage}
        />
      ),
      step: 2,
    },
    {
      id: 3,
      title: "Pharmacy Verification",
      subTitle: "Identification of your Pharmacy",
      component: (
        <PharmacyVerification
          pharmacyVerificationData={pharmacyVerificationData}
          setPharmacyVerificationData={setPharmacyVerificationData}
          pharmacyVerificationDoc={pharmacyVerificationDoc}
          setPharmacyVerificationDoc={setPharmacyVerificationDoc}
        />
      ),
      step: 3,
    },
    {
      id: 4,
      title: "Preferences",
      subTitle: "Setup Your Preferences for your Account",
      component: (
        <PreferencePharmacy
          pharmacyPreferenceData={pharmacyPreferenceData}
          setPharmacyPreferenceData={setPharmacyPreferenceData}
          onSubmitPharmacy={onSubmitPharmacy}
        />
      ),
      step: 4,
    },
  ];

  return (
    <div className="px-5 py-3">
      <div className="flex flex-col md:flex-row space-x-5 space-y-5">
        <div className="space-y-3 md:w-[24rem]">
          {registrationSteps.map((registrationStep) => {
            return (
              <div
                key={registrationStep.id}
                className="flex space-x-2 px-2 py-3 shadow-lg rounded-md cursor-pointer border border-[#F4F4F4] dark:border-dark-input-border dark:bg-dark-card"
                onClick={() =>
                  dispatch(pharmacyUpdateStep(registrationStep.id - 1))
                }
              >
                <div className="rounded-full p-2 bg-[#10916F] text-white w-10 h-10 text-center dark:bg-primary-yellow dark:text-black">
                  {registrationStep.step}
                </div>
                <div>
                  <h5 className="font-semibold dark:text-white">{registrationStep.title}</h5>
                  <p className="text-[#585858] dark:text-dark-muted">{registrationStep.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full">{registrationSteps[doctorStep].component}</div>
      </div>
    </div>
  );
}

export default RegisterPharmacy;
