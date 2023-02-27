import React, { useState } from "react";
import DoctorVerification from "./DoctorVerification";
import PersonalDetailsForm from "./PersonalDetailsForm";
import Preferences from "./Preferences";
import UploadIdentification from "./UploadIdentification";
import { useSelector, useDispatch } from "react-redux";
import { updateStep } from "@/features/doctorStepSlice";
import { RootState } from "@/store";
import useIPFS from "@/hooks/storeIpfs";
import { useContract, useSigner, useProvider, useContractWrite } from "wagmi";

import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NFTStorage, File } from "nft.storage";
import deDoctorABI from "@/constants/constants";

type personalData = {
  name: string;
  gender: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  about: string;
};

type identificationStruct = {
  docNumber: string;
  docType: string;
};

type medicalCouncilStruct = {
  councilNumber: string;
  specialization: string;
};

type preferenceStruct = {
  minAmount: number;
  callType: string[];
  language: string;
  date: string;
  startTime: string;
  endTime: string;
  days: string[];
};

const DoctorRegistration: React.FC = () => {
  const { address } = useAccount();
  const doctorStep = useSelector((state: RootState) => state.doctorStep.value);
  const dispatch = useDispatch();
  // Personal Data
  const [personalData, setPersonalData] = useState<personalData>({
    name: "",
    about: "",
    address: "",
    city: "",
    dob: "",
    gender: "",
    state: "",
  });
  const [userImage, setUserImage] = useState<any>();
  // identification Data
  const [identificationData, setIdentificationData] =
    useState<identificationStruct>({
      docNumber: "",
      docType: "",
    });
  const [identificationDoc, setIdentificationDoc] = useState<any>();
  // doctor verification
  const [medicalCouncilData, setMedicalCouncilData] =
    useState<medicalCouncilStruct>({
      councilNumber: "",
      specialization: "",
    });
  const [councilFile, setCouncilFile] = useState<any>();
  // preference
  const [preference, setPreference] = useState<preferenceStruct>({
    minAmount: 0,
    callType: [""],
    date: "",
    days: [""],
    startTime: "",
    language: "",
    endTime: "",
  });
  const { data: signer, isError, isLoading } = useSigner();
  const provider = useProvider();

  const submitIpfs = async () => {
    try {
      const nftStorage = new NFTStorage({
        token: process.env.NEXT_PUBLIC_NFT_STORAGE_API || "",
      });
      const link = await nftStorage.store({
        image: userImage,
        name: personalData.name,
        description: personalData.about || "",
        about: personalData.about || "",
        address: personalData.address,
        city: personalData.city,
        dob: personalData.dob,
        gender: personalData.gender,
        state: personalData.state,
        docNumber: identificationData.docNumber,
        docType: identificationData.docType,
        identificationDoc: identificationDoc,
        councilNumber: medicalCouncilData.councilNumber,
        specialization: medicalCouncilData.specialization,
        councilFile: councilFile,
        minAmount: preference.minAmount,
        callType: preference.callType,
        date: preference.date,
        days: preference.days,
        startTime: preference.startTime,
        language: preference.language,
        endTime: preference.endTime,
      });
      const ipfsURL = `https://ipfs.io/ipfs/${link.url.substr(7)}`;
      const price = await ethers.utils.parseUnits(preference.minAmount.toString(), "ether");
      let patientRegisterContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_DEDOCTOR_SMART_CONTRACT || "",
        deDoctorABI,
        signer || provider
      );
      let traction = await patientRegisterContract.registerDoctor(
        personalData.name,
        personalData.gender,
        personalData.city,
        preference.language,
        address,
        price,
        link
      );
      let tx = await traction.wait();
      toast.success("Doctor are Registered!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const registrationSteps = [
    {
      id: 1,
      title: "Registration",
      subTitle: "Enter Details for Register ",
      component: (
        <PersonalDetailsForm
          personalData={personalData}
          setPersonalData={setPersonalData}
          userImage={userImage}
          setUserImage={setUserImage}
        />
      ),
      step: 1,
    },
    {
      id: 2,
      title: "Upload Identity",
      subTitle: "Upload your Identity for Verification",
      component: (
        <UploadIdentification
          identificationData={identificationData}
          setIdentificationData={setIdentificationData}
          identificationDoc={identificationDoc}
          setIdentificationDoc={setIdentificationDoc}
        />
      ),
      step: 2,
    },
    {
      id: 3,
      title: "Doctor Verification",
      subTitle: "Setup Your Payment Details",
      component: (
        <DoctorVerification
          medicalCouncilData={medicalCouncilData}
          setMedicalCouncilData={setMedicalCouncilData}
          councilFile={councilFile}
          setCouncilFile={setCouncilFile}
        />
      ),
      step: 3,
    },
    {
      id: 4,
      title: "Preferences",
      subTitle: "Setup Your Preferences for your Account",
      component: (
        <Preferences
          preference={preference}
          setPreference={setPreference}
          submitIpfs={submitIpfs}
        />
      ),
      step: 4,
    },
  ];
  return (
    <div className="px-5 py-3">
      <ToastContainer theme="dark" />
      <div className="flex flex-col md:flex-row space-x-5 space-y-5">
        <div className="space-y-3 md:w-[24rem]">
          {registrationSteps.map((registrationStep) => {
            return (
              <div
                key={registrationStep.id}
                className="flex space-x-2 px-2 py-3 shadow-lg rounded-md cursor-pointer border border-[#F4F4F4] dark:border-dark-input-border dark:bg-dark-card"
                onClick={() => dispatch(updateStep(registrationStep.id - 1))}
              >
                <div className="rounded-full p-2 bg-[#10916F] text-white w-10 h-10 text-center dark:bg-primary-yellow dark:text-black">
                  {registrationStep.step}
                </div>
                <div>
                  <h5 className="font-semibold dark:text-white">
                    {registrationStep.title}
                  </h5>
                  <p className="text-[#585858] dark:text-dark-muted">
                    {registrationStep.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full">{registrationSteps[doctorStep].component}</div>
      </div>
    </div>
  );
};

export default DoctorRegistration;
