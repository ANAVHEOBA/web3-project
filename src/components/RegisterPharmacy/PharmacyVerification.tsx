import { pharmacyUpdateStep } from "@/features/pharmacyStepSlice";
import { RootState } from "@/store";
import React from "react";
import { GrDocument } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

type pharmacyCouncilStruct = {
  councilNumber: string;
  medicineSpecialization: string;
};

type props = {
  pharmacyVerificationData: pharmacyCouncilStruct;
  setPharmacyVerificationData: (
    pharmacyVerificationData: pharmacyCouncilStruct
  ) => void;
  pharmacyVerificationDoc: any;
  setPharmacyVerificationDoc: (pharmacyVerificationDoc: any) => void;
};

const PharmacyVerification: React.FC<props> = ({
  pharmacyVerificationData,
  setPharmacyVerificationData,
  pharmacyVerificationDoc,
  setPharmacyVerificationDoc,
}) => {
  const doctorStep = useSelector(
    (state: RootState) => state.pharmacyStep.value
  );
  const dispatch = useDispatch();
  const verificationList = [
    "Certificate of Registration with the Maltese Medical Council OR Registration from the appropriate Professional Council",
    "Certificate of Good Standing (from the Maltese Medical Council - valid for 3 months from the date of issue). Doctors applying from overseas are to provide a Certificate of Good Standing issued from the most recent country of residence / practise (valid for 3 months from the date of issue) (only applicable for Medical Doctors)",
    "Curriculum Vitae",
    "Specialist Registration Certificate",
    "Digital signature: copy of the signature and registration number",
  ];
  return (
    <div className="form-group">
      <h5 className="font-semibold text-2xl">Pharmacy Verification</h5>
      <p className="text-[#585858]">
        Please provide the details below and attach copies for your:
      </p>
      <ul className="space-y-2 list-disc pl-8">
        {verificationList.map((verificationItem, index) => {
          return <li key={index}>{verificationItem}</li>;
        })}
      </ul>
      <div className="flex w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-96 h-32 border-2 border-[#E6E9F4] border-dashed rounded-lg cursor-pointer bg-[#F5F6FA] hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <GrDocument className="w-10 h-10 mb-3" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Upload Document</span>
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) =>
              setPharmacyVerificationDoc(
                e.currentTarget.files && e.currentTarget.files[0]
              )
            }
          />
        </label>
      </div>
      <div className="input-group">
        <label className="input-label font-medium" htmlFor="name">
          Pharmacy council registration number*
        </label>
        <input
          type={"text"}
          id="name"
          className="input-box md:w-[35rem]"
          placeholder="Pharmacy council registration number"
          value={pharmacyVerificationData.councilNumber}
          onChange={(e) =>
            setPharmacyVerificationData({
              ...pharmacyVerificationData,
              councilNumber: e.currentTarget.value,
            })
          }
        />
      </div>
      <div className="input-group">
        <label className="input-label font-medium" htmlFor="name">
          Area of Specialisation*
        </label>
        <input
          type={"text"}
          id="name"
          className="input-box md:w-[35rem]"
          placeholder="Enter Area of Specialisation"
          value={pharmacyVerificationData.medicineSpecialization}
          onChange={(e) =>
            setPharmacyVerificationData({
              ...pharmacyVerificationData,
              medicineSpecialization: e.currentTarget.value,
            })
          }
        />
      </div>
      <button
        className="submit-btn"
        onClick={() => dispatch(pharmacyUpdateStep(2))}
      >
        Continue
      </button>
    </div>
  );
};

export default PharmacyVerification;
