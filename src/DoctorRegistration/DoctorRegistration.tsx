import React, { useState } from "react";
import DoctorVerification from "./DoctorVerification";
import PersonalDetailsForm from "./PersonalDetailsForm";
import Preferences from "./Preferences";
import UploadIdentification from "./UploadIdentification";
import { useSelector, useDispatch } from 'react-redux'
import { updateStep } from "@/features/doctorStepSlice";
import { RootState } from "@/store";


function DoctorRegistration() {
  // const [activeStep, setActiveStep] = useState(0);
  const doctorStep = useSelector((state: RootState) => state.doctorStep.value)
  const dispatch = useDispatch()
  const registrationSteps = [
    {
      id: 1,
      title: "Registration",
      subTitle: "Enter Details for Register ",
      component : <PersonalDetailsForm />,
      step: 1,
    },
    {
      id: 2,
      title: "Upload Identity",
      subTitle: "Upload your Identity for Verification",
      component : <UploadIdentification />,
      step: 2,
    },
    {
      id: 3,
      title: "Doctor Verification",
      subTitle: "Setup Your Payment Details",
      component : <DoctorVerification />,
      step: 3,
    },
    {
      id: 4,
      title: "Preferences",
      subTitle: "Setup Your Preferences for your Account",
      component : <Preferences />,
      step: 4,
    },
  ];
  return (
    <div className="px-5 py-3">
      <div className="flex flex-col md:flex-row space-x-5 space-y-5">
        <div className="space-y-3 md:w-[50rem]">
          {registrationSteps.map((registrationStep) => {
            return (
              <div key={registrationStep.id} className="flex space-x-2 px-2 py-3 shadow-lg rounded-md cursor-pointer border border-[#F4F4F4]" onClick={() => dispatch(updateStep(registrationStep.id - 1))}>
                <div className="rounded-full p-2 bg-[#10916F] text-white w-10 h-10 text-center">
                  {registrationStep.step}
                </div>
                <div>
                  <h5 className="font-semibold">{registrationStep.title}</h5>
                  <p className="text-[#585858]">{registrationStep.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {
            registrationSteps[doctorStep].component
          }
            {/* <UploadIdentification /> */}
          {/* <PersonalDetailsForm /> */}
          {/* <DoctorVerification /> */}
          {/* <Preferences /> */}
        </div>
      </div>
    </div>
  );
}

export default DoctorRegistration;
